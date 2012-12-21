google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCharts);

function drawCharts() {

  // ===========
  // = Balance =
  // ===========
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Έσοδα €6679.50');
  data.addColumn('number', 'Έξοδα €6559.02');
  data.addRows([
    ['2012', 6679.50, 6559.02],
  ]);

  var options = {
    // title: 'Hackerspace.gr Budget',
    axisTitlesPosition: 'none',
    legend: { position: 'top' },
    hAxis: { viewWindow: { min: 0 } },
    vAxis: { textPosition: 'none' },
    chartArea: { left: 10, top: 30, width: "100%", height: "60%"},
    fontSize: 16
  };

  var chart = new google.visualization.BarChart(document.getElementById('balance_div'));
  chart.draw(data, options);

  // ============
  // = Expenses =
  // ============
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Item');
  data.addColumn('number', 'Cost');
  data.addRows([
    ['Ενοίκιο €3300', 3300],
    ['Ρεύμα €1815', 1815],
    ['Εξοπλισμός €729', 729],
    ['Propaganda €300', 300],
    ['Προμήθειες €201.39', 201.39],
    ['Internet €161.26', 161.26],
    ['Νερό €45', 45],
    ['Συναλλαγές (paypal, bank) €7.37', 7.37],
  ]);

  var options = {
    // title: 'Hackerspace.gr Budget',
    chartArea: { left: 0, top: 5, width: "100%", height: "95%"},
    fontSize: 16
  };

  var chart = new google.visualization.PieChart(document.getElementById('expenses_div'));
  chart.draw(data, options);
}
