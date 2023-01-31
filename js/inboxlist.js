function getParameterByName(name, url = window.location.search) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var id = getParameterByName('id');

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

function logout()
{
    window.location.href = "http://localhost:8080/login";
}
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

        let checkName = json[j]["To"].search(name);
        console.log(checkName);
        if(checkName >= 0)
        {
            if(json[j]["isSeen"] == false)
            {
                document.getElementById("inboxList").innerHTML += '<th onclick="checkInbox('+ json[j]["responseId"] +')">' + json[j]["message"] + '</th><th>' + "ยังไม่รับทราบ" + '</th>';
            }
            else
            {
                document.getElementById("inboxList").innerHTML += '<th onclick="checkInbox('+ json[j]["responseId"] +')">' + json[j]["message"] + '</th><th>' + "รับทราบแล้ว" + '</th>';
            }
        }
    }

  }
  xhttp.open("GET", "/getResponseInform");
  xhttp.send();
}

function checkInbox(idResponse)
{
    window.location.href = "http://localhost:8080/Scheck_message?id="+id+"&response=" + idResponse;
}