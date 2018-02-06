/* Storage object for News*/
var obj = [{title: "News_title", date: "News_date", message: "News_message"}];

/* The data is get from localStorage and converted from string to JavaScript object with JSON.parse 
function and saved in obj Object*/
obj=JSON.parse(localStorage.getItem('obj'));

/* Show the news in dashboard */
function show(){
  
var txt=" ";
	 txt += "<table class='table'><thead><tr><td><strong>Title</strong></td><td><strong>Date</strong></td><td><strong>Messages</strong></td></tr></thead>";
        for (var x in obj) {
            txt += "<tr><td>" + obj[x].title + "</td><td>"+obj[x].date+"</td><td>"+obj[x].message+"</td></tr>";
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
    obj.unshift(arr);
	/*Update the news_dashboard data without refreshing the page*/
	show();
	
  
	/* Data is stored after in the html5 localStorage */
	localStorage.setItem('obj',JSON.stringify(obj));


}