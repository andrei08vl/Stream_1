/* Storage object for News*/
var obj = [{title: "News_title", date: "News_date", message: "News_message"}];

/* The data is get from localStorage and converted from string to JavaScript object with JSON.parse 
function and saved in obj Object*/
obj=JSON.parse(localStorage.getItem('obj'));

/* Show the news in dashboard */
function show(){
  
var txt=" ";
	 txt += "<table class='table'><thead><tr><td><strong>Title</strong></td><td><strong>Date</strong></td>";
	 txt +="<td><strong>Actions</strong></td></tr></thead>";
        for (var x in obj) {
            txt += "<tr><td>" + obj[x].title + "</td><td>"+obj[x].date+"</td>";
			txt +="<td><button onclick='deleteobj("+x+");save_newstofile();'><span class='glyphicon glyphicon-trash'></span></button>";
			txt +="<button data-toggle='modal' data-target='#edit' onclick='toedit("+x+")'><span class='glyphicon glyphicon-edit' ></button></td></tr>";
        }
        txt += "</table>" ;
        document.getElementById("news_dashboard").innerHTML = txt;
		}

show();

function addnews() {
	if(obj.value===null){
		/* If obj is null we need to set localStorage as an object '[]' */
		localStorage.setItem('obj','[]');
	}else{
		/* Else obj will be equal with localStorage data */
		obj=JSON.parse(localStorage.getItem('obj'));
	}
	var arr={};
		/* the information submitted by the form is stored in an array */
		arr.title=document.getElementById('title').value;
		arr.date=document.getElementById('date').value;
		arr.message=document.getElementById('message').value;
	
	/* Data is stored after in the Object */
	/* The push() method adds a new element at the end of an array 
	   unshift method add a new element at the at the beginning of an array
	   */
    obj.unshift(arr);
	/*Update the news_dashboard data without refreshing the page*/
	show();
	
  
	/* Data is stored after in the html5 localStorage */
	localStorage.setItem('obj',JSON.stringify(obj));


}

function deleteobj(x){
	/* Splice method si used to remove an element from object  without leaving gaps in the array 
	x is index location and '1' number of items to be removed */
	obj.splice(x,1);

	/*Update the news_dashboard data without refreshing the page*/
	show();
	/* Data is stored after in the localStorage */
		localStorage.setItem('obj',JSON.stringify(obj));

}

function edit(x){
	
	/* The information submitted by the form is stored in an array */
	var arr={};
		arr.title=document.getElementById('edit_title').value;
		arr.date=document.getElementById('edit_date').value;
		arr.message=document.getElementById('edit_message').value;
	/* The array is stored in the same location of obj */
	obj[x] = arr;
	
	/*Update the news_dashboard data without refreshing the page*/
	show();
	/* Data is stored after in the html5 localStorage */
	localStorage.setItem('obj',JSON.stringify(obj));

}

function toedit(x){             
       /* toedit function send the form's information based on the current id  
		*/
       document.getElementById("edit_title").value = this.obj[x].title;
       document.getElementById("edit_date").value = this.obj[x].date;
       document.getElementById("edit_message").value = this.obj[x].message;
	   
	   /*Set the onclick event with edit function based on the current id */
	   document.getElementById('button').setAttribute("onclick","edit("+x+");save_newstofile();");
}