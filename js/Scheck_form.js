function getParameterByName(name, url = window.location.search) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let id = getParameterByName('id');
var newJsonInfo = [];
var newJsonDataInform = [];
var newJsonCheckInform = [];
var newJsonResponseInform = [];

function loadForm(){
    
    getInformation();
    getDataInform();
    getCheckInform();
    getResponseInform();
	const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
        /*var json;
        var jsonStu;
        json = JSON.parse(this.responseText);
        console.log(json);

    for (var j = 0; j < json.length; j++){
            let nameID = json[j]["id"];
            if(nameID == id)
            {
                jsonStu = json[j];
                console.log(JSON.stringify(jsonStu, null, 4));
            }
            try
        {
            let student = jsonStu;
            document.getElementById("dataList").innerHTML += '<div class="status-topic"><h3 id="topic">ยื่นคำร้อง :'+student.subject+' </h3></div>';
            document.getElementById("dataList").innerHTML += '<div class="status-u1"><a>U1</a><p>บันทึกข้อมูลเข้าสู่ระบบ</p><input type="button" onclick="deleteData(' + student.idForm + ')" value="ยกเลิกคำร้อง"><button id="dateU1">Date</button></div>';
            check_true = student.check.length-1;
            curr_check=0;
            for (var i = 0; i < student.check.length; i++){
                if(i==0){
                    if(student.check[i]==true){
                        document.getElementById("dataList").innerHTML +='<div class="status-u2"><a>U2</a><p>ยื่นเรื่องถึงอาจารย์ที่ปรึกษา</p><button id="sta_U2"class="box2">Approve</button><button id="dateU2">Date</button></div>';
                    }
                    else document.getElementById("dataList").innerHTML +='<div class="status-u2"><a>U2</a><p>ยื่นเรื่องถึงอาจารย์ที่ปรึกษา</p><button id="sta_U2"class="box1">Work in progress</button><button id="dateU2">Date</button></div>';
                }
                if(i>0&&i==student.check.length-1){
                    if(student.check[i]==true)curr_check++;
                    if(curr_check==check_true){
                    document.getElementById("dataList").innerHTML += '<div class="status-u3"><a>U3</a><p>ยื่นเรื่องถึงอาจารย์ประจำวิชา</p><button id="sta_U2" class="box2">Approve</button><button id="dateU3">Date</button></div>';
                    }
                    else document.getElementById("dataList").innerHTML += '<div class="status-u3"><a>U3</a><p>ยื่นเรื่องถึงอาจารย์ประจำวิชา</p><button id="sta_U2" class="box1">Work in progress</button><button id="dateU3">Date</button></div>';
                }
            }
            if(student.check_by_off==true){
                document.getElementById("dataList").innerHTML += '<div class="status-u4"><a>U4</a><p>ยื่นเรื่องถึงเจ้าหน้าที่สาขา</p><button id="sta_U2" class="box2">Approve</button><button id="dateU4">Date</button></div>';
            }
            else document.getElementById("dataList").innerHTML += '<div class="status-u4"><a>U4</a><p>ยื่นเรื่องถึงเจ้าหน้าที่สาขา</p><button id="sta_U2" class="box1">Work in progress</button><button id="dateU4">Date</button></div>';

        }
        catch(err)
        {
            alert (err);
            alert('Not found');
        }

    }*/
        //document.getElementById("dataList").innerHTML += '<button><a href = "http://localhost:8080/Scheck_form_std?id=' + id + '">' + "ดูรายละเอียด" +'</a></button><br>';
    var json;
    var jsonStu;
    json = JSON.parse(this.responseText);
    console.log(json);

    for (var j = 0; j < json.length; j++){
            let nameID = json[j]["id"];
            if(nameID == id)
            {
                jsonStu = json[j];
                console.log(JSON.stringify(jsonStu, null, 4));
            }
            try
        {
            let student = jsonStu;
            var dateIndex = 0;
            document.getElementById("dataList").innerHTML += '<div class="status-topic"><h3 id="topic">ยื่นคำร้อง :'+student.subject+' </h3></div>';
            document.getElementById("dataList").innerHTML += '<div class="status-u1"><a>U1</a><p>บันทึกข้อมูลเข้าสู่ระบบ</p><input type="button" onclick="deleteData(' + student.idForm + ')" value="ยกเลิกคำร้อง"><button id="dateU1">'+student.date[dateIndex]+'</button></div>';
            dateIndex++;
            check_true = student.check.length-1;
            curr_check=0;
            for (var i = 0; i < student.check.length; i++){
                if(i==0){
                    if(student.check[i]=="accept"){
                        document.getElementById("dataList").innerHTML +='<div class="status-u2"><a>U2</a><p>ยื่นเรื่องถึงอาจารย์ที่ปรึกษา</p><button id="sta_U2"class="box2">Approve</button><button id="dateU2">'+student.date[dateIndex]+'</button></div>';
                    }
                    else if (student.check[i]=="return"){
                        document.getElementById("dataList").innerHTML +='<div class="status-u2"><a>U2</a><p>ยื่นเรื่องถึงอาจารย์ที่ปรึกษา</p><button id="sta_U2"class="box1">Check your message</button><button id="dateU2">'+student.date[dateIndex]+'</button></div>';
                    }
                    else document.getElementById("dataList").innerHTML +='<div class="status-u2"><a>U2</a><p>ยื่นเรื่องถึงอาจารย์ที่ปรึกษา</p><button id="sta_U2"class="box1">Work in progress</button><button id="dateU2">'+student.date[dateIndex]+'</button></div>';
                }
                if(i>0&&i==student.check.length-1){
                    if(student.check[i]=="accept")curr_check++;
                    if(curr_check==check_true){
                    document.getElementById("dataList").innerHTML += '<div class="status-u3"><a>U3</a><p>ยื่นเรื่องถึงอาจารย์ประจำวิชา</p><button id="sta_U2" class="box2">Approve</button><button id="dateU3">'+student.date[dateIndex]+'</button></div>';
                    }
                    else if (student.check[i]=="return"){
                        document.getElementById("dataList").innerHTML +='<div class="status-u2"><a>U2</a><p>ยื่นเรื่องถึงอาจารย์ประจำวิชา</p><button id="sta_U2"class="box1">Check your message</button><button id="dateU2">'+student.date[dateIndex]+'</button></div>';
                    }
                    else document.getElementById("dataList").innerHTML += '<div class="status-u3"><a>U3</a><p>ยื่นเรื่องถึงอาจารย์ประจำวิชา</p><button id="sta_U2" class="box1">Work in progress</button><button id="dateU3">'+student.date[dateIndex]+'</button></div>';
                }
                dateIndex++;
            }
            if(student.check_by_off=="accept"){
                document.getElementById("dataList").innerHTML += '<div class="status-u4"><a>U4</a><p>ยื่นเรื่องถึงเจ้าหน้าที่สาขา</p><button id="sta_U2" class="box2">Approve</button><button id="dateU4">'+student.date[dateIndex]+'</button></div>';
            }
            else if (student.check[i]=="return"){
            document.getElementById("dataList").innerHTML +='<div class="status-u2"><a>U2</a><p>ยื่นเรื่องถึงเจ้าหน้าที่สาขา</p><button id="sta_U2"class="box1">Check your message</button><button id="dateU2">'+student.date[dateIndex]+'</button></div>';
            }
            else document.getElementById("dataList").innerHTML += '<div class="status-u4"><a>U4</a><p>ยื่นเรื่องถึงเจ้าหน้าที่สาขา</p><button id="sta_U2" class="box1">Work in progress</button><button id="dateU4">'+student.date[dateIndex]+'</button></div>';
            dateIndex++;
        }
        catch(err)
        {
        }

    }

    }
  data_form = xhttp.open("GET", "res/checkInform.json");
  xhttp.send();

}
// function menu 
function create_form()
{
    window.location.href = "http://localhost:8080/form?id="+id;
}
function main_page()
{
    window.location.href = "http://localhost:8080/Shomepage?id="+id;
}
function logout()
{
    window.location.href = "http://localhost:8080/login";
}
function inbox()
{
    window.location.href = "http://localhost:8080/Scheck_messageList?id="+id;
}

