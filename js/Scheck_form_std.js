function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let id; // get value from param 'id'
function addRow(id, i) {
  s = parseInt(i) + 1;
  var table = document.getElementById(id);
  if (id == "Add"){
    var row = table.insertRow();
    row.insertCell().innerHTML = s;

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text";
    input.id = "codesubjectAdd" + s;
    input.className = "inputtable";
    input.style = "width: 80px; height: 30px;";
    input.required = "required";
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text";
    input.id = "subjectAdd" + s;
    input.className = "inputtable";
    input.required = "required";
    input.style="width: 200px; height: 30px;";
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text"
    input.id = "sectionAdd" + s;
    input.style = "width: 100px; height: 30px;";
    input.className = "inputtable";
    input.required = "required"
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text";
    input.id = "datetimeAdd" + s;
    input.style="font-size: 14px; width: 180px; height: 30px;";
    input.className = "inputtable";

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "number";
    input.id = "valueAdd" + s;
    input.style="width: 50px; height: 30px;";
    input.className = "inputtable";
    input.required = "required"
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";


    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text";
    input.id = "teacherAdd" + s;
    input.className = "inputtable";
    input.style="width: 100px; height: 30px;";
    input.required = "required"
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";


    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "checkbox";
    input.id = "tapproveAdd" + s;
    input.style = "height:30px; width: 30px; margin-top: 10px;";
    input.className = "inputtable";
  }

  else if(id == "Drop"){
    var row = table.insertRow();
    row.insertCell().innerHTML = s;

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text";
    input.id = "codesubjectDrop" + s;
    input.className = "inputtable";
    input.style = "width: 80px; height: 30px;";
    input.required = "required";
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text";
    input.id = "subjectDrop" + s;
    input.className = "inputtable";
    input.required = "required";
    input.style="width: 200px; height: 30px;";
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text"
    input.id = "sectionDrop" + s;
    input.style = "width: 100px; height: 30px;";
    input.className = "inputtable";
    input.required = "required"
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text";
    input.id = "datetimeDrop" + s;
    input.style="font-size: 14px; width: 180px; height: 30px;";
    input.className = "inputtable";

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "number";
    input.id = "valueDrop" + s;
    input.style="width: 50px; height: 30px;";
    input.className = "inputtable";
    input.required = "required"
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";


    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text";
    input.id = "teacherDrop" + s;
    input.className = "inputtable";
    input.style="width: 100px; height: 30px;";
    input.required = "required"
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";


    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "checkbox";
    input.id = "tapproveDrop" + s;
    input.style = "height:30px; width: 30px; margin-top: 10px;";
    input.className = "inputtable";
    
  }
  else
  {
    var row = table.insertRow();
    row.insertCell().innerHTML = s;

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text";
    input.id = "codesubjectCross" + s;
    input.className = "inputtable";
    input.style = "width: 80px; height: 30px;";
    input.required = "required";
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text";
    input.id = "subjectCross" + s;
    input.className = "inputtable";
    input.required = "required";
    input.style="width: 200px; height: 30px;";
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text"
    input.id = "sectionCross" + s;
    input.style = "width: 100px; height: 30px;";
    input.className = "inputtable";
    input.required = "required"
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text";
    input.id = "datetimeCross" + s;
    input.style="font-size: 14px; width: 180px; height: 30px;";
    input.className = "inputtable";

    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "number";
    input.id = "valueCross" + s;
    input.style="width: 50px; height: 30px;";
    input.className = "inputtable";
    input.required = "required"
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";


    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "text";
    input.id = "teacherCross" + s;
    input.className = "inputtable";
    input.style="width: 100px; height: 30px;";
    input.required = "required"
    input.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
    input.oninput="this.setCustomValidity('')";


    var input = document.createElement("input");
    row.insertCell().appendChild(input);
    input.type = "checkbox";
    input.id = "tapproveCross" + s;
    input.style = "height:30px; width: 30px; margin-top: 10px;";
    input.className = "inputtable";
  }
}
var LinkHead = new Array();  // array for header.
LinkHead = ['ประเภทของเอกสาร', 'Link'];
var optionAll = ['----','ตารางเรียนในภาคการเรียน','เอกสารรับรองของผู้ปกครอง','ใบรับรองจากส่วนราชการอื่นๆ','ใบรับรองแพทย์','อื่นๆ'];
function addLink(table_id){ 
  var Tab = document.getElementById(table_id);

  var rowCnt = Tab.rows.length;   // table row count.
  var tr = Tab.insertRow(rowCnt); // the table row.
  //tr = Tab.insertRow(rowCnt);

  for (var c = 0; c < LinkHead.length; c++) {
      var td = document.createElement('td'); // table definition.
      td = tr.insertCell(c);

      if (c == 0) { 
          var ele = document.createElement('select');
          var option;
          for(var i = 0 ; i < optionAll.length;i++)
          {
            option = document.createElement( 'option' );
            option.value = option.text = optionAll[i];
            ele.add( option );
          }
          ele.id = "linkType" + rowCnt;

          td.appendChild(ele);
      }
      else{
          var ele = document.createElement('input');
          ele.setAttribute('type', 'text');
          ele.setAttribute('value', '');
          ele.id = "link" + rowCnt;

          td.appendChild(ele);
      }
  }
}

