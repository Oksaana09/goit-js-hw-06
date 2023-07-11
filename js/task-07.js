const inputChange = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

    inputChange.addEventListener('input', function() {
        const fontSize = inputChange.value + 'px';
        textSpan.style.fontSize = fontSize;
    });