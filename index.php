<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DIECAM</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <header id="header">
        <i onclick="toggleSideBar()" class="material-symbols-outlined">menu</i>
        <h2>DIECAM</h2>
    </header>
    <nav id="sidebar" class="sidebar">
        <div class="profile">
            <img src="imgs/diecam-logotipo-175w.webp" />
            <div class="info">
                <h2>DIECAM</h2>
                <h4>INVERSIONES S.A.C</h4>
            </div>
        </div>
        <ul class="link">
            <li>
                <a href="#">
                    <i class="material-symbols-outlined">dashboard</i>
                    <h3>Inicio</h3>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="material-symbols-outlined"> video_library </i>
                    <h3>Línea Hogar</h3>
                </a>
            </li>

            <li>
                <a href="#">
                    <i class="material-symbols-outlined">insert_chart</i>
                    <h3>Agroindustria</h3>
                </a>
            </li>

            <li>
                <a href="#">
                    <i class="material-symbols-outlined">comment</i>
                    <h3>Tienda</h3>
                </a>
            </li>

            <li>
                <a href="#">
                    <i class="material-symbols-outlined">subtitles</i>
                    <h3>Contáctenos</h3>
                </a>
            </li>

            <li>
                <a href="#">
                    <i class="material-symbols-outlined">settings</i>
                    <h3>Configuración</h3>
                </a>
            </li>
        </ul>
    </nav>
    <section class="hero">
        <div class="heroInfo">
            <h1>DIECAM INVERSIONES S.A.C</h1>
            <h3>DIECAM INVERSIONES S.A.C.
                Distribuidor autorizado y especializado de Rotoplas.

                Comercialización de todos sus productos a nivel nacional

                ¡Conoce los beneficios y promociones que tenemos para ti!</h3>
            <a href="#" class="btnComprar">COMPRAR</a>
        </div>
    </section>
    <section class="info">
        <div class="containerImg">
            <img src="imgs/img1.png" alt="">
        </div>
        <div class="containerInfoText">
            <h2>Quiénes somos</h2>
            <p>Somos una empresa reconocida y certificada por Rotoplas como Distribuidor Especializado para la comercialización y distribución de diferentes líneas a nivel nacional; estamos enfocados en contribuir con soluciones y alternativas no convencionales a los problemas del agua y saneamiento con productos de excelente calidad y de altos beneficios. Contamos con amplia variedad de productos, capacidades y modelos. Nos enfocamos en dar una asesoría personalizada pre y post venta para cualquier solución que el usuario necesite.</p>
        </div>
    </section>

    <script src="script.js"></script>
</body>

</html>