<?php
$pos=$_POST['data'];
$file=fopen("../file/pictures.js", "w");
fwrite($file,$pos);
fclose($file);
?>