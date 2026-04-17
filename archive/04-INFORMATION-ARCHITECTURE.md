# 04 — Information Architecture

## Страницы, состояния, модели, доступ

---

## Принцип

Архитектура строится так, чтобы:
- Сейчас работало просто (MVP)
- Завтра можно было добавить новые продукты, аудитории, языки — без переписывания
- Каждый маршрут и состояние имели понятное назначение

---

## Карта маршрутов

### Публичные (без авторизации)

| Маршрут | Назначение |
|---------|-----------|
| `/` | Guided landing flow |
| `/free-lesson` | Бесплатный урок (deep link из соцсетей) |
| `/pricing` | Оффер (deep link) |
| `/about` | О Елене и студии |
| `/terms` | Условия использования |
| `/privacy` | Политика конфиденциальности |

### Авторизация

| Маршрут | Назначение |
|---------|-----------|
| `/auth/signin` | Вход (Google OAuth) |
| `/auth/error` | Ошибка авторизации |

### Оплата

| Маршрут | Назначение |
|---------|-----------|
| `/checkout` | Redirect на Stripe Checkout |
| `/checkout/success` | Успешная оплата → dashboard |
| `/checkout/cancel` | Отмена → возврат к офферу |

### Приватные (авторизация + покупка)

| Маршрут | Назначение |
|---------|-----------|
| `/dashboard` | Главный экран кабинета |
| `/dashboard/lessons` | Все уроки |
| `/dashboard/lessons/[slug]` | Страница урока |
| `/dashboard/bonuses` | Бонусные материалы |
| `/dashboard/profile` | Профиль пользователя |

### API

| Маршрут | Назначение |
|---------|-----------|
| `/api/auth/[...nextauth]` | NextAuth handlers |
| `/api/stripe/webhook` | Stripe webhook |
| `/api/progress` | Обновление прогресса уроков |
| `/api/quiz` | Сохранение результатов квиза |

---

## Состояния пользователя

```
Anonymous
  → может: видеть landing flow, пройти квиз, смотреть бесплатный урок
  → не может: заходить в dashboard

Authenticated (залогинен, не купил)
  → может: всё что anonymous + результат квиза сохраняется в БД
  → не может: заходить в dashboard (redirect на pricing)

Student (залогинен + купил)
  → может: всё + dashboard, уроки, бонусы, прогресс
  → состояния внутри: Active / Returning / Completed
```

---

## Состояния урока

```
Locked     → предыдущий урок не пройден
Unlocked   → можно начать (предыдущий завершён или это Урок 1)
In Progress → начал, не завершил (есть позиция видео)
Completed  → отмечен как пройденный
```

Логика:
- Урок 1 — unlocked сразу после покупки
- Урок N — unlocked когда Урок N-1 = completed
- Бонусы — доступны сразу, не зависят от прогресса

---

## Модели данных

### User
```typescript
{
  id: string
  email: string
  name: string
  image: string           // аватар из Google OAuth
  createdAt: Date
}
```

### Purchase
```typescript
{
  id: string
  userId: string          // ref → User
  productSlug: string     // "home-recovery-course" (готово к нескольким продуктам)
  stripePaymentId: string
  stripeCustomerId: string
  amount: number
  currency: string        // "eur"
  status: "completed" | "refunded"
  createdAt: Date
}
```

**Почему `productSlug`:** Сейчас один продукт. Но когда появится курс для мастеров или другие продукты — не нужно менять модель.

### LessonProgress
```typescript
{
  id: string
  userId: string          // ref → User
  lessonSlug: string
  status: "unlocked" | "in_progress" | "completed"
  videoPosition: number   // секунда (Phase 2, MVP = 0)
  completedAt: Date | null
  updatedAt: Date
}
```

### QuizResult
```typescript
{
  id: string
  visitorId: string       // anonymous ID (localStorage) или userId
  userId: string | null   // заполняется после регистрации
  answers: Record<string, string>
  damageLevel: number     // 1–5
  hairType: string
  recommendation: string
  createdAt: Date
}
```

### Lesson (контент, статический)
```typescript
{
  slug: string
  title: string
  description: string     // краткое описание для карточки
  order: number
  duration: string        // "15 мин"
  videoUrl: string
  summary: string[]       // ключевые выводы
  nextSteps: string[]     // что сделать после урока
  bonusMaterials: {
    title: string
    type: "pdf" | "checklist"
    url: string
  }[]
}
```

На MVP контент хранится в `lib/lessons/data.ts` (статический файл). В Phase 2+ можно перенести в CMS.

---

## Логика доступа

### Middleware flow

```
Request → Is route protected?
  No → Allow
  Yes → Is user authenticated?
    No → Redirect to /auth/signin?callbackUrl=[current]
    Yes → Does user have purchase?
      No → Redirect to /pricing
      Yes → Allow
```

### Protected routes
- `/dashboard/*` — требует auth + purchase
- `/api/progress` — требует auth + purchase
- Все остальные — публичные

### Redirects после auth

| Сценарий | Redirect |
|---------|---------|
| Логин без callbackUrl | → `/dashboard` |
| Логин с callbackUrl | → callbackUrl |
| Логин без покупки → попытка dashboard | → `/pricing` |
| Успешная оплата | → `/checkout/success` → `/dashboard` |
| Отмена оплаты | → `/pricing` |

---

## Навигация

### Публичная часть
Минимальная. Flow сам ведёт.
Header: Logo + "Войти" (или "Мой кабинет" для залогиненных).

### Dashboard (desktop)
Sidebar:
- 🏠 Главная
- 📚 Уроки
- 🎁 Бонусы
- 👤 Профиль

### Dashboard (mobile)
Bottom navigation bar с теми же пунктами.
Активный пункт подсвечен.

---

## SEO

### Индексируются
- `/` — landing (основной трафик)
- `/about` — про Елену
- `/free-lesson` — бесплатный урок (органический трафик)

### Не индексируются (noindex)
- `/dashboard/*`
- `/auth/*`
- `/checkout/*`
- `/api/*`

### Meta для каждой публичной страницы
- `title` — уникальный
- `description` — до 160 символов
- `og:image` — красивое превью для шеринга
- `og:type` — website
- Canonical URL
