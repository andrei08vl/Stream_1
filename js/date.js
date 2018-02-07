function date(){
    /* The date object is used to post date and time in addnews form */
    var date=new Date().toUTCString();
    document.getElementById('date').value=date;
}
date();