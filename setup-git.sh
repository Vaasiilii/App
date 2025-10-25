#!/bin/bash
# --- Git auto-setup and first push script ---

# 1. Проверка, есть ли git-репозиторий
if [ ! -d ".git" ]; then
  echo "🧩 Git-репозиторий не найден — инициализируем..."
  git init
else
  echo "✅ Git-репозиторий уже существует."
fi

# 2. Добавляем все файлы
echo "📦 Добавляем файлы..."
git add .

# 3. Проверяем, есть ли хотя бы один коммит
if [ -z "$(git rev-parse --verify HEAD 2>/dev/null)" ]; then
  echo "📝 Создаём первый коммит..."
  git commit -m "Initial commit"
else
  echo "✅ Коммиты уже существуют."
fi

# 4. Настраиваем имя и email пользователя, если не заданы
if ! git config user.name >/dev/null; then
  git config --global user.name "Vaasiilii"
  git config --global user.email "example@example.com"
  echo "👤 Установлены имя и email для git."
fi

# 5. Переименовываем ветку в main
echo "🌿 Устанавливаем ветку main..."
git branch -M main

# 6. Добавляем remote, если его нет
if ! git remote | grep -q origin; then
  echo "🔗 Добавляем remote https://github.com/Vaasiilii/App.git"
  git remote add origin https://github.com/Vaasiilii/App.git
else
  echo "✅ Remote origin уже настроен."
fi

# 7. Пушим на GitHub
echo "🚀 Отправляем файлы на GitHub..."
git push -u origin main

echo "🎉 Готово! Проверь репозиторий https://github.com/Vaasiilii/App"
