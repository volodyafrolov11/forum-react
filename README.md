## Общая информация

**Ссылка на проект:** [http://fva-project.online](http://fva-project.online)

**Тестовые авторизационные данные (admin):**

*Имя пользователя:*

```
admin
```

*Пароль:*

```
123
```

**Тестовые авторизационные данные (user):**

*Имя пользователя:*

```
user
```

*Пароль:*

```
123
```

## Запуск проекта
```
npm install - установка зависимостей
npm run start:dev или npm run:start:dev:vite - запуск backend + frontend
```
---

## Список скриптов

- `npm start` - Запуск frontend на webpack dev server 
- `npm run start:vite` - Запуск frontend на vite
- `npm run start:dev` - Запуск frontend на webpack dev server + backend с json fake server
- `npm run start:dev:vite` - Запуск frontend на vite + backend с json fake server
- `npm run start:dev:server` - Запуск backend с json fake server 
- `npm run build:prod` - Сборка frontend проекта на webpack в production режиме
- `npm run build:dev` - Сборка frontend проекта на webpack в development режиме (без минимизации)
- `npm run lint:ts` - Проверка файлов .ts линтером
- `npm run lint:ts:fix` - Исправление фалов .ts линтером
- `npm run lint:scss` - Проверка файлов .scss линтером
- `npm run lint:scss:fix` - Исправление фалов .scss линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов 
- `npm run test:ui:ci` - Запуск скриншотных тестов с loki в CI
- `npm run test:ui:report` - Сгенерировать отчет по скриншотным UI тестам
- `npm run test:ui:json` - Сгенерировать JSON отчет для скриншотных тестов
- `npm run test:ui:html` - Сгенерировать HTML отчет для скриншотных тестов
- `npm run storybook` - Запуск storybook 
- `npm run storybook:build` - Сборка storybook
- `npm run prepare` - Запуск pre-commit хуков
- `npm run generate:slice` - Сгенерировать FSD слайс
---

## Архитектура проекта
Данный проект был реализован с использованием Frontend архитектуры feature sliced design.

Ссылка на документацию: https://feature-sliced.design/docs/get-started/overview

---

## Работа с локализацией
Данный проект поддерживает два языка: русский и английский. 
Для работы с переводами использовалась библиотека i18next. 
Файли с переводами хранятся в public/locales.

Ссылка на документацию: https://react.i18next.com

---

## Тестирование

В проекте используются следующие виды тестов: 
1) Unit тесты с использованием библиотеки jest - `npm run test:unit`
2) Тесты React компонентов с помощью RTL (React Testing Library) - `npm run test:unit`
3) Скриншотное тестирование с Loki - `npm run test:ui`
4) e2e тестирование с использованием Cypress - `npm run test:e2e`

Подробнее о тестировании приложения - [документация по тестированию](./docs/tests.md)

---

## Линтинг

В данном проекте используется Eslint для проверки Typescript кода и Stylelint для проверки файлов со стилями.

Для контроля главных архитектурных принципов FSD используется собственный Eslint плагин - *eslint-plugin-forum-react*, который содержит три правила:
1) path-checker - запрещает использовать абсолютные импорты в рамках одного слайса.
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD (Нельзя использовать pages в features).
3) public-api-imports - разрешает импорт других модулей только из Public API. Имеет автофикс.

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```


----

## Конфигурация проекта

Для разработки проект содержит 2 конфига:
1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Работа с feature-flags

Разрешено использование feature-flags только с помощью хелпера toggleFeatures

В него передается объект с опциями:

{
    name: название фича-флага,
    on: функция, которая отработает только после включения фичи,
    off: функция, которая отработает только после выключения фичи,
}

Для автоматического удаления фичи использовать скрипт remove-feature.ts
который принимает 2 аргументв:
1. Название удаляемого фича-флага
2. Состояние (on / off)

----


## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
