//localStorage.setItem('pictures','[]');
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

/* The value of input type "file" is e.g. "C:\\fakepath\\file name.file format
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
   
    for(p in pictures){
   
    img+=" <div class='col-md-4'><div class='thumbnail'>";  
   
    img+= "<img src=\'../file/pictures/"+pictures[p].picture_name+"\' alt=\'"+pictures[p].picture_name+"\'class=\'img-responsive img-rounded\'>";
   
    img+="</div></div>";
    }
   
      
      document.getElementById("pic").innerHTML =img;
      
}

show_pictures();

function deletepicture(p){
    var path=pictures[p].picture_name;
	/* The location of the picture is saved in localStorage to be transmitted to the server */
    localStorage.setItem('picture_path',JSON.stringify('../file/pictures/'+path));
   	
	/* Splice method si used to remove an element from object  without leaving gaps in the array */
pictures.splice(p,1);
	/* Update admin media page */
show_pictures();

	/* Updated information is saved in localStorage and after updated the server database_file */
	localStorage.setItem('pictures',JSON.stringify(pictures));

}