function loadDoc(){
	// find student by id and show student detail
	id = getParameterByName('id');
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() 
    {
        
        var json;
        var jsonStu;
        json = JSON.parse(this.responseText);
        console.log(json);

        for (var i = 0; i < json.length; i++){

            let nameID = json[i]["id"];
            if(nameID == id)
            {
                //jsonStu = json[i].data.userList;
                jsonStu = json[i];
            }
        }
        console.log(JSON.stringify(jsonStu, null, 4));

        try
        {
            let student = jsonStu;

            document.getElementById('inputDate').value = '' + student.sendDate; 
            document.getElementById('subjectName').value = '' + student.subject; 
            document.getElementById('destinationName').value = '' + student.destination; 
            document.getElementById('nameTitle').value = '' + student.studentNameTitle; 
            document.getElementById('firstname').value = '' + student.studentFirstName; 
            document.getElementById('lastname').value = '' + student.studentLastName; 
            document.getElementById('id').value = '' + student.studentId;
            document.getElementById('year').value = '' + student.studentYear;
            document.getElementById('major').value = '' + student.studyField;
            document.getElementById('AdvisorName').value = '' + student.advisor;
            document.getElementById('houseNumber').value = '' + student.houseNumber;
            document.getElementById('moo').value = '' + student.moo;
            document.getElementById('subDistrict').value = '' + student.subDistrict;
            document.getElementById('district').value = '' + student.district;
            document.getElementById('province').value = '' + student.province;
            document.getElementById('postalCode').value = '' + student.postalCode;
            document.getElementById('phoneNumber').value = '' + student.mobilePhone;
            document.getElementById('houseNumberC').value = '' + student.phone;
            document.getElementById('reason').value = '' + student.reason;

            for (var i = 0; i < student.Type.length; i++){
                console.log(student.Type[i]);

                if(Object.keys(student.Type[i]).includes("AddYear"))
                {
                    document.getElementById('AddYear').value = '' + student.Type[i]["AddYear"];
                    var listAdd = student.Type[i]["AddSubjectList"];
                    for(var j = 1; j < listAdd.length ; j++)
                    {
                        addRow("Add",j);
                    }
                    for(var j = 0; j < listAdd.length ; j++)
                    {
                        var index = j+1;
                        document.getElementById('codesubjectAdd' +index).value = '' + listAdd[j]["subjectCode"];
                        document.getElementById('subjectAdd' +index).value = '' + listAdd[j]["subjectName"];
                        document.getElementById('sectionAdd' +index).value = '' + listAdd[j]["subjectSection"];
                        document.getElementById('datetimeAdd' +index).value = '' + listAdd[j]["subjectDate"];
                        document.getElementById('valueAdd' +index).value = '' + listAdd[j]["subjectCredit"];
                        document.getElementById('teacherAdd' +index).value = '' + listAdd[j]["subjectTeacher"];
                        document.getElementById('tapproveAdd' +index).value = '' + listAdd[j]["subjectTeacherCheck"];
                    }
                }
                else if(Object.keys(student.Type[i]).includes("DropYear"))
                {
                    document.getElementById('DropYear').value = '' + student.Type[i]["DropYear"];
                    var listDrop = student.Type[i]["DropSubjectList"];
                    for(var j = 1; j < listDrop.length ; j++)
                    {
                        addRow("Drop",j);
                    }
                    for(var j = 0; j < listDrop.length ; j++)
                    {
                        var index = j+1;
                        document.getElementById('codesubjectDrop' +index).value = '' + listDrop[j]["subjectCode"];
                        document.getElementById('subjectDrop' +index).value = '' + listDrop[j]["subjectName"];
                        document.getElementById('sectionDrop' +index).value = '' + listDrop[j]["subjectSection"];
                        document.getElementById('datetimeDrop' +index).value = '' + listDrop[j]["subjectDate"];
                        document.getElementById('valueDrop' +index).value = '' + listDrop[j]["subjectCredit"];
                        document.getElementById('teacherDrop' +index).value = '' + listDrop[j]["subjectTeacher"];
                        document.getElementById('tapproveDrop' +index).value = '' + listDrop[j]["subjectTeacherCheck"];
                    }
                }
                else if(Object.keys(student.Type[i]).includes("CrossYear"))
                {
                    document.getElementById('CrossYear').value = '' + student.Type[i]["CrossYear"];
                    var listCross = student.Type[i]["CrossSubjectList"];
                    for(var j = 1; j < listCross.length ; j++)
                    {
                        addRow("Cross",j);
                    }
                    for(var j = 0; j < listCross.length ; j++)
                    {
                        var index = j+1;
                        document.getElementById('codesubjectCross' +index).value = '' + listCross[j]["subjectCode"];
                        document.getElementById('subjectCross' +index).value = '' + listCross[j]["subjectName"];
                        document.getElementById('sectionCross' +index).value = '' + listCross[j]["subjectSection"];
                        document.getElementById('datetimeCross' +index).value = '' + listCross[j]["subjectDate"];
                        document.getElementById('valueCross' +index).value = '' + listCross[j]["subjectCredit"];
                        document.getElementById('teacherCross' +index).value = '' + listCross[j]["subjectTeacher"];
                        document.getElementById('tapproveCross' +index).value = '' + listCross[j]["subjectTeacherCheck"];
                    }
                }
                else if(Object.keys(student.Type[i]).includes("resignYear"))
                {
                    document.getElementById('resignYear').value = '' + student.Type[i]["resignYear"];
                }
                else if(Object.keys(student.Type[i]).includes("other"))
                {
                    document.getElementById('other').value = '' + student.Type[i]["other"];
                }
            }
            var index = 1;
            for (const thing in student.Link) {
                addLink("fileLink");
                document.getElementById('linkType' +index).value = '' +thing;
                document.getElementById('link' +index).value = '' + student.Link[thing];
                index++;
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

