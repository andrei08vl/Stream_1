   /* pictures */
    var pictures=JSON.parse(localStorage.getItem("pictures"));
    var p; 
    var img=" ";
   
    img+="<div id='box_media'>";
    for(p in pictures){
   
    
    img+="<div class='box_img'><a href='#' onclick='first_slide("+p+")' data-toggle='modal' data-target='#myModal'>";
   
    img+="<img width='100%' src='../files/pictures/"+pictures[p].picture_name+"' alt='"+pictures[p].picture_name+"'/>";
	
    img+="</a></div>";
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
   
    
    vi+="<div class='box_videoclip'><video width='300' height='180' controls>";
   
    vi+="<source src='../files/videos/"+videos[v].video_name+"' type='video/mp4'>";
	
    vi+="</video></div>";
    }
    vi+="</div>";
  
	 /* YouTube videos */
    var youtube=JSON.parse(localStorage.getItem("youtube"));
    var y; 
    var vid="";
    vid +="<div id='box_video'>";
    for(y in youtube){
   
    vid+="<div class='box_videoclip'>";  
    
    vid+="<iframe width='300' height='180' src='https://www.youtube.com/embed/"+youtube[y].video_name+"' frameborder='0' allow='autoplay;";
	vid+="encrypted-media' allowfullscreen></iframe>";
	
    vid+="</div>";
    }
   vid+="</div>";
      
     
  
    
    function show_hide(content){
    if(content==pictures){
        
    document.getElementById('JB_media').innerHTML=img;
    document.getElementById('youtube_media').innerHTML="";
    
    }else if(content==videos){
        
    document.getElementById('JB_media').innerHTML=vi;
    document.getElementById('youtube_media').innerHTML=vid;
    }
}

