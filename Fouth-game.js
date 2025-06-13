const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

let correctCount = 0; // Счетчик правильных ответов

function startQuiz() {
    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        const userAnswer = prompt(`${question.question}\n${question.options.join('\n')}`);

        if (userAnswer && parseInt(userAnswer) === question.correctAnswer) {
            correctCount++;
        }
    }

    alert(`Вы правильно ответили на ${correctCount} из ${quiz.length} вопросов.`);
}

document.getElementById('startQuizButton').addEventListener('click', startQuiz);