// Массив с вопросами
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["Красный", "Синий", "Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["Шесть", "Семь", "Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["Четыре", "Пять", "Шесть"],
        correctAnswer: 2
    }
];

// Счетчик правильных ответов
let correctCount = 0;
let currentQuestion = 0;

// Функция для запуска викторины
function startQuiz() {
    correctCount = 0;
    currentQuestion = 0;
    showQuestion();
}

// Функция отображения вопроса
function showQuestion() {
    if (currentQuestion < quiz.length) {
        const question = quiz[currentQuestion];
        const userAnswer = prompt(`${question.question}\n\nВарианты ответов:\n${question.options.map((option, index) => `${index + 1}. ${option}`).join('\n')}`);
        
        if (userAnswer === null) {
            return;
        }
        
        const answer = parseInt(userAnswer);
        
        if (!isNaN(answer) && answer >= 1 && answer <= question.options.length) {
            if (answer === question.correctAnswer) {
                correctCount++;
            }
            currentQuestion++;
            showQuestion();
        } else {
            alert('Пожалуйста, введите корректный номер ответа!');
            showQuestion();
        }
    } else {
        showResults();
    }
}

// Функция показа результатов
function showResults() {
    alert(`Вы правильно ответили на ${correctCount} из ${quiz.length} вопросов.`);
}

// Функция валидации ввода
function validateInput(input) {
    return !isNaN(input) && input >= 1 && input <= quiz[currentQuestion].options.length;
}

// Подключение к интерфейсу
document.getElementById('startQuizButton').addEventListener('click', startQuiz);
document.getElementById('resetButton').addEventListener('click', () => {
    correctCount = 0;
    currentQuestion = 0;
    alert('Викторина сброшена!');
});
