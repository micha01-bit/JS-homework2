// Конфигурация игры
const GAME_RULES = {
    'камень': { 'побеждает': 'ножницы', 'проигрывает': 'бумага' },
    'ножницы': { 'побеждает': 'бумага', 'проигрывает': 'камень' },
    'бумага': { 'побеждает': 'камень', 'проигрывает': 'ножницы' }
};

// Состояние игры
let userScore = 0;
let computerScore = 0;

// Основная функция
function startRockPaperScissors() {
    showRules();
    let userChoice;
    
    do {
        userChoice = normalizeInput(prompt('Выберите: камень, ножницы или бумага'));
        
        if (!isValidChoice(userChoice)) {
            showMessage('Некорректный выбор. Пожалуйста, выберите камень, ножницы или бумагу.');
        }
    } while (!isValidChoice(userChoice));

    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    
    updateScores(result);
    showResults(userChoice, computerChoice, result);
}

// Функция показа правил
function showRules() {
    alert('Правила игры:\n' +
        'Камень побеждает ножницы.\n' +
        'Ножницы побеждают бумагу.\n' +
        'Бумага побеждает камень.\n' +
        'При совпадении выборов — ничья.');
}

// Вспомогательные функции
function normalizeInput(input) {
    return input ? input.toLowerCase().trim() : '';
}

function isValidChoice(choice) {
    return ['камень', 'ножницы', 'бумага'].includes(choice);
}

function getComputerChoice() {
    const choices = ['камень', 'ножницы', 'бумага'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(user, computer) {
    if (user === computer) return 'ничья';
    return GAME_RULES[user]['побеждает'] === computer ? 'пользователь' : 'компьютер';
}

function updateScores(winner) {
    switch (winner) {
        case 'пользователь':
            userScore++;
            break;
        case 'компьютер':
            computerScore++;
            break;
    }
}

function showResults(user, computer, result) {
    const message = `
        Ваш выбор: ${user}\n
        Выбор компьютера: ${computer}\n
        Результат: ${getResultText(result)}\n
        Счет: ${userScore} - ${computerScore}
    `;
    showMessage(message);
}

function getResultText(result) {
    return {
        'ничья': 'Ничья!',
        'пользователь': 'Вы победили!',
        'компьютер': 'Компьютер победил.'
    }[result];
}

function showMessage(text) {
    alert(text);
}

// Инициализация
document.querySelector('#playBtn').addEventListener('click', startRockPaperScissors);