d3.csv(
	"out3.csv").then (
	function(rows) {
    console.log(rows)
		function unpack(rows, key) {
			return rows.map(function(row) {
				return row[key];
			});
		}
        scl = [[0, 'rgb(150,0,90)'],[0.125, 'rgb(0, 0, 200)'],[0.25,'rgb(0, 25, 255)'],[0.375,'rgb(0, 152, 255)'],[0.5,'rgb(44, 255, 150)'],[0.625,'rgb(151, 255, 0)'],[0.75,'rgb(255, 234, 0)'],[0.875,'rgb(255, 111, 0)'],[1,'rgb(255, 0, 0)']];
		var data = [{
            type: 'scattermapbox',
            mode: 'markers',
            text: rows.map(row=>{
              return `City: ${row.City} <br> Relative_Score: ${row.Relative_Score}`
            }),
            // text: unpack(rows, 'Total_Score'),
            lon: unpack(rows, 'Lng'),
            lat: unpack(rows, 'Lat'),
            marker: {
              color: unpack(rows, 'Relative_Score'),
              colorscale: scl,
              cmin: 0.3,
              cmax: 0.9,
              reversescale: true,
              opacity: 0.5,
              size: 10,
              colorbar:{
                thickness: 5,
                titleside: 'right',
                outlinecolor: 'rgba(68,68,68,0)',
                ticks: 'outside',
                ticklen: 3,
                shoticksuffix: 'last',
                ticksuffix: 'Total_Score',
                dtick: 0.1
              }
            },
            name: 'Happiest City: Relative_Score'
        }];
    

		var layout = {
			dragmode: "zoom",
			mapbox: { style: "open-street-map", center: { lat: 38, lon: -90 }, zoom: 3 },
			margin: { r: 0, t: 0, b: 0, l: 0 }
		};

		Plotly.newPlot("myDiv", data, layout);
	}
);
