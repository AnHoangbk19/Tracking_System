var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [0,0,0,0,0,0,0,0,0,0,0];
// console.log(yMatrix);
// var result = y.map(function (x) { 
  // return parseInt(x, 10); 
// });
// console.log(result);
// alert(yMatrix);
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
      yAxes: [{ticks: {min: 1, max:16}}],
    },
    title: {
      display: true,
      text: "Thống kê gì đó ... "
    }
  }
});
$(document).ready(function () {
    function fetchData() {
        $.ajax({
            url: "./Home/getLiveChartData",

            success: function (data) {
                var tmp = data.split(",");
                tmp.shift();
                // console.log(tmp.map(Number));
                // $('#abc').html(data);
                drawChart(tmp.map(Number));
                
            }
        })
    }
    fetchData()
    setInterval(fetchData, 1000);
})

function drawChart (yMatrix){
  chart.data.datasets[0].data.push(yMatrix[yMatrix.length - 1]);
  chart.data.datasets[0].data.shift();
  console.log(chart.data.datasets[0].data);
  chart.update();
}