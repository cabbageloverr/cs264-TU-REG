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

    let data = this.responseText;
    let n_id = data.match(/"id":"([^"]+)"/ig);
    let n_user_name = data.match(/"user_name":"([^"]+)"/ig);

    for(n in n_id )
    {
        let id_only = n_id[n].match(/"id":"([^"]+)"/);
        let num_id = id_only[1].search(id);
        if(num_id>=0)
        {

                let user_name_only = n_user_name[n].match(/"user_name":"([^"]+)"/);

                document.getElementById("Name").innerHTML += user_name_only[1];

        }

    }
  }
  xhttp.open("GET", "res/dataLogin.json");
  xhttp.send();
}

function create_form()
{
    window.location.href = "http://localhost:8080/form?id="+id;
}
function search_form()
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

