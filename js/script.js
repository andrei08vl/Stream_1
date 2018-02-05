
function script(){
    var admin = document.getElementById('admin');
    var password = document.getElementById('password');
  
    var user = {admin:"test", password:"test"};
    
 
if(admin.value==user.admin) {
    if(password.value==user.password){
		alert("successful login");
}
else{
   alert("ussername or password are incorect");
    
}
}
else{
     alert("ussername or password are incorect");

}
}

