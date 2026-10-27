<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Dulmori: panadería y cafetería con pasteles, postres, pan dulce, café y opciones saladas para disfrutar cada día.">
    <title>Dulmori | Panadería y Cafetería</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- ==========================================
         1. ENCABEZADO Y NAVEGACIÓN
    =========================================== -->

    <header id="inicio">
        <div class="barra-superior">
            <p>Pan recién hecho, café y momentos para disfrutar.</p>
        </div>

        <nav class="navegacion" aria-label="Navegación principal">

            <a href="#inicio" class="logo" aria-label="Dulmori, ir al inicio">
                Dulmori<span>.</span>
            </a>

            <ul class="menu">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#catalogo">Catálogo</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
            </ul>

            <a href="#carrito" class="enlace-carrito">
                Mi carrito
                <span id="contador-carrito" aria-label="Productos en el carrito">0</span>
            </a>

        </nav>
    </header>


    <main>

        <!-- ==========================================
             2. PÁGINA DE INICIO
        =========================================== -->

        <section id="pagina-inicio" class="pagina">

            <section class="hero">

                <div class="hero-contenido">
                    <p class="etiqueta">PANADERÍA &amp; CAFETERÍA</p>

                    <h1>Un antojo.<br>Un momento Dulmori.</h1>

                    <p>
                        Pan recién hecho, pasteles irresistibles y café preparado
                        para acompañar tus mejores momentos.
                    </p>

                    <a href="#catalogo" class="boton boton-principal">
                        Descubrir el menú
                    </a>
                </div>

                <div class="hero-imagen">
                    <img
                        src="https://res.cloudinary.com/djeljniac/image/upload/v1793074202/volteado-de-pina_z7irs2.jpg"
                        alt="Pastel volteado de piña de Dulmori"
                    >
                </div>

            </section>


            <!-- Categorías de Dulmori -->
            <section id="categorias" class="seccion-categorias">
                <div class="encabezado-seccion">
                    <p class="etiqueta">HECHO PARA DISFRUTAR</p>
                    <h2>¿Qué se te antoja hoy?</h2>
                </div>

                <div class="categorias-grid">
                    <a href="#catalogo" class="categoria" data-categoria="Pasteles">
                        <img src="https://res.cloudinary.com/djeljniac/image/upload/v1793074199/Tres-Leches_tradicional_xc2rcp.webp" alt="Pasteles y tres leches" loading="lazy">
                        <h3>Pasteles</h3>
                    </a>

                    <a href="#catalogo" class="categoria" data-categoria="Bebidas calientes">
                        <img src="https://res.cloudinary.com/djeljniac/image/upload/v1793074195/taza_mokaccino_tjkkba.jpg" alt="Café y bebidas calientes" loading="lazy">
                        <h3>Café y bebidas</h3>
                    </a>

                    <a href="#catalogo" class="categoria" data-categoria="Panadería dulce">
                        <img src="https://res.cloudinary.com/djeljniac/image/upload/v1793074194/strudel-de-manzana_rrppan.jpg" alt="Panadería dulce recién preparada" loading="lazy">
                        <h3>Panadería dulce</h3>
                    </a>
                </div>
            </section>


            <!-- Productos destacados -->

            <section id="destacados" class="seccion-destacados">

                <div class="encabezado-seccion">
                    <div>
                        <p class="etiqueta">FAVORITOS DE DULMORI</p>
                        <h2>Los favoritos de la casa</h2>
                    </div>

                    <a href="#catalogo">Ver todo el menú →</a>
                </div>

                <div id="productos-destacados" class="productos-grid">

                    <!-- El JavaScript podrá generar aquí los productos destacados. -->

                </div>

            </section>


            <!-- Mensaje de marca -->

            <section class="franja-marca">
                <p class="etiqueta">DULMORI / HECHO CON CARIÑO</p>

                <h2>
                    Compartir algo rico.<br>
                    Hacer especial el momento.
                </h2>

                <p>
                    Creemos que un buen café, algo recién horneado y un trato cercano
                    pueden convertir cualquier día en un momento especial.
                </p>

                <a href="#nosotros" class="boton">
                    Conoce Dulmori
                </a>
            </section>

        </section>


        <!-- ==========================================
             3. CATÁLOGO DE PRODUCTOS
        =========================================== -->

        <section id="catalogo" class="pagina seccion-catalogo">

            <div class="encabezado-pagina">
                <p class="etiqueta">EL SABOR DE DULMORI</p>
                <h1>Nuestro menú</h1>

                <p>
                    Descubre pasteles, postres, panadería, bebidas y opciones saladas preparadas para disfrutar.
                </p>
            </div>


            <!-- Filtros preparados para JavaScript -->

            <div class="controles-catalogo">

                <label for="filtro-categoria">Categoría</label>

                <select id="filtro-categoria" name="categoria">
                    <option value="todas">Todo el menú</option>
                    <option value="Pasteles y volteados">Pasteles y volteados</option>
                    <option value="Pasteles">Pasteles</option>
                    <option value="Postres especiales">Postres especiales</option>
                    <option value="Bebidas calientes">Bebidas calientes</option>
                    <option value="Panadería dulce">Panadería dulce</option>
                    <option value="Salados">Opciones saladas</option>
                    <option value="Repostería fina">Repostería fina</option>
                    <option value="Bebidas frías">Bebidas frías</option>
                    <option value="Cheesecakes">Cheesecakes</option>
                    <option value="Postres individuales">Postres individuales</option>
                    <option value="Postres de la casa">Postres de la casa</option>
                </select>

                <label for="buscar-producto">Buscar</label>

                <input
                    type="search"
                    id="buscar-producto"
                    placeholder="¿Qué estás buscando?"
                >

            </div>


            <!-- Los 34 productos del catálogo -->

           <div id="catalogo-productos" class="productos-grid">

    <!-- PRODUCTO 1 -->
    <article class="producto-card" data-id="1">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074202/volteado-de-pina_z7irs2.jpg"
            alt="Volteado de piña"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Pasteles y volteados</p>
            <h3>Volteado de piña</h3>
            <p class="producto-descripcion">Bizcocho suave con rodajas de piña caramelizada.</p>
            <p class="producto-precio" data-precio="3.50">$3.50</p>

            <label for="cantidad-1">Cantidad</label>
            <input type="number" id="cantidad-1" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="1">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 2 -->
    <article class="producto-card" data-id="2">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074201/Volteado_Manzana_of2vm7.jpg"
            alt="Volteado de manzana"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Pasteles y volteados</p>
            <h3>Volteado de manzana</h3>
            <p class="producto-descripcion">Pastel casero de manzana con una cubierta dulce y dorada.</p>
            <p class="producto-precio" data-precio="3.50">$3.50</p>

            <label for="cantidad-2">Cantidad</label>
            <input type="number" id="cantidad-2" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="2">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 3 -->
    <article class="producto-card" data-id="3">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074200/Volteado_guineo_rxbrn6.webp"
            alt="Volteado de guineo"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Pasteles y volteados</p>
            <h3>Volteado de guineo</h3>
            <p class="producto-descripcion">Bizcocho húmedo de guineo con una capa caramelizada.</p>
            <p class="producto-precio" data-precio="3.25">$3.25</p>

            <label for="cantidad-3">Cantidad</label>
            <input type="number" id="cantidad-3" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="3">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 4 -->
    <article class="producto-card" data-id="4">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074199/Tres-Leches_tradicional_xc2rcp.webp"
            alt="Pastel tres leches"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Pasteles</p>
            <h3>Pastel tres leches</h3>
            <p class="producto-descripcion">Bizcocho esponjoso bañado en una mezcla cremosa de tres leches.</p>
            <p class="producto-precio" data-precio="3.75">$3.75</p>

            <label for="cantidad-4">Cantidad</label>
            <input type="number" id="cantidad-4" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="4">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 5 -->
    <article class="producto-card" data-id="5">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074198/TresLeches_fresa_gdmpn1.webp"
            alt="Tres leches de fresa"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Pasteles</p>
            <h3>Tres leches de fresa</h3>
            <p class="producto-descripcion">Pastel tres leches con un toque frutal de fresa.</p>
            <p class="producto-precio" data-precio="4.00">$4.00</p>

            <label for="cantidad-5">Cantidad</label>
            <input type="number" id="cantidad-5" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="5">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 6 -->
    <article class="producto-card" data-id="6">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074197/Tiramisu_Tradicional_tchgjj.jpg"
            alt="Tiramisú tradicional"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Postres especiales</p>
            <h3>Tiramisú tradicional</h3>
            <p class="producto-descripcion">Capas suaves con café, crema y un delicado toque de cacao.</p>
            <p class="producto-precio" data-precio="4.25">$4.25</p>

            <label for="cantidad-6">Cantidad</label>
            <input type="number" id="cantidad-6" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="6">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 7 -->
    <article class="producto-card" data-id="7">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074196/Tiramisu_Chocolate_jwbwgl.avif"
            alt="Tiramisú de chocolate"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Postres especiales</p>
            <h3>Tiramisú de chocolate</h3>
            <p class="producto-descripcion">Versión intensa de tiramisú con sabor a chocolate.</p>
            <p class="producto-precio" data-precio="4.50">$4.50</p>

            <label for="cantidad-7">Cantidad</label>
            <input type="number" id="cantidad-7" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="7">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 8 -->
    <article class="producto-card" data-id="8">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074195/taza_mokaccino_tjkkba.jpg"
            alt="Mocaccino"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Bebidas calientes</p>
            <h3>Mocaccino</h3>
            <p class="producto-descripcion">Café espresso combinado con leche vaporizada y chocolate.</p>
            <p class="producto-precio" data-precio="2.75">$2.75</p>

            <label for="cantidad-8">Cantidad</label>
            <input type="number" id="cantidad-8" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="8">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 9 -->
    <article class="producto-card" data-id="9">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074194/strudel-de-manzana_rrppan.jpg"
            alt="Strudel de manzana"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Panadería dulce</p>
            <h3>Strudel de manzana</h3>
            <p class="producto-descripcion">Hojaldre relleno de manzana especiada y notas de canela.</p>
            <p class="producto-precio" data-precio="3.25">$3.25</p>

            <label for="cantidad-9">Cantidad</label>
            <input type="number" id="cantidad-9" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="9">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 10 -->
    <article class="producto-card" data-id="10">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074193/prinzregententorte_chocolate_cf51cj.jpg"
            alt="Pastel de chocolate Prinzregententorte"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Pasteles</p>
            <h3>Pastel de chocolate Prinzregententorte</h3>
            <p class="producto-descripcion">Capas de bizcocho de chocolate unidas con crema suave.</p>
            <p class="producto-precio" data-precio="4.50">$4.50</p>

            <label for="cantidad-10">Cantidad</label>
            <input type="number" id="cantidad-10" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="10">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 11 -->
    <article class="producto-card" data-id="11">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074192/pastelitos-de-carne_bwa9cj.jpg"
            alt="Pastelito de carne"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Salados</p>
            <h3>Pastelito de carne</h3>
            <p class="producto-descripcion">Masa dorada rellena de carne sazonada, ideal para acompañar el café.</p>
            <p class="producto-precio" data-precio="1.75">$1.75</p>

            <label for="cantidad-11">Cantidad</label>
            <input type="number" id="cantidad-11" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="11">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 12 -->
    <article class="producto-card" data-id="12">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074191/Pastafrolaavif_onnxvw.avif"
            alt="Pastafrola"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Panadería dulce</p>
            <h3>Pastafrola</h3>
            <p class="producto-descripcion">Tarta casera con una base suave y relleno dulce tradicional.</p>
            <p class="producto-precio" data-precio="3.00">$3.00</p>

            <label for="cantidad-12">Cantidad</label>
            <input type="number" id="cantidad-12" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="12">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 13 -->
    <article class="producto-card" data-id="13">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074190/mocca-latte_xkfwwp.webp"
            alt="Mocca latte"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Bebidas calientes</p>
            <h3>Mocca latte</h3>
            <p class="producto-descripcion">Espresso, leche cremosa y chocolate en una bebida reconfortante.</p>
            <p class="producto-precio" data-precio="3.00">$3.00</p>

            <label for="cantidad-13">Cantidad</label>
            <input type="number" id="cantidad-13" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="13">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 14 -->
    <article class="producto-card" data-id="14">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074189/milhojas-de-manzana_fkcyrf.webp"
            alt="Milhojas de manzana"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Panadería dulce</p>
            <h3>Milhojas de manzana</h3>
            <p class="producto-descripcion">Capas crujientes con relleno dulce de manzana.</p>
            <p class="producto-precio" data-precio="3.50">$3.50</p>

            <label for="cantidad-14">Cantidad</label>
            <input type="number" id="cantidad-14" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="14">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 15 -->
    <article class="producto-card" data-id="15">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074188/macarons_v1wq7d.webp"
            alt="Macarons surtidos"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Repostería fina</p>
            <h3>Macarons surtidos</h3>
            <p class="producto-descripcion">Delicadas galletas de almendra con relleno cremoso.</p>
            <p class="producto-precio" data-precio="1.50">$1.50</p>

            <label for="cantidad-15">Cantidad</label>
            <input type="number" id="cantidad-15" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="15">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 16 -->
    <article class="producto-card" data-id="16">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074187/Latte_de_Dulce-de-Leche_urcde3.webp"
            alt="Latte de dulce de leche"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Bebidas calientes</p>
            <h3>Latte de dulce de leche</h3>
            <p class="producto-descripcion">Café con leche vaporizada y el sabor acaramelado del dulce de leche.</p>
            <p class="producto-precio" data-precio="3.25">$3.25</p>

            <label for="cantidad-16">Cantidad</label>
            <input type="number" id="cantidad-16" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="16">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 17 -->
    <article class="producto-card" data-id="17">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074186/Hojaldre_manzana_vbeqkx.jpg"
            alt="Hojaldre de manzana"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Panadería dulce</p>
            <h3>Hojaldre de manzana</h3>
            <p class="producto-descripcion">Hojaldre dorado con relleno suave de manzana.</p>
            <p class="producto-precio" data-precio="2.75">$2.75</p>

            <label for="cantidad-17">Cantidad</label>
            <input type="number" id="cantidad-17" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="17">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 18 -->
    <article class="producto-card" data-id="18">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074183/Croissant_pistacho_um6miu.webp"
            alt="Croissant de pistacho"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Panadería dulce</p>
            <h3>Croissant de pistacho</h3>
            <p class="producto-descripcion">Croissant hojaldrado con un relleno cremoso de pistacho.</p>
            <p class="producto-precio" data-precio="3.75">$3.75</p>

            <label for="cantidad-18">Cantidad</label>
            <input type="number" id="cantidad-18" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="18">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 19 -->
    <article class="producto-card" data-id="19">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074185/Fudge_chocolate_zc34fo.jpg"
            alt="Fudge de chocolate"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Pasteles</p>
            <h3>Fudge de chocolate</h3>
            <p class="producto-descripcion">Postre compacto y húmedo con un intenso sabor a chocolate.</p>
            <p class="producto-precio" data-precio="3.50">$3.50</p>

            <label for="cantidad-19">Cantidad</label>
            <input type="number" id="cantidad-19" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="19">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 20 -->
    <article class="producto-card" data-id="20">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074184/frappuccinos_zyrwxu.webp"
            alt="Frappuccino"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Bebidas frías</p>
            <h3>Frappuccino</h3>
            <p class="producto-descripcion">Bebida fría licuada con café, leche y una textura cremosa.</p>
            <p class="producto-precio" data-precio="3.75">$3.75</p>

            <label for="cantidad-20">Cantidad</label>
            <input type="number" id="cantidad-20" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="20">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 21 -->
    <article class="producto-card" data-id="21">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074182/croissant_jamon_y_queso_knpdwo.jpg"
            alt="Croissant de jamón y queso"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Salados</p>
            <h3>Croissant de jamón y queso</h3>
            <p class="producto-descripcion">Croissant de hojaldre relleno de jamón y queso fundido.</p>
            <p class="producto-precio" data-precio="3.25">$3.25</p>

            <label for="cantidad-21">Cantidad</label>
            <input type="number" id="cantidad-21" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="21">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 22 -->
    <article class="producto-card" data-id="22">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074181/Croissant_fresa_ugp0ku.webp"
            alt="Croissant de fresa"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Panadería dulce</p>
            <h3>Croissant de fresa</h3>
            <p class="producto-descripcion">Croissant dorado con un dulce relleno de fresa.</p>
            <p class="producto-precio" data-precio="3.25">$3.25</p>

            <label for="cantidad-22">Cantidad</label>
            <input type="number" id="cantidad-22" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="22">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 23 -->
    <article class="producto-card" data-id="23">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074180/Chocolate-Tres-leches_pn8znh.jpg"
            alt="Tres leches de chocolate"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Pasteles</p>
            <h3>Tres leches de chocolate</h3>
            <p class="producto-descripcion">Bizcocho de chocolate bañado en una mezcla cremosa de tres leches.</p>
            <p class="producto-precio" data-precio="4.00">$4.00</p>

            <label for="cantidad-23">Cantidad</label>
            <input type="number" id="cantidad-23" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="23">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 24 -->
    <article class="producto-card" data-id="24">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074179/chocoflan-12_qsrtsi.jpg"
            alt="Chocoflan"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Pasteles</p>
            <h3>Chocoflan</h3>
            <p class="producto-descripcion">Combinación de pastel de chocolate y flan cremoso.</p>
            <p class="producto-precio" data-precio="3.75">$3.75</p>

            <label for="cantidad-24">Cantidad</label>
            <input type="number" id="cantidad-24" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="24">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 25 -->
    <article class="producto-card" data-id="25">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074178/Cheescake-tradicional_Fresa_ir2sif.webp"
            alt="Cheesecake de fresa"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Cheesecakes</p>
            <h3>Cheesecake de fresa</h3>
            <p class="producto-descripcion">Tarta cremosa de queso con un toque dulce de fresa.</p>
            <p class="producto-precio" data-precio="4.00">$4.00</p>

            <label for="cantidad-25">Cantidad</label>
            <input type="number" id="cantidad-25" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="25">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 26 -->
    <article class="producto-card" data-id="26">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074177/cafe-expreso_monfx7.jpg"
            alt="Café espresso"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Bebidas calientes</p>
            <h3>Café espresso</h3>
            <p class="producto-descripcion">Café concentrado de sabor intenso y aroma profundo.</p>
            <p class="producto-precio" data-precio="1.75">$1.75</p>

            <label for="cantidad-26">Cantidad</label>
            <input type="number" id="cantidad-26" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="26">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 27 -->
    <article class="producto-card" data-id="27">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074176/Brownie_chocolate_vjpw9i.webp"
            alt="Brownie de chocolate"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Postres individuales</p>
            <h3>Brownie de chocolate</h3>
            <p class="producto-descripcion">Brownie húmedo con intenso sabor a chocolate.</p>
            <p class="producto-precio" data-precio="2.25">$2.25</p>

            <label for="cantidad-27">Cantidad</label>
            <input type="number" id="cantidad-27" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="27">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 28 -->
    <article class="producto-card" data-id="28">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074175/BrazoGitano_Chocolate_Tradicional_w2wmkq.jpg"
            alt="Brazo gitano de chocolate"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Pasteles</p>
            <h3>Brazo gitano de chocolate</h3>
            <p class="producto-descripcion">Bizcocho enrollado con relleno dulce y sabor a chocolate.</p>
            <p class="producto-precio" data-precio="3.50">$3.50</p>

            <label for="cantidad-28">Cantidad</label>
            <input type="number" id="cantidad-28" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="28">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 29 -->
    <article class="producto-card" data-id="29">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074174/BrazoGitano_Cereza_babq7r.avif"
            alt="Brazo gitano de cereza"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Pasteles</p>
            <h3>Brazo gitano de cereza</h3>
            <p class="producto-descripcion">Bizcocho enrollado con relleno dulce de cereza.</p>
            <p class="producto-precio" data-precio="3.50">$3.50</p>

            <label for="cantidad-29">Cantidad</label>
            <input type="number" id="cantidad-29" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="29">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 30 -->
    <article class="producto-card" data-id="30">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074173/Brazo-de-gitano-tradicional_c0chuy.png"
            alt="Brazo gitano tradicional"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Pasteles</p>
            <h3>Brazo gitano tradicional</h3>
            <p class="producto-descripcion">Bizcocho esponjoso enrollado con un relleno clásico de crema.</p>
            <p class="producto-precio" data-precio="3.25">$3.25</p>

            <label for="cantidad-30">Cantidad</label>
            <input type="number" id="cantidad-30" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="30">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 31 -->
    <article class="producto-card" data-id="31">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074172/Brazo-de-gitano-con-crema-de-pistacho-7-691af410b60839-22153507-1024x683_rruaws.jpg"
            alt="Brazo gitano de pistacho"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Pasteles</p>
            <h3>Brazo gitano de pistacho</h3>
            <p class="producto-descripcion">Bizcocho suave enrollado con crema de pistacho.</p>
            <p class="producto-precio" data-precio="4.00">$4.00</p>

            <label for="cantidad-31">Cantidad</label>
            <input type="number" id="cantidad-31" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="31">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 32 -->
    <article class="producto-card" data-id="32">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074171/Berlinesa_Tradicional_fmrgjm.avif"
            alt="Berlinesa tradicional"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Panadería dulce</p>
            <h3>Berlinesa tradicional</h3>
            <p class="producto-descripcion">Masa suave y esponjosa con un relleno dulce tradicional.</p>
            <p class="producto-precio" data-precio="1.75">$1.75</p>

            <label for="cantidad-32">Cantidad</label>
            <input type="number" id="cantidad-32" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="32">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 33 -->
    <article class="producto-card" data-id="33">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074170/berlinas_frambuesa_oov0of.jpg"
            alt="Berlina de frambuesa"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Panadería dulce</p>
            <h3>Berlina de frambuesa</h3>
            <p class="producto-descripcion">Dona rellena con el sabor frutal de la frambuesa.</p>
            <p class="producto-precio" data-precio="2.00">$2.00</p>

            <label for="cantidad-33">Cantidad</label>
            <input type="number" id="cantidad-33" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="33">Agregar al carrito</button>
        </div>
    </article>


    <!-- PRODUCTO 34 -->
    <article class="producto-card" data-id="34">
        <img
            src="https://res.cloudinary.com/djeljniac/image/upload/v1793074169/61b42ee9a7c5372e257c4dee_q2caus.jpg"
            alt="Postre de la casa"
            loading="lazy"
        >
        <div class="producto-info">
            <p class="producto-categoria">Postres de la casa</p>
            <h3>Cheescake de Oreo</h3>
            <p class="producto-descripcion">Una opción dulce para acompañar tu bebida favorita.</p>
            <p class="producto-precio" data-precio="3.00">$3.00</p>

            <label for="cantidad-34">Cantidad</label>
            <input type="number" id="cantidad-34" class="cantidad-producto"
                min="1" step="1" value="1" inputmode="numeric">

            <button type="button" class="boton-agregar"
                data-id="34">Agregar al carrito</button>
        </div>
    </article>

