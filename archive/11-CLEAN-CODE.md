# 11 — Clean Code & Maintainability

## Код, который можно показать работодателю

---

## Зачем это важно

Чистый код — это не перфекционизм. Это **коммуникация**. Код читают люди: ты через 3 месяца, работодатель на собеседовании, коллега в команде.

Если человек открывает проект и за 5 минут понимает структуру — это сильный код.
Если через 30 минут всё ещё непонятно — это проблема.

---

## Принципы

### Один файл — одна ответственность
```
Плохо:  LessonPage.tsx (400 строк: видео + прогресс + API + стили)
Хорошо: LessonPage.tsx → компонует VideoPlayer, Summary, CompleteButton
```

### Логика отдельно от UI
```
Плохо:  Внутри компонента — fetch, if/else, бизнес-логика
Хорошо: Компонент рендерит. Hook или lib-функция считает.
```

### Новые фичи — новые файлы, не правки старых
```
Плохо:  Добавляю AI в существующий LessonPage
Хорошо: Создаю компонент AIDiagnosis, подключаю в dashboard
```

### Предсказуемость
Одинаковые задачи решаются одинаковым паттерном по всему проекту. Если API route написан определённым образом — все API routes так написаны.

---

## Размеры файлов

| Тип | Максимум |
|-----|---------|
| Компонент | 100–150 строк |
| Hook | 50–80 строк |
| API route | 60–80 строк (логика в lib/) |
| Утилита | 50 строк |
| Модель БД | 40–60 строк |

Если файл перерос лимит — пора разбивать.

---

## Naming

### Компоненты (PascalCase)
Имя = что это: `LessonCard`, `QuizQuestion`, `ProgressBar`

### Функции (camelCase, глагол + объект)
`getLessons()`, `updateProgress()`, `calculateDamageLevel()`

### Boolean (is/has/can/should)
`isCompleted`, `hasAccess`, `canProceed`, `shouldShowQuiz`

### Переменные (понятно, без аббревиатур)
```
Нет:  const lp = await getLP(uid)
Да:   const lessonProgress = await getLessonProgress(userId)
```

### Константы (UPPER_SNAKE)
`MAX_LESSONS`, `QUIZ_QUESTIONS_COUNT`, `VIDEO_SAVE_INTERVAL_MS`

---

## Шаблон компонента

```typescript
// 1. Импорты
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import type { Lesson } from '@/types/lesson'

// 2. Типы (если специфичны для компонента)
interface LessonCardProps {
  lesson: Lesson
  onComplete: (slug: string) => void
}

// 3. Компонент
export default function LessonCard({ lesson, onComplete }: LessonCardProps) {
  // 3a. Hooks
  const [isLoading, setIsLoading] = useState(false)

  // 3b. Handlers
  async function handleComplete() {
    setIsLoading(true)
    try {
      await onComplete(lesson.slug)
    } finally {
      setIsLoading(false)
    }
  }

  // 3c. Render
  return (
    <div className="rounded-lg border p-4">
      <h3 className="text-lg font-medium">{lesson.title}</h3>
      <Button onClick={handleComplete} disabled={isLoading}>
        {isLoading ? 'Сохраняю...' : 'Отметить как пройденный'}
      </Button>
    </div>
  )
}
```

---

## Шаблон API Route

```typescript
// app/api/progress/route.ts
import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth/guards'
import { updateProgress } from '@/lib/lessons/progress'

export async function POST(request: Request) {
  // 1. Auth
  const user = await requireAuth()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // 2. Parse + Validate
  const { lessonSlug, status } = await request.json()
  if (!lessonSlug || !status) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  // 3. Delegate to domain logic
  try {
    const result = await updateProgress(user.id, lessonSlug, status)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Progress update failed:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
```

Route = auth → validate → delegate → respond. Логика — в `lib/`.

---

## Error Handling

Каждый интерактивный элемент имеет три состояния:
1. **Default** — кнопка активна
2. **Loading** — спиннер или disabled
3. **Error** — сообщение об ошибке

Никогда не оставлять пользователя в неопределённости.

---

## Git Commits

```
feat: add lesson progress tracking
fix: resolve video player resume position
refactor: extract quiz scoring to lib/
style: improve mobile lesson card layout
chore: update dependencies
```

Каждый коммит — одно изменение. Не "added stuff" или "fixes".

---

## Чеклист перед коммитом

- [ ] TypeScript: no errors
- [ ] Нет console.log (кроме error handling)
- [ ] Нет закомментированного кода
- [ ] Нет дублирования
- [ ] Файл ≤ 150 строк
- [ ] Все переменные понятно названы
- [ ] Loading + error states обработаны
- [ ] Мобильная версия работает
- [ ] Коммит описывает одно изменение

---

## Что видит работодатель

Когда senior-разработчик открывает этот проект, он должен увидеть:

| Что смотрит | Что видит |
|------------|----------|
| Folder structure | Понятная, доменная, не хаос |
| Компонент | Короткий, типизированный, с обработкой состояний |
| API route | Тонкий, делегирует в lib/ |
| Types | Строгие, описательные |
| Git history | Чистая, осмысленная |
| README | Понятный, с инструкцией запуска |

И главное — **последовательность**. Если в одном месте паттерн A, то везде паттерн A. Не A, потом B, потом "забыл и сделал C".
