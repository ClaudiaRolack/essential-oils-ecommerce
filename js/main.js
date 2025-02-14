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

// ****************************************** GENERADOR DE TARJETAS ******************************************
const contenedorDeProductos = document.querySelector("#contenedor");

// TARJETAS AI
const urlActual = `/public/images/${producto.img}`;
for (let producto of productos) {
    if ('http://127.0.0.1:5500/pages/aceitesindividuales.html' === urlActual) {
        if (producto.tipo === 'ai') {
            contenedorDeProductos.innerHTML += `
                <div class= "row">
                    <div class="carta col-md-2">
                        <img class="tarjetitasai__imagen" src="/public/images/${producto.img}" />
                    </div>
                </div>
            `;
        }
    } else if ('http://127.0.0.1:5500/pages/mezclas.html' === urlActual) {
        if (producto.tipo === 'am') {
            contenedorDeProductos.innerHTML += `
                <div class= "row">
                    <div class="carta col-md-2">
                        <img class="tarjetitasai__imagen" src="/public/images/${producto.img}" />
                    </div>
                </div>
            `;
        }
    }
}

// ****************************************** REGISTRO ******************************************

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

// ************************************************** CARRITO *************************************************

function agregarAlCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito'));

    if (!carrito) {
        carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    const productoElegido = productos.find(producto => producto.id === id);

    carrito.push(productoElegido);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

let botones = document.querySelectorAll(".agregar");
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        agregarAlCarrito(parseInt(boton.id));
    })
})

let contenedorLista = document.querySelector('#carritoLista')
let carritoLista = JSON.parse(localStorage.getItem('carrito'))
if (!carritoLista) {
    carritoLista = []
}

let contador = 0;
for (let productoDelCarrito of carritoLista) {
    contenedorLista.innerHTML += `
        <ul class="carrito__lista">
            <li>
                <div class="carrito__tarjeta">
                    <img  class="carrito__imagen" src=${productoDelCarrito.img} />
                 </div>
                 <p class="carrito__titulo">${productoDelCarrito.producto}</p>
                <p class="carrito__precio">$${productoDelCarrito.precio}</p>
                <div class="boton__eliminar" id=${contador++}><img class="boton" src="../images/equisCarrito.png"></div>
            </li>
        </ul>   
     `
}

function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito'));

    if (!carrito) {
        carrito = [];
        localStorage.setItem('carrito', JSON.parse(carrito));
    }

    carrito = carrito.filter((item, index) => index !== id);
    console.log(carrito)

    localStorage.setItem('carrito', JSON.stringify(carrito));
    location.reload()
}

let botonesEliminar = document.querySelectorAll(".boton__eliminar");
botonesEliminar.forEach(boton => {
    boton.addEventListener('click', () => {
        eliminarDelCarrito(parseInt(boton.id));
    })
})

function calcularTotal() {
    const totalParrafo = document.querySelector("#monto_total");
    let carrito = JSON.parse(localStorage.getItem('carrito'));

    if (!carrito) {
        totalParrafo.innerHTML = '$0';
    } else {
        let suma = 0;
        for (const item of carrito) {
            suma += parseFloat(item['precio']);
        };
        totalParrafo.textContent = $`${suma}`;
    }
}

if (document.querySelector('#monto_total')) { calcularTotal(); }

const btnPagar = document.querySelector('#pagar')
btnPagar?.addEventListener("click", () => {

    Swal.fire({
        title: '¡Gracias!',
        text: 'Tu compra ha sido confirmada.',
        icon: 'success',
        confirmButtonText: 'Acepto'
    })
})


// mezclas
// <p>$${producto.precio} </p>
// <button class="agregar ${producto.tipo}" id=${producto.id}>Agregar</button>

// //aceites individuales
// <p>$${producto.precio} </p>
// <button class="agregar ${producto.tipo}" id=${producto.id}>Agregar</button>