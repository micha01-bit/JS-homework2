function randNums() {
    const operators = ["+", "-", "*", "/"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let a, b, result, userAnswer;

    function getRandomEvenOdd(isEven) {
        let num;
        do {
            num = Math.floor(Math.random() * 10) + 1;
        } while ((num % 2 === 0) !== isEven);
        return num;
    }

    if (operator === '/') {
        const isEven = Math.random() < 0.5;

        a = getRandomEvenOdd(isEven);
        b = getRandomEvenOdd(isEven);

        if (a < b) {
            [a, b] = [b, a];
        }

        userAnswer = +prompt(`Разделите ${a} на ${b}`);
        result = a / b;

    } else {
        a = Math.floor(Math.random() * 10) + 1;
        b = Math.floor(Math.random() * 10) + 1;

        switch (operator) {
            case '+':
                userAnswer = +prompt(`Сложите ${a} и ${b}`);
                result = a + b;
                break;

            case '-':
                userAnswer = +prompt(`Вычтите ${b} от ${a}`);
                result = a - b;
                break;

            case '*':
                userAnswer = +prompt(`Умножьте ${a} на ${b}`);
                result = a * b;
                break;
        }
    }

    if (operator === '/') {
        if (Math.abs(userAnswer - result) < 0.01) {
            alert('Верно');
        } else {
            alert('Неверно');
        }
    } else {
        if (userAnswer === result) {
            alert('Верно');
        } else {
            alert('Неверно');
        }
    }
}

document.querySelector('#calcButton').addEventListener('click', randNums);
