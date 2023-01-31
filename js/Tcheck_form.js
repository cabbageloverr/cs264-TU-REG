function getParameterByName(name, url = window.location.search) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let id = getParameterByName('id');
var name;

function loadDoc(){
    const xhttp1 = new XMLHttpRequest();
    xhttp1.onload = function() {
        var json = JSON.parse(this.responseText);
        for (var j = 0; j < json.length; j++)
        {
            let nameID = json[j]["id"];
            if(nameID == id)
            {
                name = json[j].user_name;
                console.log(name);
                console.log(id);
            }
        }
    }
    xhttp1.open("GET", "/getDataLogin");
    xhttp1.send();


  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {

    var json = JSON.parse(this.responseText);
    console.log(json);
    for (var j = 0; j < json.length; j++){
        for(var k = 0 ; k < json[j]["stakeholder"].length ; k++)
        {
            if(json[j]["stakeholder"][k] == name && json[j]["check"][k] == "waiting")
            {
                document.getElementById("form").innerHTML += '<th onclick="checkInfo('+ json[j]["idForm"] +')">' + json[j]["subject"] + '</th><th>' + json[j]["check"][k] + '</th>';
            }
        }
    }

  }
  xhttp.open("GET", "/getCheckInform");
  xhttp.send();
}

function checkInfo(idForm)
{
    var str = idForm+"";
    window.location.href = "http://localhost:8080/Tcheck_checkform?id="+id+"&idForm=" + str.padStart(5, '0') ;
}

function search_main()
{
    window.location.href = "http://localhost:8080/Thomepage?id="+id;
}

function search_check()
{
    window.location.href = "http://localhost:8080/Tcheck_formList?id="+id;
}

function search_response()
{
    window.location.href = "http://localhost:8080/Tcheck_responseList?id="+id;
}

function logout()
{
    window.location.href = "http://localhost:8080/login";
}
