var pictures=JSON.parse(localStorage.getItem('pictures'));

/* When a picture is clicked it will be the first picture from modal slider */
function first_slide(i){
 	
	var carusel=" ";

	carusel+="<img src='../files/pictures/"+pictures[i].picture_name+"' width='100%'>";

	document.getElementById("carusel").innerHTML=carusel;

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