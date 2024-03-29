
const express = require('express')
const app = express()
const port = 3000

const products = [
  {
    id: 1,
    name: "BIODIGESTOR ROTOPLAS 600 LTS.",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 600 LTS/2570967512.png",
    category:"Biodigestores",
    dataCantidad:"6",
    dataNombre:"BIODIGESTOR",
  },
  {
    id: 2,
    name: "BIODIGESTOR ROTOPLAS 1,300 LTS.",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 1,300 LTS/2570940182.png",
    category:"Biodigestores",
    dataCantidad:"13",
    dataNombre:"BIODIGESTOR",
  },
  {
    id: 3,
    name: "BIODIGESTOR ROTOPLAS 3,000 LTS.",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 3,000 LTS/2570973257.png",
    category:"Biodigestores",
    dataCantidad:"30",
    dataNombre:"BIODIGESTOR",
  },
  {
    id: 4,
    name: "BIODIGESTOR ROTOPLAS 7,000 LTS.",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 7,000 LTS/2570967517.png",
    category:"Biodigestores",
    dataCantidad:"70",
    dataNombre:"BIODIGESTOR",
  },
  {
    id: 5,
    name: "REGISTRO DE LODOS PARA 600 LTS",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/REGISTRO DE LODOS PARA 600 LTS/2846002124.jpg",
    category:"Biodigestores",
    dataCantidad:"6",
    dataNombre:"BIODIGESTOR",
  },
  {
    //CISTERNAS
    id: 6,
    name: "CISTERNA 1,200 LTS con Valv Y Flotador+T. Succión",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 1,200 LTS con Valv Y Flotador+T. Succión/SKU-701079.png",
    category:"Cisternas",
    dataCantidad:"12",
    dataNombre:"CISTERNA",
  },
  {
    id: 7,
    name: "CISTERNA 2,000 LTS con Valv Y Flotador+T. Succión",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 2,000 LT con Valv Y Flotador+T. Succión/SKU-510207.png",
    category:"Cisternas",
    dataCantidad:"20",
    dataNombre:"CISTERNA",
  },
  {
    id: 8,
    name: "CISTERNA 2,800 LTS con Valv Y Flotador+T. Succión",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 2,800 LTS con Valv Y Flotador+T. Succión/SKU-701080.png",
    category:"Cisternas",
    dataCantidad:"28",
    dataNombre:"CISTERNA",
  },
  {
    id: 9,
    name: "CISTERNA ROTOPLAS 5,000 LTS",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Cisternas",
    dataCantidad:"50",
    dataNombre:"CISTERNA",
  },
  {
    id: 10,
    name: "CISTERNA ROTOPLAS 10,000 LTS",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 10,000 LTS/SKU-701086.png",
    category:"Cisternas",
    dataCantidad:"100",
    dataNombre:"CISTERNA",
  },
  {
    id: 11,
    name: "BOMBA CENTRIFUGA DE 1 HP ROTOPLAS",
    image:"img/PRODUCTOS DIECAM/BOMBAS PARA TANQUES/BOMBA CENTRIFUGA DE 1 HP/2589063502.png",
    category:"Cisternas",
    dataCantidad:"1",
    dataNombre:"BOMBA",
  },
  {
    id: 12,
    name: "BOMBA CENTRIFUGA DE 1/2 HP",
    image:"img/PRODUCTOS DIECAM/BOMBAS PARA TANQUES/BOMBA CENTRIFUGA DE 12 HP/2589061506.png",
    category:"Cisternas",
    dataCantidad:"0",
    dataNombre:"BOMBA",
  },
  {
    id: 13,
    name: "BOMBA PERIFERICA DE 1/2 HP",
    image:"img/PRODUCTOS DIECAM/BOMBAS PARA TANQUES/BOMBA PERIFERICA DE 12 HP/2589063507.png",
    category:"Cisternas",
    dataCantidad:"1",
    dataNombre:"BOMBA",
  },
  {
    id: 14,
    name: "MEJOR AGUA GARANTIA DE POR VIDA 600 LTS. ARENA",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/MEJOR AGUA GARANTIA DE POR VIDA 600 LTS. ARENA/TANQUE_DE_AGUA_GARANTIA_DE_POR_VIDA_600_LITROS-02.jpg",
    category:"Tanques y accesorios domésticos",
    dataCantidad:"6",
    dataNombre:"TANQUE Y ACCESORIOS",
  },
  {
    id: 15,
    name: "MEJOR AGUA GARANTIA DE POR VIDA 750 LTS. ARENA",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/MEJOR AGUA GARANTIA DE POR VIDA 750 LTS. ARENA/TANQUE_DE_AGUA_GARANTIA_DE_POR_VIDA_750_LITROS-02.jpg",
    category:"Tanques y accesorios domésticos",
    dataCantidad:"7",
    dataNombre:"TANQUE Y ACCESORIOS",
  },
  {
    id: 16,
    name: "MEJOR AGUA GARANTIA DE POR VIDA 1,100 LTS. ARENA",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/MEJOR AGUA GARANTIA DE POR VIDA 1100 LTS. ARENA/2648612598.jpg",
    category:"Tanques y accesorios domésticos",
    dataCantidad:"11",
    dataNombre:"TANQUE Y ACCESORIOS",
  },
  {
    id: 17,
    name: "MEJOR AGUA GARANTIA DE POR VIDA 1,500 LTS. ARENA",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/MEJOR AGUA GARANTIA DE POR VIDA 1500 LTS ARENA/3100270941.jpg",
    category:"Tanques y accesorios domesticos",
    dataCantidad:"15",
    dataNombre:"TANQUE Y ACCESORIOS",
  },
  {
    id: 18,
    name: "MEJOR AGUA GARANTIA DE POR VIDA 2,500 LTS. ARENA",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/MEJOR AGUA GARANTIA DE POR VIDA 2500 LTS. ARENA/2648639759.jpg",
    category:"Tanques y accesorios domésticos",
    dataCantidad:"25",
    dataNombre:"TANQUE Y ACCESORIOS",
  },
  {
    id: 19,
    name: "MEJOR AGUA 1,100 LTS. NEGRO",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/MEJOR AGUA 1100 LTS. NEGRO/TANQUE_N1100L-1.png",
    category:"Tanques y accesorios domésticos",
    dataCantidad:"11",
    dataNombre:"TANQUES Y ACCESORIOS",
  },
  {
    id: 20,
    name: "MEJOR AGUA 2,500 LTS. NEGRO",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/MEJOR AGUA 2500 LTS. NEGRO/2570940150.png",
    category:"Tanques y accesorios domésticos",
    dataCantidad:"25",
    dataNombre:"TANQUES Y ACCESORIOS",
  },
  {
    id: 21,
    name: "MEJOR AGUA 250LTS. CON VALVULA Y FLOT",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/TANQUE MEJOR AGUA 250LTS. CON VALVULA Y FLOT/2648643845.png",
    category:"Tanques y accesorios domésticos",
    dataCantidad:"2",
    dataNombre:"TANQUES Y ACCESORIOS",
  },
  {
    id: 22,
    name: "COMBO VALVULA DE PIE + 2 ELECTRONIVELES",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/COMBO VALVULA DE PIE + 2 ELECTRONIVELES/2648599919.jpg",
    category:"Tanques y accesorios domésticos",
    dataCantidad:"1",
    dataNombre:"TANQUE Y ACCESORIOS",
  },
  {
    id: 23,
    name: "MULTICONECTOR C VALVULA",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/MULTICONECTOR C VALVULA/2648574990.jpg",
    category:"Tanques y accesorios domésticos",
    dataCantidad:"1",
    dataNombre:"TANQUE Y ACCESORIOS",
  },
  {
    id: 24,
    name: "TAPA CLICK 18 NEGRA ROTOPLA",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/TAPA CLICK 18 NEGRA/2648639778.jpg",
    category:"Tanques y accesorios domésticos",
    dataCantidad:"1",
    dataNombre:"TANQUE Y ACCESORIOS DOMESTICOS",
  },
  {
    id: 25,
    name: "TANQUE INDUSTRIAL DE POLIETILENO 250 LTS",
    image:"",
    category:"Tanques y accesorios industriales",
    dataCantidad:"1",
    dataNombre:"TANQUES Y ACCESORIOS INDUSTRIALES",
  },
  {
    id: 26,
    name: "TANQUE INDUSTRIAL DE POLIETILENO 750 LTS",
    image:"",
    category:"Tanques y accesorios industriales",
    dataCantidad:"1",
    dataNombre:"TANQUES Y ACCESORIOS INDUSTRIALES",
  },
  {
    id: 27,
    name: "TANQUE INDUSTRIAL DE POLIETILENO 1100 LTS",
    image:"",
    category:"Tanques y accesorios industriales",
    dataCantidad:"1",
    dataNombre:"TANQUES Y ACCESORIOS INDUSTRIALES",
  },
  {
    id: 28,
    name: "TANQUE INDUSTRIAL DE POLIETILENO 2500 LTS",
    image:"",
    category:"Tanques y accesorios industriales",
    dataCantidad:"1",
    dataNombre:"TANQUES Y ACCESORIOS INDUSTRIALES",
  },
  {
    id: 29,
    name: "TANQUE INDUSTRIAL DE POLIETILENO 5000 LTS",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS INDUSTRIALES/TANQUE 5000 L.png",
    category:"Tanques y accesorios industriales",
    dataCantidad:"1",
    dataNombre:"TANQUES Y ACCESORIOS INDUSTRIALES",
  },
  {
    id: 30,
    name: "TANQUE INDUSTRIAL DE POLIETILENO 10 000 LTS",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS INDUSTRIALES/TANQUE 10000 L.png",
    category:"Tanques y accesorios industriales",
    dataCantidad:"1",
    dataNombre:"TANQUES Y ACCESORIOS INDUSTRIALES",
  },
  {
    id: 31,
    name: "TANQUE INDUSTRIAL DE POLIETILENO 25 000 LTS",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS INDUSTRIALES/TANQUE 25000 L.png",
    category:"Tanques y accesorios industriales",
    dataCantidad:"1",
    dataNombre:"TANQUES Y ACCESORIOS INDUSTRIALES",
  },
  {
    id: 32,
    name: "CONEXION HEXAGONAL CON EMPAQUE EDPM BANJO",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS INDUSTRIALES/CONEXION HEXAGONAL.jpg",
    category:"Tanques y accesorios industriales",
    dataCantidad:"1",
    dataNombre:"TANQUES Y ACCESORIOS INDUSTRIALES",
  },
  {
    id: 33,
    name: "NIPLE CORTO DE POLIPROPILENO BANJO",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS INDUSTRIALES/NIPLE CORTO PROPILENO.webp",
    category:"Tanques y accesorios industriales",
    dataCantidad:"1",
    dataNombre:"TANQUES Y ACCESORIOS INDUSTRIALES",
  },
  {
    id: 34,
    name: "VALVULA FULL PORT BANJO ROTOPLAS",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS INDUSTRIALES/VALCULA FULL PORT BANJO.webp",
    category:"Tanques y accesorios industriales",
    dataCantidad:"1",
    dataNombre:"TANQUES Y ACCESORIOS INDUSTRIALES",
  },
  {
    id: 35,
    name: "TUBO / JARRO DE AIRE ROTOPLAS",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS INDUSTRIALES/TUBO DE AIRE.jpg",
    category:"Tanques y accesorios industriales",
    dataCantidad:"1",
    dataNombre:"TANQUES Y ACCESORIOS INDUSTRIALES",
  },
  {
    id: 36,
    name: "VALVULA Y FLOTADOR ROTOPLAS",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS INDUSTRIALES/VALVULA Y FLOTADOR.webp",
    category:"Tanques y accesorios industriales",
    dataCantidad:"1",
    dataNombre:"TANQUES Y ACCESORIOS INDUSTRIALES",
  },
  {
    id: 37,
    name: "TANQUE VITIVINICOLA BLANCO DE 2 500 LTS",
    image:"img/PRODUCTOS DIECAM/TANQUES VITIVINICOLAS/wine/tanque2,5kvinos.png",
    category:"Tanques Vitivinicolas",
    dataCantidad:"1",
    dataNombre:"TANQUES VITIVINICOLAS",
  },
  {
    id: 38,
    name: "TANQUE VITIVINICOLA BLANCO DE 15 000 LTS",
    image:"img/PRODUCTOS DIECAM/TANQUES VITIVINICOLAS/wine/tanque15kvinos.png",
    category:"Tanques Vitivinicolas",
    dataCantidad:"1",
    dataNombre:"TANQUES VITIVINICOLAS",
  },
  {
    id: 39,
    name: "TANQUE VITIVINICOLA BLANCO DE 250 000 LTS",
    image:"img/PRODUCTOS DIECAM/TANQUES VITIVINICOLAS/wine/tanque250lvinos.jpg",
    category:"Tanques Vitivinicolas",
    dataCantidad:"1",
    dataNombre:"TANQUES VITIVINICOLAS",
  },
  {
    id: 40,
    name: "CARTUCHO JUMBO ROTOPLAS",
    image:"img/PRODUCTOS DIECAM/FILTRO CARTUCHOS Y PURIFICADORES/CARTUCHO JUMBO/2661962997.jpg",
    category:"Filtros, cartuchos y pruificadores domésticos",
    dataCantidad:"1",
    dataNombre:"FILTRO CARTUCHO Y PURIFICADOR",
  },
  {
    id: 41,
    name: "CARTUCHO PARA PURIFICADOR ROTOPLAS",
    image:"img/PRODUCTOS DIECAM/FILTRO CARTUCHOS Y PURIFICADORES/CARTUCHO PARA PURIFICADOR ROTOPLAS/2661984429.jpg",
    category:"Filtros, cartuchos y pruificadores domésticos",
    dataCantidad:"1",
    dataNombre:"FILTRO CARTUCHO Y PURIFICADOR",
  },
  {
    id: 42,
    name: "CARTUCHO PASO 1 PARA FILTRO DE TANQUE",
    image:"img/PRODUCTOS DIECAM/FILTRO CARTUCHOS Y PURIFICADORES/CARTUCHO PASO 1 PARA FILTRO DE TANQUE/2662050518.jpg",
    category:"Filtros, cartuchos y pruificadores domésticos",
    dataCantidad:"1",
    dataNombre:"FILTRO CARTUCHO Y PURIFICADOR",
  },
  {
    id: 43,
    name: "FILTROPLAS JUMBO ROTOPLAS",
    image:"img/PRODUCTOS DIECAM/FILTRO CARTUCHOS Y PURIFICADORES/FILTROPLAS JUMBO/2648631670.jpg",
    category:"Filtros, cartuchos y pruificadores domésticos",
    dataCantidad:"1",
    dataNombre:"FILTRO CARTUCHO Y PURIFICADOR",
  },
  {
    id: 44,
    name: "FILTROPLAS PASO 1 PARA TANQUE",
    image:"img/PRODUCTOS DIECAM/FILTRO CARTUCHOS Y PURIFICADORES/FILTROPLAS PASO 1 PARA TANQUE/2648648650.jpg",
    category:"Filtros, cartuchos y pruificadores domésticos",
    dataCantidad:"1",
    dataNombre:"FILTRO CARTUCHO Y PURIFICADOR",
  },
  {
    id: 45,
    name: "PURIFICADOR DE AGUA BAJO LAVADERO",
    image:"img/PRODUCTOS DIECAM/FILTRO CARTUCHOS Y PURIFICADORES/PURIFICADOR DE AGUA BAJO LAVADERO/2661961748.png",
    category:"Filtros, cartuchos y pruificadores domésticos",
    dataCantidad:"1",
    dataNombre:"FILTRO CARTUCHO Y PURIFICADOR",
  },
  {
    id: 46,
    name: "PURIFICADOR DE AGUA SOBRE LAVADERO",
    image:"img/PRODUCTOS DIECAM/FILTRO CARTUCHOS Y PURIFICADORES/PURIFICADOR DE AGUA SOBRE LAVADERO/2648632304.png",
    category:"Filtros, cartuchos y pruificadores domésticos",
    dataCantidad:"1",
    dataNombre:"FILTRO CARTUCHO Y PURIFICADOR",
  },
  {//TERMAS
    id: 47,
    name: "BRAZO DE DUCHA ROTOPLAS COLOR BLANCO",
    image:"img/PRODUCTOS DIECAM/TERNAS/BRAZO DE DUCHA/2589032254.jpg",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 48,
    name: "DUCHA ELECTRICA 4T 220V BLANCA",
    image:"img/PRODUCTOS DIECAM/TERNAS/DUCHA ELECTRICA 4T 220V BLANCA/2589011816.png",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 49,
    name: "DURATERMA DE 50 LTS ROTOPLAS",
    image:"img/PRODUCTOS DIECAM/TERNAS/DURATERMA DE 50 LTS/500466-1.png",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 50,
    name: "DURATERMA DE 80 LTS ROTOPLAS",
    image:"img/PRODUCTOS DIECAM/TERNAS/DURATERMA DE 80 LTS/500467-1.png",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 51,
    name: "TERMA A GAS GLP FLAMING 6 LTS",
    image:"img/PRODUCTOS DIECAM/TERNAS/TERMA A GAS GLP FLAMING 6 LTS/1.1.png",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 52,
    name: "TERMA A GAS GLP FLAMING 10 LTS",
    image:"img/PRODUCTOS DIECAM/TERNAS/TERMA A GAS GLP FLAMING 10 LTS/1.1 (1).png",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 53,
    name: "TERMA A GAS GLP FLAMING 14 LTS",
    image:"img/PRODUCTOS DIECAM/TERNAS/TERMA A GAS GLP FLAMING 14 LTS/1.1.png",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 54,
    name: "TERMA A GAS NATURAL FLAMING 5.5 LTS",
    image:"img/PRODUCTOS DIECAM/TERNAS/TERMA A GAS NATURAL FLAMING 5.5 LTS/17899062_1.png",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 55,
    name: "TERMA A GAS NATURAL FLAMING 6 LTS",
    image:"img/PRODUCTOS DIECAM/TERNAS/TERMA A GAS NATURAL FLAMING 6 LTS/1.1.png",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 56,
    name: "TERMA A GAS NATURAL FLAMING 10 LTS",
    image:"img/PRODUCTOS DIECAM/TERNAS/TERMA A GAS NATURAL FLAMING 10 LTS/gas_10L.png",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 57,
    name: "TERMA A GAS NATURAL FLAMING 14 LTS",
    image:"img/PRODUCTOS DIECAM/TERNAS/TERMA A GAS NATURAL FLAMING 14 LTS/2589026533.png",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 58,
    name: "TERMA INSTANTANEA PRISMA",
    image:"img/PRODUCTOS DIECAM/TERNAS/TERMA INSTANTANEA PRISMA/3100256468.png",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 59,
    name: "TERMA INSTANTANEA SENSATION",
    image:"img/PRODUCTOS DIECAM/TERNAS/TERMA INSTANTANEA SENSATION/2846040133.jpg",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 60,
    name: "TERMA INSTANTANEA SENSE PRO",
    image:"img/PRODUCTOS DIECAM/TERNAS/TERMA INSTANTANEA SENSE PRO/2588936746.png",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 61,
    name: "TERMA INSTANTANEA SILVER ROTOPLAS",
    image:"img/PRODUCTOS DIECAM/TERNAS/TERMA INSTANTANEA SILVER/2589032259.png",
    category:"Termas",
    dataCantidad:"1",
    dataNombre:"TERNA",
  },
  {
    id: 62,
    name: "name",
    image:"",
    category:"",
    dataCantidad:"1",
    dataNombre:"",
  },
]


app.get('/api/products', (req, res) => {
  res.send(products)
});

app.use("/",express.static("rotoplast/"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});