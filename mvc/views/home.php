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
    <div class="screencover">
        <div class="leftside" id="leftside">
            <div class="leftheader">

            </div>
            <div class="leftcontainer">
                <div class="menubox">
                    <div class="menutitle">
                        <span>Điều khiển đèn giao thông</span>
                    </div>
                    <div class="listmenuchoose">
                        <div class="normalselection">
                            <div class="leftsideselection">
                                    <em class="ti-save"></em>
                                <div class="menutext">
                                    <span>Điều khiển đèn tín hiệu</span>
                                </div>
                            </div>

                        </div>
                        <div class="dropdownselection">
                            <div class="leftsideselection">
                                <em class="ti-save"></em>
                                <div class="menutext">
                                    <span>Điều khiển thời gian giao thông</span>
                                </div>
                            </div>

                        </div>
                        
                        
                    </div>
                </div>

                <div class="menubox">
                    <div class="menutitle">
                        <span>Điều khiển hệ thống</span>
                    </div>
                    <div class="listmenuchoose">
                        <div class="normalselection">
                            <div class="leftsideselection">
                                    <em class="ti-save"></em>
                                <div class="menutext">
                                    <span>Gửi nhiệt độ cho người dùng</span>
                                </div>
                            </div>

                        </div>
                        <div class="dropdownselection">
                            <div class="leftsideselection">
                                <em class="ti-save"></em>
                                <div class="menutext">
                                    <span>Gửi độ ẩm cho người dùng</span>
                                </div>
                            </div>
                            
                        </div>
                        <div class="dropdownselection">
                            <div class="leftsideselection">
                                <em class="ti-save"></em>
                                <div class="menutext">
                                    <span>Thông báo thời điểm có lượng xe cao nhất</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>


                
            </div>
        </div>





        <div class="rightside" id="rightside">
            <div class="rightheader">
                <div class="navbar">
                    <div class="leftnav">
                        <div id="menubtn" class="menuicon" onclick="changestatus()">
                            <em class="ti-menu-alt"></em>
                        </div>
                        <div class="dropdownbtn">
                            <span class="text">Trang chủ</span>
                        </div>
                        <div class=" dropdownbtn">
                            <span class="text">Ngã tư đường 3 tháng 2</span>
                            <em class="ti-close" ></em>
                        </div>
                    </div>
                    <div class="rightnav">

                    </div>
                </div>
            </div>
            <div class="rightcontainer">
                <div class="listreport">
                    <div class="infomation redcolor">
                        <span>Thời điểm có lượng xe cao nhất: 14h25</span>
                    </div>
                    <div class="infomation greencolor">
                        <span>Thời điểm có nhiệt độ cao nhất : 12h00</span>
                    </div>
                    <div class="infomation bluecolor">
                        <span>Thời điểm có độ ẩm cao nhất : 00h00</span>
                    </div>
                    
    
                </div>
                <div class="chart">
                    <canvas class="board-element" id="myChart" style="width:100%;max-width:400px; height: 300px"></canvas>
                    <canvas id="myChart1" style="width:100%;max-width:600px;height:300px"></canvas>
                </div>
                <canvas class="board-element" id="humiChart" style="width:100%;max-width:400px; height: 300px"></canvas>
                <!-- <div id="chartContainer" style="height: 370px; width:500px;"></div> -->
                <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
            </div>
            <!-- <div class="rightfooter">

            </div> -->
        </div>
    </div>
    <script src="./assets/js/animation.js"></script>
    <script src="./assets/js/chart.js"></script>
    
</body>

</html>