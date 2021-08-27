const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

function submitForm(event) {
    event.preventDefault()
}

function login() {
    localStorage.setItem('logeado', true)
    if (document.getElementById('email').value === "" || document.getElementById('password').value === "") {
        alert('Por favor rellenar todos los campos') }
    else {
        console.log('algo anda mal')
        window.location.href = 'home.html'  
    }
    
}

