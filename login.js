function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
}

window.onload = loginLoad;
var users = []


function loginLoad(){
	// วิธีใช้ getParams()
	var form = document.getElementById("myLogin")
	form.onsubmit = handleSubmit
	var parameter = getParams();
	var username = parameter["username"]
	console.log(username)
	var password = parameter["password"]
	console.log(password)

	var user = {
		"username" : username,
		"password" : password
	}

	users.push(user)
	console.log(users[0])
}

handleSubmit = () =>{
	var forms = document.forms["myLogin"]
	var Input_username = forms["username"]
	var Input_password = forms["password"]

	if(Input_username.value == users[0].username && Input_password.value == users[0].password){
		alert("Logined")
		return true
	}else{
		alert("wrong your password")
		return false
	}
}

var test = 0


			