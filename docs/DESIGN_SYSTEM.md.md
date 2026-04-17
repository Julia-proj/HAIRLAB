# DESIGN SYSTEM — Keratin Madrid
**Версия:** 1.0 — 16 апреля 2026
**Связан с:** SOURCE_OF_TRUTH.md (раздел 8)
**Назначение:** Единственная визуальная спецификация проекта. Используется как входной документ для Lovable, Claude Code и любого другого инструмента.

---

## ЧАСТЬ 0 — ОБНОВЛЕНИЕ SOURCE_OF_TRUTH: ПОЗИЦИОНИРОВАНИЕ


### 3.1 ПОЗИЦИОНИРОВАНИЕ vs КОНКУРЕНТЫ

#### vs ChatGPT / универсальные AI-помощники

**Угол подачи на лендинге:** через опыт пользователя.
"Ты уже спрашивала AI про волосы. И вот почему это не сработало."

**Формулировки для лендинга (без длинного тире, без AI-штампов):**

> Ты спросила ChatGPT: "Что делать с сухими волосами?"
> Он ответил: "Используйте увлажняющую маску 1-2 раза в неделю."
> Спасибо, ChatGPT. Это знает каждая.
>
> Проблема не в том, что AI глупый. Он умный. Но он читал 10 миллионов статей, которые противоречат друг другу. И даёт тебе усреднённый ответ. Не про твои волосы. Про "волосы вообще".
>
> Наш AI работает иначе. Он обучен на реальных кейсах Елены: 5000+ клиенток, 20+ типов повреждений, конкретные составы и результаты. Когда он смотрит на твоё фото, он видит не "сухие волосы", а "высокая пористость на осветлённом блонде 8-го уровня, нужен низкомолекулярный белок, а не маска с маслами".

**5 конкретных отличий (для FAQ или отдельного блока):**

| ChatGPT | Keratin Madrid AI |
|---|---|
| Отвечает по усреднённому интернету | Отвечает по реальной практике Елены |
| "Маска может помочь, зависит от типа..." | "При твоём повреждении нужен состав X, нанесённый так-то" |
| Не видит твои волосы | Анализирует твои фото |
| Забывает тебя после сессии | Помнит квиз, фото, прогресс |
| Даёт советы | Даёт систему: уроки + диагностика + план |

**Ключевая фраза (CTA-уровень):**
"ChatGPT даёт тебе информацию. Мы даём тебе результат."


#### vs Kérastase / Olaplex / L'Oréal Professionnel

**Угол подачи:** не хейт брендов, а "уровень выше продукта".

**Формулировки:**

> Kérastase делает хорошие средства. Olaplex тоже. Но они продают тебе продукты, а не понимание.
>
> Ты покупаешь маску за 65 евро. Наносишь. Не знаешь: подходит ли она твоему типу повреждения? Правильно ли ты её держишь? Нужна ли тебе вообще маска, или в твоём случае важнее низкомолекулярный белок?
>
> Мы не конкуренты Kérastase. Мы то, что подсказывает тебе, какие средства покупать и как ими пользоваться. С правильной системой даже Kérastase работает в 3 раза лучше. Потому что используется правильно.

**4 конкретных отличия:**

| Kérastase, Olaplex и другие | Keratin Madrid |
|---|---|
| Продают продукт за 65 евро | Продаёт систему за 49 евро. Один раз |
| "Для повреждённых волос" на всех | Понимает именно твой тип (AI + квиз) |
| Рассчитаны на покупку всей линейки | Учит, что из линейки тебе реально нужно |
| Результат зависит от того, правильно ли применяешь | Учит применять. Видеоуроки мастера |

**Ключевая фраза:**
"Хорошие средства работают. Если ты знаешь, какие именно тебе нужны."


#### Правила позиционирования (для всех текстов)

1. Никогда не хейтим ChatGPT, Kérastase или любой другой бренд
2. Называем имена прямо: ChatGPT, Kérastase, Olaplex. Пользователь узнаёт свою полочку
3. Фрейм всегда: "они хороши в своём, мы делаем другое"
4. Никогда не говорим "уникальная система", "авторская методика", "секрет"
5. Без длинных тире. Без "в современном мире". Без "важно понимать что"
6. Тон: подруга, которая разбирается. Не лектор, не продавец

---

## ЧАСТЬ 1 — ВИЗУАЛЬНАЯ ФИЛОСОФИЯ

### Mood

**Три слова:** тёплый, тихий, уверенный.

Не luxury с золотом. Не глянцевый beauty. Не корпоративный tech.
Скорее: британская аптека, где всё деревянное, пахнет хорошо, и фармацевт знает тебя по имени.

