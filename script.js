document.getElementById('exampleForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => validateInput(input, 'Need to fill'));
});

function validateInput(input, message) {
    if (input.value.trim() === '') {
        showError(input, message);
    } else {
        showSuccess(input);
    }
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;
    small.style.visibility = 'visible';
    input.classList.remove('success');
    input.classList.add('error');
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.style.visibility = 'hidden';
    input.classList.remove('error');
    input.classList.add('success');
}
