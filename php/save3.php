<?php
$pos=$_POST['data'];
$file=fopen("../files/videos.js", "w");
fwrite($file,$pos);
fclose($file);
?>