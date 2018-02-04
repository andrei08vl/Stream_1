var i = 0; //we need a variable for counting
	
// Change Image
function slide_head_img(){
	
/* We have 5 pictures
	"jonas_brothers_top0.jpg";
	"jonas_brothers_top1.jpg";
	"jonas_brothers_top2.jpg";
	"jonas_brothers_top3.jpg";
	"jonas_brothers_top4.jpg";
*/
	if(i < 4){
	    i++; 
	} else { 
    	i = 0;//it returns to the beginning
	}
	/*For pictures with different names we can use an array or object
	and post it the value*/
	document.getElementById("JB_top_picture").src ="img/jonas_brothers_top"+i+".jpg";
	// Run function every 300000 miliseconds(5 minutes)
	setTimeout("slide_head_img()",300000);
	
}
/*Because the script does not load at the same time as the web page
  we use the 'onload' event*/
