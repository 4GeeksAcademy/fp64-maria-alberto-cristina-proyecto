console.log("Hola María")

const pass = document.getElementById("pass");
const icono = document.querySelector(".bi");

icono.addEventListener("click", e => {
    if(pass.type === "password"){
        pass.type = "text";
        icono.classList.remove('bi-eye');
        icono.classList.add('bi-eye-slash');
    } else {
        pass.type = "password"
        icono.classList.remove('bi-eye-slash');
        icono.classList.add('bi-eye');
    }
})