document.getElementById("validation-input").onblur = function() {
    if (this.getAttribute('data-length') > this.value.trim().length || this.getAttribute('data-length') < this.value.trim().length) { 
        this.classList.add('invalid');
        this.classList.remove('valid');
    } else {
    this.classList.remove('invalid');
    this.classList.add('valid');
    }
};