### Визуальные референсы (зафиксированные)

| Референс | Что берём |
|---|---|
| **Wildsmith Skin** | Палитра, типографика серифом, фото-стиль, воздух |
| **Curology** | Структура воронки/квиза, логика персонализации |
| **Linear** | Чистота, анимации, performance, gradient mesh |
| **Division Design (divisiondesign.kz)** | Animated gradient mesh на фоне hero |

### Антиреференсы (что НЕ делаем)

- Розовый beauty-глянец (Instagram-стиль)
- Тёмный luxury с золотыми рамками (инфобизнес-клише)
- Типичный Tilda-лендинг (Stranke-уровень)
- Udemy/Teachable aesthetic (дешёвый dashboard)

---

## ЧАСТЬ 2 — ПАЛИТРА

### Основные цвета

```
Background Primary:    #F7F4F0   (кремовый off-white, Wildsmith-вдохновлённый)
Background Secondary:  #EDE8E1   (чуть темнее, для карточек и секций)
Background Tertiary:   #E3DDD4   (для hover-состояний, бордеров)

Text Primary:          #2C2825   (тёплый уголь, не чёрный)
Text Secondary:        #6B6560   (приглушённый, для подписей)
Text Muted:            #9C9590   (для placeholder, неактивных элементов)

Accent Primary:        #7C8C6E   (sage зелёный, Wildsmith)
Accent Primary Hover:  #6A7A5E   (темнее на hover)
Accent Secondary:      #C4A882   (тёплая охра/песок, для мягких акцентов)

Success:               #7C8C6E   (sage = позитивное состояние)
Warning:               #C4A882   (охра)
Error:                 #B85C5C   (приглушённый красный, не кричащий)

Border:                #D8D2CB   (еле заметный)
Border Active:         #7C8C6E   (sage, для фокуса)
```

### Цвета для animated gradient mesh

```
Mesh Color 1:          #E8E0D6   (тёплый крем)
Mesh Color 2:          #D4CBBC   (песочный)
Mesh Color 3:          #C8D4C0   (бледный sage)
Mesh Color 4:          #E0D4C8   (розоватый песок)
```

### Правила использования цвета

