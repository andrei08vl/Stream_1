/* Pictures */

var pictures=[];
	pictures=JSON.parse(localStorage.getItem("pictures")); 

function add_picture(){
	if(pictures.value===null){
     
	localStorage.setItem('pictures','[]');
 
     
	}else{
     
	pictures=JSON.parse(localStorage.getItem('pictures'));
	}
	var push={}
	var picture=document.getElementById("picture").value;

	/* The value of input type "file" is e.g. "C:\\fakepath\\file name.file format"
	slice method is used to take a slice from string starting at the selected index location */
	push.picture_name=picture.slice(12);

	/*  Unshift method add a new element at the at the beginning of an array/object */
	pictures.unshift(push);
	/* Data is stored after in the localStorage */
	localStorage.setItem('pictures',JSON.stringify(pictures));
	push={};
	}

function show_pictures(){
      
	var p; 
    var img="";
	
    img+="<div id='box_media'>";
    for(p in pictures){
		
    img+="<div class='box_img'>";
    img+="<button type='button' class='button_img' onclick='deletepicture("+p+");send_picture_tophpfile();'>X</button>";
    img+="<img width='100%' src='../files/pictures/"+pictures[p].picture_name+"' alt='"+pictures[p].picture_name+"'/>";
    img+="</div>";
	
    }
    img+="</div>";
      
      document.getElementById("pic").innerHTML =img;
      
}

show_pictures();

function deletepicture(p){
    var path=pictures[p].picture_name;
	/* The location of the picture is saved in localStorage to be transmitted to the server */
    localStorage.setItem('remove_path',JSON.stringify('../files/pictures/'+path));
   	
	/* Splice method si used to remove an element from object  without leaving gaps in the array */
	pictures.splice(p,1);
	/* Update admin media page */
	show_pictures();

	/* Updated information is saved in localStorage and after updated the server database_file */
	localStorage.setItem('pictures',JSON.stringify(pictures));

}

/* Videos */

var videos=[];
 videos=JSON.parse(localStorage.getItem("videos")); 

function add_video(){
	
	if(videos.value===null){
     
	localStorage.setItem('videos','[]');
 
     
	}else{
     
	videos=JSON.parse(localStorage.getItem('videos'));
	}
	var push={};
	var video=document.getElementById("videoclip").value;

	/* The value of input type "file" is e.g. "C:\\fakepath\\file name.file format"
	slice method is used to take a slice from string starting at the selected index location */
	push.video_name=video.slice(12);

	/*  Unshift method add a new element at the at the beginning of an array/object */
	videos.unshift(push);
	/* Data is stored after in the localStorage */
	localStorage.setItem('videos',JSON.stringify(videos));
	push={};
}

function show_videos(){
      
	var v; 
    var vid="";
    vid +="<div id='box_video'>";
    for(v in videos){
   
    vid+=" <div class='box_videoclip'>";  
    vid+="<button  class='btn button_img' type='submit' onclick='deletevideo("+v+");send_video_tophpfile();'>X</button>";
    vid+="<video width='300' height='180' controls>";
	vid+="<source src="+videos[v].video_name+" type='video/mp4'></video>";
	
    vid+="</div>";
    }
	vid+="</div>";
   
      
      document.getElementById("vid").innerHTML =vid;
      
}

show_videos();

function deletevideo(v){
	
    var path=videos[v].video_name;
	/* The location of the video is saved in localStorage to be transmitted to the server */
    localStorage.setItem('remove_path',JSON.stringify('../files/videos/'+path));
   	
	/* Splice method si used to remove an element from object  without leaving gaps in the array */
	videos.splice(v,1);
	/* Update admin media page */
	show_videos();

	/* Updated information is saved in localStorage and after updated the server database_file */
	localStorage.setItem('videos',JSON.stringify(videos));

}

/* YouTube videos */

var youtube=[];
 youtube=JSON.parse(localStorage.getItem("youtube")); 

function add_youtube_video(){
	
	if(youtube.value===null){
     
	localStorage.setItem('youtube','[]');
 
     
	}else{
     
	videos=JSON.parse(localStorage.getItem('youtube'));
	}
	var push={};
	var video=document.getElementById("youtube").value;

	/* The value of input type "text" is e.g. "https://youtu.be/Fah5ElxSh6g"
	slice method is used to take a slice from string starting at the selected index location 
	the sliced string is from e.g "Fah5ElxSh6g"*/
	push.video_name=video.slice(17);

	/*  Unshift method add a new element at the at the beginning of an array/object */
	youtube.unshift(push);
	/* Data is stored after in the localStorage */
	localStorage.setItem('youtube',JSON.stringify(youtube));
	show_youtube_videos();
	push={};
}

function delete_youtubevideo(v){
	
    var path=videos[v].video_name;

   	
	/* Splice method si used to remove an element from object  without leaving gaps in the array */
	youtube.splice(v,1);
	/* Update admin media page */
	show_youtube_videos();

	/* Updated information is saved in localStorage and after updated the server database_file */
	localStorage.setItem('youtube',JSON.stringify(youtube));

}

function show_youtube_videos(){
      
	var v; 
    var vid="";
    vid +="<div id='box_video'>";
    for(v in youtube){
    /* to be able to view YouTube videos the embedded link must be used */
    vid+=" <div class='box_videoclip'>";  
    vid+="<button  class='btn button_img' type='submit' onclick='delete_youtubevideo("+v+");send_video_tophpfile();'>X</button>";
    vid+="<iframe width='300' height='180' src='https://www.youtube.com/embed/"+youtube[v].video_name+"' frameborder='0' allow='autoplay;";
	vid+="encrypted-media' allowfullscreen></iframe>";
	
    vid+="</div>";
    }
   vid+="</div>";
      
      document.getElementById("tube").innerHTML =vid;
      
}

show_youtube_videos();


