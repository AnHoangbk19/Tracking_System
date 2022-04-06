var xValuesHumi = ['0','','','','40','','','',80,'','','',120,'','','',160,'','','',200];
var yValuesHumi = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var humichart = new Chart("humiChart", {
  type: "line",
  data: {
    labels: xValuesHumi,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValuesHumi
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 25, max:35}}],
    },
    title: {
      display: true,
      text: "Biểu đồ nhiệt độ tại ..."
    }
  }
});



var xValues = ['0','','','','40','','','',80,'','','',120,'','','',160,'','','',200];
var yValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var chart = new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 25, max:35}}],
    },
    title: {
      display: true,
      text: "Biểu đồ độ ẩm của ..."
    }
  }
});
$(document).ready(function () {
    function fetchData() {
        $.ajax({
            url: "./Home/getLiveChartData",

            success: function (data) {
              data = data.split('|');
              // console.log(data);
                var tmp = data[0].split(",");
                var hum = data[1].split(",");

                tmp.shift();
                hum.shift();
                console.log(tmp);
                console.log(hum);
                // console.log(tmp.map(Number));
                // $('#abc').html(data);
                drawChart1(tmp.map(Number));
                drawChart2(hum.map(Number));
                
            }
        })
    }
    fetchData()
    setInterval(fetchData, 5000);
})
var count = 0;
function drawChart1 (yMatrix){
  count ++;
  newy = yMatrix[yMatrix.length - 1]
  newX = xValuesHumi[xValuesHumi.length - 1] + 10;

  yarray = humichart.data.datasets[0].data;
  // console.log(chart.options.scales.yAxes[0].ticks.max)
  // console.log(newy);
  // console.log(Math.max.apply(Math, yarray));
  if (newy > Math.max.apply(Math, yarray)){
    // console.log("here");
    humichart.options.scales.yAxes[0].ticks.max = newy + 5;
  }
  humichart.data.labels.push(newX);
  // humichart.data.labels.shift();
  // console.log(humichart.data.labels)
  humichart.data.datasets[0].data.push(newy);
  // humichart.data.datasets[0].data.shift();
  // console.log(humichart.data.datasets[0].data);
  humichart.update();
}

function drawChart2 (yMatrix){
  count ++;
  newy = yMatrix[yMatrix.length - 1]
  newX = xValues[xValues.length - 1] + 10;

  yarray = chart.data.datasets[0].data;
  // console.log(chart.options.scales.yAxes[0].ticks.max)
  // console.log(newy);
  // console.log(Math.max.apply(Math, yarray));
  if (newy > Math.max.apply(Math, yarray)){
    // console.log("here");
    chart.options.scales.yAxes[0].ticks.max = newy + 5;
  }
  chart.data.labels.push(newX);
  // chart.data.labels.shift();
  // console.log(chart.data.labels)
  chart.data.datasets[0].data.push(newy);
  // chart.data.datasets[0].data.shift();
  // console.log(chart.data.datasets[0].data);
  chart.update();
}


var xlabel = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"];
var yValues2 = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart1", {
  type: "pie",
  data: {
    labels: xlabel,
    datasets: [{
      backgroundColor: barColors,
      data: yValues2
    }]
  },
  options: {
    title: {
      display: true,
      text: "Thống kê số tháng ... "
    }
  }
});

