
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = handleSubmit;
}

handleSubmit = () =>{
    var forms = document.forms["myForm"]
    var fname = forms["firstname"]
    var lname = forms["lastname"]
    var gender = forms["gender"]
    var bday = forms["bday"]
    var email = forms["email"]
    var username = forms["username"]
    var password = forms["password"]
    var Re_password = forms["re-password"]

    return validate(password.value , Re_password.value)
}

validate = (password, Re_password) =>{
    if(password == Re_password){
        return true;
    }else{
        alert("Wrong your password")
        return false;
    }
}