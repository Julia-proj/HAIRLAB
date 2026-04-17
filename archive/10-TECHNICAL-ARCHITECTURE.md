# 10 — Technical Architecture

## Стек, структура, домены, масштабирование

---

## Стек

| Роль | Технология | Обоснование |
|------|-----------|-------------|
| Framework | Next.js 15 (App Router) | SSR, API routes, middleware, edge |
| Language | TypeScript (strict) | Типобезопасность, portfolio-grade |
| Styling | Tailwind CSS v4 | Mobile-first, быстрый, консистентный |
| Database | MongoDB + Mongoose | Гибкая схема, хорош для контента |
| Auth | NextAuth.js v5 | Google OAuth, sessions |
| Payments | Stripe | Checkout, webhooks |
| Video | YouTube embed (MVP) → Mux (Phase 2) | Простота → качество |
| Email | Resend (Phase 2) | React Email templates |
| AI | Claude API (Phase 3) | Диагностика, рекомендации |
| Deploy | Vercel | Zero-config, edge, analytics |

---

## Folder Structure

```
keratin-madrid/
├── src/
│   ├── app/
│   │   ├── (public)/              # Landing, about, free-lesson, pricing
│   │   │   ├── page.tsx           # Guided flow
│   │   │   ├── free-lesson/page.tsx
│   │   │   ├── pricing/page.tsx
│   │   │   └── about/page.tsx
│   │   │
│   │   ├── (auth)/
│   │   │   └── signin/page.tsx
│   │   │
│   │   ├── (dashboard)/           # Protected area
│   │   │   ├── layout.tsx         # Dashboard shell
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── lessons/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── bonuses/page.tsx
│   │   │   └── profile/page.tsx
│   │   │
│   │   ├── checkout/
│   │   │   ├── page.tsx
│   │   │   ├── success/page.tsx
│   │   │   └── cancel/page.tsx
│   │   │
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/route.ts
│   │   │   ├── stripe/webhook/route.ts
│   │   │   ├── progress/route.ts
│   │   │   └── quiz/route.ts
│   │   │
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/                    # Примитивы: Button, Card, ProgressBar, Badge
│   │   ├── landing/               # FlowContainer, Screen components
│   │   ├── dashboard/             # Shell, WelcomeBlock, LessonCard, Sidebar
│   │   ├── lesson/                # VideoPlayer, Summary, NextSteps, CompleteBtn
│   │   ├── quiz/                  # Container, Question, Progress, Result
│   │   └── shared/                # Header, Footer, Logo, Spinner
│   │
│   ├── lib/
│   │   ├── db/
│   │   │   ├── connect.ts         # MongoDB singleton
│   │   │   └── models/            # User, Purchase, LessonProgress, QuizResult
│   │   │
│   │   ├── auth/
│   │   │   ├── config.ts          # NextAuth config
│   │   │   └── guards.ts          # requireAuth, requirePurchase
│   │   │
│   │   ├── stripe/
│   │   │   ├── client.ts          # Stripe instance
│   │   │   ├── checkout.ts        # createCheckoutSession
│   │   │   └── webhook.ts         # handleWebhook
│   │   │
│   │   ├── lessons/
│   │   │   ├── data.ts            # Lesson content (static)
│   │   │   ├── progress.ts        # getProgress, updateProgress, unlockNext
│   │   │   └── types.ts           # Lesson, LessonStatus
│   │   │
│   │   ├── quiz/
│   │   │   ├── questions.ts       # Quiz data
│   │   │   └── scoring.ts         # calculateResult
│   │   │
│   │   └── utils/
│   │       ├── cn.ts              # classNames helper
│   │       └── constants.ts       # App-wide constants
│   │
│   ├── hooks/
│   │   ├── useFlowNavigation.ts
│   │   ├── useProgress.ts
│   │   ├── useQuiz.ts
│   │   └── useLessonPlayer.ts
│   │
│   └── types/
│       ├── index.ts
│       ├── lesson.ts
│       ├── user.ts
│       └── quiz.ts
│
├── public/
│   ├── images/
│   ├── fonts/
│   └── documents/                 # PDF bonuses
│
├── middleware.ts                   # Auth + access control
├── .env.local
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Domain Separation

Каждый домен — самостоятельная папка в `lib/`. Домены не импортируют друг друга напрямую. Связь — через типы и API.

| Домен | Папка | Что внутри |
|-------|-------|-----------|
| Auth | `lib/auth/` | Config NextAuth, guards |
| Lessons | `lib/lessons/` | Контент, прогресс, unlock |
| Quiz | `lib/quiz/` | Вопросы, scoring |
| Stripe | `lib/stripe/` | Checkout, webhook |
| Database | `lib/db/` | Connection, models |

**Почему это важно:** Когда появится AI-домен (`lib/ai/`) или продукт для мастеров — он добавится как новая папка, не трогая существующие.

---

## Payments Flow

```
Кнопка "Оплатить"
  → POST /api/stripe/checkout → создаёт Stripe Session
  → Redirect → Stripe Checkout (hosted)
  → Оплата
  → Stripe → POST /api/stripe/webhook
  → Verify signature → Create Purchase in DB
  → Stripe redirect → /checkout/success
  → Check purchase → redirect → /dashboard
