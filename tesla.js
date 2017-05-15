
    var sub = document.getElementById('form-submit');
    var email = document.getElementById('email');
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
   
   var e = document.getElementById("sel");
 
 
       sub.addEventListener('click', function(){

        console.log(email.value,fname.value,lname.value,e.value);

       });
