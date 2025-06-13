function reverseText() {
  const inputText = prompt("Введите текст для переворота:");
  if (inputText !== null) {
      const reversedText = inputText.split('').reverse().join('');
      alert("Перевернутый текст: " + reversedText);
  }
}

document.querySelector('#reverseBtn').addEventListener('click', reverseText);
  