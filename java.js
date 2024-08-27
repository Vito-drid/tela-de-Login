document.getElementById('meu-texto').addEventListener('click', function() {
    var checkbox = document.querySelector('.checkbox-wrapper-2 .ikxBAC');
    checkbox.checked = !checkbox.checked;
});

const inputs = document.querySelectorAll('.input-data');

inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (input.value.trim() !== '') {
            input.classList.add('input-filled');
        } else {
            input.classList.remove('input-filled');
        }
    });
});

document.getElementById('showPassword').addEventListener('change', function() {
    var passwordInput = document.getElementById('secretInput');
    if (this.checked) {
        passwordInput.type = 'text'; // Revela a senha
    } else {
        passwordInput.type = 'password'; // Oculta a senha
    }
});
