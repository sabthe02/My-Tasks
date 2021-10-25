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

function validateEmail(email) 
    {
        let re = /\S+@\S+\.\S+/
        return re.test(email)
    }
function registro() {
    if (validateEmail(document.getElementById('emailRegistro').value) === true && document.getElementById('passwordRegistro').value === true && document.getElementById('passwordRegistro').value === document.getElementById('passwordRegistroRepeat').value && localStorage.getItem('logeado') !=="true") {
      localStorage.setItem('logueado', true)  
      window.location.href = 'home.html'  
    }
    
    else if (localStorage.getItem('logueado') ==="true") {
          alert('Usuario ya existente, por favor loguearse')
    }
    
    else if (document.getElementById('passwordRegistro').value !== document.getElementById('passwordRegistroRepeat').value) {
        alert('Las contraseñas deben ser iguales')
    }

    else if (validateEmail(document.getElementById('emailRegistro').value) === true)
    {
      alert ('Por favor rellenar los campos faltanes')
    }
   
    else {
      alert ('Por favor ingresar un correo válido, ejemplo: ejemplo@gmail.com')
    }
}    

function login() {
      if (validateEmail(document.getElementById('email').value) === true && localStorage.getItem('logeado') ==="true") {
        window.location.href = 'home.html' 
      }

      else if (localStorage.getItem('logeado') !=="true") {
          alert('Usuario no existente, por favor registrarse')
      }
        
      else {
          alert('Ingresar correo electrónico válido')
      }
}