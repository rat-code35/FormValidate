const Name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const button = document.getElementById("button");
const namespan = document.getElementById("namespan");
const emailspan = document.getElementById("emailspan");
const phonespan = document.getElementById("phonespan");
const passwordspan = document.getElementById("passwordspan");
const form = document.getElementById("form");

function validateName() {
    const nameRegex = /^[a-zA-Z ]{2,50}$/; 
    let errorMessage = null;
  
    if (Name.value.trim() === "") {
      errorMessage = "Name is required";
    } else if (!nameRegex.test(Name.value)) {
      errorMessage = "Invalid Name";
    }
  
    if (errorMessage !== null) {
      namespan.style.visibility = "visible";
      namespan.textContent = errorMessage;
    } else {
      namespan.style.visibility = "hidden";
      return true;
    }
  }
  

function validateEmail() {
    const emailRegex = /^[a-z0-9._]{5,20}[@][a-z]{5,8}\.(com|org)$/;
    const speciaSymbol = /@/;
    const valid = /\d/;
    let errorMessage = null;
  
    if (email.value === undefined || email.value.trim() === "") {
      errorMessage = "Email is required";
    } else if (!emailRegex.test(email.value)) {
      errorMessage = "Invalid Email";
    } else if (!speciaSymbol.test(email.value)) {
      errorMessage = "Email must include '@'";
    } else if (!valid.test(email.value)) {
      errorMessage = "Email must include digits";
    }
  
    if (errorMessage !== null) {
      emailspan.style.visibility = "visible";
      emailspan.textContent = errorMessage;
    } else {
      emailspan.style.visibility = "hidden";
      return true;
    }
  }

  function validatePhone() {
    const phoneRegex = /^\+91[6-9]\d{9}$/; 
    let errorMessage = null;
  
    if (phone.value.trim() === "") {
      errorMessage = "Phone number is required";
    } else if (!phoneRegex.test(phone.value)) {
      errorMessage = "Invalid Indian Phone Number";
    }
  
    if (errorMessage !== null) {
      phonespan.style.visibility = "visible";
      phonespan.textContent = errorMessage;
    } else {
      phonespan.style.visibility = "hidden";
      return true;
    }
  }
  
  

function validatePassword() {
  const upperRegex = /[A-Z]/;
  const lowerRegex = /[a-z]/;
  const specialRegex = /[!@#$%^&*()-_+=]/;
  const numbersRegex = /\d/;

  let errorMessage = null;
  if (password.value === undefined || password.value.trim() === "") {
    errorMessage = "Password is required";
  }
 else if (password.value.length < 8) {
    errorMessage = "Password length must be 8 or more";
  } else if (!upperRegex.test(password.value)) {
    errorMessage = "Password must include at least one uppercase letter";
  } else if (!lowerRegex.test(password.value)) {
    errorMessage = "Password must include at least one lowercase letter";
  } else if (!specialRegex.test(password.value)) {
    errorMessage = "Password must include at least one special character";
  } else if (!numbersRegex.test(password.value)) {
    errorMessage = "Password must include at least one number";
  }

  if (errorMessage !== null) {
    passwordspan.style.visibility = "visible";
    passwordspan.textContent = errorMessage;
  } else {
    passwordspan.style.visibility = "hidden";
    return true;
  }
}

button.addEventListener("click", function (event) {
  const validEmail = validateEmail();
  const validPass = validatePassword();
   const validName = validateName();
    const validPhone = validatePhone();
  if (validEmail && validPass && validName && validPhone) {
      alert("Form is successfully submitted")
    form.submit();
  } else {
    event.preventDefault();
  }
});
