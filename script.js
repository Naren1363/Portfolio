const text = ["Learning", "Building", "Growing"];
let index = 0;
let charIndex = 0;
let currentText = "";
let typingElement = document.querySelector(".typing");

function type() {
    if (charIndex < text[index].length) {
        currentText += text[index].charAt(charIndex);
        typingElement.textContent = currentText;
        charIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        currentText = currentText.slice(0, -1);
        typingElement.textContent = currentText;
        charIndex--;
        setTimeout(erase, 100);
    } else {
        index++;
        if (index >= text.length) index = 0;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, 1000);
});
