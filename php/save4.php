<?php
$pos=$_POST['data'];
$file=fopen("../files/events.js", "w");
fwrite($file,$pos);
fclose($file);
?>