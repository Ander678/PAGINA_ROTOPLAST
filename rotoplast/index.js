
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
    dataNombre:"Biodigestor",
  },
  {
    id: 2,
    name: "BIODIGESTOR ROTOPLAS 1,300 LTS.",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 1,300 LTS/2570940182.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 3,
    name: "BIODIGESTOR ROTOPLAS 3,000 LTS.",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 3,000 LTS/2570973257.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 4,
    name: "BIODIGESTOR ROTOPLAS 7,000 LTS.",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 7,000 LTS/2570967517.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 5,
    name: "REGISTRO DE LODOS PARA 600 LTS",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/REGISTRO DE LODOS PARA 600 LTS/2846002124.jpg",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 6,
    name: "CISTERNA 1,200 LTS con Valv Y Flotador+T. Succión",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 1,200 LTS con Valv Y Flotador+T. Succión/SKU-701079.png",
    category:"Cisternas",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 7,
    name: "CISTERNA 2,000 LTS con Valv Y Flotador+T. Succión",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 2,000 LT con Valv Y Flotador+T. Succión/SKU-510207.png",
    category:"Cisternas",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 8,
    name: "CISTERNA 2,800 LTS con Valv Y Flotador+T. Succión",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 2,800 LTS con Valv Y Flotador+T. Succión/SKU-701080.png",
    category:"Cisternas",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 9,
    name: "CISTERNA ROTOPLAS 5,000 LTS",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Cisternas",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 10,
    name: "CISTERNA ROTOPLAS 10,000 LTS",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 10,000 LTS/SKU-701086.png",
    category:"Cisternas",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 11,
    name: "BOMBA CENTRIFUGA DE 1 HP ROTOPLAS",
    image:"img/PRODUCTOS DIECAM/BOMBAS PARA TANQUES/BOMBA CENTRIFUGA DE 1 HP/2589063502.png",
    category:"Cisternas",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 12,
    name: "BOMBA CENTRIFUGA DE 1/2 HP",
    image:"img/PRODUCTOS DIECAM/BOMBAS PARA TANQUES/BOMBA CENTRIFUGA DE 12 HP/2589061506.png",
    category:"Cisternas",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 13,
    name: "BOMBA PERIFERICA DE 1/2 HP",
    image:"img/PRODUCTOS DIECAM/BOMBAS PARA TANQUES/BOMBA PERIFERICA DE 12 HP/2589063507.png",
    category:"Cisternas",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 14,
    name: "MEJOR AGUA GARANTIA DE POR VIDA 600 LTS. ARENA",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/MEJOR AGUA GARANTIA DE POR VIDA 600 LTS. ARENA/TANQUE_DE_AGUA_GARANTIA_DE_POR_VIDA_600_LITROS-02.jpg",
    category:"Tanques y accesorios domésticos",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 15,
    name: "MEJOR AGUA GARANTIA DE POR VIDA 750 LTS. ARENA",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/MEJOR AGUA GARANTIA DE POR VIDA 750 LTS. ARENA/TANQUE_DE_AGUA_GARANTIA_DE_POR_VIDA_750_LITROS-02.jpg",
    category:"Tanques y accesorios domésticos",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 16,
    name: "MEJOR AGUA GARANTIA DE POR VIDA 1,100 LTS. ARENA",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/MEJOR AGUA GARANTIA DE POR VIDA 1100 LTS. ARENA/2648612598.jpg",
    category:"Tanques y accesorios domésticos",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 17,
    name: "MEJOR AGUA GARANTIA DE POR VIDA 1,500 LTS. ARENA",
    image:"img/PRODUCTOS DIECAM/TANQUES Y ACCESORIOS DOMESTICOS/MEJOR AGUA GARANTIA DE POR VIDA 1500 LTS ARENA/3100270941.jpg",
    category:"Tanques y accesorios domesticos",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 18,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 19,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 20,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 21,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 22,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 23,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 24,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 25,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 26,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 27,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 28,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 29,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 30,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 31,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 32,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 33,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 34,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 35,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 36,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 37,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 38,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 39,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 40,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  },
  {
    id: 41,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
    //dataCantidad:,
    //dataNombre:,
  }
]


app.get('/api/products', (req, res) => {
  res.send(products)
});

app.use("/",express.static("rotoplast/"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});