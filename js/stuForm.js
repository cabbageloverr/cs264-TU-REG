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

function loadDoc(){
    // find student by id and show student detail
    id = getParameterByName('id');
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() 
    {
        
        var json;
        var jsonStu;
        var arrData = 
        json = JSON.parse(this.responseText);
        console.log(json);

        for (var i = 0; i < json.length; i++){

            let nameID = json[i]["idForm"];
            if(nameID == idForm)
            {
                //jsonStu = json[i].data.userList;
                jsonStu = json[i];
            }
        }
        console.log(JSON.stringify(jsonStu, null, 4));

        try
        {
            let student = jsonStu;

            document.getElementById('inputDate').innerHTML += ' ' + student.sendDate; 
            document.getElementById('subjectName').innerHTML += ' ' + student.subject; 
            document.getElementById('destinationName').innerHTML += ' ' + student.destination; 
            document.getElementById('nameTitle').innerHTML += ' ' + student.studentNameTitle; 
            document.getElementById('firstname').innerHTML += ' ' + student.studentFirstName;
            document.getElementById('firstname2').innerHTML += ' ' + student.studentFirstName; 
            document.getElementById('lastname').innerHTML += ' ' + student.studentLastName; 
            document.getElementById('lastname2').innerHTML += ' ' + student.studentLastName; 
            document.getElementById('id').innerHTML += ' ' + student.studentId;
            document.getElementById('year').innerHTML += ' ' + student.studentYear;
            document.getElementById('major').innerHTML += ' ' + student.studyField;
            document.getElementById('AdvisorName').innerHTML += ' ' + student.advisor;
            document.getElementById('houseNumber').innerHTML += ' ' + student.houseNumber;
            document.getElementById('moo').innerHTML += ' ' + student.moo;
            document.getElementById('subDistrict').innerHTML += ' ' + student.subDistrict;
            document.getElementById('district').innerHTML += ' ' + student.district;
            document.getElementById('province').innerHTML += ' ' + student.province;
            document.getElementById('postalCode').innerHTML += ' ' + student.postalCode;
            document.getElementById('phoneNumber').innerHTML += ' ' + student.mobilePhone;
            document.getElementById('houseNumberC').innerHTML += ' ' + student.phone;
            document.getElementById('reason').innerHTML += ' ' + student.reason;

            for (var i = 0; i < student.Type.length; i++){
                console.log(student.Type[i]);

                if(Object.keys(student.Type[i]).includes("AddYear"))
                {
                    document.getElementById('AddYear').innerHTML += ' ' + student.Type[i]["AddYear"];
                    var listAdd = student.Type[i]["AddSubjectList"];

                    for(var j = 0; j < listAdd.length ; j++)
                    {
                        document.getElementById('AddSubject').innerHTML += listAdd[j]["subjectCode"] + '<span class="tab"></span>';
                        document.getElementById('AddSubject').innerHTML += listAdd[j]["subjectName"] + '<span class="tab"></span>';
                        document.getElementById('AddSubject').innerHTML += listAdd[j]["subjectSection"] + '<span class="tab"></span>';
                        document.getElementById('AddSubject').innerHTML += listAdd[j]["subjectDate"] + '<span class="tab"></span>';
                        document.getElementById('AddSubject').innerHTML += listAdd[j]["subjectCredit"] + '<span class="tab"></span>';
                        document.getElementById('AddSubject').innerHTML += listAdd[j]["subjectTeacher"] + '<span class="tab"></span>';
                        document.getElementById('AddSubject').innerHTML += listAdd[j]["subjectTeacherCheck"] + '<span class="tab"></span></br>';

                    }
                }
                else if(Object.keys(student.Type[i]).includes("DropYear"))
                {
                    document.getElementById('DropYear').innerHTML += ' ' + student.Type[i]["DropYear"];
                    var listDrop = student.Type[i]["DropSubjectList"];

                    for(var j = 0; j < listDrop.length ; j++)
                    {
                        document.getElementById('DropSubject').innerHTML += listDrop[j]["subjectCode"] + '<span class="tab"></span>';
                        document.getElementById('DropSubject').innerHTML += listDrop[j]["subjectName"] + '<span class="tab"></span>';
                        document.getElementById('DropSubject').innerHTML += listDrop[j]["subjectSection"] + '<span class="tab"></span>';
                        document.getElementById('DropSubject').innerHTML += listDrop[j]["subjectDate"] + '<span class="tab"></span>';
                        document.getElementById('DropSubject').innerHTML += listDrop[j]["subjectCredit"] + '<span class="tab"></span>';
                        document.getElementById('DropSubject').innerHTML += listDrop[j]["subjectTeacher"] + '<span class="tab"></span>';
                        document.getElementById('DropSubject').innerHTML += listDrop[j]["subjectTeacherCheck"] + '<span class="tab"></span></br>';
                    }
                }
                else if(Object.keys(student.Type[i]).includes("CrossYear"))
                {
                    document.getElementById('CrossYear').innerHTML += ' ' + student.Type[i]["CrossYear"];
                    var listCross = student.Type[i]["CrossSubjectList"];

                    for(var j = 0; j < listCross.length ; j++)
                    {
                        document.getElementById('CrossSubject').innerHTML += listCross[j]["subjectCode"] + '<span class="tab"></span>';
                        document.getElementById('CrossSubject').innerHTML += listCross[j]["subjectName"] + '<span class="tab"></span>';
                        document.getElementById('CrossSubject').innerHTML += listCross[j]["subjectSection"] + '<span class="tab"></span>';
                        document.getElementById('CrossSubject').innerHTML += listCross[j]["subjectDate"] + '<span class="tab"></span>';
                        document.getElementById('CrossSubject').innerHTML += listCross[j]["subjectCredit"] + '<span class="tab"></span>';
                        document.getElementById('CrossSubject').innerHTML += listCross[j]["subjectTeacher"] + '<span class="tab"></span>';
                        document.getElementById('CrossSubject').innerHTML += listCross[j]["subjectTeacherCheck"] + '<span class="tab"></span></br>';
                    }
                }
                else if(Object.keys(student.Type[i]).includes("resignYear"))
                {
                    document.getElementById('resignYear').innerHTML += ' ' + student.Type[i]["resignYear"];
                }
                else if(Object.keys(student.Type[i]).includes("other"))
                {
                    document.getElementById('other').innerHTML += ' ' + student.Type[i]["other"];
                }
            }
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