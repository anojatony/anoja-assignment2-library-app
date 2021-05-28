
// login

let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error=document.getElementById("error");
let pwderror=document.getElementById("pwderror");
let checkbox=document.getElementById("checkbox");

function validate(){
    let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,4})(\.[a-z]{2,4}?)$/;
    if(email.value.trim() ==""){
        email.style.border="1px solid red";
        error.innerHTML="** Please Enter Your Email";
        error.style.color="grey";
        error.style.fontWeight="bolder";
        return false;
    }
    else if(regexp.test(email.value)==false){
        error.innerHTML="** Strictly follow the email format (eg: abc@gmail.com)";
        email.style.border="1px solid red";
        error.style.color="grey";
        error.style.textAlign="justify";
        error.style.fontWeight="bolder";
        return false;
    }
    else if(pwd.value.trim() ==""){
        pwd.style.border="1px solid red";
        pwderror.innerHTML="** Please Enter Your Password";
        pwderror.style.color="grey";
        pwderror.style.fontWeight="bolder";
        return false;
    }
    else if(checkbox.checked == false){
        alert("Please Confirm");
       return false;
    }
    
        else{
            error.innerHTML="";
            pwderror.innerHTML="";
            return true;
       }
   }
   


