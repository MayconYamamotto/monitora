const inputs = document.querySelectorAll('.form-box .content .form .input-group input');
console.log(inputs);

inputs.forEach((input) => {
    input.addEventListener('focus', handleFocusInput);
    input.addEventListener('blur', handleBlurInput);

})
function handleBlurInput(event) {
    const input = event.target;
    const label = input.closest('.input-group').querySelector('label');

    if (input.value.length > 0) {
        return;
    }

    label.classList.remove('input-focused');

}
function handleFocusInput(event) {
    const input = event.target;

    const label = input.closest('.input-group').querySelector('label');


    label.classList.add('input-focused');
}
