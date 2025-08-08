# 🌿 Áurea Esencias

Este proyecto comenzó con el objetivo de aprender las bases del Desarrollo Web, y logró cumplir con ese propósito. Sin embargo, también fue creado con la intención de promocionar y vender las bondades de los aceites esenciales de doTERRA.

Si bien esta empresa cuenta con un sitio web oficial para que sus distribuidores accedan a los productos a precios más convenientes, es fundamental que quienes trabajan como distribuidores puedan llegar al mayor público posible. No solo como vendedores de productos, sino también como guías para quienes se animen a recorrer el camino de lo natural.

---

# 🚀 Funcionalidades principales

- **Creación de objetos (`ai` y `am`)**  
  Representan productos:
  - `ai`: Aceites individuales  
  - `am`: Aceites en mezcla  
  Cada uno contiene: `id`, `producto` (nombre) y `precio`.

- **Generación dinámica de tarjetas de productos**  
  Según la URL actual (`/aceitesindividuales` o `/mezclas`), se muestran las tarjetas correspondientes con imágenes y datos del producto.

- **Registro de usuarios**  
  Permite:
  - Capturar y validar campos del formulario (email, contraseña, nombre, etc.).
  - Guardar la información en `localStorage`.
  - Mostrar los datos del usuario registrado.

- **Carrito de compras**  
  Funcionalidades:
  - Agregar productos al carrito.
  - Almacenar la selección en `localStorage`.
  - Eliminar productos individualmente.
  - Mostrar el monto total.
  
- **Simulación de pago**  
  Muestra una alerta personalizada con SweetAlert2 al finalizar la compra.

---

# ⚙️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/ClaudiaRolack/essential-oils-ecommerce.git
cd essential-oils-ecommerce
```

2. Instala las dependecias:
```bash
npm i
```

3. Abre el archivo index.html direcatmente en tu navegador.

---

# 🛠 Tecnologías usadas

- **Node.js:** Entorno de ejecución JavaScript (solo en desarrollo/local).
- **HTML:** Lenguaje de marcado para la estructura del sitio.
- **CSS:** Estilos base del proyecto.
- **SASS:** Preprocesador CSS para escribir estilos más limpios y escalables.
- **JavaScript:** Lógica de la aplicación y manipulación del DOM.
- **Sweetalert2:** Librería para mostrar alertas personalizadas de forma visual.

---

# 💡 **¡Gracias por visitar el proyecto!**