const form = document.getElementById('form');
const successMessage = document.getElementById('success-message');
const nameInput = document.getElementById('nameInput');
const email = document.getElementById('email');
const checkIn = document.getElementById('checkIn');
const number = document.getElementById('number');
const checkOut = document.getElementById('checkOut');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {


    let errors = []

    if (nameInput) {
        //if we have a name_input then we are in the booking-form
        errors = getsubmitFormErrors(nameInput.value, email.value, number.value, checkIn.value, checkOut.value)
    } else {
        errors = getbookingFormErrors(nameInput, email, number, checkIn, checkOut)
    }
    if (errors.length > 0) {
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
});
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    successMessage.textContent = 'Submit Successful!'; // Display the success message
});

function getBookingFormErrors(nameInput, email, number, checkIn, checkOut) {
    let errors = []
    if (nameInput === '' || nameInput == null) {
        errors.push('nameInput is required')
        name_input.parentElement.classList.add('incorrect')
    }
    if (email === '' || email == null) {
        errors.push('email is required')
        email.parentElement.classList.add('incorrect')
    }
    if (number === '' || number == null) {
        errors.push('number is required')
        number.parentElement.classList.add('incorrect')
    }
    if (checkIn === '' || checkIn == null) {
        errors.push('checkIn is required')
        checkIn.parentElement.classList.add('incorrect')
    }
    if (check - out === '' || check - out == null) {
        errors.push('checkOut is required')
        checkOut.parentElement.classList.add('incorrect')
    }
    return errors;
}
const allInputs = [nameInput, email, number, checkOut, checkIn]
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})