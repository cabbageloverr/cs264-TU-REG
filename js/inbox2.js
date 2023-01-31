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

function inbox()
{
    window.location.href = "http://localhost:8080/Scheck_messageList?id="+id;
}

function logout()
{
    window.location.href = "http://localhost:8080/login";
}

