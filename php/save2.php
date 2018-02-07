<?php
$pos=$_POST['data'];
$file=fopen("../files/pictures.js", "w");
fwrite($file,$pos);
fclose($file);
?>