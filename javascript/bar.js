google.charts.load('current', {'packages': ['corechart','bar'], 'language': 'pt-br'});
google.charts.setOnLoadCallback(drawChartBar);
google.charts.setOnLoadCallback(drawChartPie);

function drawChartBar () {

    var data = google.visualization.arrayToDataTable([
        ['Month', 'Valor Total', 'Valor Antecipado'],
        ['Junho', 55000, 48000 ],
        ['Agosto', 125000, 102000 ],
        ['Setembro', 125000, 102000 ],
        ['Outubro', 523000, 232000 ],
        ['Novembro', 513000, 241000 ],
        ['Dezembro', 513000, 240000 ],
    ]);

    var options = {
        height: 450,
        colors: ['#091337', '#3369e7'],
        annotations: {
            alwaysOutside: true
        }    
    };

    var chart = new google.charts.Bar(document.getElementById('myChartBar'));

    chart.draw(data, options);
} 

function drawChartPie() {

    var data = google.visualization.arrayToDataTable([
      ['Effort', 'Amount given'],
      ['My all',     100],
    ]);
  
    var options = {
      pieHole: 0.5,
      pieSliceTextStyle: {
        color: 'black',
      },
     
    };
  
    var chart = new google.visualization.PieChart(document.getElementById('myChartPie'));
    chart.draw(data, options);
  }