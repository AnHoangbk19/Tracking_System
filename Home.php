<?php

use function PHPSTORM_META\type;

class Home extends controller{

    public function viewHome(){
        // $productsByType = $this->model('ProductsModel')->getProductByType();
        // $data = $this->model("mainModel")->getdata();
        $this->view("home", []);
    }
    public function getLiveChartData(){
        // echo "aaaaaaaaaaaaaaaaaaa";
        $temp = $this->model("mainModel")->getdata();
        $humi = $this->model("mainModel")->gethumi();
        $fixdata = [];
        $restemp= "";
        foreach ($temp as $d){
            
            $restemp = $restemp. "," . $d[0];
            
        }

        $reshumi= "";
        foreach ($humi as $d){
            
            $reshumi = $reshumi. "," . $d[0];
            
        }
        // print_r($fixdata);
        // $fixdata = json_encode($fixdata);
        // print_r($data);
        // $this->view("getDataAjax", [
        //     'data' => $fixdata
        // ]);
        // $test = array(1,2,3,4,5,6,7,8,9,10);
        // print_r($data);
        // $x = json_encode($fixdata);
        
        // print_r($fixdata);
        // echo $fixdata;
        echo $restemp . "|" . $reshumi;
    }
}
?>

<!-- echo '<pre>';
    print_r($data);
    die; -->