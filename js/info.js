function getParameterByName(name, url = window.location.href) {
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
    let n_name = data.match(/"name":"([^"]+)"/ig);
    let n_year = data.match(/"year":"([^"]+)"/ig);
    let n_username = data.match(/"username":"([^"]+)"/ig);
    let n_grade = data.match(/"grade":([^"]+)/ig);
    let n_quote = data.match(/"quote":"([^"]+)"/ig);
    for(n in n_id )
    {
        let id_only = n_id[n].match(/"id":"([^"]+)"/);
        let num_id = id_only[1].search(id);
        if(num_id>=0)
        {
                let name_only = n_name[n].match(/"name":"([^"]+)"/);
                let year_only = n_year[n].match(/"year":"([^"]+)"/);
                let username_only = n_username[n].match(/"username":"([^"]+)"/);
                let grade_only = n_grade[n].match(/"grade":([^"]+),/);
                let quote_only = n_quote[n].match(/"quote":"([^"]+)"/);
                document.getElementById("name").innerHTML = name_only[1];
                document.getElementById("year").innerHTML = year_only[1];
                document.getElementById("user").innerHTML = username_only[1];
                document.getElementById("grade").innerHTML = grade_only[1];
                document.getElementById("quote").innerHTML = quote_only[1];
        }

    }



  }
  xhttp.open("GET", "/getStudent");
  xhttp.send();
}
