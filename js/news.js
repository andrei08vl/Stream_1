function post_news(){
    
      var news=JSON.parse(localStorage.getItem('obj'));
      
        var n;
        var txt=" ";
        for(n in news){
        txt += "<div><h1>"+news[n].title+"</h1><br/>";
        txt += "<p>"+news[n].date+"</p><br>";
        txt += "<p>"+news[n].message+"</p></div>";
    }
      document.getElementById("nws").innerHTML =txt;
    
}
post_news();