//function delete

function deleteData(idForm)
{
    console.log("Delete");
    assignNewData(idForm);
    window.location.href ="http://localhost:8080/Std_check?id="+id;
}

function getInformation()
{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        newJsonInfo = JSON.parse(this.responseText);
    }
    xhttp.open("GET", "/getDataInformation");
    xhttp.send();
}

function getDataInform()
{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        newJsonDataInform = JSON.parse(this.responseText);
    }
    xhttp.open("GET", "/getDataInform");
    xhttp.send();
}

function getCheckInform()
{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        newJsonCheckInform = JSON.parse(this.responseText);
    }
    xhttp.open("GET", "/getCheckInform");
    xhttp.send();
}

function getResponseInform()
{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        newJsonResponseInform = JSON.parse(this.responseText);
    }
    xhttp.open("GET", "/getResponseInform");
    xhttp.send();
}

function assignNewData(idForm)
{
    //Select all information except idForm
    newJsonInfo = newJsonInfo.filter(m => m['idForm'] !== idForm);
    newJsonDataInform = newJsonDataInform.filter(m => m['idForm'] !== idForm);
    newJsonCheckInform = newJsonCheckInform.filter(m => m['idForm'] !== idForm);
    newJsonResponseInform = newJsonResponseInform.filter(m => m['idForm'] !== idForm);

    //Save to JSON file
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/saveNewStudent");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var infoString = JSON.stringify(newJsonInfo);
    xhttp.send(infoString);

    xhttp.open("POST", "/saveNewDataInform");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var infoString2 = JSON.stringify(newJsonDataInform);
    xhttp.send(infoString2);

    xhttp.open("POST", "/saveNewCheckInform");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var infoString3 = JSON.stringify(newJsonCheckInform);
    xhttp.send(infoString3);

    xhttp.open("POST", "/saveNewResponseInform");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var infoString4 = JSON.stringify(newJsonResponseInform);
    xhttp.send(infoString4);
    
    //Reload the page
    loadForm();
}