/* Admin events script */

var events=[{event_type: "event_type", event_date: "event_date", event_time: "event_time", event_description: "event_description"}];

function show_events(){
      
	var e; 
    var ev=" ";
   
    for(e in events){
   
	ev+="<table class='table'><thead><tr><td><strong>Event date</strong></td><td><strong>Event time</strong></td>";
	ev+="<td><strong>Event type</strong></td><td><strong>Action</strong></td></tr></thead>";
	ev+="<tr><td>"+events[e].event_date+"</td><td>"+events[e].event_time+"</td><td>"+events[e].event_type+"</td></tr>";
	ev+="</table>";
    }
   
      
      document.getElementById("admin_events").innerHTML =ev;
      
}

show_events();