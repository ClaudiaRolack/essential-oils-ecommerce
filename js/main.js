// ****************************************** REGISTRO ******************************************



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

//let registrarme = document.querySelector("#registrarme")
//registrarme.addEventListener("click", register)
// ****************************************** MOSTRAR INFORMACIÓN ******************************************

function mostrarInfo() {
    let usuario = localStorage.getItem('usuario')
    let usuarioJSON = JSON.parse(usuario)
    let { nombre, primerApellido } = JSON.parse(usuario)

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

// ****************************************** Creador de Objetos ******************************************
class ai {
    constructor(id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
    }
}

class am {
    constructor(id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
    }
}

const contenedorDeProductos = document.querySelector("#contenedor")

function productosDesdeJs() { }

// ****************************************** GENERADOR DE TARJETAS ******************************************

for (let producto of productosai) {
    contenedorDeProductos.innerHTML += `
    <div class= "row">
        <div class="carta col-md-2">
            <img class="tarjetitasai__imagen" src=${producto.img} />
            <p>$${producto.precio} </p>
            <button class="agregar" id=${producto.id}>Agregar</button>
        </div>
    </div>
    `
}

// ************************************************** CARRITO *************************************************

/*
    1. Localstorage
        1.1 Validar la existencia del carrito en el local storage.
    2. Crear la funcion agregar
        2.1 Validar la existencia del carrito en el local storage.
        2.2 Nos traemos el array de nuestro carrito del localstorage
        2.3 Agregamos el nuevo producto al carrito
        2.4 SetItem en local storage


*/
const carrito = []
//let agregar = document.querySelectorAll(".agregar")

function agregarAlCarrito (producto) {
    carrito.push(producto);
  }
  
  function eliminarDelCarrito (indice) {
    carrito.splice(indice, 1);
  }

  function calcularTotalCarrito() {
    var total = 0;
    for (var i = 0; i < carrito.length; i++) {
      total += carrito[i].precio;
    }
    return total;
  }
// let registrarme = document.querySelector("#registrarme")
// registrarme.addEventListener("click", register)

//let agregarAlCarrito = document.querySelector("")
let botones = document.querySelectorAll(".agregar")
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        let idProducto = boton.id;
    })
})
