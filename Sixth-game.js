const startButton = document.getElementById('startButton');
        const gameBlock = document.getElementById('gameBlock');
        const originalBodyColor = document.body.style.backgroundColor;
        const originalBlockColor = gameBlock.style.backgroundColor;
        let colorChangeInterval;

        startButton.addEventListener('click', () => {
            // Первый клик - показываем вопрос
            alert("Ты можешь выбрать случайный фон для этой страницы!");
            changeBackgroundColor();

            // Автоматически вызываем второй клик через 3 секунды
            setTimeout(() => {
                clearInterval(colorChangeInterval); // Останавливаем изменение цвета
                alert("Круто получилось!");
                gameBlock.style.backgroundColor = originalBlockColor;
                document.body.style.backgroundColor = originalBodyColor;
            }, 10000); // 10000 миллисекунд = 10 секунд
        });

        function changeBackgroundColor() {
            colorChangeInterval = setInterval(() => {
                const randomColor = getRandomColor();
                gameBlock.style.backgroundColor = randomColor;
            }, 1000);
        }

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }