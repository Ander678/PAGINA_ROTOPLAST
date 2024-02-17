var map = L.map('map').setView([-12.191296197093735, -76.92283585671555], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-12.191296197093735, -76.92283585671555]).addTo(map)
    .bindPopup('DIECAM - Av. La Mariscala 828, Lima 15818 🟢')
    .openPopup();