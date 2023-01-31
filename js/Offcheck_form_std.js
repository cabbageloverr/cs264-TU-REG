function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let id; // get value from param 'id'
let idForm = getParameterByName('idForm');
var name;
var allcheck;

function loadDoc(){
    // find student by id and show student detail
    id = getParameterByName('id');
    console.log(id);
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
            }
        }
    }
    xhttp1.open("GET", "/getDataLogin");
    xhttp1.send();

    const xhttp2 = new XMLHttpRequest();
    xhttp2.onload = function() {

        allcheck = JSON.parse(this.responseText);

    }
    xhttp2.open("GET", "/getCheckInform");
    xhttp2.send();

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() 
    {
        
        var json;
        var jsonStu;
        json = JSON.parse(this.responseText);

        for (var i = 0; i < json.length; i++){

            let formID = json[i]["idForm"];
            if(formID == idForm)
            {
                jsonStu = json[i];
            }
        }

        try
        {
            let student = jsonStu;
            document.getElementById('info').innerHTML += "<p>วันที่: " + student.sendDate + "</br>";
            document.getElementById('info').innerHTML += "ประวัตินักศึกษา</br>" + student.studentNameTitle + ' ' + student.studentFirstName + ' ' + student.studentLastName + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เลขทะเบียน " + student.studentId + '</br>';
            document.getElementById('info').innerHTML += "ชั้นปีการศึกษา ชั้นปีที่ " + student.studentYear + "&nbsp;&nbsp;&nbsp;&nbsp;สาขาวิชา " + student.studyField + "&nbsp;&nbsp;&nbsp;&nbsp;อาจารย์ที่ปรึกษา " + student.advisor + '</br></br></br>';
            document.getElementById('info').innerHTML += "ที่อยู่นักศึกษา</br>บ้านเลขที่ " + student.houseNumber + "&nbsp;&nbsp;&nbsp;&nbsp;หมู่ที่ " + student.moo + "&nbsp;&nbsp;&nbsp;&nbsp;อำเภอ " + student.subDistrict + "&nbsp;&nbsp;&nbsp;&nbsp;จังหวัด " + student.district + "</br>";
            document.getElementById('info').innerHTML += "รหัสไปรษณีย์ " + student.postalCode + "&nbsp;&nbsp;&nbsp;&nbsp;โทรศัพท์มือถือ " + student.mobilePhone + "&nbsp;&nbsp;&nbsp;&nbsp;โทรศัพท์บ้าน " + student.phone + "</br></br>";
            document.getElementById('info').innerHTML += "ประสงค์จะยื่นคำร้องเรื่อง</br>";
            for (var i = 0; i < student.Type.length; i++)
            {

                if(Object.keys(student.Type[i]).includes("AddYear"))
                {
                    document.getElementById('info').innerHTML += "เพิ่มรายวิชาในปีการศึกษา" + student.Type[i]["AddYear"] + "</br>";
                    var listAdd = student.Type[i]["AddSubjectList"];
                    for(var j = 0; j < listAdd.length ; j++)
                    {
                        document.getElementById('info').innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;รายวิชา " + listAdd[j]["subjectName"] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Section " + listAdd[j]["subjectSection"] + "</br>";
                    }
                }
                else if(Object.keys(student.Type[i]).includes("DropYear"))
                {
                    document.getElementById('info').innerHTML += "ถอนรายวิชาในปีการศึกษา" + student.Type[i]["DropYear"] + "</br>";                    var listDrop = student.Type[i]["DropSubjectList"];
                    for(var j = 0; j < listDrop.length ; j++)
                    {
                        document.getElementById('info').innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;รายวิชา " + listDrop[j]["subjectName"] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Section " + listDrop[j]["subjectSection"] + "</br>";
                    }
                }
                else if(Object.keys(student.Type[i]).includes("CrossYear"))
                {
                    document.getElementById('info').innerHTML += "ขอศึกษารายวิชานอกสาขาในปีการศึกษา" + student.Type[i]["CrossYear"] + "</br>";
                    var listCross = student.Type[i]["CrossSubjectList"];
                    for(var j = 0; j < listCross.length ; j++)
                    {
                        document.getElementById('info').innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;รายวิชา " + listCross[j]["subjectName"] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Section " + listCross[j]["subjectSection"] + "</br>";
                    }
                }
                else if(Object.keys(student.Type[i]).includes("resignYear"))
                {
                    document.getElementById('info').innerHTML += "ขอลาออกในปีการศึกษา" + student.Type[i]["resignYear"] + "</br>";
                }
                else if(Object.keys(student.Type[i]).includes("other"))
                {
                    document.getElementById('info').innerHTML += "อื่นๆ คือ " + student.Type[i]["other"] + "</br>";
                }
            }

            document.getElementById('info').innerHTML += "</br>เหตุผลที่ต้องการเพิ่มถอน </br>&nbsp;&nbsp;&nbsp;&nbsp;" + student.reason + "</br>";
            if(student.Link.length>0){
                document.getElementById('info').innerHTML += "</br>Link ที่แนบไว้ </br>";
            }
            for (const thing in student.Link) {     
                document.getElementById('info').innerHTML += '<button class="submit" onclick="window.open(\'' + student.Link[thing] + '\',\'_blank\')" type="button">' + thing + '</button>&nbsp;&nbsp;&nbsp;&nbsp;';
            }

            document.getElementById('info').innerHTML += '</p>';
        }
        catch(err)
        {
            alert (err);
            alert('Not found');
        }
    }
    xhttp.open("GET", "/getDataInformation");
    xhttp.send();
}

