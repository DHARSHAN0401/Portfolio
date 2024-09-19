// Typing effect for hero section
const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Dharshan J', 'a Full stack Developer'];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
    if (wordIndex < words.length) {
        if (!isDeleting && letterIndex <= words[wordIndex].length) {
            currentWord = words[wordIndex].slice(0, ++letterIndex);
            typedText.textContent = currentWord;
        }

        if (isDeleting && letterIndex <= words[wordIndex].length) {
            currentWord = words[wordIndex].slice(0, --letterIndex);
            typedText.textContent = currentWord;
        }

        if (letterIndex === words[wordIndex].length && !isDeleting) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (letterIndex === 0 && isDeleting) {
            isDeleting = false;
            wordIndex++;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 100 : 150);
        }
    } else {
        wordIndex = 0;
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', type);
