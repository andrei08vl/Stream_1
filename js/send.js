$(document).ready(function() {
  $('#contact_form').submit(function(e) {
    var name    = document.getElementById('inp_Name');
    var email   = document.getElementById('inp_Email');
    var message = document.getElementById('inp_Message');
   
    
    if (!name.value || !email.value || !message.value) {
      alert("Please check your entries");
      return false;
    } else {
       $.ajax({ 
        method: 'POST',
        url: 'https://formspree.io/jbmusic_mails@yahoo.com',
        data:$('#contact_form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
    
      alert("Message sent");
    }
  });
});