- Фон: 70% Primary (#F7F4F0), 20% Secondary (#EDE8E1), 10% Tertiary
- Текст: Primary (#2C2825) для заголовков и body, Secondary для подписей
- Accent: sage (#7C8C6E) только для CTA-кнопок, активных элементов, прогресс-бара
- Охра (#C4A882): только для badges, тегов, вторичных акцентов
- Никогда не используем чистый чёрный (#000) или чистый белый (#FFF)

---

## ЧАСТЬ 3 — ТИПОГРАФИКА

### Шрифты

```
Headings:   "Instrument Serif", Georgia, serif
Body:       "Inter", system-ui, sans-serif
Mono:       "JetBrains Mono", monospace   (только для кода/технических деталей)
```

**Почему Instrument Serif, а не Cormorant Garamond:**
Instrument Serif от Google Fonts, бесплатный, отлично рендерится на экранах, имеет тот же "тихий luxury" как Wildsmith, но лучше читается на мобильных. Cormorant слишком тонкий на маленьких экранах.

**Почему Inter для body:**
Inter это не "дефолтный AI-шрифт" в контексте серифных заголовков. Когда заголовки серифные, Inter как body создаёт контраст "серьёзный сериф + чистый гротеск" = Aesop-ощущение. Проблема Inter бывает когда ВСЁ в Inter, тогда это безлико.

### Размеры (desktop → mobile)

```
Hero heading:          72px → 40px    (Instrument Serif, weight 400)
Section heading (h2):  48px → 32px    (Instrument Serif, weight 400)
Subsection (h3):       32px → 24px    (Instrument Serif, weight 400)
Card title (h4):       24px → 20px    (Inter, weight 600)
Body large:            20px → 18px    (Inter, weight 400, line-height 1.6)
Body:                  16px → 16px    (Inter, weight 400, line-height 1.6)
Body small:            14px → 14px    (Inter, weight 400, line-height 1.5)
Caption:               12px → 12px    (Inter, weight 500, uppercase, letter-spacing 0.05em)
Button:                16px → 16px    (Inter, weight 500)
```

### Правила типографики

- Заголовки ВСЕГДА Instrument Serif, weight 400 (не bold, серифы не нуждаются в жирности)
- Body ВСЕГДА Inter, weight 400
- Максимальная ширина текстового блока: 680px (для читаемости)
- Line-height body: 1.6 (не 1.5, не 1.4, именно 1.6 для длинных текстов)
- Letter-spacing для заголовков: -0.02em (чуть плотнее)
- Никогда не используем ALL CAPS для заголовков (можно для caption/label)

---

## ЧАСТЬ 4 — SPACING & LAYOUT

### Базовая единица: 8px

Все отступы кратны 8:

```
4px    (xs)     — минимальный gap внутри элемента
8px    (sm)     — между иконкой и текстом
16px   (md)     — padding внутри кнопки, между строками списка
24px   (lg)     — padding карточки, gap между элементами
32px   (xl)     — между блоками внутри секции
48px   (2xl)    — между секциями на мобильном
64px   (3xl)    — между секциями на десктопе
96px   (4xl)    — hero padding, большие отбивки
128px  (5xl)    — между крупными разделами страницы
```

### Контейнер

```
Max-width:          1200px
Padding horizontal: 24px (mobile), 48px (tablet), 64px (desktop)
```

### Сетка

```
Desktop:    12 колонок, gap 24px
Tablet:     8 колонок, gap 16px
Mobile:     4 колонки, gap 16px
```

### Breakpoints

```
sm:     640px
md:     768px
lg:     1024px
xl:     1280px
```

---

## ЧАСТЬ 5 — КОМПОНЕНТЫ

### Кнопки

**Primary (CTA):**
```
Background:       #7C8C6E (sage)
Text:             #F7F4F0 (cream)
Padding:          16px 32px
Border-radius:    8px
Font:             Inter 16px weight 500
Hover:            #6A7A5E (darker sage)
Active:           scale(0.98)
Transition:       all 200ms ease
Min-height:       48px (touch-friendly)
```

**Secondary:**
```
Background:       transparent
Border:           1px solid #D8D2CB
Text:             #2C2825
Hover:            background #EDE8E1
```

**Ghost:**
```
Background:       transparent
Border:           none
Text:             #7C8C6E (sage)
Hover:            text #6A7A5E, underline
```

### Карточки

```
Background:       #EDE8E1
Border:           1px solid #D8D2CB
Border-radius:    12px
Padding:          24px
Shadow:           none по умолчанию, 0 2px 8px rgba(44,40,37,0.06) на hover
Transition:       shadow 200ms ease, transform 200ms ease
Hover:            transform translateY(-2px)
```

### Input / Form fields

```
Background:       #F7F4F0
Border:           1px solid #D8D2CB
Border-radius:    8px
Padding:          12px 16px
Font:             Inter 16px
Focus:            border-color #7C8C6E, ring 2px #7C8C6E/20%
Placeholder:      #9C9590
```

### Progress Bar

```
Track:            #E3DDD4
Fill:             #7C8C6E (sage)
Height:           6px
Border-radius:    3px
Animation:        width 500ms ease
```

### Quiz Option Cards

```
Default:          background #EDE8E1, border 1px solid #D8D2CB
Hover:            border-color #7C8C6E
Selected:         background #7C8C6E/10%, border 2px solid #7C8C6E
Border-radius:    12px
Padding:          20px
Min-height:       64px
Transition:       all 200ms ease
```

### Lesson Card (Dashboard)

```
Completed:        left-border 3px solid #7C8C6E, opacity 0.9
In Progress:      left-border 3px solid #C4A882, background #EDE8E1
Unlocked:         default card style
Locked:           opacity 0.5, filter grayscale(30%)
```

---

## ЧАСТЬ 6 — ANIMATED GRADIENT MESH

### Что это
Мягкие цветные пятна, которые медленно плавают по фону. Создают ощущение "живого" фона. Референс: divisiondesign.kz hero, но в нашей Wildsmith-палитре.

### Где использовать
- Hero-экран лендинга (фон под заголовком)
- AI-диагностика (фон во время обработки фото)
- Welcome-экран dashboard (после оплаты)
- 404 страница

### Где НЕ использовать
- Внутри уроков (отвлекает от видео)
- В квизе (отвлекает от выбора)
- В checkout (отвлекает от решения)
- На странице урока (отвлекает от контента)

### Техническая реализация (CSS)

```css
.gradient-mesh {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.gradient-mesh::before,
.gradient-mesh::after {
  content: '';
  position: absolute;
  width: 60vmax;
  height: 60vmax;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: mesh-float 20s ease-in-out infinite;
}

.gradient-mesh::before {
  background: radial-gradient(circle, #C8D4C0 0%, transparent 70%);
  top: -20%;
  left: -10%;
  animation-delay: 0s;
}

.gradient-mesh::after {
  background: radial-gradient(circle, #E0D4C8 0%, transparent 70%);
  bottom: -20%;
  right: -10%;
  animation-delay: -10s;
}

.gradient-mesh-extra {
  position: absolute;
  width: 50vmax;
  height: 50vmax;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  background: radial-gradient(circle, #D4CBBC 0%, transparent 70%);
  top: 30%;
  left: 40%;
  animation: mesh-float 25s ease-in-out infinite reverse;
}

@keyframes mesh-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25%      { transform: translate(5%, -8%) scale(1.05); }
  50%      { transform: translate(-3%, 5%) scale(0.95); }
  75%      { transform: translate(8%, 3%) scale(1.03); }
}
```

### Правила performance
- `will-change: transform` на анимируемых элементах
- `filter: blur()` тяжёлый, на мобильных уменьшить до blur(40px)
- Элементы за `overflow: hidden`, чтобы не создавать горизонтальный скролл
- Если Lighthouse жалуется, сделать mesh через `<canvas>` вместо CSS (Phase 3)

---

## ЧАСТЬ 7 — ЛОГОТИП KM

### Концепт
Монограмма из двух букв K и M. Текстовый логотип на Instrument Serif. Минималистичный, без иконок.

### Реализация

```
Текст:            "KM"
Шрифт:            Instrument Serif, weight 400
Размер:           24px (header), 18px (footer), 32px (favicon)
Цвет:             #2C2825 (тёплый уголь)
Letter-spacing:   0.1em
```

### Варианты использования

```
Header:           KM                    (просто буквы)
Footer:           KM · Keratin Madrid   (с подписью)
Favicon:          KM на фоне #F7F4F0    (квадрат 32x32)
OG Image:         KM по центру на кремовом фоне
```

### Подпись под логотипом (опционально)

```
"KERATIN MADRID"
Шрифт:            Inter, weight 500
Размер:           11px
Letter-spacing:   0.15em
Text-transform:   uppercase
Цвет:             #6B6560
```

---

## ЧАСТЬ 8 — TAILWIND CONFIG

Готовый конфиг. Скопируй в `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#F7F4F0',
          100: '#EDE8E1',
          200: '#E3DDD4',
          300: '#D8D2CB',
          400: '#C4BDB4',
        },
        charcoal: {
          DEFAULT: '#2C2825',
          light:   '#6B6560',
          muted:   '#9C9590',
        },
        sage: {
          DEFAULT: '#7C8C6E',
          dark:    '#6A7A5E',
          light:   '#C8D4C0',
        },
        sand: {
          DEFAULT: '#C4A882',
          light:   '#E0D4C8',
        },
        error: '#B85C5C',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'hero':    ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'sub':     ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'card':    ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6' }],
        'body':    ['1rem', { lineHeight: '1.6' }],
        'small':   ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'prose': '680px',
        'container': '1200px',
      },
      borderRadius: {
        DEFAULT: '8px',
        'card': '12px',
      },
      boxShadow: {
        'card-hover': '0 2px 8px rgba(44, 40, 37, 0.06)',
        'elevated':   '0 4px 16px rgba(44, 40, 37, 0.08)',
      },
      animation: {
        'mesh-float': 'mesh-float 20s ease-in-out infinite',
      },
      keyframes: {
        'mesh-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%':      { transform: 'translate(5%, -8%) scale(1.05)' },
          '50%':      { transform: 'translate(-3%, 5%) scale(0.95)' },
          '75%':      { transform: 'translate(8%, 3%) scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

### Google Fonts import (для globals.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500;600&display=swap');
```

---

## ЧАСТЬ 9 — ФОТО-СТИЛЬ

### Настроение фото
Тёплое естественное освещение. Не студийный глянец. Не стоковые "идеальные волосы".
Ближе к editorial lifestyle: реальные люди, реальные волосы, мягкий свет.

### Что нужно от Елены (фото для сайта)

**Для hero / about:**
- Елена за работой в студии (крупный план рук на волосах)
- Елена в студии (средний план, видно пространство)
- Елена смотрит в камеру (портрет, тёплый фон)

**Для уроков / результатов:**
- Текстура волос крупным планом (до/после)
- Процесс нанесения состава
- Руки + волосы (не лицо клиентки, для приватности)

**Для лендинга:**
- 3-4 фото реальных результатов (до/после)
- Скриншоты реальных отзывов из директа

### Обработка фото
- Тёплый баланс белого (не холодный)
- Мягкая контрастность (не HDR)
- Никаких фильтров Instagram
- Формат: WebP, качество 80%, lazy load

### Plan B (если фото ещё нет)
- Hero: gradient mesh + типографика (без фото вообще, как Linear)
- About: текст + цифры (6 лет / 5000+ / Мадрид) без фото
- Уроки: абстрактные текстуры (кремовые, природные)
- Фото добавим, когда Елена пришлёт

---

## ЧАСТЬ 10 — LOVABLE PROMPT HEADER

> Копируй этот блок в НАЧАЛО каждого промпта для Lovable. Это заставит его держать наш стиль.

```
DESIGN SYSTEM — STRICT RULES. Follow these exactly:

COLORS (use ONLY these, no others):
- Background: #F7F4F0 (primary), #EDE8E1 (cards/sections), #E3DDD4 (hover/borders)
- Text: #2C2825 (primary), #6B6560 (secondary), #9C9590 (muted)
- Accent: #7C8C6E (sage green, CTA buttons and active states ONLY)
- Secondary accent: #C4A882 (warm sand, badges and tags ONLY)
- Error: #B85C5C
- Border: #D8D2CB
- NEVER use pure black (#000) or pure white (#FFF)
- NEVER use purple, blue, or bright colors

TYPOGRAPHY:
- Headings: "Instrument Serif" (Google Fonts), weight 400, NOT bold
- Body text: "Inter" (Google Fonts), weight 400
- Buttons: Inter, weight 500
- Hero: 72px desktop / 40px mobile
- Section headings: 48px desktop / 32px mobile
- Body: 16px, line-height 1.6
- Max text width: 680px
- Letter-spacing headings: -0.02em

SPACING:
- All spacing multiples of 8px
- Card padding: 24px
- Section gaps: 64px desktop, 48px mobile
- Container max-width: 1200px
- Horizontal padding: 24px mobile, 48px tablet, 64px desktop

COMPONENTS:
- Buttons: 8px radius, 16px 32px padding, min-height 48px
- Cards: 12px radius, #EDE8E1 background, 1px #D8D2CB border
- Inputs: 8px radius, #F7F4F0 background, 1px #D8D2CB border
- Progress bar: 6px height, #E3DDD4 track, #7C8C6E fill

MOOD: Premium beauty-warm. Think Wildsmith Skin meets Aesop. 
Quiet confidence, generous whitespace, serif headings with sans body.
NOT luxury with gold. NOT glossy beauty. NOT corporate tech.
NOT pink. NOT Instagram aesthetic.

LANGUAGE: All text in Russian. No em-dashes (—). 
No AI cliches like "в современном мире" or "важно понимать".

MOBILE-FIRST: Design for mobile first. Touch targets min 48px.
CTA buttons sticky bottom on mobile.
```

---

## ЧАСТЬ 11 — АНТИПАТТЕРНЫ (что НИКОГДА не делаем)

### Визуальные
- Градиенты от фиолетового к синему (AI-клише 2024)
- Тени 20px+ spread (дешёвый вид)
- Иконки из emoji (непрофессионально)
- Чисто белый фон (холодно, пусто)
- Чисто чёрный текст (грубо)
- Скруглённые углы 20px+ (детский вид)
- Бордеры толще 2px (грубо)

### Типографические
- ВСЕ КАПСЫ в заголовках (можно только в caption/label)
- Шрифт body жирнее 500 (перегруз)
- Строчный текст уже 14px (нечитаемо)
- Межстрочный интервал меньше 1.4 (тесно)

### UX
- Попапы с формами (навязчиво, не Wildsmith)
- Автопроигрывание видео со звуком
- Бесконечные горизонтальные карусели (пользователь теряется)
- Sticky header толще 64px (на мобильном съедает экран)
- Более одного CTA на экран

### Текстовые (повтор из SOURCE_OF_TRUTH, важно)
- Длинное тире (—) в любых текстах
- "В современном мире..."
- "Важно понимать, что..."
- "Уникальная авторская методика"
- "Данный курс предоставляет..."
- Перечисления через точку с запятой на полстраницы
- Одинаковая структура каждого абзаца

---

## ЧАСТЬ 12 — ЧЕКЛИСТ ПЕРЕД КАЖДЫМ LOVABLE-ПРОМТОМ

Прежде чем копировать промпт в Lovable, проверь:

- [ ] Prompt header (часть 10) вставлен в самом начале
- [ ] Все тексты на русском
- [ ] Нет длинных тире
- [ ] Нет AI-штампов
- [ ] Указан конкретный экран / секция (не "сделай весь сайт")
- [ ] Описана мобильная версия
- [ ] Указано, какой CTA на экране (один!)
- [ ] Указан контекст: откуда пришёл пользователь и куда идёт дальше

---

**Конец документа.**

Этот файл живёт в `docs/DESIGN_SYSTEM.md` и обновляется при изменении визуальных решений.