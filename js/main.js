// ****************************************** REGISTRO ******************************************

let registrarme = document.querySelector("#registrarme")
registrarme.addEventListener("click", register)

// contenedores del dom
function register(e) {
    e.preventDefault();
    let divError = document.querySelector("#error")

    // valores de los inputs
    let correoElectronico = document.querySelector("#registro__correo").value;
    let contraseña = document.querySelector("#registro__contraseña").value;
    let nombre = document.querySelector("#registro__nombre").value;
    let primerApellido = document.querySelector("#registro__primerApellido").value;
    let direccion = document.querySelector("#registro__direccion").value;

    // formateo de los valores
    const correoElectronicoFormateado = correoElectronico.toLowerCase();
    const nombreFormateado = nombre.toLowerCase();
    const primerApellidoFormateado = primerApellido.toLowerCase();
    const direccionFormateado = direccion.toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if (correoElectronicoFormateado.trim() === "") {
        divError.innerHTML = "<p>No ingresaste correo electrónico.</p>"
        return false;
    }

    if (!emailRegex.test(correoElectronicoFormateado)) {
        divError.innerHTML = "<p>Correo electrónico inválido.</p>"
        return false;
    }

    if (!(contraseña.length >= 4 && contraseña.length <= 16)) {
        divError.innerHTML = "<p>La contraseña debe ser mayor o igual a cuatro caracteres.</p>"
        return false;
    }

    if (contraseña.trim() === "") {
        divErrorError.innerHTML = "<p>La contraseña no debe estar vacía o tener espacios.</p>"
        return false;
    }

    if (!(nombreFormateado.length >= 2 && nombreFormateado.length <= 10)) {
        divError.innerHTML = "<p>El nombre no debe ser menor de dos caracteres, ni mayor de 10 caracteres.</p>"
        return false;
    }

    if (nombreFormateado.trim() === "") {
        divError.innerHTML = "<p>El nombre no debe tener espacios.</p>"
        return false;
    }

    if (!(primerApellidoFormateado.length >= 2 && primerApellidoFormateado.length <= 10)) {
        divError.innerHTML = "<p>El primer apellido no debe ser menor de dos caracteres, ni mayor de 10 caracteres.</p>"
        return false;
    }

    if (primerApellido.trim() === "") {
        divError.innerHTML = "<p>El primer apellido no debe tener espacios.</p>"
        return false;
    }

    if (!(direccionFormateado.length >= 5 && direccionFormateado.length <= 50)) {
        divError.innerHTML = "<p>Debes escribir una dirección.</p>"
        return false;
    }

    let usuario = {
        correoElectronico: correoElectronicoFormateado,
        contraseña: contraseña, 
        nombre: nombreFormateado,
        primerApellido: primerApellidoFormateado,
        direccion: direccionFormateado
    }

    let usuarioString = JSON.stringify(usuario) 
    localStorage.setItem('usuario', usuarioString)
    divError.innerHTML = "" 
    mostrarInfo()
}

// ****************************************** MOSTRAR INFORMACIÓN ******************************************

function mostrarInfo() {
    let usuario = localStorage.getItem('usuario')
    let usuarioJSON = JSON.parse(usuario)
    let {nombre, primerApellido} = JSON.parse(usuario)

    let usuarioDiv = document.querySelector("#usuario")
    usuarioDiv.innerHTML = `
                <ul>
                    <li> Correo Electrónico: ${usuarioJSON?.correoElectronico} </li>
                    <li> Nombre: ${usuarioJSON?.nombre}</li>
                    <li> Primer apellido: ${usuarioJSON?.primerApellido}</li>
                    <li> Dirección: ${usuarioJSON?.direccion}</li>
                </ul>
                `
}