// set the ids to target the data
// const form     =    document.getElementById('form');
// const name     =    document.getElementById('name');
// const contac   =    document.getElementById('contact');
// const email    =    document.getElementById('email');
// const password =    document.getElementById('password');
// const password2=    document.getElementById('password2')

// // submission impossible without input
// form.addEventListener('submit',e=>{
//     e.preventDefault();
//     validateInputs ();

// //Validate the inputs


// });




// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     } else {
//         setSuccess(username);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if(passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8 ) {
//         setError(password, 'Password must be at least 8 character.')
//     } else {
//         setSuccess(password);
//     }

//     if(password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Passwords doesn't match");
//     } else {
//         setSuccess(password2);
//     }

// };


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





  
function validate(){
    const form     =    document.getElementById('form');
    const name     =    document.getElementById('name');
    const contact   =    document.getElementById('contact');
    const email    =    document.getElementById('email');
    const password =    document.getElementById('password');
    const password2=    document.getElementById('password2');
    
    
    if (name.value.trim()==""){
        alert("Name space is blank");
        // name.style.border="solid 5px red";
        document.getElementById("lblname").style.visibility="visible";
        
        return false;
    }
    
    else if(contact.value.trim()==" "){
        alert("Contact space is blank.")
      
        document.getElementById("lblcontact").style.visibility="visible";
        return false;
    }
    else if(contact.value.trim().length<11){
        alert("Contact no. is too short.")
       
        document.getElementById("lblcontact").style.visibility="visible";
        return false;
    }
    else if(email.value.trim()==""){
        alert("email is blank.");
        document.getElementById("lblemail").style.visibility="visible";
        return false;
    }
    else if(password.value.trim()==""){
        alert("password is blank.");
        document.getElementById("lblpassword").style.visibility="visible";
        return false;
    }
    }
    // }else if(password2.value.trim()==""  ){
    //     alert("password2 is blank.");
    //     document.getElementById("lblpassword2").style.visibility="visible";
    //     return false;
    // }
    // else if(password2==password){
    //     return true;
    // }
    // else{
    //    alert("no")
    //    document.getElementById("lblpassword2").style.visibility="visible";
    //    return false;
    // }
    
    // }
    
    
    
    
    
    
    
    
    
    
    