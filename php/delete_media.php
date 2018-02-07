<?php
$data=$_POST['data'];
/* To delete a file is being used unlink method */
unlink($data);
?>