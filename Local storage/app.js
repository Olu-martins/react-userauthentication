
// DOM form elements 
const regForm = document.querySelector('.regForm');

const userDetails = document.querySelector('.userDetails');

const nameInput = regForm['name']
const genderInput = regForm['gender']
const addressInput = regForm['address']
const phoneInput = regForm['phone']
const emailInput = regForm['email']
const passwordInput = regForm['password']
const checkPasswordInput = regForm['checkPassword']

const users =   
                JSON.parse(localStorage.getItem("users")) ||
                [];

const addUser = (name, gender, address, phone, email, password, checkPassword) => {
   users.push({
      name: name, 
       gender: gender, 
       address: address, 
       phone: phone, 
       email: email, 
       password: password, 
       checkPassword: checkPassword
   }); 
    
   //setiing the form input to store in the local storage    
   localStorage.setItem("users", JSON.stringify(users))

    /*  returning the users detail we got using the JSON.parse above to appear on the DOM.
    I commented it out in the user array above, because i dont need the details on the 
    html page once i submit my form and store in the Local storage */
   return {name, gender, address, phone, email, password, checkPassword};
}

const createUserElement = ({name, gender, address, phone, email, password, checkPassword}) => {
    const userDiv = document.createElement('div')
    const userName = document.createElement('p').innerText =  "Name: " + name  + ", ";
    const userGender = document.createElement('p').innerText = "Gender: " + gender + ", ";
    const userAddress = document.createElement('p').innerText = "Address: " + address + ", ";
    const userPhone = document.createElement('p').innerText = "Phone: " + phone + ", ";
    const userEmail = document.createElement('p').innerText = "Email: " + email + ", ";
    const userPassword = document.createElement('p').innerText = "Password: " + password + ", ";
    const userCheckPassword = document.createElement('p').innerText = "CheckPassword: " + checkPassword + ". ";


    userDiv.append(userName, userGender, userAddress, userPhone, userEmail, userPassword, userCheckPassword)    
    userDetails.appendChild(userDiv)
}
// set the createuserelement to foreach user which will fill the user array each time
// we cant make the foreach a function so that it will not fire in real time untill our the fomr is submitted

users.forEach(createUserElement)

regForm.onsubmit = e => {
    e.preventDefault();
    const newUser = addUser (
        nameInput.value,
        genderInput.value,
        addressInput.value,
        phoneInput.value,
        emailInput.value,
        passwordInput.value,
        checkPasswordInput.value
    );

    createUserElement(newUser)

        // set the input values to blank once we submit
        nameInput.value= "";
        genderInput.value = "";
        addressInput.value = "";
        phoneInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        checkPasswordInput.value = "";
};

/**
 * create DOM elements ===== all the 'ps' 
 * collect the parameters from the USERS array, either static(outcode) or from the form and use it as the inner HTML
 * append the elements to the  HTML ==== which is the user details section
 * 
 * TO GET 
 */


// DOM ELEMENTS
const menu = document.querySelector('menu')
const soupInput = formMenu['soup'] 
const drinkInput = formMenu['drink']
const swallowInput = formMenu['swallow'] 
const escortInput = formMenu['escort'] 

// DOM array where i want to first store all input orders from my form
const foodOrders =  [];

// local storage for the orders
localStorage.setItem("foodOrders", JSON.stringify(foodOrders))

//the function that will take the order list and pass it to the dom array

const addPlate = (soup, drink, swallow, escort ) => {
    foodOrders.push({
        soup, 
        drink, 
        swallow,
        escort
    })
}


// the function that is collecting the input values from the form 

menu.onsubmit = e => {
    e.preventDefault()
    addPlate(
        soupInput.value,
        drinkInput .value,
        swallowInput.value,
        escortInput.value  
    )
};



/* 
1. the variable that 



*/


