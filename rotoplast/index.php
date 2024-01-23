<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DIECAM</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="img/diecam-logotipo-175w.webp">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
    </style>
</head>

<body>
    <header>
        <a href="" class="logo"><img src="img/Nuevo_Lienzo_5.png" alt=""></a>
        <div class="bx bx-menu" id="menu-icon"></div>
        <ul class="navbar">
            <li><a href="#incio">INCIO</a></li>
            <li><a href="#linea-hogar">LÍNEA HOGAR</a></li>
            <li><a href="#agroindustria">AGROINDUSTRIA</a></li>
            <li><a href="#tienda">TIENDA</a></li>
            <li><a href="#contactenos">CONTÁCTENOS</a></li>
        </ul>
        <div class="header-btn">
            <a href="" class="registrarse">Registrarse</a>
            <a href="" class="ingresar">Ingresar</a>
        </div>
    </header>
    <main>
        <section class="home" id="home">
            <div class="text">
                <h1><span>DIECAM</span> INVERSIONES S.A.C</h1>
                <p>Distribuidor autorizado y especializado de Rotoplas. Comercialización de todos sus productos a nivel nacional.
                    ¡Conoce los beneficios y promociones que tenemos para ti!
                </p>
                <div class="btn-home">
                    <a href="">COMPRAR</a>
                </div>
            </div>

            <div class="form-container">
                <form action="">
                    <div class="input-box">
                        <span>Categoría</span>
                        <select name="select">
                            <option value="biodigestores">Biodigestores</option>
                            <option value="cisternas">Cisternas</option>
                            <option value="tanques" selected>Tanques y Accesorios domésticos</option>
                            <option value="filtros">Filtros, cartuchos y pruificadores domésticos</option>
                            <option value="bombas">Bombas para tanques</option>
                            <option value="termas">Termas</option>
                        </select>
                    </div>
                    <input type="submit" name="" id="" class="btnBuscar" value="Buscar">
                </form>
            </div>
        </section>

        <!--lo mas vendido mi amor-->
        <section class="populares" id="populares">
            <div class="heading">
                <span>Mas populares</span>
                <h2>Los productos mas vendidos</h2>
            </div>
            <div class="populares-container">
                <div class="box">
                    <div class="box-img">
                        <img src="img/10000l.jpg" alt="">
                    </div>
                    <h4>CISTERNA 10,000 LTS.</h4>
                    <a href="" class="btn">COTIZA AHORA!</a>
                </div>

                <div class="box">
                    <div class="box-img">
                        <img src="img/1300l.png" alt="">
                    </div>
                    <h4>BIODIGESTOR 1,300 LTS.</h4>
                    <a href="" class="btn">COTIZA AHORA!</a>
                </div>

                <div class="box">
                    <div class="box-img">
                        <img src="img/750ml.jpg" alt="">
                    </div>
                    <h4>MEJOR AGUA GARANTIA DE POR VIDA 750 LTS. ARENA</h4>
                    <a href="" class="btn">COTIZA AHORA!</a>
                </div>
            </div>
        </section>

        <!--quienes carajos somooooooooooooooooss cueeeeck-->

        <section class="nosotros" id="nosotros">
            <div class="nosotros-container show">
                <div class="nosotros-img">
                    <img src="img/nosotros.jpg" alt="">
                </div>
                <div class="nosotros-text show">
                    <span>Sobre nosotros</span>
                    <p>Somos una empresa reconocida y certificada por Rotoplas como Distribuidor Especializado para la comercialización y
                        distribución de diferentes líneas a nivel nacional; estamos enfocados en contribuir con soluciones y alternativas no convencionales a
                        los problemas del agua y saneamiento con productos de excelente calidad y de altos beneficios. Contamos con amplia variedad de productos,
                        capacidades y modelos. Nos enfocamos en dar una asesoría personalizada pre y post venta para cualquier solución que el usuario necesite.</p>
                </div>
            </div>
        </section>

        <!--que ofrecemos ctmr-->
        <section class="ofrecemos" id="ofrecemos">
            <div class="ofrecemos-container show">
                <div class="ofrecemos-text">
                    <span>Qué ofrecemos</span>
                    <p>En Rotoplas tenemos la solución necesaria para el almacenamiento, trasporte y conducción de agua, alimentos y sustancias químicas.
                        Contamos con la mejor calidad y beneficios del mercado, con amplia variedad de capacidades.</p>
                </div>
                <div class="ofrecemos-img">
                    <img src="img/almacen.jpg" alt="">
                </div>
            </div>
        </section>

        <!--los beneficios pues bbita-->
        <section class="beneficios" id="beneficios">
            <div class="heading">
                <span>Soluciones para el hogar, campo e industria</span>
                <h2>Tenemos los mejores servicios</h2>
            </div>
            <div class="beneficios-container">
                <div class="box">
                    <i class='bx bxs-paper-plane'></i>
                    <h3>Entrega inmediata</h3>
                    <p>Compra online nuestros productos y te garantizamos que lleguen rápidamente.</p>
                </div>
                <div class="box">
                    <i class='bx bxs-truck'></i>
                    <h3>Servicio express dentro de Lima</h3>
                    <p>Elige el servicio de envío que mejor se adapte a tus necesidades. Realizamos envíos express dentro de Lima, Perú.</p>
                </div>
                <div class="box">
                    <i class='bx bxs-timer'></i>
                    <h3>Despacho en 24hs</h3>
                    <p>El plazo de entrega será de 24 horas siguientes a la confirmación de tu pedido.</p>
                </div>
            </div>
        </section>
    </main>
    <section id="encuentranos">
        <h2>Aquí estamos <span><i class='bx bx-been-here'></i></span> </h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d487.4793694298891!2d-76.92453366751127!3d-12.191631018771675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9bd729aa78f%3A0x8d814a697c22e705!2sDiecam%20Inversiones%20SAC!5e0!3m2!1ses-419!2spe!4v1705709056276!5m2!1ses-419!2spe" width="100%" height="400vh" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </section>
    <footer id="footer">
        <div class="socials">
            <h4>CONTACTANOS</h4>
            <a href="https://www.facebook.com/profile.php?id=100078193081516"><img src="img/ico_fb.png" alt="">DIECAM</a>
            <a href=""><img src="img/ico_wssp.png" alt="">+51 999 999 999</a>
        </div>
        <div class="ubicacion">
            <h4>UBICANOS</h4>
            <a href="https://maps.app.goo.gl/ZWHRixfnjfQ9p83x9" target="_blank"><img src="img/ubi.png" alt="">Av. La Mariscala 727, Lima 15818, Perú</a>
            <br>
            <br>
        </div>
        <div class="horario">
            <h4>HORARIOS DE ATENCIÓN</h4>
            <a href=""><img src="img/reloj.png" alt="">Lunes - Sábado 8am - 8pm</a>
            <br><br>
        </div>
    </footer>
    <div class="group-2">
        <small>&copy; 2024 <b>DIECAM</b> - Todos los derechos reservados</small>
    </div>
    <script src="js/animacion.js"></script>
    <script src="js/animacion2.js"></script>
    <script src="js/main.js"></script>
</body>

</html>