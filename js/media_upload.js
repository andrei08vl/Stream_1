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