```

Webhook — источник правды. Не redirect.
Idempotency: проверять, что Purchase не создан дважды.

---

## Lesson Progress Logic

```typescript
// Чистая функция. Легко тестировать.
function getLessonStatus(
  lessonOrder: number,
  completedOrders: number[]
): LessonStatus {
  if (completedOrders.includes(lessonOrder)) return 'completed'
  if (lessonOrder === 1 || completedOrders.includes(lessonOrder - 1)) return 'unlocked'
  return 'locked'
}
```

```typescript
// Текущий урок = первый незавершённый
function getCurrentLesson(
  lessons: Lesson[],
  completedSlugs: string[]
): Lesson | null {
  return lessons.find(l => !completedSlugs.includes(l.slug)) || null
}
```

---

## Access Control — Middleware

```typescript
// middleware.ts (simplified logic)
const protectedPaths = ['/dashboard']

if (isProtected(path)) {
  if (!session) redirect('/auth/signin?callbackUrl=' + path)
  if (!hasPurchase(session.user.id)) redirect('/pricing')
}
```

---

## State Management

Для этого продукта НЕ нужен Redux, Zustand или другой глобальный стейт.

| Тип данных | Решение |
|-----------|---------|
| Server data (уроки, прогресс) | React Server Components |
| Flow navigation | useState в FlowContainer |
| Quiz answers | useState в QuizContainer |
| Video position | useState в VideoPlayer |
| Auth state | NextAuth session |
| Flow progress (анонимный) | localStorage |

Простота — это фича, не ограничение.

---

## Environment Variables

```bash
# Auth
NEXTAUTH_SECRET=
NEXTAUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Database
MONGODB_URI=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_ID=

# Phase 2
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
RESEND_API_KEY=

# Phase 3
ANTHROPIC_API_KEY=
```

---

## Performance

| Метрика | Цель |
|---------|------|
| LCP | < 2.5s |
| FCP | < 1.5s |
| CLS | < 0.1 |
| Lighthouse | > 90 |

Как: Server components по умолчанию. Lazy load видео. next/image. Минимум клиентского JS. Edge API routes.

---

## Точки масштабирования

Архитектура готова к росту:

| Расширение | Что нужно изменить |
|-----------|-------------------|
| Новый продукт (курс для мастеров) | Добавить `productSlug` в Purchase (уже есть), новые уроки в data.ts |
| AI-диагностика | Новый домен `lib/ai/`, новый API route, новые компоненты |
| CMS вместо data.ts | Заменить импорт в компонентах (интерфейс тот же) |
| i18n | next-intl + файлы переводов |
| Админ-панель | Новая route group `(admin)/` с отдельным layout |
| Email | Новый домен `lib/email/`, Resend + React Email |
