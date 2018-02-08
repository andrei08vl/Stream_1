/* Admin events script */

var events=[{event_type: "event_type", event_date: "event_date", event_time: "event_time", event_description: "event_description"}];

events=localStorage.getItem('events');

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

function add_event() {
	if(events.value===null){
		/* If events is null we need to set localStorage as an object '[]' */
		localStorage.setItem('events','[]');
	}else{
		/* Else events will be equal with localStorage data */
		events=JSON.parse(localStorage.getItem('events'));
	}
	var evnt={};
		/* the information submitted by the form is stored in an array */
		evnt.event_type=document.getElementById('event_type').value;
		evnt.event_date=document.getElementById('event_date').value;
		evnt.event_time=document.getElementById('event_time').value;
		evnt.event_description=document.getElementById('event_description').value;
	
    events.unshift(evnt);
	/*Update the news_dashboard data without refreshing the page*/
	show_events();
	
  
	/* Data is stored after in the html5 localStorage */
	localStorage.setItem('events',JSON.stringify(events));


}