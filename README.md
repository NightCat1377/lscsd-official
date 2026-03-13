# Департамент Шерифів Округу Лос Сантос

Офіційний сайт Департаменту Шерифів у стилі GTA V.

## 🚀 Деплой на GitHub Pages

### Крок 1: Створіть репозиторій на GitHub
1. Перейдіть на [github.com](https://github.com) та створіть новий репозиторій
2. Назвіть його, наприклад: `sheriff-department` або `username.github.io` (для основного сайту)

### Крок 2: Налаштуйте base URL
1. Відкрийте файл `vite.config.ts`
2. Змініть значення `base`:
   - Якщо репозиторій називається `sheriff-department`, встановіть: `base: '/sheriff-department/'`
   - Якщо це основний сайт `username.github.io`, залиште: `base: '/'`

### Крок 3: Завантажте код на GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/your-repo-name.git
git push -u origin main
```

### Крок 4: Увімкніть GitHub Pages
1. Перейдіть у налаштування репозиторію (Settings)
2. У розділі "Pages" (бічна панель ліворуч)
3. У "Build and deployment" -> "Source" виберіть **GitHub Actions**
4. GitHub автоматично задеплоїть ваш сайт після push

### Крок 5: Перевірте деплой
Сайт буде доступний за адресою:
- Основний сайт: `https://username.github.io/`
- Проектний сайт: `https://username.github.io/repo-name/`

## 📝 Редагування контенту

Відредагуйте файл `/src/app/components/ContentPanel.tsx` для зміни текстів у кожній вкладці.

## 🎨 Особливості дизайну

- Темний мінімалістичний стиль у стилі GTA V
- Золотистий акцент (#d4af37)
- Адаптивна бічна навігація
- Посилання на зовнішню законодавчу базу

## 🛠 Локальна розробка

```bash
# Встановіть залежності
pnpm install

# Запустіть dev сервер
pnpm run dev

# Зібрати для production
pnpm run build
```
