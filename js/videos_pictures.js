   /* pictures */
    var pictures=JSON.parse(localStorage.getItem("pictures"));
    var p; 
    var img=" ";
   
    img+="<div id='box_media'>";
    for(p in pictures){
   
    
    img+="<div class='box_img'>";
   
    img+="<img class='img_admin' width='100%' src='../files/pictures/"+pictures[p].picture_name+"' alt='"+pictures[p].picture_name+"'/>";
	
    img+="</div>";
    }
    img+="</div>";
	/* When you access the page, the pictures are displayed first */
    document.getElementById('JB_media').innerHTML=img;
  
  function show_hide(content){
	  
    if(content==pictures){
        
    document.getElementById('JB_media').innerHTML="img";
   
    
    }else if(content==videos){
        
    document.getElementById('JB_media').innerHTML="vi";
    
    }
}

