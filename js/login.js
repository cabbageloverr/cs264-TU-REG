function search(){
	let searchUserName = document.getElementById("searchUserName").value;
	let searchPassword = parseInt(document.getElementById("searchPassword").value);
	let targetUrl = window.location.pathname;
	let querry = '';
	if(searchUserName){
		querry += '&name=' + searchUserName;
	}
	if(searchPassword){
		querry += '&pass=' + searchPassword;
	}
	if(querry){
		querry = querry.replace("&","?")
		window.location.href = targetUrl+querry;
	}
	else window.location.href = targetUrl;

}

function getParameterByName(name, url = window.location.search) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let name = getParameterByName('name');
let pass = getParameterByName('pass');

function loadDoc(){

	const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
  	if(name==null)
  	{
  		alert("Plase input your username");
  	}
  	if(pass==null)
  	{
  		alert("Plase input your password");
  	}
  	let data = this.responseText;

  	let n_id = data.match(/"id":"([^"]+)"/ig);
  	let n_name = data.match(/"username":"([^"]+)"/ig);
  	let n_pass = data.match(/"password":"([^"]+)"/ig);
  	let n_status = data.match(/"status":"([^"]+)"/ig);
  	
  	for(n in n_id )
  	{
  		let name_id = n_id[n].match(/"id":"([^"]+)"/);
  		
  		let name_only = n_name[n].match(/"username":"([^"]+)"/);
  		let num_name = name_only[1].search(name);
  		
  		let pass_only = n_pass[n].match(/"password":"([^"]+)"/);
  		let num_pass = pass_only[1].search(pass);
  		
  		let status_only = n_status[n].match(/"status":"([^"]+)"/);

  		if(num_name>=0&&num_pass>=0){
   		
   			if(status_only[1]=="Student"){
   			window.location.href = "http://localhost:8080/Shomepage?id="+name_id[1];
   			
   			}
   			else if(status_only[1]=="Teacher"){
   			window.location.href = "http://localhost:8080/Thomepage?id="+name_id[1];
   				
   			}
   			else if(status_only[1]=="Officer"){
   			window.location.href = "http://localhost:8080/Offhomepage?id="+name_id[1];
   			
   			}
    	
  		}

  	}

  }
  xhttp.open("GET", "res/dataLogin.json");
  xhttp.send();
}
