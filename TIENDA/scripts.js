/* =====================================================
   DULMORI — SCRIPT.JS
   Catálogo, navegación, carrito y pedidos
===================================================== */
/* =====================================================
   1. BASE DE DATOS DE PRODUCTOS
===================================================== */
const productos = [
    {
        id: 1,
        nombre: "Volteado de piña",
        categoria: "Pasteles y volteados",
        descripcion: "Bizcocho suave con rodajas de piña caramelizada.",
        precio: 3.5,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074202/volteado-de-pina_z7irs2.jpg"
    },
    {
        id: 2,
        nombre: "Volteado de manzana",
        categoria: "Pasteles y volteados",
        descripcion: "Pastel casero de manzana con una cubierta dulce y dorada.",
        precio: 3.5,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074201/Volteado_Manzana_of2vm7.jpg"
    },
    {
        id: 3,
        nombre: "Volteado de guineo",
        categoria: "Pasteles y volteados",
        descripcion: "Bizcocho húmedo de guineo con una capa caramelizada.",
        precio: 3.25,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074200/Volteado_guineo_rxbrn6.webp"
    },
    {
        id: 4,
        nombre: "Pastel tres leches",
        categoria: "Pasteles",
        descripcion: "Bizcocho esponjoso bañado en una mezcla cremosa de tres leches.",
        precio: 3.75,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074199/Tres-Leches_tradicional_xc2rcp.webp"
    },
    {
        id: 5,
        nombre: "Tres leches de fresa",
        categoria: "Pasteles",
        descripcion: "Pastel tres leches con un toque frutal de fresa.",
        precio: 4.0,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074198/TresLeches_fresa_gdmpn1.webp"
    },
    {
        id: 6,
        nombre: "Tiramisú tradicional",
        categoria: "Postres especiales",
        descripcion: "Capas suaves con café, crema y un delicado toque de cacao.",
        precio: 4.25,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074197/Tiramisu_Tradicional_tchgjj.jpg"
    },
    {
        id: 7,
        nombre: "Tiramisú de chocolate",
        categoria: "Postres especiales",
        descripcion: "Versión intensa de tiramisú con sabor a chocolate.",
        precio: 4.5,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074196/Tiramisu_Chocolate_jwbwgl.avif"
    },
    {
        id: 8,
        nombre: "Mocaccino",
        categoria: "Bebidas calientes",
        descripcion: "Café espresso combinado con leche vaporizada y chocolate.",
        precio: 2.75,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074195/taza_mokaccino_tjkkba.jpg"
    },
    {
        id: 9,
        nombre: "Strudel de manzana",
        categoria: "Panadería dulce",
        descripcion: "Hojaldre relleno de manzana especiada y notas de canela.",
        precio: 3.25,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074194/strudel-de-manzana_rrppan.jpg"
    },
    {
        id: 10,
        nombre: "Pastel de chocolate Prinzregententorte",
        categoria: "Pasteles",
        descripcion: "Capas de bizcocho de chocolate unidas con crema suave.",
        precio: 4.5,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074193/prinzregententorte_chocolate_cf51cj.jpg"
    },
    {
        id: 11,
        nombre: "Pastelito de carne",
        categoria: "Salados",
        descripcion: "Masa dorada rellena de carne sazonada, ideal para acompañar el café.",
        precio: 1.75,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074192/pastelitos-de-carne_bwa9cj.jpg"
    },
    {
        id: 12,
        nombre: "Pastafrola",
        categoria: "Panadería dulce",
        descripcion: "Tarta casera con una base suave y relleno dulce tradicional.",
        precio: 3.0,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074191/Pastafrolaavif_onnxvw.avif"
    },
    {
        id: 13,
        nombre: "Mocca latte",
        categoria: "Bebidas calientes",
        descripcion: "Espresso, leche cremosa y chocolate en una bebida reconfortante.",
        precio: 3.0,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074190/mocca-latte_xkfwwp.webp"
    },
    {
        id: 14,
        nombre: "Milhojas de manzana",
        categoria: "Panadería dulce",
        descripcion: "Capas crujientes con relleno dulce de manzana.",
        precio: 3.5,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074189/milhojas-de-manzana_fkcyrf.webp"
    },
    {
        id: 15,
        nombre: "Macarons surtidos",
        categoria: "Repostería fina",
        descripcion: "Delicadas galletas de almendra con relleno cremoso.",
        precio: 1.5,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074188/macarons_v1wq7d.webp"
    },
    {
        id: 16,
        nombre: "Latte de dulce de leche",
        categoria: "Bebidas calientes",
        descripcion: "Café con leche vaporizada y el sabor acaramelado del dulce de leche.",
        precio: 3.25,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074187/Latte_de_Dulce-de-Leche_urcde3.webp"
    },
    {
        id: 17,
        nombre: "Hojaldre de manzana",
        categoria: "Panadería dulce",
        descripcion: "Hojaldre dorado con relleno suave de manzana.",
        precio: 2.75,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074186/Hojaldre_manzana_vbeqkx.jpg"
    },
    {
        id: 18,
        nombre: "Croissant de pistacho",
        categoria: "Panadería dulce",
        descripcion: "Croissant hojaldrado con un relleno cremoso de pistacho.",
        precio: 3.75,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074183/Croissant_pistacho_um6miu.webp"
    },
    {
        id: 19,
        nombre: "Fudge de chocolate",
        categoria: "Pasteles",
        descripcion: "Postre compacto y húmedo con un intenso sabor a chocolate.",
        precio: 3.5,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074185/Fudge_chocolate_zc34fo.jpg"
    },
    {
        id: 20,
        nombre: "Frappuccino",
        categoria: "Bebidas frías",
        descripcion: "Bebida fría licuada con café, leche y una textura cremosa.",
        precio: 3.75,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074184/frappuccinos_zyrwxu.webp"
    },
    {
        id: 21,
        nombre: "Croissant de jamón y queso",
        categoria: "Salados",
        descripcion: "Croissant de hojaldre relleno de jamón y queso fundido.",
        precio: 3.25,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074182/croissant_jamon_y_queso_knpdwo.jpg"
    },
    {
        id: 22,
        nombre: "Croissant de fresa",
        categoria: "Panadería dulce",
        descripcion: "Croissant dorado con un dulce relleno de fresa.",
        precio: 3.25,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074181/Croissant_fresa_ugp0ku.webp"
    },
    {
        id: 23,
        nombre: "Tres leches de chocolate",
        categoria: "Pasteles",
        descripcion: "Bizcocho de chocolate bañado en una mezcla cremosa de tres leches.",
        precio: 4.0,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074180/Chocolate-Tres-leches_pn8znh.jpg"
    },
    {
        id: 24,
        nombre: "Chocoflan",
        categoria: "Pasteles",
        descripcion: "Combinación de pastel de chocolate y flan cremoso.",
        precio: 3.75,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074179/chocoflan-12_qsrtsi.jpg"
    },
    {
        id: 25,
        nombre: "Cheesecake de fresa",
        categoria: "Cheesecakes",
        descripcion: "Tarta cremosa de queso con un toque dulce de fresa.",
        precio: 4.0,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074178/Cheescake-tradicional_Fresa_ir2sif.webp"
    },
    {
        id: 26,
        nombre: "Café espresso",
        categoria: "Bebidas calientes",
        descripcion: "Café concentrado de sabor intenso y aroma profundo.",
        precio: 1.75,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074177/cafe-expreso_monfx7.jpg"
    },
    {
        id: 27,
        nombre: "Brownie de chocolate",
        categoria: "Postres individuales",
        descripcion: "Brownie húmedo con intenso sabor a chocolate.",
        precio: 2.25,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074176/Brownie_chocolate_vjpw9i.webp"
    },
    {
        id: 28,
        nombre: "Brazo gitano de chocolate",
        categoria: "Pasteles",
        descripcion: "Bizcocho enrollado con relleno dulce y sabor a chocolate.",
        precio: 3.5,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074175/BrazoGitano_Chocolate_Tradicional_w2wmkq.jpg"
    },
    {
        id: 29,
        nombre: "Brazo gitano de cereza",
        categoria: "Pasteles",
        descripcion: "Bizcocho enrollado con relleno dulce de cereza.",
        precio: 3.5,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074174/BrazoGitano_Cereza_babq7r.avif"
    },
    {
        id: 30,
        nombre: "Brazo gitano tradicional",
        categoria: "Pasteles",
        descripcion: "Bizcocho esponjoso enrollado con un relleno clásico de crema.",
        precio: 3.25,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074173/Brazo-de-gitano-tradicional_c0chuy.png"
    },
    {
        id: 31,
        nombre: "Brazo gitano de pistacho",
        categoria: "Pasteles",
        descripcion: "Bizcocho suave enrollado con crema de pistacho.",
        precio: 4.0,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074172/Brazo-de-gitano-con-crema-de-pistacho-7-691af410b60839-22153507-1024x683_rruaws.jpg"
    },
    {
        id: 32,
        nombre: "Berlinesa tradicional",
        categoria: "Panadería dulce",
        descripcion: "Masa suave y esponjosa con un relleno dulce tradicional.",
        precio: 1.75,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074171/Berlinesa_Tradicional_fmrgjm.avif"
    },
    {
        id: 33,
        nombre: "Berlina de frambuesa",
        categoria: "Panadería dulce",
        descripcion: "Dona rellena con el sabor frutal de la frambuesa.",
        precio: 2.0,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074170/berlinas_frambuesa_oov0of.jpg"
    },
    {
        id: 34,
        nombre: "Cheescake de Oreo",
        categoria: "Postres de la casa",
        descripcion: "Una opción dulce para acompañar tu bebida favorita.",
        precio: 3.0,
        imagen: "https://res.cloudinary.com/djeljniac/image/upload/v1793074169/61b42ee9a7c5372e257c4dee_q2caus.jpg"
    }
];
/* =====================================================
   2. VARIABLES PRINCIPALES
===================================================== */
const catalogoProductos = document.getElementById("catalogo-productos");
const productosDestacados = document.getElementById("productos-destacados");
const filtroCategoria = document.getElementById("filtro-categoria");
const buscarProducto = document.getElementById("buscar-producto");
const carritoProductos = document.getElementById("carrito-productos");
const carritoVacio = document.getElementById("carrito-vacio");
const contadorCarrito = document.getElementById("contador-carrito");
const mensajeCatalogo = document.getElementById("mensaje-catalogo");
const mensajeCarrito = document.getElementById("mensaje-carrito");
const carritoCantidadTotal = document.getElementById("carrito-cantidad-total");
const carritoSubtotal = document.getElementById("carrito-subtotal");
const carritoEnvio = document.getElementById("carrito-envio");
const carritoTotal = document.getElementById("carrito-total");
const botonContinuarPago = document.getElementById("boton-continuar-pago");
/* =====================================================
   3. CONFIGURACIÓN Y ALMACENAMIENTO
===================================================== */
const CLAVE_CARRITO = "norden_carrito";
const CLAVE_CUPON = "norden_cupon";
const CLAVE_PEDIDO = "norden_pedido";
const formatearPrecio = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});
function mostrarPrecio(cantidad) {
    return formatearPrecio.format(cantidad);
}
function guardarDatos(clave, datos) {
    try {
        localStorage.setItem(clave, JSON.stringify(datos));
        return true;
    } catch (error) {
        console.error("No se pudieron guardar los datos:", error);
        return false;
    }
}
function leerDatos(clave, valorPredeterminado) {
    try {
        const datos = localStorage.getItem(clave);
        if (datos === null) {
            return valorPredeterminado;
        }
        return JSON.parse(datos);
    } catch (error) {
        console.error("No se pudieron leer los datos:", error);
        return valorPredeterminado;
    }
}
/* =====================================================
   4. ESTADO DEL CARRITO
===================================================== */
let carrito = leerDatos(CLAVE_CARRITO, []);
if (!Array.isArray(carrito)) {
    carrito = [];
}
carrito = carrito.filter(item => {
    return productos.some(producto => producto.id === Number(item.id))
        && Number.isSafeInteger(Number(item.cantidad))
        && Number(item.cantidad) >= 1;
});
carrito = carrito.map(item => ({
    id: Number(item.id),
    cantidad: Number(item.cantidad)
}));
guardarDatos(CLAVE_CARRITO, carrito);
/* =====================================================
   5. FUNCIONES AUXILIARES
===================================================== */
function obtenerProducto(id) {
    return productos.find(producto => producto.id === Number(id));
}
function obtenerCantidadTotal() {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
}
function calcularSubtotal() {
    return carrito.reduce((total, item) => {
        const producto = obtenerProducto(item.id);
        return producto ? total + producto.precio * item.cantidad : total;
    }, 0);
}
function mostrarMensaje(elemento, mensaje, tipo = "") {
    if (!elemento) return;
    elemento.textContent = mensaje;
    elemento.className = tipo;
}
function guardarCarrito() {
    guardarDatos(CLAVE_CARRITO, carrito);
}
/* =====================================================
   6. NAVEGACIÓN ENTRE LAS VISTAS
===================================================== */
const vistas = document.querySelectorAll("main > .pagina");
function mostrarVista(id) {
    let destino = id;
    if (destino === "inicio" || destino === "") {
        destino = "pagina-inicio";
    }
    if (["categorias", "destacados"].includes(destino)) {
        destino = "pagina-inicio";
    }
    const vistaSeleccionada = document.getElementById(destino);
    if (!vistaSeleccionada || !vistaSeleccionada.classList.contains("pagina")) {
        return;
    }
    vistas.forEach(vista => {
        vista.style.display = vista === vistaSeleccionada ? "block" : "none";
    });
    if (destino === "catalogo") {
        renderizarCatalogo();
    }
    if (destino === "carrito") {
        renderizarCarrito();
    }
    if (destino === "pago" && typeof prepararPago === "function") {
        prepararPago();
    }
    if (destino === "confirmacion") {
        cargarConfirmacionGuardada();
    }
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function navegarA(id) {
    let destino = id;
    if (destino === "inicio" || destino === "") {
        destino = "pagina-inicio";
    }
    const vistaDestino = document.getElementById(destino);
    if (vistaDestino && vistaDestino.classList.contains("pagina")) {
        mostrarVista(id);
        const hash = id === "pagina-inicio" ? "inicio" : id;
        if (window.location.hash !== `#${hash}`) {
            history.pushState(null, "", `#${hash}`);
        }
        return;
    }
    const paginas = {
        inicio: "index.html",
        "pagina-inicio": "index.html",
        catalogo: "catalogo.html",
        carrito: "carrito.html",
        pago: "pago.html",
        confirmacion: "confirmacion.html",
        nosotros: "nosotros.html"
    };
    const archivoDestino = paginas[id];
    if (!archivoDestino) return;
    const enlaces = Array.from(document.querySelectorAll("a[href]"));
    const enlaceDestino = enlaces.find(enlace => {
        try {
            const url = new URL(enlace.href, window.location.href);
            return url.pathname.split("/").pop() === archivoDestino;
        } catch (error) {
            return false;
        }
    });
    if (enlaceDestino) {
        window.location.href = enlaceDestino.href;
        return;
    }
    const actual = window.location.pathname.split("/").pop();
    if (actual !== archivoDestino) {
        window.location.href = new URL(
            archivoDestino,
            window.location.href
        ).href;
    }
}
document.addEventListener("click", function (evento) {
    const enlace = evento.target.closest('a[href^="#"]');
    if (!enlace) return;
    const hash = enlace.getAttribute("href");
    if (!hash || hash === "#") return;
    const destino = hash.substring(1);
    const destinosVista = [
        "inicio",
        "pagina-inicio",
        "catalogo",
        "carrito",
        "pago",
        "confirmacion",
        "nosotros",
        "categorias",
        "destacados"
    ];
    if (destinosVista.includes(destino)) {
        evento.preventDefault();
        navegarA(destino);
    }
});
window.addEventListener("popstate", function () {
    const destino = window.location.hash.substring(1);
    const idVista = destino === "inicio" ? "pagina-inicio" : destino;
    if (document.getElementById(idVista)) {
        mostrarVista(destino);
    }
});
/* =====================================================
   7. GENERAR UNA TARJETA DE PRODUCTO
===================================================== */
function crearTarjetaProducto(producto, mostrarCantidad = true) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "producto-card";
    tarjeta.dataset.id = producto.id;
    tarjeta.innerHTML = `
        <img
            src="${producto.imagen}"
            alt="${producto.nombre}"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">${producto.categoria}</p>
            <h3>${producto.nombre}</h3>
            <p class="producto-descripcion">
                ${producto.descripcion}
            </p>
            <p class="producto-precio" data-precio="${producto.precio}">
                ${mostrarPrecio(producto.precio)}
            </p>
            ${
                mostrarCantidad
                ? `
                    <label for="cantidad-${producto.id}">
                        Cantidad
                    </label>
                    <input
                        type="number"
                        id="cantidad-${producto.id}"
                        class="cantidad-producto"
                        min="1"
                        step="1"
                        value="1"
                        inputmode="numeric"
                    >
                    <button
                        type="button"
                        class="boton-agregar"
                        data-id="${producto.id}"
                    >
                        Agregar al carrito
                    </button>
                `
                : `
                    <button
                        type="button"
                        class="boton-agregar boton-ver-catalogo"
                    >
                        Ver en catálogo
                    </button>
                `
            }
        </div>
    `;
    const imagen = tarjeta.querySelector("img");
    imagen.addEventListener("error", function () {
        imagen.alt = `${producto.nombre}: imagen no disponible`;
        imagen.style.objectFit = "contain";
        imagen.style.padding = "25px";
        imagen.style.background = "#efeee8";
    }, { once: true });
    return tarjeta;
}
/* =====================================================
   8. PRODUCTOS DESTACADOS EN EL INICIO
===================================================== */
function renderizarDestacados() {
    if (!productosDestacados) return;
    productosDestacados.replaceChildren();
    const destacados = productos.slice(0, 4);
    destacados.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto, false);
        productosDestacados.appendChild(tarjeta);
    });
}
/* =====================================================
   9. MOSTRAR LOS PRODUCTOS DEL CATÁLOGO
===================================================== */
function renderizarCatalogo() {
    if (!catalogoProductos) return;
    const categoriaSeleccionada = filtroCategoria
        ? filtroCategoria.value
        : "todas";
    const textoBusqueda = buscarProducto
        ? buscarProducto.value.trim().toLowerCase()
        : "";
    const productosFiltrados = productos.filter(producto => {
        const categoriaNormalizada = categoriaSeleccionada.trim().toLowerCase();
        const categoriaProducto = producto.categoria.toLowerCase();
        const coincideCategoria =
            categoriaNormalizada === ""
            || categoriaNormalizada === "todas"
            || categoriaProducto === categoriaNormalizada
            || (
                categoriaNormalizada === "pasteles"
                && categoriaProducto.includes("pastel")
            )
            || (
                categoriaNormalizada === "postres"
                && (
                    categoriaProducto.includes("postre")
                    || categoriaProducto.includes("cheesecake")
                )
            )
            || (
                categoriaNormalizada !== "pasteles"
                && categoriaNormalizada !== "postres"
                && categoriaProducto.includes(categoriaNormalizada)
            );
        const coincideBusqueda =
            producto.nombre.toLowerCase().includes(textoBusqueda)
            || producto.descripcion.toLowerCase().includes(textoBusqueda)
            || producto.categoria.toLowerCase().includes(textoBusqueda);
        return coincideCategoria && coincideBusqueda;
    });
    catalogoProductos.replaceChildren();
    productosFiltrados.forEach(producto => {
        catalogoProductos.appendChild(
            crearTarjetaProducto(producto, true)
        );
    });
    if (productosFiltrados.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "No encontramos productos con esos criterios.";
        mensaje.style.gridColumn = "1 / -1";
        catalogoProductos.appendChild(mensaje);
    }
    mostrarMensaje(
        mensajeCatalogo,
        `${productosFiltrados.length} producto(s) encontrado(s).`
    );
}
if (filtroCategoria) {
    filtroCategoria.addEventListener("change", renderizarCatalogo);
}
if (buscarProducto) {
    buscarProducto.addEventListener("input", renderizarCatalogo);
}
document.addEventListener("click", function (evento) {
    const tarjetaCategoria = evento.target.closest(
        ".categoria[data-categoria], .tarjeta-categoria[data-categoria]"
    );
    if (!tarjetaCategoria) return;
    evento.preventDefault();
    if (filtroCategoria) {
        const categoria = tarjetaCategoria.dataset.categoria;
        const opcionDisponible = Array.from(filtroCategoria.options).find(
            opcion => opcion.value.trim().toLowerCase() === categoria.trim().toLowerCase()
        );
        filtroCategoria.value = opcionDisponible
            ? opcionDisponible.value
            : categoria;
    }
    if (buscarProducto) {
        buscarProducto.value = "";
    }
    navegarA("catalogo");
    renderizarCatalogo();
});
/* =====================================================
   10. AGREGAR PRODUCTOS AL CARRITO
===================================================== */
function agregarAlCarrito(id, cantidad) {
    const producto = obtenerProducto(id);
    if (!producto) {
        mostrarMensaje(
            mensajeCatalogo,
            "No encontramos ese producto.",
            "mensaje-error"
        );
        return false;
    }
    if (
        cantidad === ""
        || cantidad === null
        || cantidad === undefined
        || !Number.isSafeInteger(Number(cantidad))
        || Number(cantidad) < 1
    ) {
        mostrarMensaje(
            mensajeCatalogo,
            "Ingresa una cantidad entera mayor o igual a 1.",
            "mensaje-error"
        );
        return false;
    }
    cantidad = Number(cantidad);
    const productoExistente = carrito.find(
        item => item.id === producto.id
    );
    if (productoExistente) {
        const nuevaCantidad = productoExistente.cantidad + cantidad;
        if (!Number.isSafeInteger(nuevaCantidad)) {
            mostrarMensaje(
                mensajeCatalogo,
                "La cantidad ingresada es demasiado grande.",
                "mensaje-error"
            );
            return false;
        }
        productoExistente.cantidad = nuevaCantidad;
    } else {
        carrito.push({
            id: producto.id,
            cantidad: cantidad
        });
    }
    guardarCarrito();
    renderizarCarrito();
    mostrarMensaje(
        mensajeCatalogo,
        `${producto.nombre} se agregó al carrito.`,
        "mensaje-exito"
    );
    return true;
}
document.addEventListener("click", function (evento) {
    const boton = evento.target.closest(".boton-agregar");
    if (!boton) return;
    if (boton.classList.contains("boton-ver-catalogo")) {
        navegarA("catalogo");
        return;
    }
    const id = Number(boton.dataset.id);
    const campoCantidad = document.getElementById(`cantidad-${id}`);
    if (!campoCantidad) return;
    const agregado = agregarAlCarrito(id, campoCantidad.value);
    if (agregado) {
        campoCantidad.value = "1";
    }
});
/* =====================================================
   11. ELIMINAR PRODUCTOS DEL CARRITO
===================================================== */
function eliminarDelCarrito(id) {
    const producto = obtenerProducto(id);
    carrito = carrito.filter(item => item.id !== Number(id));
    guardarCarrito();
    renderizarCarrito();
    mostrarMensaje(
        mensajeCarrito,
        producto
            ? `${producto.nombre} se eliminó del carrito.`
            : "Producto eliminado.",
        "mensaje-exito"
    );
}
/* =====================================================
   12. CAMBIAR LA CANTIDAD DESDE EL CARRITO
===================================================== */
function actualizarCantidadCarrito(id, cantidad) {
    const item = carrito.find(
        producto => producto.id === Number(id)
    );
    if (!item) return;
    if (
        cantidad === ""
        || !Number.isSafeInteger(Number(cantidad))
        || Number(cantidad) < 1
    ) {
        mostrarMensaje(
            mensajeCarrito,
            "La cantidad debe ser un número entero mayor o igual a 1.",
            "mensaje-error"
        );
        renderizarCarrito();
        return;
    }
    item.cantidad = Number(cantidad);
    guardarCarrito();
    renderizarCarrito();
    mostrarMensaje(mensajeCarrito, "");
}
// Eventos de eliminación y modificación de cantidades.
if (carritoProductos) {
    carritoProductos.addEventListener("click", function (evento) {
        const botonEliminar = evento.target.closest(".boton-eliminar");
        if (!botonEliminar) return;
        eliminarDelCarrito(Number(botonEliminar.dataset.id));
    });
    carritoProductos.addEventListener("change", function (evento) {
        if (!evento.target.matches(".cantidad-carrito")) return;
        actualizarCantidadCarrito(
            Number(evento.target.dataset.id),
            evento.target.value
        );
    });
}
/* =====================================================
   13. DIBUJAR LOS PRODUCTOS DEL CARRITO
===================================================== */
function renderizarCarrito() {
    if (!carritoProductos) return;
    carritoProductos.replaceChildren();
    carrito.forEach(item => {
        const producto = obtenerProducto(item.id);
        if (!producto) return;
        const subtotalProducto = producto.precio * item.cantidad;
        const fila = document.createElement("article");
        fila.className = "carrito-item";
        fila.innerHTML = `
            <div class="carrito-producto-info">
                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                >
                <div>
                    <h3>${producto.nombre}</h3>
                    <p>${mostrarPrecio(producto.precio)} por unidad</p>
                </div>
            </div>
            <input
                type="number"
                class="cantidad-carrito"
                data-id="${producto.id}"
                min="1"
                step="1"
                value="${item.cantidad}"
                aria-label="Cantidad de ${producto.nombre}"
            >
            <p class="subtotal-producto">
                ${mostrarPrecio(subtotalProducto)}
            </p>
            <button
                type="button"
                class="boton-eliminar"
                data-id="${producto.id}"
                aria-label="Eliminar ${producto.nombre} del carrito"
            >
                Eliminar
            </button>
        `;
        // Si la imagen falla, conservamos el elemento y su espacio.
        const imagen = fila.querySelector("img");
        imagen.addEventListener("error", function () {
            imagen.alt = `${producto.nombre}: imagen no disponible`;
            imagen.style.objectFit = "contain";
            imagen.style.background = "#efeee8";
        }, { once: true });
        carritoProductos.appendChild(fila);
    });
    actualizarResumenCarrito();
    if (carritoVacio) {
        carritoVacio.style.display = carrito.length === 0
            ? "block"
            : "none";
    }
    if (botonContinuarPago) {
        botonContinuarPago.style.opacity = carrito.length === 0
            ? "0.5"
            : "1";
        botonContinuarPago.setAttribute(
            "aria-disabled",
            String(carrito.length === 0)
        );
    }
}
/* =====================================================
   14. ACTUALIZAR SUBTOTALES Y TOTAL
===================================================== */
function actualizarResumenCarrito() {
    const cantidadTotal = obtenerCantidadTotal();
    const subtotal = calcularSubtotal();
    if (contadorCarrito) {
        contadorCarrito.textContent = cantidadTotal;
        contadorCarrito.setAttribute(
            "aria-label",
            `${cantidadTotal} productos en el carrito`
        );
    }
    if (carritoCantidadTotal) {
        carritoCantidadTotal.textContent = cantidadTotal;
    }
    if (carritoSubtotal) {
        carritoSubtotal.textContent = mostrarPrecio(subtotal);
    }
    // El envío definitivo se calcula al preparar el pago.
    if (carritoEnvio) {
        carritoEnvio.textContent = cantidadTotal > 0
            ? mostrarPrecio(calcularEnvio(subtotal))
            : mostrarPrecio(0);
    }
    if (carritoTotal) {
        carritoTotal.textContent = mostrarPrecio(
            calcularTotalFinal(subtotal)
        );
    }
}
/* =====================================================
   15. CONFIGURACIÓN DE CUPONES
===================================================== */
const cuponesDisponibles = {
    "DULMORI10": 10,
    "BIENVENIDO15": 15
};
let cuponAplicado = leerDatos(CLAVE_CUPON, null);
/* =====================================================
   16. CÁLCULOS DE LA COMPRA
===================================================== */
function calcularDescuento(subtotal) {
    if (!cuponAplicado || !cuponesDisponibles[cuponAplicado]) {
        return 0;
    }
    return subtotal * cuponesDisponibles[cuponAplicado] / 100;
}
function calcularEnvio(subtotal) {
    if (subtotal === 0 || subtotal >= 100) {
        return 0;
    }
    return 5;
}
function calcularTotalFinal(subtotal) {
    const descuento = calcularDescuento(subtotal);
    const envio = calcularEnvio(subtotal);
    return Math.max(0, subtotal - descuento) + envio;
}
/* =====================================================
   17. APLICAR CUPÓN
===================================================== */
function aplicarCupon(codigo) {
    const codigoNormalizado = codigo.trim().toUpperCase();
    const mensaje = document.getElementById("mensaje-cupon");
    if (!codigoNormalizado) {
        mostrarMensaje(
            mensaje,
            "Escribe un código de cupón.",
            "error"
        );
        return false;
    }
    if (!cuponesDisponibles[codigoNormalizado]) {
        cuponAplicado = null;
        guardarDatos(CLAVE_CUPON, null);
        mostrarMensaje(
            mensaje,
            "El cupón no es válido. Revisa el código e inténtalo de nuevo.",
            "error"
        );
        actualizarResumenPago();
        actualizarResumenCarrito();
        return false;
    }
    cuponAplicado = codigoNormalizado;
    guardarDatos(CLAVE_CUPON, cuponAplicado);
    mostrarMensaje(
        mensaje,
        `¡Cupón aplicado! Tienes ${cuponesDisponibles[codigoNormalizado]}% de descuento.`,
        "exito"
    );
    actualizarResumenPago();
    actualizarResumenCarrito();
    return true;
}
const formularioCupon = document.getElementById("formulario-cupon");
if (formularioCupon) {
    formularioCupon.addEventListener("submit", function (evento) {
        evento.preventDefault();
        const campoCupon = formularioCupon.querySelector(
            'input[name="cupon"], input[type="text"], input'
        );
        if (campoCupon) {
            aplicarCupon(campoCupon.value);
        }
    });
}
/* =====================================================
   18. ACTUALIZAR TEXTOS DEL RESUMEN
===================================================== */
function actualizarTexto(selector, texto) {
    const elemento = document.querySelector(selector);
    if (elemento) {
        elemento.textContent = texto;
    }
}
function actualizarResumenPago() {
    const subtotal = calcularSubtotal();
    const descuento = calcularDescuento(subtotal);
    const envio = calcularEnvio(subtotal);
    const total = calcularTotalFinal(subtotal);
    actualizarTexto("#pago-subtotal", mostrarPrecio(subtotal));
    actualizarTexto("#pago-descuento", `-${mostrarPrecio(descuento)}`);
    actualizarTexto(
        "#pago-envio",
        envio === 0 && subtotal > 0 ? "Gratis" : mostrarPrecio(envio)
    );
    actualizarTexto("#pago-total", mostrarPrecio(total));
    actualizarTexto("#resumen-subtotal", mostrarPrecio(subtotal));
    actualizarTexto("#resumen-descuento", `-${mostrarPrecio(descuento)}`);
    actualizarTexto(
        "#resumen-envio",
        envio === 0 && subtotal > 0 ? "Gratis" : mostrarPrecio(envio)
    );
    actualizarTexto("#resumen-total", mostrarPrecio(total));
    // Compatibilidad con identificadores alternativos del HTML.
    actualizarTexto("#subtotal-pago", mostrarPrecio(subtotal));
    actualizarTexto("#descuento-pago", `-${mostrarPrecio(descuento)}`);
    actualizarTexto(
        "#envio-pago",
        envio === 0 && subtotal > 0 ? "Gratis" : mostrarPrecio(envio)
    );
    actualizarTexto("#total-pago", mostrarPrecio(total));
}
/* =====================================================
   19. PREPARAR LA VISTA DE PAGO
===================================================== */
function prepararPago() {
    if (carrito.length === 0) {
        mostrarMensaje(
            mensajeCarrito,
            "Tu carrito está vacío. Agrega productos antes de continuar.",
            "error"
        );
        navegarA("carrito");
        return;
    }
    actualizarResumenPago();
    const campoCupon = formularioCupon
        ? formularioCupon.querySelector(
            'input[name="cupon"], input[type="text"], input'
        )
        : null;
    if (campoCupon && cuponAplicado) {
        campoCupon.value = cuponAplicado;
    }
    const formularioPagoActual = document.getElementById("formulario-pago");
    if (formularioPagoActual) {
        formularioPagoActual
            .querySelectorAll("input, select, textarea")
            .forEach(function (campo) {
                if (campo.type !== "submit" && campo.type !== "button") {
                    campo.setAttribute("autocomplete", "on");
                }
            });
    }
}
/* =====================================================
   20. OBTENER DATOS DEL CLIENTE
===================================================== */
function obtenerDatosCliente(formulario) {
    const datos = {};
    new FormData(formulario).forEach(function (valor, clave) {
        datos[clave] = String(valor).trim();
    });
    // Guardar también campos que no tengan atributo name.
    formulario.querySelectorAll("input, select, textarea").forEach(
        function (campo) {
            if (!campo.name && campo.id && campo.type !== "submit") {
                datos[campo.id] = campo.value.trim();
            }
        }
    );
    return datos;
}
/* =====================================================
   21. CREAR Y GUARDAR PEDIDO
===================================================== */
function crearPedido(datosCliente) {
    const subtotal = calcularSubtotal();
    const descuento = calcularDescuento(subtotal);
    const envio = calcularEnvio(subtotal);
    const productosPedido = carrito.map(function (item) {
        const producto = obtenerProducto(item.id);
        return {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: item.cantidad,
            subtotal: producto.precio * item.cantidad,
            imagen: producto.imagen
        };
    });
    return {
        numero: "NOR-" + Date.now().toString().slice(-8),
        fecha: new Date().toLocaleString("es-SV"),
        cliente: datosCliente,
        productos: productosPedido,
        subtotal: subtotal,
        cupon: cuponAplicado,
        descuento: descuento,
        envio: envio,
        total: Math.max(0, subtotal - descuento) + envio
    };
}
/* =====================================================
   22. MOSTRAR CONFIRMACIÓN DEL PEDIDO
===================================================== */
function renderizarConfirmacion(pedido) {
    if (!pedido) return;
    const listaConfirmacion = document.getElementById(
        "confirmacion-productos"
    );
    if (listaConfirmacion) {
        listaConfirmacion.replaceChildren();
        pedido.productos.forEach(function (producto) {
            const elemento = document.createElement("article");
            elemento.className = "carrito-item";
            elemento.innerHTML = `
                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    class="imagen-carrito"
                >
                <div class="carrito-producto-info">
                    <h3>${producto.nombre}</h3>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <p>Precio unitario: ${mostrarPrecio(producto.precio)}</p>
                </div>
                <p class="subtotal-producto">
                    ${mostrarPrecio(producto.subtotal)}
                </p>
            `;
            const imagen = elemento.querySelector("img");
            imagen.addEventListener("error", function () {
                imagen.alt = `${producto.nombre}: imagen no disponible`;
                imagen.style.objectFit = "contain";
                imagen.style.background = "#efeee8";
            }, { once: true });
            listaConfirmacion.appendChild(elemento);
        });
    }
    actualizarTexto("#numero-pedido", pedido.numero);
    actualizarTexto("#confirmacion-numero", pedido.numero);
    actualizarTexto("#fecha-pedido", pedido.fecha);
    actualizarTexto(
        "#confirmacion-subtotal",
        mostrarPrecio(pedido.subtotal)
    );
    actualizarTexto(
        "#confirmacion-descuento",
        `-${mostrarPrecio(pedido.descuento)}`
    );
    actualizarTexto(
        "#confirmacion-envio",
        pedido.envio === 0
            ? "Gratis"
            : mostrarPrecio(pedido.envio)
    );
    actualizarTexto(
        "#confirmacion-total",
        mostrarPrecio(pedido.total)
    );
    actualizarTexto(
        "#total-confirmacion",
        mostrarPrecio(pedido.total)
    );
    const nombreCliente =
        pedido.cliente.nombre
        || pedido.cliente["chk-nombre"]
        || pedido.cliente["nombre"];
    const correoCliente =
        pedido.cliente.email
        || pedido.cliente.correo
        || pedido.cliente["chk-email"];
    actualizarTexto("#confirmacion-nombre", nombreCliente || "");
    actualizarTexto("#confirmacion-email", correoCliente || "");
}
/* =====================================================
   23. VALIDAR Y PROCESAR EL FORMULARIO
===================================================== */
const formularioPago = document.getElementById("formulario-pago");
if (formularioPago) {
    formularioPago.addEventListener("submit", function (evento) {
        evento.preventDefault();
        const mensajeValidacion = document.getElementById(
            "mensaje-validacion-pago"
        );
        if (carrito.length === 0) {
            mostrarMensaje(
                mensajeValidacion,
                "Tu carrito está vacío. Agrega productos antes de realizar el pedido.",
                "error"
            );
            navegarA("carrito");
            return;
        }
        if (!formularioPago.checkValidity()) {
            formularioPago.reportValidity();
            mostrarMensaje(
                mensajeValidacion,
                "Revisa los campos obligatorios antes de continuar.",
                "error"
            );
            return;
        }
        const datosCliente = obtenerDatosCliente(formularioPago);
        const pedido = crearPedido(datosCliente);
        // Guardar el pedido antes de vaciar el carrito.
        guardarDatos(CLAVE_PEDIDO, pedido);
        renderizarConfirmacion(pedido);
        // Vaciar el carrito y el cupón después de guardar el pedido.
        carrito = [];
        cuponAplicado = null;
        guardarDatos(CLAVE_CARRITO, carrito);
        guardarDatos(CLAVE_CUPON, null);
        renderizarCarrito();
        mostrarMensaje(
            mensajeValidacion,
            "Pedido registrado correctamente.",
            "exito"
        );
        formularioPago.reset();
        navegarA("confirmacion");
    });
}
/* =====================================================
   24. BOTÓN PARA CONTINUAR AL PAGO
===================================================== */
if (botonContinuarPago) {
    botonContinuarPago.addEventListener("click", function (evento) {
        if (carrito.length === 0) {
            evento.preventDefault();
            mostrarMensaje(
                mensajeCarrito,
                "Agrega al menos un producto para continuar.",
                "error"
            );
            navegarA("carrito");
            return;
        }
        navegarA("pago");
    });
}
/* =====================================================
   25. BOTONES PARA VER EL CATÁLOGO
===================================================== */
document.addEventListener("click", function (evento) {
    const botonCatalogo = evento.target.closest(".boton-ver-catalogo");
    if (!botonCatalogo) return;
    evento.preventDefault();
    navegarA("catalogo");
});
/* =====================================================
   26. RECUPERAR PEDIDO GUARDADO
===================================================== */
function cargarConfirmacionGuardada() {
    const pedidoGuardado = leerDatos(CLAVE_PEDIDO, null);
    if (pedidoGuardado) {
        renderizarConfirmacion(pedidoGuardado);
    }
}
/* =====================================================
   27. SINCRONIZAR CATEGORÍAS DEL FILTRO
===================================================== */
function sincronizarCategoriasFiltro() {
    if (!filtroCategoria) return;
    // Añadimos las categorías que faltan en el HTML,
    // sin eliminar las opciones que ya existen.
    productos.forEach(producto => {
        const yaExiste = Array.from(filtroCategoria.options).some(
            opcion =>
                opcion.value.trim().toLowerCase()
                === producto.categoria.toLowerCase()
        );
        if (!yaExiste) {
            const opcion = document.createElement("option");
            opcion.value = producto.categoria;
            opcion.textContent = producto.categoria;
            filtroCategoria.appendChild(opcion);
        }
    });
}
/* =====================================================
   28. INICIALIZACIÓN DE LA TIENDA
===================================================== */
function inicializarTienda() {
    // Recuperar el cupón solo si todavía es válido.
    if (
        !cuponAplicado
        || !cuponesDisponibles[cuponAplicado]
    ) {
        cuponAplicado = null;
        guardarDatos(CLAVE_CUPON, null);
    }
    sincronizarCategoriasFiltro();
    renderizarDestacados();
    renderizarCatalogo();
    renderizarCarrito();
    cargarConfirmacionGuardada();
    actualizarResumenPago();
    const hashActual = window.location.hash.replace("#", "");
    // Navegación compatible con páginas independientes y vistas internas.
    if (hashActual === "confirmacion") {
        if (document.getElementById("pagina-confirmacion")) {
            mostrarVista("pagina-confirmacion");
        } else if (document.getElementById("confirmacion")) {
            mostrarVista("confirmacion");
        } else if (
            window.location.pathname.split("/").pop() !== "confirmacion.html"
        ) {
            navegarA("confirmacion");
        }
    } else if (
        hashActual === "catalogo"
        || hashActual === "carrito"
        || hashActual === "pago"
        || hashActual === "nosotros"
    ) {
        if (document.getElementById(hashActual)) {
            mostrarVista(hashActual);
        } else if (
            !document.querySelector("main > .pagina")
        ) {
            // En páginas independientes no hace falta ocultar otras vistas.
            if (hashActual === "pago") {
                prepararPago();
            }
        }
    } else {
        mostrarVista("inicio");
    }
}
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarTienda);
} else {
    inicializarTienda();
}