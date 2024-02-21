const express = require("express")
const app = express()
const port = 3000

const products = [
{
    id: 1,
    category:"Biodigestores",
    name: "BIODIGESTOR ROTOPLAS 600 LTS.",
    Image: "img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 600 LTS/2570967512.png",
},
{
    id: 2,
    category: "Biodigestores",
    name: "BIODIGESTOR ROTOPLAS 1,300 LTS.",
    Image: "img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 1,300 LTS/2570940182.png",
},
{
    id: 3,
    category: "Biodigestores",
    name: "BIODIGESTOR ROTOPLAS 3,000 LTS.",
    Image: "img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 3,000 LTS/2570973257.png",
},
{
    id: 4,
    category: "Biodigestores",
    name: "BIODIGESTOR ROTOPLAS 7,000 LTS.",
    Image: "img/PRODUCTOS DIECAM/BIODIGESTOR/BIODIGESTOR 7,000 LTS/2570967517.png", 
},
]
app.get('/api/products', (req, res) => {
  res.send(products)
});

app.use("/", express.static("rotoplast"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});