# 12 — Development Roadmap

## Пошаговый план — как собирать, не утонув

---

## Принцип: вертикальные срезы

Не делай "сначала все компоненты, потом все API, потом стили". Делай **один полный flow от начала до конца**, проверяй, переходи к следующему.

```
Плохо:  Все компоненты → Все API → Все стили → Ничего не работает вместе
Хорошо: Auth (работает) → Payments (работает) → Dashboard (работает) → Flow (работает)
```

---

## Этап 0: Setup (День 1)

**Делаем:**
- Next.js + TypeScript + Tailwind
- Folder structure (как в Architecture Guide)
- MongoDB connection (singleton)
- NextAuth + Google OAuth
- Базовые модели: User, Purchase, LessonProgress
- Deploy на Vercel (пустой проект)
- .env.local настроен

**Результат:** Проект стоит, логин работает, БД подключена, деплой live.

**Деплой:** Да. Деплоить после каждого этапа.

---

## Этап 1: Auth + Access Control (Дни 2–3)

**Делаем:**
- Страница /auth/signin
- middleware.ts: защита /dashboard
- Guards: requireAuth(), requirePurchase()
- Redirect: нет auth → signin, нет покупки → pricing
- Простая /pricing page (пока заглушка)
- Простая /dashboard page (пока "Привет, [Имя]!")

**Результат:** Логин работает. Dashboard защищён. Без покупки — не пускает.

---

## Этап 2: Stripe (Дни 4–5)

**Делаем:**
- Stripe: продукт + цена (49€) в dashboard
- POST /api/stripe/checkout → создание session
- POST /api/stripe/webhook → создание Purchase
- /checkout/success → redirect в dashboard
- /checkout/cancel → redirect на pricing
- Кнопка "Оплатить" на /pricing

**Результат:** Тестовая оплата → Purchase в БД → доступ к dashboard.

**Важно:** Тестовый режим Stripe. Проверить webhook с Stripe CLI.

---

## Этап 3: Dashboard + Уроки (Дни 6–10)

Самый большой этап. Ядро продукта.

**Делаем:**
- Dashboard layout (sidebar + content)
- Данные уроков в lib/lessons/data.ts
- Welcome block (три состояния)
- Progress bar
- Lesson list (locked/unlocked/completed cards)
- Страница урока: видео + summary + next steps
- Кнопка "Отметить как пройденный"
- POST /api/progress
- Unlock логика
- Бонусы (PDF скачивание)
- Профиль (имя, email, logout)
- Bottom nav для мобильного

**Результат:** Полноценный dashboard. Уроки проходятся, прогресс сохраняется.

---

## Этап 4: Quiz (Дни 11–12)

**Делаем:**
- Quiz data в lib/quiz/questions.ts
- QuizContainer: навигация, прогресс
- QuizQuestion: карточки ответов
- Scoring: calculateResult()
- QuizResult: уровень повреждения + текст
- Сохранение результата (localStorage + БД для авторизованных)

**Результат:** Квиз работает, даёт персональный результат.

---

## Этап 5: Guided Landing Flow (Дни 13–16)

**Делаем:**
- FlowContainer: навигация, прогресс-бар, skip link
- 10 screen-компонентов (по одному на экран)
- Интеграция квиза (screen 5–6)
- Интеграция бесплатного урока (screen 7)
- Интеграция оффера + кнопки оплаты (screen 10)
- Прогресс flow в localStorage

**Результат:** Полный guided flow от первого экрана до оплаты.

---

## Этап 6: Polish (Дни 17–19)

**Делаем:**
- Mobile-first проверка всех экранов
- Typography, spacing, colors
- Loading states (skeleton)
- Error states
- Empty states
- 404 page
- Favicon, meta tags, og:image
- README
- Финальный QA

**Результат:** Продукт выглядит законченным и профессиональным.

---

## Этап 7: Launch (День 20–21)

**Делаем:**
- Production deploy
- Stripe в live mode
- OAuth production credentials
- Тестовая покупка в production
- Домен (если есть)
- Дать Елене доступ для проверки

**Результат:** Продукт live.

---

## Сводка

| Этап | Дни | Что готово |
|------|-----|-----------|
| Setup | 1 | Проект стоит |
| Auth | 2–3 | Вход и защита |
| Stripe | 4–5 | Оплата работает |
| Dashboard | 6–10 | Уроки и прогресс |
| Quiz | 11–12 | Диагностика |
| Flow | 13–16 | Публичная часть |
| Polish | 17–19 | Красиво и стабильно |
| Launch | 20–21 | Live |

---

## 5 правил, чтобы не утонуть

1. **Один этап за раз.** Не переключайся, пока не закончила текущий.
2. **Сначала работает — потом красиво.** Функционал > стили.
3. **Деплой после каждого этапа.** Видеть на реальном домене.
4. **Git commit после каждого куска.** Коммиты = контрольные точки.
5. **Не добавлять "ещё одну фичу".** Если не в плане — в Phase 2.
