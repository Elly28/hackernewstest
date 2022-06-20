<?php
include "../lib/helper.php";

$helper = new Helper();

$conn = $helper->db_connector();
$tmp_stories = array();
$stories = array();

//get new stories from api
$newstories = $helper->curl_helper("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty");

$newstories = json_decode($newstories, true);

$tmp_stories = $helper->array_adder($tmp_stories, $newstories);

$count = sizeof($tmp_stories);

//limited to 15 new stories for performance purposes
for ($x = 0; $x < 15; $x++) {

    $output = $helper->curl_helper("https://hacker-news.firebaseio.com/v0/item/{$tmp_stories[$x]}.json?print=pretty");
    $output = json_decode($output, true);
    $stories[] = $output;
}

exit(json_encode($stories));