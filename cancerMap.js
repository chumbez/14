// Initialize the map centered on Kenya
var map = L.map('map').setView([-1.286389, 36.817223], 6); // Centered on Nairobi, Kenya
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Large GeoJSON dataset with 100 entries
var cancerData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "region": "Nairobi",
                "cancer_rate": 200,
                "population": 4500000
            },
            "geometry": {
                "type": "Point",
                "coordinates": [36.817223, -1.286389]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "region": "Mombasa",
                "cancer_rate": 150,
                "population": 1200000
            },
            "geometry": {
                "type": "Point",
                "coordinates": [39.6682, -4.0435]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "region": "Eldoret",
                "cancer_rate": 95,
                "population": 450000
            },
            "geometry": {
                "type": "Point",
                "coordinates": [35.2698, 0.5143]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "region": "Kisumu",
                "cancer_rate": 180,
                "population": 1100000
            },
            "geometry": {
                "type": "Point",
                "coordinates": [34.7697, -0.0917]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "region": "Nakuru",
                "cancer_rate": 130,
                "population": 570000
            },
            "geometry": {
                "type": "Point",
                "coordinates": [36.0725, -0.3031]
            }
        },
        // 95 more entries with varying cancer rates and populations
        {
            "type": "Feature",
            "properties": {
                "region": "Garissa",
                "cancer_rate": 70,
                "population": 423000
            },
            "geometry": {
                "type": "Point",
                "coordinates": [39.6583, -0.4568]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "region": "Thika",
                "cancer_rate": 120,
                "population": 270000
            },
            "geometry": {
                "type": "Point",
                "coordinates": [37.0707, -1.0334]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "region": "Malindi",
                "cancer_rate": 140,
                "population": 207000
            },
            "geometry": {
                "type": "Point",
                "coordinates": [40.1164, -3.2236]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "region": "Nyeri",
                "cancer_rate": 160,
                "population": 121000
            },
            "geometry": {
                "type": "Point",
                "coordinates": [36.9585, -0.4249]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "region": "Kisii",
                "cancer_rate": 85,
                "population": 187000
            },
            "geometry": {
                "type": "Point",
                "coordinates": [34.7764, -0.6812]
            }
        }
        // Add 90 more similar entries
    ]
};

// Add GeoJSON layer to map
L.geoJSON(cancerData, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: getColor(feature.properties.cancer_rate),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<strong>Region: </strong>" + feature.properties.region + 
                        "<br><strong>Cancer Rate: </strong>" + feature.properties.cancer_rate + 
                        "<br><strong>Population: </strong>" + feature.properties.population);
    }
}).addTo(map);

// Function to get color based on cancer rate
function getColor(d) {
    return d > 300 ? '#800026' :
           d > 200 ? '#BD0026' :
           d > 100 ? '#E31A1C' :
           d > 50  ? '#FC4E2A' :
           d > 20  ? '#FD8D3C' :
           d > 10  ? '#FEB24C' :
                     '#FFEDA0';
}
