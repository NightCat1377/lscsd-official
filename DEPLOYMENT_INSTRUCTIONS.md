# 📋 Інструкція з деплою на GitHub Pages

## Ваш сайт: https://nightcat1377.github.io/lscsd-official/

---

## 🚀 Крок 1: Створіть репозиторій на GitHub

1. Перейдіть на [github.com](https://github.com)
2. Натисніть **"New repository"** (зелена кнопка)
3. Назвіть репозиторій **точно**: `lscsd-official`
4. Зробіть його **Public** (публічним)
5. **НЕ** ставте галочку "Add a README file"
6. Натисніть **"Create repository"**

---

## 💻 Крок 2: Завантажте код на GitHub

Відкрийте термінал/командний рядок у папці з проектом і виконайте:

```bash
git init
git add .
git commit -m "Initial commit - Sheriff Department website"
git branch -M main
git remote add origin https://github.com/nightcat1377/lscsd-official.git
git push -u origin main
```

Якщо GitHub попросить авторизацію - увійдіть через браузер або використайте Personal Access Token.

---

## ⚙️ Крок 3: Налаштуйте GitHub Pages

1. Перейдіть у ваш репозиторій: `https://github.com/nightcat1377/lscsd-official`
2. Натисніть **Settings** (вгорі справа)
3. У лівому меню знайдіть **Pages**
4. У розділі **"Build and deployment"**:
   - **Source**: виберіть **"GitHub Actions"**
5. Збережіть налаштування

---

## ✅ Крок 4: Перевірте деплой

1. Перейдіть у вкладку **Actions** (вгорі в репозиторії)
2. Ви побачите процес деплою (жовта крапка 🟡 = в процесі, зелена галочка ✅ = готово)
3. Зачекайте 2-3 хвилини
4. Ваш сайт буде доступний на: **https://nightcat1377.github.io/lscsd-official/**

---

## 🔄 Оновлення сайту в майбутньому

Коли будете редагувати контент, просто виконайте:

```bash
git add .
git commit -m "Оновлення контенту"
git push
```

Сайт автоматично оновиться через 2-3 хвилини!

---

## 📝 Редагування контенту

Щоб змінити текст у вкладках, відредагуйте файл:
`/src/app/components/ContentPanel.tsx`

---

## 🆘 Якщо щось не працює

### Біла сторінка:
1. Відкрийте консоль браузера (F12)
2. Перевірте вкладку **Console** на помилки
3. Перевірте вкладку **Network** - чи завантажуються файли

### Помилка деплою:
1. Перейдіть в **Actions**
2. Натисніть на червоний хрестик ❌
3. Подивіться логи помилки

---

## 📦 Структура проекту

```
lscsd-official/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Автоматичний деплой
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── SideNav.tsx     # Бічна навігація
│   │   │   └── ContentPanel.tsx # Контент
│   │   └── App.tsx             # Головний компонент
│   ├── styles/                 # CSS стилі
│   └── main.tsx                # Точка входу
├── index.html                  # HTML шаблон
├── vite.config.ts              # Конфігурація (base: '/lscsd-official/')
└── package.json                # Залежності
```

---

## 🎨 Колірна схема GTA V

- Фон: `#0a0a0a` (чорний)
- Панель: `#121212` (темно-сірий)
- Бордери: `#2a2a2a`
- Акцент: `#d4af37` (золотий)
- Текст: `#ffffff` (білий)
- Вторинний текст: `#888` / `#aaa`

---

**Успіхів! 🚀**
