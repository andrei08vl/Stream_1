var pictures=JSON.parse(localStorage.getItem('pictures'));

/* When a picture is clicked it will be the first picture from modal slider */
function first_slide(i){
 	
	var carusel=" ";
	
	/* For the first picture just right arrow */
	if(i===0){
		
	carusel+="<img src='../files/pictures/"+pictures[i].picture_name+"' width='100%'>";
	carusel+="<a href='#' class='right carousel-control'><span onclick='slider("+i+"+1)' ";
	carusel+="class='glyphicon glyphicon-chevron-right'></span></a>";
		
	}
		else{

	carusel+="<img src='../files/pictures/"+pictures[i].picture_name+"' width='100%'>";
	carusel+="<a href='#' class='right carousel-control'><span onclick='slider("+i+"+1)' ";
	carusel+="class='glyphicon glyphicon-chevron-right'></span></a>";
	carusel+="<a href='#' class='left carousel-control'><span onclick='slider("+i+"-1)' ";
	carusel+="class='glyphicon glyphicon-chevron-left'></span></a>";
	}
		
	document.getElementById("slide").innerHTML=carusel;

}

function slider(i){
	
	if(i < pictures.length){
	   carusel(i);
	
	}
	/* When 'i' it's bigger than pictures length will reset */
	else{
	carusel(0);
	}
}