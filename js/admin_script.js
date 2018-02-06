/* Storage object for News*/
var obj = [{title: "News_title", date: "News_date", message: "News_message"}];

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