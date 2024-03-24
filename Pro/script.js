// Функция для создания звезды
function createStar() {
    const star = document.createElement('div'); // Создаем новый элемент div для звезды
    star.classList.add('star'); // Добавляем класс 'star' для применения стилей из CSS
    const size = Math.random() * 5 + 1; // Генерируем случайный размер звезды от 1 до 6 пикселей
    const x = Math.random() * window.innerWidth; // Генерируем случайную позицию по горизонтали
    const y = Math.random() * window.innerHeight; // Генерируем случайную позицию по вертикали
    star.style.width = `${size}px`; // Устанавливаем случайную ширину звезды
    star.style.height = `${size}px`; // Устанавливаем случайную высоту звезды
    star.style.left = `${x}px`; // Устанавливаем позицию по горизонтали
    star.style.top = `${y}px`; // Устанавливаем позицию по вертикали
    document.getElementById('stars-container').appendChild(star); // Добавляем звезду в контейнер
}

// Создаем звезды с интервалом
setInterval(createStar, 100);
