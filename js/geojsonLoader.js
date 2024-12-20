export function loadGeoJSON(url, layerName, layerControl, style) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const geojsonLayer = L.geoJSON(data, {
                pointToLayer: (feature, latlng) => {
                    return L.circleMarker(latlng, style);
                },
                onEachFeature: (feature, layer) => {
                    if (feature.properties) {
                        let popupContent = "<b>Información del lugar:</b><br>";
                        for (const key in feature.properties) {
                            popupContent += `<b>${key}:</b> ${feature.properties[key]}<br>`;
                        }
                        layer.bindPopup(popupContent);
                    }
                }
            });

            // Añadir la capa al control de capas
            layerControl.addOverlay(geojsonLayer, layerName);
        })
        .catch(error => console.error(`Error al cargar ${layerName}:`, error));
}