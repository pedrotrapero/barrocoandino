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
