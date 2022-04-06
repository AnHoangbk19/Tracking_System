<?php
require_once "./mvc/core/basehref.php";
$home_url = getUrl().'/';
// if (!$_SESSION['username']){
//     header("Location: " . geturl(). "/login");
// }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php
        echo "<base href='${home_url}'>";
    ?>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./assets/css/style.css">
<link rel="stylesheet" href="./assets/themify-icons/themify-icons.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<title>DashBoard</title>
   
</head>
<body>
    <div id="parent" class="test"></div>
    <div id="abc">Hello</div>
    <canvas class="board-element" id="myChart" style="width:100%;max-width:400px; height: 300px"></canvas>
    <script src="./assets/js/livechart.js"></script>
</body>

</html>