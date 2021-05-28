//signup

let cit =document.getElementById("cit");
let citerror=document.getElementById("citerror");
let citi =document.getElementById("citi");
let citierror=document.getElementById("citierror");
let ph=document.getElementById("ph");
let pherror=document.getElementById("pherror");
let ad=document.getElementById("ad");
let aderror=document.getElementById("aderror");
let city=document.getElementById("city");
let zip=document.getElementById("zip");
let ziperror=document.getElementById("ziperror");
let cityerror=document.getElementById("cityerror");
let stat = document.getElementById("stat");
let checkboxz=document.getElementById("checkboxz");
let password = document.getElementById("password");

function signvalidate(){
    let regcity= /^[A-Za-z\s]+$/;
    let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,4})(\.[a-z]{2,4}?)$/;
    let strong = new RegExp("^(?=.*[!@#&()$^*–:;])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,15}).*$", "g");
    let regph=/^([0-9]{3})[\s-. ]?([0-9]{3})[\s-. ]?([0-9]{4})$/;
    let regad= /^[A-Za-z0-9\s,/\.-]+$/;
    let regzip=/^[0-9]{6}$/;

    if(cit.value.trim() ==""){
        cit.style.border="1px solid red";
        citerror.innerHTML="** Please Enter Your First Name";
        citerror.style.color="grey";
        citerror.style.fontWeight="bolder";
        return false;
    }
    else if(regcity.test(cit.value)==false){
         cit.style.border="1px solid red";
         citerror.innerHTML="** Only alphabets are allowed ";
         citerror.style.color="grey";
         citerror.style.fontWeight="bolder";
         return false;
    }   
    else if(citi.value.trim() ==""){
        citi.style.border="1px solid red";
        citierror.innerHTML="** Please Enter Your Last Name";
        citierror.style.color="grey";
        citierror.style.fontWeight="bolder";
        return false;
    }
    else if(regcity.test(citi.value)==false){
         citi.style.border="1px solid red";
         citierror.innerHTML="** Only alphabets are allowed";
         citierror.style.color="grey";
         citierror.style.fontWeight="bolder";
         return false;
    }   
    else if(email.value.trim() ==""){
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
    else if(password.value.trim() ==""){
            password.style.border="1px solid red";
            pwderror.innerHTML="** Please Enter Your Password";
            pwderror.style.color="grey";
            pwderror.style.fontWeight="bolder";
            return false;
        }  
    else if(strong.test(password.value)==false) {
                pwderror.style.color="grey";
                pwderror.style.fontWeight="bolder";
                pwderror.innerHTML="**Password should contain minimum 8 characters with at least one uppercase, lowercase, special characters & digits.";
                pwderror.style.textAlign="justify";
                return false;
            }
        else if(ph.value.trim() ==""){
                ph.style.border="1px solid red";
                pherror.innerHTML="** Please Enter Your Phone number";
                pherror.style.color="grey";
                pherror.style.fontWeight="bolder";
                return false;
            }
        else if(regph.test(ph.value)==false){
                    pherror.innerHTML="** Phone number with 10 digits are only valid";
                    ph.style.border="1px solid red";
                    pherror.style.color="grey";
                    pherror.style.textAlign="justify";
                    pherror.style.fontWeight="bolder";
                    return false;
            }  
        else if(ad.value.trim() ==""){
                ad.style.border="1px solid red";
                aderror.innerHTML="** Please Enter Your Address";
                aderror.style.color="grey";
                aderror.style.fontWeight="bolder";
                return false;
            }
        else if(regad.test(ad.value)==false){
                 ad.style.border="1px solid red";
                 aderror.innerHTML="** Address should contain only special characters (./-,)";
                 aderror.style.color="grey";
                 aderror.style.textAlign="justify";
                 aderror.style.fontWeight="bolder";
                 return false;
            }   
        else if(city.value.trim() ==""){
                city.style.border="1px solid red";
                cityerror.innerHTML="** Enter Your City name";
                cityerror.style.color="grey";
                cityerror.style.fontWeight="bolder";
                return false;
            }
        else if(regcity.test(city.value)==false){
                 city.style.border="1px solid red";
                 cityerror.innerHTML="** Only alphabets are allowed";
                 cityerror.style.color="grey";
                 cityerror.style.fontWeight="bolder";
                 return false;
            } 
    else if(stat.value ==""){
                alert("Choose your state");
                return false;
             } 
             
             if(zip.value.trim() ==""){
                zip.style.border="1px solid red";
                ziperror.innerHTML="** Enter Zip Code";
                ziperror.style.color="grey";
                ziperror.style.textAlign="justify";
                ziperror.style.fontWeight="bolder";
                return false;
            }
            else if(zip.value.length<6){
                zip.style.border="1px solid red";
                ziperror.innerHTML="**6 digits required";
                ziperror.style.color="grey";
                ziperror.style.textAlign="justify";
                ziperror.style.fontWeight="bolder";
                return false;
            }
            else if(regzip.test(zip.value)==false){
                zip.style.border="1px solid red";
                ziperror.innerHTML="** Values (0-9) are only allowed";
                ziperror.style.color="grey";
                ziperror.style.textAlign="justify";
                ziperror.style.fontWeight="bolder";
                 return false;
            } 
    else if(checkboxz.checked==false){
                alert("Please Confirm");
                return false;
            }                    
    else{
        citerror.innerHTML="";
        citierror.innerHTML="";
        error.innerHTML="";
        pwderror.innerHTML="";
        pherror.innerHTML="";
        aderror.innerHTML="";
        cityerror.innerHTML="";
        ziperror.innerHTML="";
        alert("You have signed up successfully");
        return true;
    }
}

// addbook
let tit=document.getElementById("tit");
let auth=document.getElementById("auth");
let gen=document.getElementById("gen");
let txtarea=document.getElementById("txtarea");

function addbook(){
if((tit.value.trim() !="")|| (auth.value.trim() !="")||(gen.value.trim()!="")||(txtarea.value.trim()!="")){
    alert("Book details added successfully");
    return true;
}

else{
    alert("Please fill out the required fields");
    return false;
}
}

let au=document.getElementById("au");
let textareaa=document.getElementById("textareaa");

// addauthor
function addauthor(){
    if((au.value.trim() !="")|| (textareaa.value.trim() !="")){
        alert("Author details added successfully");
        return true;
    }
    
    else{
        alert("Please fill out the required fields");
        return false;
    }
}