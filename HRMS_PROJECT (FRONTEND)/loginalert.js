

 const email = document.getElementById('email');
 const password = document.getElementById('pwd');


 function check() {
	
	const emailValue = email.value.trim();
 	const passwordValue = password.value.trim();

     if(emailValue === ''&& passwordValue === '') {
        swal({
                      icon: 'error',
                       title: 'Oops...',
                      text: 'Complete it!',
                        
                     });
 	} 
 	else if(emailValue === '') {
        swal({
                      icon: 'error',
                       title: 'Oops...',
                      text: 'Email Can not be blank!',
                        
                     });
 	} else if (!isEmail(emailValue)) {

        swal({
            icon: 'error',
             title: 'Oops...',
            text: 'Not a valid Email!',
              
           });
 	}
 	else if(passwordValue === '') {
        swal({
            icon: 'error',
             title: 'Oops...',
            text: 'Password  Can not be blank!',  
           });
	} 

 }


	
 function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }











