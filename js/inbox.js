function getParameterByName(name, url = window.location.search) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var id = getParameterByName('id');
console.log(id);

function main_page()
{
    window.location.href = "http://localhost:8080/Shomepage?id="+id;
}

function writeForm()
{
    window.location.href = "http://localhost:8080/form?id="+id;
}

function checkAll()
{
    window.location.href = "http://localhost:8080/Std_check?id="+id;
}

function inbox()
{
    window.location.href = "http://localhost:8080/Scheck_messageList?id="+id;
}

function logout()
{
    window.location.href = "http://localhost:8080/login";
}

var name;
var idResponse = getParameterByName('response');
console.log(idResponse);
var allResponse;
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
    allResponse = json;
    console.log(allResponse);
    for (var j = 0; j < json.length; j++){
        let checkName = json[j]["To"].search(name);
        if(checkName >= 0 && json[j]["responseId"] == idResponse)
        {
            document.getElementById("date").value = json[j]["date"];
            document.getElementById("From").value = json[j]["From"];
            document.getElementById("message").value = json[j]["message"];
        }
    }

  }
  xhttp.open("GET", "/getResponseInform");
  xhttp.send();
}

function submitSeen()
{
    if(confirm('รับทราบแล้วใช่หรือไม่'))
    {
        for (var j = 0; j < allResponse.length; j++){

            let checkName = allResponse[j]["To"].search(name);
            if(checkName >= 0  && allResponse[j]["responseId"] == idResponse )
            {
                console.log("true");
                allResponse[j]["isSeen"] = true;
            }
        }
        const xhttp3 = new XMLHttpRequest();
        xhttp3.open("POST", "/saveNewResponseInform");
        xhttp3.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var infoString = JSON.stringify(allResponse);
        xhttp3.send(infoString);
        window.location.href = "http://localhost:8080/Scheck_messageList?id="+id;
    }
}