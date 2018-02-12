   /* pictures */
    var pictures=JSON.parse(localStorage.getItem("pictures"));
    var p; 
    var img=" ";
   
    img+="<div id='box_media'>";
    for(p in pictures){
   
    
    img+="<div class='box_img'>";
   
    img+="<img width='100%' src='../files/pictures/"+pictures[p].picture_name+"' alt='"+pictures[p].picture_name+"'/>";
	
    img+="</div>";
    }
    img+="</div>";
	/* When you access the page, the pictures are displayed first */
    document.getElementById('JB_media').innerHTML=img;
	
	 /* Videos */
    var videos=JSON.parse(localStorage.getItem("videos"));
    var v; 
    var vi=" ";
   
    vi+="<div id='box_video'>";
    for(v in videos){
   
    
    vi+="<div class='box_videoclip'><video width='300' height='180'>";
   
    vi+="<source class='img_admin' src='../files/videos/"+videos[v].video_name+" type='video/mp4'>";
	
    vi+="<div></video>";
    }
    vi+="</div>";
  
  function show_hide(content){
	  
    if(content==pictures){
        
    document.getElementById('JB_media').innerHTML="img";
   
    
    }else if(content==videos){
        
    document.getElementById('JB_media').innerHTML="vi";
    
    }
}