function acceptForm()
{   
    if(confirm('ยืนยันที่จะอนุมัติคำร้องนี้ใช่หรือไม่'))
    {
        for (var j = 0; j < allcheck.length; j++){
            if(allcheck[j]["idForm"] == idForm)
            {
                allcheck[j]["check_by_off"] = "accept";
                const d = new Date();
                let year = d.getFullYear() + 543;
                let month = d.getMonth() + 1;
                let monthStr = "" + month;
                if(month < 10)  {monthStr = "0" + month; }
                let day = d.getDate();
                let dayStr = "" + day;
                if(day < 10)  {dayStr = "0" + day; }
                var lengthDate = allcheck[j]["date"].length;
                allcheck[j]["date"][lengthDate-1] = "" + year + "-" + monthStr + "-" + dayStr;
            }
        }

        const xhttp3 = new XMLHttpRequest();
        xhttp3.open("POST", "/saveNewCheckInform");
        xhttp3.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var infoString = JSON.stringify(allcheck);
        xhttp3.send(infoString);
        window.location.href = "http://localhost:8080/Off_check_formList?id="+id;
    }
}

function ejectForm()
{
    if(confirm('ยืนยันที่จะไม่อนุมัติคำร้องนี้ใช่หรือไม่'))
    {

        for (var j = 0; j < allcheck.length; j++){
            if(allcheck[j]["idForm"] == idForm )
            {
                allcheck[j]["check_by_off"] = "eject";
            }
        }

        const xhttp6 = new XMLHttpRequest();
        xhttp6.open("POST", "/saveNewCheckInform");
        xhttp6.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var infoString = JSON.stringify(allcheck);
        xhttp6.send(infoString);
        window.location.href = "http://localhost:8080/Officer_approveList?id="+id;
    }
}

function search_main()
{
    window.location.href = "http://localhost:8080/Offhomepage?id="+id;
}

function search_check()
{
    window.location.href = "http://localhost:8080/Off_check_formList?id="+id;
}

function logout()
{
    window.location.href = "http://localhost:8080/login";
}

function search_approve()
{
    window.location.href = "http://localhost:8080/Officer_approveList?id="+id;
}

function printForm()
{   
    window.location.href = "http://localhost:8080/Officer_printForm?id="+id+"&idForm=" + idForm;
}