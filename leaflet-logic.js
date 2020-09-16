// Define arrays to hold created circle markers
var markers2017 = [];
var markers2018 = [];
var markers2019 = [];
var markers2020 = [];

// Import 2017 Data
d3.csv("happy.2017.merged.csv").then(function(happyData) {
  // Loop through the data array and create one circle for each feature
  for (var i = 0; i < happyData.length; i++) {

    // Create variable to hold lat/lon coordinates for each feature
    var plotCircles = [happyData[i].Lat, happyData[i].Lng];
        
    // Store circles
    markers2017.push(
      L.circle(plotCircles, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: "#3AFBC1",
      // Adjust radius
      radius: happyData[i]['Overall Rank'] * 500
      }).bindPopup("<h2>City: " + happyData[i].City + ", " + happyData[i].State_id + "</h2> <br> <h2>Year: 2017 </h2><h2>Overall Rank: " + happyData[i]['Overall Rank'] + "</h2> <hr> <h3>Emotional & Physical Well-Being Rank: " + happyData[i]['Emotional & Physical Well-Being Rank'] + "</h3> <br> <h3>Income & Employment Rank: " + happyData[i]['Income & Employment Rank'] + "</h3> <br> <h3>Community & Environment Rank: " + happyData[i]['Community & Environment Rank'] + "</h3>")
      );
  
  }

// Import 2018 Data
d3.csv("happy.2018.merged.csv").then(function(happyData) {
  // Loop through the data array and create one circle for each feature
  for (var i = 0; i < happyData.length; i++) {

    // Create variable to hold lat/lon coordinates for each feature
    var plotCircles = [happyData[i].Lat, happyData[i].Lng];
        
    // Store circles
    markers2018.push(
      L.circle(plotCircles, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: "#F1445B",
      // Adjust radius
      radius: happyData[i]['Overall Rank'] * 500
      }).bindPopup("<h2>City: " + happyData[i].City + ", " + happyData[i].State_id + "</h2> <br> <h2>Year: 2018 </h2><h2>Overall Rank: " + happyData[i]['Overall Rank'] + "</h2> <hr> <h3>Emotional & Physical Well-Being Rank: " + happyData[i]['Emotional & Physical Well-Being Rank'] + "</h3> <br> <h3>Income & Employment Rank: " + happyData[i]['Income & Employment Rank'] + "</h3> <br> <h3>Community & Environment Rank: " + happyData[i]['Community & Environment Rank'] + "</h3>")
    );
  
  }

// Import 2019 Data
d3.csv("happy.2019.merged.csv").then(function(happyData) {
  // Loop through the data array and create one circle for each feature
  for (var i = 0; i < happyData.length; i++) {

    // Create variable to hold lat/lon coordinates for each feature
    var plotCircles = [happyData[i].Lat, happyData[i].Lng];
        
    // Store circles
    markers2019.push(
      L.circle(plotCircles, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: "#633DFE",
      // Adjust radius
      radius: happyData[i]['Overall Rank'] * 500
      }).bindPopup("<h2>City: " + happyData[i].City + ", " + happyData[i].State_id + "</h2> <br> <h2>Year: 2019 </h2><h2>Overall Rank: " + happyData[i]['Overall Rank'] + "</h2> <hr> <h3>Emotional & Physical Well-Being Rank: " + happyData[i]['Emotional & Physical Well-Being Rank'] + "</h3> <br> <h3>Income & Employment Rank: " + happyData[i]['Income & Employment Rank'] + "</h3> <br> <h3>Community & Environment Rank: " + happyData[i]['Community & Environment Rank'] + "</h3>")
    );
  
  }

// Import 2020 Data
d3.csv("happy.2020.merged.csv").then(function(happyData) {
  // Loop through the data array and create one circle for each feature
  for (var i = 0; i < happyData.length; i++) {

    // Create variable to hold lat/lon coordinates for each feature
    var plotCircles = [happyData[i].Lat, happyData[i].Lng];
        
    // Store circles
    markers2020.push(
      L.circle(plotCircles, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: "#FAA469",
      // Adjust radius
      radius: happyData[i]['Overall Rank'] * 500
      }).bindPopup("<h2>City: " + happyData[i].City + ", " + happyData[i].State_id + "</h2> <br> <h2>Year: 2020 </h2></h2> <br> <h2>Overall Rank: " + happyData[i]['Overall Rank'] + "</h2> <hr> <h3>Emotional & Physical Well-Being Rank: " + happyData[i]['Emotional & Physical Well-Being Rank'] + "</h3> <br> <h3>Income & Employment Rank: " + happyData[i]['Income & Employment Rank'] + "</h3> <br> <h3>Community & Environment Rank: " + happyData[i]['Community & Environment Rank'] + "</h3>")
    );
  
  }


// Create base layers

// Lightmap Layer
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});
// Darkmap Layer
var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

// Create separate layer groups for each year
var year2017 = L.layerGroup(markers2017);
var year2018 = L.layerGroup(markers2018);
var year2019 = L.layerGroup(markers2019);
var year2020 = L.layerGroup(markers2020);

// Create a baseMaps object
var baseMaps = {
  "Light Map": lightmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  "2017": year2017,
  "2018": year2018,
  "2019": year2019,
  "2020": year2020
};

// Define a map object, initial view with lightmap and year2017
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4,
  layers: [lightmap, year2020]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

// Add legend (code modified from https://leafletjs.com/examples/choropleth/)
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    
    var div = L.DomUtil.create('div', 'info legend');

    div.innerHTML += "<h4>Happiest US Cities";
    div.innerHTML += '<i style="background: #3AFBC1 "></i><span>2017</span><br>';
    div.innerHTML += '<i style="background: #F1445B"></i><span>2018</span><br>';
    div.innerHTML += '<i style="background: #633DFE"></i><span>2019</span><br>';
    div.innerHTML += '<i style="background: #FAA469"></i><span>2020</span><br>';

    return div;
};

legend.addTo(myMap);

});
});
});
});