</div>


            <p id="mensaje-catalogo" role="status" aria-live="polite"></p>

        </section>


        <!-- ==========================================
             4. CARRITO DE COMPRAS
        =========================================== -->

        <section id="carrito" class="pagina seccion-carrito">

            <div class="encabezado-pagina">
                <p class="etiqueta">TU SELECCIÓN</p>
                <h1>Mi carrito</h1>
                <p>Revisa tus productos antes de continuar.</p>
            </div>

            <div class="carrito-contenido">

                <div class="carrito-listado">

                    <div class="carrito-cabecera">
                        <span>Producto</span>
                        <span>Cantidad</span>
                        <span>Subtotal</span>
                        <span>Acciones</span>
                    </div>

                    <div id="carrito-productos">

                        <!-- JavaScript generará aquí los productos agregados. -->

                    </div>

                    <p id="carrito-vacio">
                        Tu carrito está vacío.
                    </p>

                    <p id="mensaje-carrito" role="status" aria-live="polite"></p>

                    <a href="#catalogo" class="boton">
                        Seguir comprando
                    </a>

                </div>


                <!-- Resumen del carrito -->

                <aside class="resumen-compra">

                    <h2>Resumen de compra</h2>

                    <div class="resumen-linea">
                        <span>Productos</span>
                        <span id="carrito-cantidad-total">0</span>
                    </div>

                    <div class="resumen-linea">
                        <span>Subtotal</span>
                        <span id="carrito-subtotal">$0.00</span>
                    </div>

                    <div class="resumen-linea">
                        <span>Envío</span>
                        <span id="carrito-envio">Por calcular</span>
                    </div>

                    <hr>

                    <div class="resumen-linea resumen-total">
                        <span>Total estimado</span>
                        <span id="carrito-total">$0.00</span>
                    </div>

                    <a
                        href="#pago"
                        id="boton-continuar-pago"
                        class="boton boton-principal"
                    >
                        Continuar al pago
                    </a>

                    <p>
                        Revisa tu pedido antes de finalizar la compra.
                    </p>

                </aside>

            </div>

        </section>


        <!-- ==========================================
             5. PÁGINA DE PAGO
        =========================================== -->

        <section id="pago" class="pagina seccion-pago">

            <div class="encabezado-pagina">
                <p class="etiqueta">ÚLTIMO PASO</p>
                <h1>Finaliza tu pedido</h1>
                <p>Comprueba los datos y el resumen de tu compra.</p>
            </div>

            <div class="pago-contenido">


                <!-- Datos de contacto y entrega -->

                <form id="formulario-pago" novalidate>

                    <fieldset>
                        <legend>Datos de contacto</legend>

                        <div class="campo-formulario">
                            <label for="nombre-cliente">Nombre completo</label>
                            <input
                                type="text"
                                id="nombre-cliente"
                                name="nombre"
                                autocomplete="name"
                                required
                            >
                        </div>

                        <div class="campo-formulario">
                            <label for="correo-cliente">Correo electrónico</label>
                            <input
                                type="email"
                                id="correo-cliente"
                                name="correo"
                                autocomplete="email"
                                required
                            >
                        </div>

                        <div class="campo-formulario">
                            <label for="telefono-cliente">Teléfono</label>
                            <input
                                type="tel"
                                id="telefono-cliente"
                                name="telefono"
                                autocomplete="tel"
                                required
                            >
                        </div>

                    </fieldset>


                    <fieldset>
                        <legend>Dirección de entrega</legend>

                        <div class="campo-formulario">
                            <label for="ciudad-cliente">Ciudad o municipio</label>
                            <input
                                type="text"
                                id="ciudad-cliente"
                                name="ciudad"
                                autocomplete="address-level2"
                                required
                            >
                        </div>

                        <div class="campo-formulario">
                            <label for="direccion-cliente">Dirección completa</label>
                            <textarea
                                id="direccion-cliente"
                                name="direccion"
                                rows="3"
                                autocomplete="street-address"
                                required
                            ></textarea>
                        </div>

                        <div class="campo-formulario">
                            <label for="indicaciones-entrega">
                                Indicaciones adicionales (opcional)
                            </label>

                            <textarea
                                id="indicaciones-entrega"
                                name="indicaciones"
                                rows="2"
                            ></textarea>
                        </div>

                    </fieldset>


                    <fieldset>
                        <legend>Método de pago</legend>

                        <div class="opcion-pago">

                            <input
                                type="radio"
                                id="pago-efectivo"
                                name="metodo-pago"
                                value="efectivo"
                                checked
                            >

                            <label for="pago-efectivo">
                                Pago contra entrega
                            </label>

                        </div>

                        <div class="opcion-pago">

                            <input
                                type="radio"
                                id="pago-transferencia"
                                name="metodo-pago"
                                value="transferencia"
                            >

                            <label for="pago-transferencia">
                                Transferencia bancaria
                            </label>

                        </div>

                    </fieldset>


                    <p id="mensaje-validacion-pago"
                        role="alert" aria-live="assertive"></p>

                    <button type="submit" id="boton-finalizar-compra"
                        class="boton boton-principal">
                        Confirmar y finalizar compra
                    </button>

                    <a href="#carrito" class="enlace-regreso">
                        Volver al carrito
                    </a>

                </form>


                <!-- Resumen y cupón -->

                <aside class="resumen-compra resumen-pago">

                    <h2>Tu pedido</h2>

                    <div id="resumen-productos-pago">

                        <!-- JavaScript mostrará los productos del carrito. -->

                    </div>

                    <div class="resumen-linea">
                        <span>Subtotal</span>
                        <span id="pago-subtotal">$0.00</span>
                    </div>


                    <!-- Cupón de descuento -->

                    <form id="formulario-cupon">

                        <label for="codigo-cupon">¿Tienes un cupón?</label>

                        <div class="campo-cupon">

                            <input
                                type="text"
                                id="codigo-cupon"
                                name="cupon"
                                placeholder="Ej. DULMORI10"
                                autocomplete="off"
                            >

                            <button type="submit" id="boton-aplicar-cupon">
                                Aplicar
                            </button>

                        </div>

                        <p id="mensaje-cupon" role="status" aria-live="polite"></p>

                    </form>


                    <div class="resumen-linea">
                        <span>Descuento</span>
                        <span id="pago-descuento">-$0.00</span>
                    </div>

                    <div class="resumen-linea">
                        <span>Envío</span>
                        <span id="pago-envio">Por calcular</span>
                    </div>

                    <hr>

                    <div class="resumen-linea resumen-total">
                        <span>Total final</span>
                        <span id="pago-total">$0.00</span>
                    </div>

                    <p class="nota-pago">
                        El descuento se aplicará al subtotal si el cupón es válido.
                    </p>

                </aside>

            </div>

        </section>


        <!-- ==========================================
             6. CONFIRMACIÓN DE COMPRA
        =========================================== -->

        <section id="confirmacion" class="pagina seccion-confirmacion">

            <div class="confirmacion-contenido">

                <div class="icono-confirmacion" aria-hidden="true">
                    ✓
                </div>

                <p class="etiqueta">PEDIDO REGISTRADO</p>

                <h1>Gracias por elegir Dulmori.</h1>

                <p>
                    Tu pedido en Dulmori ha sido registrado. Aquí puedes consultar el resumen de tu compra.
                </p>

                <p>
                    Número de pedido:
                    <strong id="numero-pedido">Pendiente</strong>
                </p>


                <!-- Información del cliente -->

                <div class="datos-confirmacion">

                    <h2>Datos de entrega</h2>

                    <p>
                        <strong>Cliente:</strong>
                        <span id="confirmacion-nombre">—</span>
                    </p>

                    <p>
                        <strong>Correo:</strong>
                        <span id="confirmacion-correo">—</span>
                    </p>

                    <p>
                        <strong>Dirección:</strong>
                        <span id="confirmacion-direccion">—</span>
                    </p>

                    <p>
                        <strong>Método de pago:</strong>
                        <span id="confirmacion-metodo-pago">—</span>
                    </p>

                </div>


                <!-- Productos comprados -->

                <div class="detalle-confirmacion">

                    <h2>Resumen de tu compra</h2>

                    <div id="confirmacion-productos">

                        <!-- JavaScript mostrará el pedido finalizado. -->

                    </div>

                    <div class="resumen-linea">
                        <span>Total antes del descuento</span>
                        <span id="confirmacion-subtotal">$0.00</span>
                    </div>

                    <div class="resumen-linea">
                        <span>Descuento aplicado</span>
                        <span id="confirmacion-descuento">$0.00</span>
                    </div>

                    <div class="resumen-linea">
                        <span>Envío</span>
                        <span id="confirmacion-envio">$0.00</span>
                    </div>

                    <hr>

                    <div class="resumen-linea resumen-total">
                        <span>Total pagado</span>
                        <span id="confirmacion-total">$0.00</span>
                    </div>

                </div>


                <a href="#inicio" id="boton-regresar-tienda"
                    class="boton boton-principal">
                    Regresar a la tienda
                </a>

            </div>

        </section>


        <!-- ==========================================
             7. PÁGINA INSTITUCIONAL
        =========================================== -->

        <section id="nosotros" class="pagina seccion-nosotros">

            <div class="encabezado-pagina">
                <p class="etiqueta">CONOCE DULMORI</p>
                <h1>Un lugar para compartir algo rico.</h1>

                <p>
                    Detrás de cada receta hay dedicación, ingredientes elegidos con cariño y ganas de compartir algo delicioso.
                    Nuestra idea es hacer que lo cotidiano se sienta especial.
                </p>
            </div>


            <div class="nosotros-imagen">

                <img
                    src="https://res.cloudinary.com/djeljniac/image/upload/v1793074195/taza_mokaccino_tjkkba.jpg"
                    alt="Pastelería y café para disfrutar en Dulmori"
                    loading="lazy"
                >

            </div>


            <article class="bloque-institucional">

                <h2>Nuestra historia</h2>

                <p>
                    Dulmori nace para reunir lo mejor de una panadería y una cafetería: pasteles, postres, pan dulce, bebidas y bocadillos preparados para disfrutar sin prisa. Queremos que cada visita se sienta cercana, cálida y deliciosa.
                </p>

                <p>
                    Cada receta combina dedicación, buenos ingredientes y ese sabor
                    casero que invita a volver. Queremos que encuentres tu favorito,
                    ya sea para acompañar el café o compartir en buena compañía.
                </p>

            </article>


            <div class="institucional-grid">

                <article class="bloque-institucional">
                    <p class="etiqueta">01 / PROPÓSITO</p>
                    <h2>Nuestra misión</h2>

                    <p>
                        Preparar y ofrecer productos de panadería, repostería y cafetería
                        con dedicación, acompañados de una atención amable y
                        una experiencia de compra sencilla y agradable.
                    </p>
                </article>


                <article class="bloque-institucional">
                    <p class="etiqueta">02 / FUTURO</p>
                    <h2>Nuestra visión</h2>

                    <p>
                        Ser un lugar querido por su sabor, calidad y calidez, donde cada
                        persona encuentre algo rico para compartir o disfrutar
                        a su manera.
                    </p>
                </article>

            </div>


            <section class="llamada-accion">

                <p class="etiqueta">TU PRÓXIMO ANTOJO TE ESPERA</p>

                <h2>Siempre hay un buen momento para algo rico.</h2>

                <a href="#catalogo" class="boton boton-principal">
                    Explorar el menú
                </a>

            </section>

        </section>

    </main>


    <!-- ==========================================
         8. PIE DE PÁGINA
    =========================================== -->

    <footer id="pie-pagina">

        <div class="footer-contenido">

            <div class="footer-marca">
                <a href="#inicio" class="logo">Dulmori<span>.</span></a>

                <p>
                    Pan recién hecho, café y momentos para disfrutar.
                </p>
            </div>


            <div class="footer-enlaces">

                <h2>Explora</h2>

                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#catalogo">Catálogo</a></li>
                    <li><a href="#carrito">Mi carrito</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                </ul>

            </div>


            <div class="footer-enlaces">

                <h2>Información</h2>

                <ul>
                    <li><a href="#nosotros">Nuestra historia</a></li>
                    <li><a href="#pago">Proceso de compra</a></li>
                </ul>

            </div>

        </div>


        <div class="footer-inferior">
            <p>
                © 2026 Dulmori. Panadería y Cafetería.
            </p>
        </div>

    </footer>

    <script src="scripts.js"></script>

</body>
</html>