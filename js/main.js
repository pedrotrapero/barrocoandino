import { loadGeoJSON } from './geojsonLoader.js';

// Crear el mapa y establecer la vista inicial
const map = L.map('map').setView([-13.65, -71.7], 12);

// Capas base
const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
});
const googleSatelliteLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    attribution: '&copy; Google'
});

// Añadir una capa base por defecto
osmLayer.addTo(map);

// Control de capas
const layerControl = L.control.layers({
    "OpenStreetMap": osmLayer,
    "Google Satélite": googleSatelliteLayer
}).addTo(map);

// Configuración de capas GeoJSON
const geojsonConfigs = [
    {
        url: './geojson/alojamiento.geojson', // Ruta relativa al archivo GeoJSON
        layerName: 'Capa GeoJSON 1',
        style: {
            radius: 10,
            fillColor: "#007BFF",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        }
    },
    {
        url: './geojson/iglesias.geojson',
        layerName: 'Capa GeoJSON 2',
        style: {
            radius: 10,
            fillColor: "#FF5733",
            color: "#900",
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        }
    },
    {
        url: './geojson/patrimonio.geojson',
        layerName: 'Capa GeoJSON 3',
        style: {
            radius: 10,
            fillColor: "#28A745",
            color: "#155724",
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        }
    },
    {
        url: './geojson/restaurantes.geojson',
        layerName: 'Capa GeoJSON 3',
        style: {
            radius: 10,
            fillColor: "#FFC107",
            color: "#155724",
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        }
    },
    {
        url: './geojson/rutas.geojson',
        layerName: 'Capa GeoJSON 3',
        style: {
            radius: 10,
            fillColor: "#FD7E14",
            color: "#155724",
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        }
    },
    {
        url: './geojson/servicios.geojson',
        layerName: 'Capa GeoJSON 3',
        style: {
            radius: 10,
            fillColor: "#6F42C1",
            color: "#155724",
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        }
    },
    {
        url: './geojson/gestion.geojson',
        layerName: 'Capa GeoJSON 3',
        style: {
            radius: 10,
            fillColor: "#E83E8C",
            color: "#155724",
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        }
    }
];

// Cargar capas GeoJSON según la configuración
geojsonConfigs.forEach(config => {
    loadGeoJSON(config.url, config.layerName, layerControl, config.style);
});

const puntosFijos = [
    {
        coords: [-13.51634, -71.97789],
        titulo: 'Catedral de Cuzco',
        descripcion: 'La Catedral de Cuzco, construida entre los siglos XVI y XVII, es una obra maestra del Barroco Andino situada en la Plaza de Armas. Destaca por su imponente fachada de piedra y su interior, decorado con altares de pan de oro y una valiosa colección de arte cusqueño. Entre sus obras más famosas está "La Última Cena" de Marcos Zapata. Esta catedral fusiona lo inca y lo europeo, representando el mestizaje cultural y la espiritualidad de la época colonial',
        imagen: 'https://www.inkanmilkyway.com/wp-content/uploads/2022/10/catedral-del-cusco-peru-4.jpg'
    },
    {
        coords: [-13.67460, -71.67780],
        titulo: 'Iglesia de San Pedro Apóstol de Andahuaylillas',
        descripcion: 'Conocida como la "Capilla Sixtina de América", esta iglesia del siglo XVII maravilla con sus frescos que cubren techos y paredes. El altar mayor, tallado y dorado, complementa su órgano tubular, uno de los más antiguos de Sudamérica. Su decoración combina simbolismo andino y cristiano, reflejando el mestizaje cultural del Barroco Andino. Situada en Andahuaylillas, es una parada imprescindible para admirar su riqueza artística y espiritual',
        imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/fa/95/74/vista-hacia-el-retablo.jpg?w=900&h=500&s=1'
    },
    {
        coords: [-13.69109, -71.64090],
        titulo: 'Templo de San Juan Bautista de Huaro',
        descripcion: 'Este templo del siglo XVI es célebre por los frescos de Tadeo Escalante, que representan el Juicio Final con un estilo barroco cargado de simbolismo andino. Su altar mayor, en pan de oro, y sus techos tallados reflejan la maestría artesanal de la época. Situado en un entorno tranquilo, el templo ofrece una experiencia espiritual íntima y es una joya del Barroco Andino poco conocida',
        imagen: 'https://www.fundacionendesa.org/content/dam/fundacion-endesa-com/contribucion/noticias/2017/10/TemploSanJuanBautista-3.jpg'
    },
    {
        coords: [-13.68744, -71.63540],
        titulo: 'Capilla de la Virgen Purificada de Canincunca',
        descripcion: 'Ubicada junto a la laguna de Urcos, esta pequeña capilla del siglo XVII destaca por su interior vibrante, con frescos que mezclan motivos cristianos y andinos. Dedicada a la Virgen Purificada, su altar principal refleja la devoción local y el sincretismo religioso. Rodeada de un paisaje sereno, la capilla es un punto especial en la ruta del Barroco Andino, combinando arte, espiritualidad y naturaleza',
        imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d2/19/e1/vista-desde-el-coro.jpg?w=900&h=500&s=1'
    }
];

// Añade los puntos al mapa con popups personalizados
puntosFijos.forEach(punto => {
    const popupContent = `
        <h3>${punto.titulo}</h3>
        <p>${punto.descripcion}</p>
        <img src="${punto.imagen}" alt="${punto.titulo}" style="width:100%; height:auto;" />
    `;

    L.marker(punto.coords)
        .bindPopup(popupContent)
        .addTo(map);
});
// Contenedor de coordenadas
const coordinatesDiv = document.getElementById('coordinates');

// Escucha el evento 'mousemove' para mostrar las coordenadas del puntero
map.on('mousemove', (e) => {
    const { lat, lng } = e.latlng;
    coordinatesDiv.textContent = `Latitud: ${lat.toFixed(5)}, Longitud: ${lng.toFixed(5)}`;
});

// Escucha el evento 'mouseout' para limpiar las coordenadas cuando el puntero sale del mapa
map.on('mouseout', () => {
    coordinatesDiv.textContent = 'Mueve el cursor sobre el mapa para ver las coordenadas';
});