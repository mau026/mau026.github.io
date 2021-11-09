const nombre = document.getElementById("name")
const email = document.getElementById("email")
const contraseña = document.getElementById("contraseña")
const form = document.getElementById("form")
const warnings = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
     if(nombre.Value.length <6){
       warnings += 'El nombre no es valido <br>'
       entrar = true

    }
    
    console.log(regexEmail.test(email.Value))
    if(!regexEmail.test(email.Value)){
      warnings += 'El email no es valido <br>'
      entrar = true
    }
    if(contraseña.Value.length < 8){
      warnings += 'La contraseña no es valido <br>'
      entrar = true
    }

    if (entrar){
      parrafo.innerHTML = warnings
    }
})






