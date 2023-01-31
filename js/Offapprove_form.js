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
        console.log(json[j].check_by_off);
            if(json[j].check_by_off == "accept")
            {
                console.log(id);
                console.log(json[j]["idForm"]);
                document.getElementById("form").innerHTML += '<th onclick="checkInfo('+ json[j]["idForm"] +')">' + json[j]["subject"] + '</th><th>Approved</th>';
            }

    }

  }
  xhttp.open("GET", "/getCheckInform");
  xhttp.send();
}

function checkInfo(idForm)
{
    window.location.href = "http://localhost:8080/Officer_approvedForm?id="+id+"&idForm=" + idForm;
}

function search_main()
{
    window.location.href = "http://localhost:8080/Offhomepage?id="+id;
}

function logout()
{
    window.location.href = "http://localhost:8080/login";
}

function search_approve()
{
    window.location.href = "http://localhost:8080/Officer_approveList?id="+id;
}

function search_form()
{
    window.location.href = "http://localhost:8080/Off_check_formList?id="+id;
}