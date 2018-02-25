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
	/*Adjust the background for each picture*/
	var background=["#9d9797","white","black","#110706","#242828"];
	
    document.body.style.backgroundColor =background[i];
	// Run function every 60000 miliseconds(1 minutes)
	setTimeout("slide_head_img()",60000);
	
}

