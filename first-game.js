// Генерация случайного числа от 1 до 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Функция для игры
function playGame() {
    let guess = parseInt(prompt("Угадайте число от 1 до 100!"));

    while (guess !== secretNumber) {
        if (guess < secretNumber) {
            guess = parseInt(prompt("Ваше число меньше загаданного. Попробуйте ещё раз:"));
        } else if (guess > secretNumber) {
            guess = parseInt(prompt("Ваше число больше загаданного. Попробуйте ещё раз:"));
        }
    }

    alert("Поздравляем! Вы угадали число!");
}

// Обработчик события для кнопки "Играть!"
document.querySelector('#playButton').addEventListener('click', playGame);