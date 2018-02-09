function post_events(){
	
	var post_ev=JSON.parse(localStorage.getItem('events'));
	
	var e;
	
	var events=" ";
	
	for(e in events){
		
		events += "<div><h1>"+events[e].event_type+"</h1><p>"+events[e].event_description+"</p><br/>";
		events += "<p><span>"+events[e].event_date+"</span>-"+event[e].event_time+"</p>div>";
		
		
		
		
	}
	document.getElementById("events_plans").innerHTML =events;
}

 post_events();