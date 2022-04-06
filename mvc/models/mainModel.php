<?php
class mainModel extends db {
    private function _query($sql)
    {
        return mysqli_query($this->connect, $sql);
    }
    public function getdata(){
        $sql = "SELECT temp FROM (SELECT * FROM `temp` ORDER BY ID DESC LIMIT 21) Var1 ORDER BY ID ASC";
        $data = $this->_query($sql);
        $array_data = [];
        while ($row = mysqli_fetch_row($data)){
            array_push($array_data,$row);
        }
        // print_r($array_data);
        // echo "<script>console.log('".$array_data."') </script>";
        return $array_data;
    }
    public function gethumi(){
        $sql = "SELECT humi FROM (SELECT * FROM `humi` ORDER BY ID DESC LIMIT 21) Var1 ORDER BY ID ASC";
        $data = $this->_query($sql);
        $array_data = [];
        while ($row = mysqli_fetch_row($data)){
            array_push($array_data,$row);
        }
        // print_r($array_data);
        // echo "<script>console.log('".$array_data."') </script>";
        return $array_data;
    }
}
?>