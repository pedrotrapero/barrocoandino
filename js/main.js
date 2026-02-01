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
        url: './geojson/administracion.geojson', // Ruta relativa al archivo GeoJSON
        layerName: 'Administración pública y servicios del Estado',
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
        url: './geojson/alimentacion.geojson',
        layerName: 'Alimentación y bebida (gastronomía)',
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
        url: './geojson/alojamiento.geojson',
        layerName: 'Alojamiento',
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
        url: './geojson/comercio.geojson',
        layerName: 'Comercio y servicios privados',
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
        url: './geojson/educacion.geojson',
        layerName: 'Educación',
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
        url: './geojson/movilidad.geojson',
        layerName: 'Movilidad, accesos e infraestructura',
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
        url: './geojson/naturaleza.geojson',
        layerName: 'Naturaleza y miradores (paisaje)',
        style: {
            radius: 10,
            fillColor: "#E83E8C",
            color: "#155724",
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        }
    },
        {
        url: './geojson/patrimonio.geojson',
        layerName: 'Patrimonio cultural y arqueológico',
        style: {
            radius: 10,
            fillColor: "#640808",
            color: "#155724",
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        }
    },
        {
        url: './geojson/religioso.geojson',
        layerName: 'Religioso',
        style: {
            radius: 10,
            fillColor: "#277b26",
            color: "#155724",
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        }
    },
        {
        url: './geojson/salud.geojson',
        layerName: 'Salud y bienestar',
        style: {
            radius: 10,
            fillColor: "#94bec9",
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
        titulo: 'Templo La Compañía De Jesús de Cusco',
        descripcion: 'Comenzó a construirse en 1576 sobre el templo inca Amaru Cancha, y se reconstruyó en su totalidad después de un fuerte sismo que afectó a la ciudad en 1650. De planta en forma de cruz latina, su fachada es de piedra profusamente decorada, tiene dos grandes torres y dos capillas anexas. La arquitectura del templo sirvió de modelo para otros muchos templos que se construyeron en el sur andino. En la fachada se observa una portada-retablo de tres cuerpos y tres calles, encajonado entre sus dos esbeltas torres campanario, que han servido de modelo para muchos otros templos cusqueños. Las dos torres son lisas y pulidas en su parte inferior, que contrasta con la rica decoración en la parte.En su interior conserva uno de los más imponentes Altares Mayores de madera de cedro tallada y cubierto de pan de oro, de 21 m de alto',
        imagen: 'https://www.inkanmilkyway.com/wp-content/uploads/2022/10/catedral-del-cusco-peru-4.jpg',
        enlace: 'https://maps.app.goo.gl/TQHNgashqSLFApR57'
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
         <p>
                <a href="${punto.enlace}" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline; font-weight: bold;">
                    Ver en 360º
                </a>
            </p>
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