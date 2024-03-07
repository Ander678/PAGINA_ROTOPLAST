
const express = require('express')
const app = express()
const port = 3000

const products = [
  {
    id: 1,
    name: "BIODIGESTOR ROTOPLAS 600 LTS.",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 600 LTS/2570967512.png",
    category:"Biodigestores",
  },
  {
    id: 2,
    name: "BIODIGESTOR ROTOPLAS 1,300 LTS.",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 1,300 LTS/2570940182.png",
    category:"Biodigestores",
  },
  {
    id: 3,
    name: "BIODIGESTOR ROTOPLAS 3,000 LTS.",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 3,000 LTS/2570973257.png",
    category:"Biodigestores",
  },
  {
    id: 4,
    name: "BIODIGESTOR ROTOPLAS 7,000 LTS.",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 7,000 LTS/2570967517.png",
    category:"Biodigestores",
  },
  {
    id: 5,
    name: "REGISTRO DE LODOS PARA 600 LTS",
    image:"img/PRODUCTOS DIECAM/BIODIGESTOR/REGISTRO DE LODOS PARA 600 LTS/2846002124.jpg",
    category:"Biodigestores",
  },
  {
    id: 6,
    name: "CISTERNA 1,200 LTS con Valv Y Flotador+T. Succión",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 1,200 LTS con Valv Y Flotador+T. Succión/SKU-701079.png",
    category:"Cisternas",
  },
  {
    id: 7,
    name: "CISTERNA 2,000 LTS con Valv Y Flotador+T. Succión",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 2,000 LT con Valv Y Flotador+T. Succión/SKU-510207.png",
    category:"Cisternas",
  },
  {
    id: 8,
    name: "CISTERNA 2,800 LTS con Valv Y Flotador+T. Succión",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 2,800 LTS con Valv Y Flotador+T. Succión/SKU-701080.png",
    category:"Cisternas",
  },
  {
    id: 9,
    name: "CISTERNA ROTOPLAS 5,000 LTS",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Cisternas",
  },
  {
    id: 10,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 11,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 12,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 13,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 14,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 15,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 16,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 17,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 18,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 19,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 20,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 21,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 22,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 23,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 24,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 25,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 26,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 27,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 28,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 29,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 30,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 31,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 32,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 33,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 34,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 35,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 36,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 37,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 38,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 39,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 40,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  },
  {
    id: 41,
    name: "name",
    image:"img/PRODUCTOS DIECAM/CISTERNA/CISTERNA 5,000 LTS/SKU-701085.png",
    category:"Biodigestores",
  }
]


app.get('/api/products', (req, res) => {
  res.send(products)
});

app.use("/",express.static("rotoplast/"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});