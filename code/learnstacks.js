const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");  
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");  
});
document.querySelector(".sign-up-form").addEventListener("submit", function(event) {
    
    if (!emailRegex.test(emailInput.value)) {
        alert("Please enter a valid email address");
        event.preventDefault();
    }

    
    if (!passwordRegex.test(passwordInput.value)) {
        alert("Please enter a valid password (minimum 8 characters, at least one digit, one lowercase and one uppercase letter)");
        event.preventDefault();
    }
});