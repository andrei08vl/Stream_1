  function show_hide(content){
	  
    if(content==pictures){
        
    document.getElementById('JB_media').innerHTML="img";
   
    
    }else if(content==videos){
        
    document.getElementById('JB_media').innerHTML="vi";
    
    }
}

var videos="<p>video</p>";
var pictures="<p>pictures</p>";