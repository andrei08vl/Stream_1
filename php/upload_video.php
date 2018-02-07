<?php
$target_dir = "../files/videos/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
/* After the file has been sent to the server, the user is automatically redirected to the home page */
header("Location: http://".$_SERVER['HTTP_HOST']."/templates/admin_upload-media.html",true,303);
exit;
?>