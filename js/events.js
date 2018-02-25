function post_events(){
	
	var post_ev=JSON.parse(localStorage.getItem('events'));
	
	var e;
	
	var events=" ";
	
	for(e in post_ev){
		
		events += "<div><h1>"+post_ev[e].event_type+"</h1><p>"+post_ev[e].event_description+"</p><br/>";
		events += "<p><span>"+post_ev[e].event_date+"</span>-"+post_ev[e].event_time+"</p></div>";
		
		
		
		
	}
	document.getElementById("events_plans").innerHTML =events;
}

 post_events();