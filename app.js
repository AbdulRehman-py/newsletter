// going to select soem elements from the DOM

const btn1 = document.querySelector('.b1');
const input_email = document.getElementById('mail');
const content_container = document.querySelector('.news-letter-content');
const success_message = document.querySelector('#success-message');
const btn2 = document.querySelector('.b2');
const form = document.querySelector('.form');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


function showSuccessMessage () {
    content_container.classList.add('content-hide');
    success_message.classList.remove('hide-message');

}

function dismissmessage () {
    success_message.classList.add('hide-message');
    content_container.classList.remove('content-hide');
}


// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const value_email = input_email.value;

    if (validateEmail(value_email)) {
        showSuccessMessage();
    } else {
        const error_message = document.querySelector('.label-p');
        error_message.innerText = "Invalid email address";
       input_email.classList.add('btn1-error');
        
        
    }
}

btn1.addEventListener('click', handleFormSubmit);


btn2.addEventListener('click', dismissmessage);


// Listen for clicks anywhere in the body
document.body.addEventListener('click', (event) => {
    // Check if the click was outside the input field and error message
    if (!form.contains(event.target)) {
        // Remove the error class and message
        input_email.classList.remove('btn1-error');
        const error_message = document.querySelector('.label-p');
        error_message.innerText = ""; 
        input_email.value = '';
        if (error_message) {
            existingErrorMessage.innerText = '';
        }
    }
});