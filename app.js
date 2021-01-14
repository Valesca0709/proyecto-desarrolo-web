const nombreMascota = document.getElementById("nombre")
const Email = document.getElementById("email")
const URLdetumascota = document.getElementById("URL")
const Telefono = document.getElementById("Telefono")
const Fechadenacimientodetumascota = document.getElementById("nacimiento")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/jdsj"
    parrafo.innerHTML = ""
    if(nombreMascota.value.length <20){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    // if(!regexEmail.test(email.value)){
    //     warnings += `El email no es valido <br>`
    //     entrar = true
    // }
    if(Telefono.value.length < 20){
        warnings += `El telefono no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
        console.log(warnings)
    }else{
        parrafo.innerHTML = "Enviado"
    }
})