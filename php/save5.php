<?php
$pos=$_POST['data'];
$file=fopen("../files/youtube.js", "w");
fwrite($file,$pos);
fclose($file);
?>