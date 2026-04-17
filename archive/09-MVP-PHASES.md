# 09 — MVP vs Phase 2 vs Phase 3

## Что делать сейчас, что потом. Без перегруза.

---

## Главный принцип

> **Лучше работающий продукт через 3 недели, чем идеальный через 3 месяца.**

Самый частый способ убить проект — пытаться впихнуть всё в первую версию. MVP должен быть **маленьким, но законченным**. Не "урезанным" — а сфокусированным.

---

## MVP — Что входит

### Фокус MVP

Полноценный guided flow → квиз → бесплатный урок → оплата → dashboard с уроками.

Один продукт. Одна аудитория. Один язык. Один поток. Работает end-to-end.

### Публичная часть

- Guided landing flow (10 экранов)
- Quiz (4 вопроса, результат)
- Бесплатный урок (video embed)
- Оффер + Stripe Checkout

### Auth

- Google OAuth (NextAuth)
- Redirect-логика (нет покупки → pricing)

### Dashboard

- Welcome / Continue block
- Прогресс-бар
- Список уроков (locked → unlocked → completed)
- Страница урока (видео + summary + next steps)
- Кнопка "Отметить как пройденный"
- Бонусы (PDF скачивание)
- Профиль (имя, email, logout)

### Payments

- Stripe Checkout (hosted page)
- Webhook → создание Purchase в БД
- Success/cancel pages

### Техническое

- Next.js 15 App Router + TypeScript + Tailwind
- MongoDB + Mongoose
- NextAuth (Google provider)
- Stripe
- Видео: YouTube embed (unlisted) или Mux
- Vercel deploy

### Что НЕ входит в MVP

| Фича | Почему не сейчас |
|------|-----------------|
| Сохранение позиции видео | Сложность > ценность на старте |
| Email-уведомления | Можно добавить сразу после запуска |
| AI-диагностика | Требует отдельной работы |
| Magic link auth | Google OAuth покрывает большинство |
| Админ-панель | Управление через БД пока достаточно |
| Анимации переходов | Простой transition пока хватит |
| i18n / испанский | Фокус на русском |
| Аналитика | Vercel Analytics базовая + Stripe |

### Срок: 3–4 недели

---

## Phase 2 — Улучшение

### Фокус Phase 2

Retention + polish + данные. Продукт работает, теперь делаем его лучше.

### Что добавляем

**Retention:**
- Email: welcome, reminder (3 дня), re-engagement (7 дней)
- Resume video playback (сохранение позиции)
- "Ты остановилась на..." в email

**UX Polish:**
- Плавные анимации переходов в flow
- Skeleton loading states
- Улучшенный мобильный UX
- Свайп-навигация

**Данные:**
- Vercel Analytics (расширенная)
- Отслеживание: quiz completion, lesson completions, return rate
- Простой dashboard для Елены (сколько продаж, активных студентов)

**SEO:**
- Meta tags + Open Graph
- JSON-LD structured data
- Sitemap

**Auth:**
- Email magic link (для тех, у кого нет Google)

### Срок: 2–3 недели после MVP

---

## Phase 3 — Масштабирование

### Фокус Phase 3

Новые возможности + новые аудитории + AI.

### Что добавляем

**AI:**
- AI-диагностика по фото (Claude API)
- Персональный подбор средств
- Чат-бот с экспертизой Елены

**Новые продукты:**
- Курс для мастеров (B2B)
- Онлайн-консультация (booking)
- Подписка на обновления

**Платформа:**
- Админ-панель
- CMS для контента
- Испанская версия (i18n)

**Advanced:**
- Фото-дневник волос
- Push-уведомления
- Mux с DRM
- Error monitoring (Sentry)

### Срок: Ongoing

---

## Сводка

| Фича | MVP | Ph.2 | Ph.3 |
|------|-----|------|------|
| Guided flow | ✅ | ✅ polish | ✅ |
| Quiz | ✅ | ✅ | ✅ + AI |
| Free lesson | ✅ | ✅ | ✅ |
| Stripe | ✅ | ✅ | ✅ |
| Google OAuth | ✅ | ✅ | ✅ |
| Magic link | — | ✅ | ✅ |
| Dashboard | ✅ | ✅ better | ✅ expanded |
| Lesson unlock | ✅ | ✅ | ✅ |
| Resume video | — | ✅ | ✅ |
| Emails | — | ✅ | ✅ |
| Analytics | — | ✅ | ✅ |
| AI diagnosis | — | — | ✅ |
| Pro course | — | — | ✅ |
| Admin panel | — | — | ✅ |
| i18n | — | — | ✅ |

---

## Анти-паттерны

Что НЕ делать:

1. **Не добавлять "ещё одну фичу" в MVP.** Если фича не нужна для end-to-end flow — она не MVP.
2. **Не улучшать пока не работает.** Сначала работает — потом красиво.
3. **Не начинать Phase 2 до запуска MVP.** Запуск = реальные пользователи = реальный feedback.
4. **Не делать AI до основного продукта.** AI — усилитель. Усиливать нечего, если нет основы.
5. **Не думать про испанский до стабильного русского.** Один язык — одно качество.
