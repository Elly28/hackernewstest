<?php

class Helper{

    function db_connector(){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "items";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $database);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

    }

    function curl_helper($url){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;

    }

    function array_adder($out_array, $input_array){
        for ($x = 0; $x < sizeof($input_array); $x++){
            array_push($out_array, $input_array[$x]);
        }

        return $out_array;
    }
}