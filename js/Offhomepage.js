function getParameterByName(name, url = window.location.search) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let id = getParameterByName('id');

function loadDoc(){

    const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    var json;
    var jsonData;
    json = JSON.parse(this.responseText);
    console.log(json);

    for (var j = 0; j < json.length; j++){
            let nameID = json[j]["id"];
            if(nameID == id)
            {
                jsonData = json[j];
                console.log(JSON.stringify(jsonData, null, 4));
            }
    }
        try
        {
            let data = jsonData;
            document.getElementById("adviser").innerHTML += data.user_name;

        }
        catch(err)
        {
        }


  }
  xhttp.open("GET", "res/dataLogin.json");
  xhttp.send();
}

function search_form()
{
    window.location.href = "http://localhost:8080/Off_check_formList?id="+id;
}

function search_approve()
{
    window.location.href = "http://localhost:8080/Officer_approveList?id="+id;
}

function logout()
{
    window.location.href = "http://localhost:8080/login";
}
 
