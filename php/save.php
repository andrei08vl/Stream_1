<?php
/* I chose php because it is the cheapest way
	it is compatible with almost all servers and easy to understand*/
/* Data is received by php by $_POST method and stored in pos variable  */
$pos=$_POST['data'];
/* Open the file in writing mode */
$file=fopen("../files/news.js", "w");
/* In news.js is write the data */
fwrite($file,$pos);
/* It closes the file */
fclose($file);
?>