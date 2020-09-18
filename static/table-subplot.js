//Plotly.d3.csv("Happiness.csv", function(err, rows){
  Plotly.d3.json("/data-candle", function(err, rows){
    //function unpack(rows, key) {
    //  return rows.map(function(row) { return row[key]; });
    //  }

      // header values
      //var headerNames = Plotly.d3.keys(rows[0]);
      var headerValues = ["Year","City","State","EPRank","IERank","CERank"];
      //var headerValues = [headerNames[1],headerNames[2],headerNames[3],
      //                    headerNames[4], headerNames[5],headerNames[6]];
      //console.log(headerNames);
      //console.log(headerValues);
    
      // cell values
      var cellArray = [];
      var YearValues = [];
      var CityValues = [];
      var StateValues = [];
      var EPValues = [];
      var IEValues = [];
      var CEValues = [];

      for (i = 0; i < rows.length; i++) {
      //for (i = 0; i < headerValues.length; i++) {
        //cellValue = unpack(rows, headerValues[i]);
        //console.log(cellValue);
        //cellValues[i] = cellValue;
        YearValues[i] = rows[i][1];
        CityValues[i] = rows[i][2];
        StateValues[i] = rows[i][3];
        EPValues[i] = rows[i][4];
        IEValues[i] = rows[i][5];
        CEValues[i] = rows[i][6];
        //console.log(cellValues);
      }
      cellArray[0] = YearValues;
      cellArray[1] = CityValues;
      cellArray[2] = StateValues;
      cellArray[3] = EPValues;
      cellArray[4] = IEValues;
      cellArray[5] = CEValues;
      console.log(cellArray);

      // create table
      var table = {
        type: 'table',
        columnwidth: [300,450,350,350,350,350],
        columnorder: [1,2,3,4,5,6],
        header: {
          values: headerValues,
          align: "center",
          line: {width: 1, color: 'rgb(35, 75, 50)'},
          fill: {color: ['rgb(155, 150, 280)']},
          font: {family: "Arial", size: 12, color: "white"}
        },
        cells: {
          values: cellArray,
          align: ["center", "center"],
          line: {color: "black", width: 1},
          fill: {color: ['rgb(220, 183, 288)', 'rgba(208, 202, 209, 0.65)']},
          font: {family: "Arial", size: 11, color: ["black"]}
        },
        xaxis: 'x',
        yaxis: 'y',
        domain: {x: [0,0.4], y: [0,1]}
      }

    
      // create 1st plot
      var trace1 = {
        x: YearValues,
        y: EPValues,
        //x: unpack(rows, 'Year'),
        //y: unpack(rows, 'EPRank'),
        xaxis: 'x1',
        yaxis: 'y1',
        mode: 'lines',
        line: {width: 2, color: 'Red'},
        name: 'Emotional & Physical Well-Being Rank'
      }
      // create 2nd plot
      var trace2 = {
        x: YearValues,
        y: IEValues,
        //x: unpack(rows, 'Year'),
        //y: unpack(rows, 'IERank'),
        xaxis: 'x2',
        yaxis: 'y2',
        mode: 'lines',
        line: {width: 2, color: 'Green'},
        name: 'Income & Employment Rank'
      }
    
      // create 3rd plot
      var trace3 = {
        x: YearValues,
        y: CEValues,
        //x: unpack(rows, 'Year'),
        //y: unpack(rows, 'CERank'),
        xaxis: 'x3',
        yaxis: 'y3',
        mode: 'lines',
        line: {width: 2, color: 'Blue'},
        name: 'Community and Environment Rank'
      }
    
      var data = [table,trace1,trace2,trace3]
    
      // define subplot axes
      var axis = {
        showline: true,
        zeroline: false,
        showgrid: true,
        mirror:true,
        ticklen: 4,
        gridcolor: '#ffffff',
        tickfont: {size: 10},
      }
    
      var axis1 = {domain: [0.5, 1.5], anchor: 'y1', showticklabels: false}
      var axis2 = {domain: [0.5, 1], anchor: 'y2', showticklabels: false}
      var axis3 = {domain: [0.5, 1], anchor: 'y3', tickformat: 'd'}
      var axis4 = {domain: [0.66, 0.98], anchor: 'x1', hoverformat: '.2f'}
      var axis5 = {domain: [0.34, 0.64], anchor: 'x2', hoverformat: '.2f'}
      var axis6 = {domain: [0.0, 0.32], anchor: 'x3', hoverformat: '.2f'}
    
      // define layout
      var layout = {
        title: "The Happiness Index for Top 5 Cities in the USA from 2017-2020",
        plot_bgcolor: 'rgba(228, 222, 249, 0.65)',
        showlegend: false,
        xaxis1: Object.assign(axis1,axis),
        xaxis2: Object.assign(axis2,axis),
        xaxis3: Object.assign(axis3,axis),
        yaxis1: Object.assign(axis4,axis),
        yaxis2: Object.assign(axis5,axis),
        yaxis3: Object.assign(axis6,axis),
      }
    
      Plotly.newPlot('plot', data, layout);
    
  });