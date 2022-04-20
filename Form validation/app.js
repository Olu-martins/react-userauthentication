

// login form element input check function
function showFormSubmitMessage (FormElement, type, message) {
    const MessageDisplay = FormElement.querySelector(".form_message");
    MessageDisplay.textContent = message;
    MessageDisplay.classList.remove(".form_message-success", ".form_message-error");
    MessageDisplay.classList.add(`form_message-${type}`)
}// showFormMessage(LonginForm, "success", "You are logged in!");

// inputs element error function declaration: Shows error whenever user type wrong input type....e.g type password instead of text 
function showInputDataError (inputElement, message) {
    inputElement.classList.add(".form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;

}

// clear inputs element error function declaration: Remove the input error when user now type in correct input type
function clearInputError (inputElement) {
    inputElement.classList.remove(".form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";
}

// varaibles for login and createaccount:
const LonginForm = document.querySelector("#login");
const CreateAccount = document.querySelector("#createAccount");
const createAccountLink = document.querySelector('#linkCreateAccount');
const LoginLink = document.querySelector('#linkLogin');

// main form function: inside the here we make use / call the functions we declared above for the actual events to take place!
document.addEventListener("DOMContentLoaded", () => {           
    createAccountLink.addEventListener("click", e => {
        e.preventDefault();
        // toggle to show createAccount form and hid login
        LonginForm.classList.add("form-hidden");
        CreateAccount.classList.remove("form-hidden");
    });
    LoginLink.addEventListener("click", e => {
        e.preventDefault();
        // toggle to show login and hid createAccount form
        LonginForm.classList.remove("form-hidden");
        CreateAccount.classList.add("form-hidden");
    });
    // login form element check function call/usage
    LonginForm.addEventListener("submit", e => {
        e.preventDefault();
    // perform  AJAX / FETCH

        showFormSubmitMessage(LonginForm, "error", "Invalid Username/password combination")
    });
    // input form element function call/usage
    document.querySelectorAll(".form_input").forEach( inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id = "signUpUsername" && e.target.value.length > 0 && e.target.value.length < 8 ) {
                showInputDataError(inputElement, "Check input field, enter valid field requirements");
            }
        })

        inputElement.addEventListener( "input", e =>{
            clearInputError(inputElement);
        }) 

    })

});


