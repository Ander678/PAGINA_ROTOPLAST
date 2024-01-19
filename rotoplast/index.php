<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DIECAM</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
    </style>
</head>
<body>
    <header>
        <a href="" class="logo"><img src="img/Nuevo_Lienzo_-_2.png" alt=""></a>
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
                <p>Distribuidor autorizado y especializado de Rotoplas. Comercialización de todos sus productos a nivel nacional</p>
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
                        <img src="img/Lavado-de-tinaco.png" alt="">
                    </div>
                    <h4>Rotoplas 660L</h4>
                    <a href="" class="btn">Consultar precio YA!</a>
                </div>

                <div class="box">
                    <div class="box-img">
                        <img src="img/Lavado-de-tinaco.png" alt="">
                    </div>
                    <h4>Rotoplas 660L</h4>
                    <a href="" class="btn">Consultar precio YA!</a>
                </div>

                <div class="box">
                    <div class="box-img">
                        <img src="img/Lavado-de-tinaco.png" alt="">
                    </div>
                    <h4>Rotoplas 660L</h4>
                    <a href="" class="btn">Consultar precio YA!</a>
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
                    <i class='bx bxs-timer' ></i>
                    <h3>Entrega inmediata</h3>
                    <p>Compra online nuestros productos y te garantizamos que lleguen rápidamente.</p>
                </div>
            </div>
        </section>
    </main>
    <footer class="pie-pagina">
        <div class="group-1">
             <div class="box">
                 <figure>
                     <a href="#">
                         <img src="img/Logo.png" alt="Logo">
                     </a>
                 </figure>
             </div>
             <div class="box">
                 <h2>SOBRE NOSOTROS</h2>
                 <p>asadawda</p>
                 <p>adasdw</p>
             </div>
             <div class="box">
                 <h2>SIGUENOS</h2>
                 <div class="red-social">
                    <i class='bx bxl-facebook'></i>
                    <i class='bx bxl-instagram' ></i>
                    <i class='bx bxl-whatsapp' ></i>
                 </div>
             </div>
        </div>
        <div class="group-2">
         <small>&copy; 2024 <b>DIECAM</b> - Todos los derechos reservados</small>
        </div>
         </footer>
    <script src="main.js"></script>
</body>
</html>