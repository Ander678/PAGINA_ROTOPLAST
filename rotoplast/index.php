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

    <script src="script.js"></script>
</body>

</html>