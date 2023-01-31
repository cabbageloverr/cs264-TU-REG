let messageAlert = "";
var information = {};
var dataInform = {};
var checkInform = {};

window.onload = function() {
  checkIdForm();
};

function checkIdForm()
{

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() 
  {
    if(this.responseText == "[]")
    {
      dataInform["idForm"] = 10001;
      information["idForm"] = 10001;
      checkInform["idForm"] = 10001;
      return false;
    }
    else
    {
      var json = JSON.parse(this.responseText);
      var jsonStu = null;
      console.log (json);
      for (var i = 0; i < json.length; i++){
        jsonStu = json[i];
      }
      console.log (jsonStu);
      try 
      {
        if(jsonStu == null)
        {
          dataInform["idForm"] = 10001;
          information["idForm"] = 10001;
          checkInform["idForm"] = 10001;
        }
        else
        {
          var prevId = jsonStu.idForm;
          console.log (prevId);
          dataInform["idForm"] = prevId+1;
          information["idForm"] = dataInform["idForm"];
          checkInform["idForm"] = information["idForm"];
        }
      }
      catch(err)
      {
        alert (err);
        alert('Not found');
      }
    }
  }
  xhttp.open("GET", "/getDataInform");
  xhttp.send();
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let id = getParameterByName('id');

function getID() {
  //get user id
  if(id == null)
  {
    id = "";
  }
  information["id"] = id;
  dataInform["id"] = id;
  checkInform["id"] = id;
}

function checkDate() {
  let valueDate = document.getElementById("inputDate").value;
  if (!valueDate) {
    messageAlert = messageAlert + "Date must be filled out\n";
    return false;
  }
  const d = new Date(valueDate);
  let year = d.getFullYear() + 543;
  let month = d.getMonth() + 1;
  let monthStr = "" + month;
  if(month < 10)  {monthStr = "0" + month; }
  let day = d.getDate();
  let dayStr = "" + day;
  if(day < 10)  {dayStr = "0" + day; }
  information["sendDate"] = "" + year + "-" + monthStr + "-" + dayStr;
}

function checkSubject() {
  let valueSubjectName = document.getElementById("subjectName").value;
  if (valueSubjectName == "") {
    messageAlert = messageAlert + "Subject must be filled out\n";
    return false;
  }
  information["subject"] = "" + valueSubjectName;
  checkInform["subject"] = "" + valueSubjectName;
}

function checkDestination() {
  let valueDestinationName = document.getElementById("destinationName").value;
  if (valueDestinationName == "") {
    messageAlert = messageAlert + "Destination must be filled out\n";
    return false;
  }
  information["destination"] = "" + valueDestinationName;
}

function checkName() {
  let valueFirstname = document.getElementById("firstname").value;
  if (valueFirstname == "") {
    messageAlert = messageAlert + "First name must be filled out\n";
    return false;
  }
  let valueNameTitle = document.getElementById("nameTitle").value;
  information["studentNameTitle"] = valueNameTitle + "";
  information["studentFirstName"] = "" + valueFirstname;
}

function checkLastname() {
  let valueLastname = document.getElementById("lastname").value;
  if (valueLastname == "") {
    messageAlert = messageAlert + "Last name must be filled out\n";
    return false;
  }
  information["studentLastName"] = "" + valueLastname;
}

function checkID() {
  let valueID = document.getElementById("id").value;
  if (!valueID) {
    messageAlert = messageAlert + "Student ID must be filled out\n";
    return false;
  }
  if(valueID.length != 10)
  {
    messageAlert = messageAlert + "Student ID must be 10 character length of number\n";
    return false;
  }
  if(isNaN(valueID))
  {
    messageAlert = messageAlert + "Student ID must be only number\n";
    return false;
  }
  information["studentId"] = "" + valueID;
  let valueYear = document.getElementById("year").value;
  information["studentYear"] = "" + valueYear;
  let valueField = document.getElementById("major").value;
  information["studyField"] = "" + valueField;
}

var allStakeholder = ["ผศ. ดร.กษิดิศ ชาญเชี่ยว","ผศ. ดร.วิลาวรรณ รักผกาวงศ์","ผศ. ดร.วนิดา พฤทธิวิทยา","ผศ. ดร.ประภาพร รัตนธำรง","ผศ. ดร.ทรงศักดิ์ รองวิริยะพานิช","รศ. ดร.เยาวดี เต็มธนาภัทร์","อ.นุชชากร งามเสาวรส","ผศ. ดร.มนวรัตน์ ผ่องไพบูลย์","ผศ. ดร.เด่นดวง ประดับสุวรรณ","ผศ. ดร.วิรัตน์ จารีวงศ์ไพบูลย์","ผศ. ดร.ธนาธร ทะนานทอง","อ. ดร.ปกป้อง ส่องเมือง","อ.สิริกันยา นิลพานิช","ผศ. ดร.ปกรณ์ ลี้สุทธิพรชัย","ผศ. ดร.อรจิรา สิทธิศักดิ์","อ. ดร.ฐาปนา บุญชู","อ. ดร.นุชจรินท์ อินต๊ะหล้า","รศ. ดร.ณัฐธนนท์ หงส์วริทธิ์ธร","ผศ. ดร.เสาวลักษณ์ วรรธนาภา","อ. ดร.ลัมพาพรรณ พันธ์ชูจิตร์"];
var allStakeholderName = ["กษิดิศ","วิลาวรรณ","วนิดา","ประภาพร","ทรงศักดิ์","เยาวดี","นุชชากร","มนวรัตน์","เด่นดวง","วิรัตน์","ธนาธร","ปกป้อง","สิริกันยา","ปกรณ์","อรจิรา","ฐาปนา","นุชจรินท์","ณัฐธนนท์","เสาวลักษณ์","ลัมพาพรรณ"];
var stakeholder = [];
function checkAdvisor() {
  let valueAdvisorName = document.getElementById("AdvisorName").value;
  if (valueAdvisorName == "none") {
    messageAlert = messageAlert + "Advisor must be selected\n";
    return false;
  }
  information["advisor"] = "" + valueAdvisorName;
  stakeholder = [];
  stakeholder.push(valueAdvisorName);
}

function checkAddress() {
  let valueHouseNumber = document.getElementById("houseNumber").value;
  let valueMoo = document.getElementById("moo").value;
  let valueSubDistrict = document.getElementById("subDistrict").value;
  let valueDistrict = document.getElementById("district").value;
  let valueProvince = document.getElementById("province").value;
  let valuePostalCode = document.getElementById("postalCode").value;

  if (valueHouseNumber == "") {
    messageAlert = messageAlert + "House number must be filled out\n";
    return false;
  }
  if (valueMoo == "") {
    messageAlert = messageAlert + "Moo must be filled out\n";
    return false;
  }
  if (valueSubDistrict == "") {
    messageAlert = messageAlert + "Sub District must be filled out\n";
    return false;
  }
  if (valueDistrict == "") {
    messageAlert = messageAlert + "District must be filled out\n";
    return false;
  }
  if (valueProvince == "none") {
    messageAlert = messageAlert + "Province must be selected\n";
    return false;
  }
  if (valuePostalCode == "") {
    messageAlert = messageAlert + "Postal Code must be filled out\n";
    return false;
  }
  if (valuePostalCode.length != 5)
  {
    messageAlert = messageAlert + "Postal Code must be 5 character length\n";
    return false;
  }
  information["houseNumber"] = "" + valueHouseNumber;
  information["moo"] = "" + valueMoo;
  information["subDistrict"] = "" + valueSubDistrict;
  information["district"] = "" + valueDistrict;
  information["province"] = "" + valueProvince;
  information["postalCode"] = "" + valuePostalCode;
}

function checkNumber()
{
  let valuephoneNumber = document.getElementById("phoneNumber").value;
  let valuehouseNumberC = document.getElementById("houseNumberC").value;
  if (valuephoneNumber == "") {
    messageAlert = messageAlert + "Phone Number must be filled out\n";
    return false;
  }
  if (valuephoneNumber.length != 10)
  {
    messageAlert = messageAlert + "Phone Number must be 10 character length\n";
    return false;
  }
  if(isNaN(valuephoneNumber))
  {
    messageAlert = messageAlert + "Phone Number must be only number\n";
    return false;
  }
  if(valuephoneNumber.charAt(0) != "0")
  {
    messageAlert = messageAlert + "Phone Number must be started with 0\n";
    return false;
  }
  if(valuehouseNumberC != "")
  {
    if(isNaN(valuehouseNumberC))
    {
      messageAlert = messageAlert + "House Number must be only number\n";
      return false;
    }
    if(valuehouseNumberC.charAt(0) != "0")
    {
      messageAlert = messageAlert + "Phone Number must be started with 0\n";
      return false;
    }
  }
  information["mobilePhone"] = "" + valuephoneNumber;
  information["phone"] = "" + valuehouseNumberC;
}

function checkReason()
{
  let valueReason = document.getElementById("reason").value;
  if (valueReason == "") {
    messageAlert = messageAlert + "Reason must be filled out\n";
    return false;
  }
  information["reason"] = "" + valueReason;
}

var formType = [];
function checkType()
{
  //which have data, Go on get information and Place in formtype
  let valueresignYear = document.getElementById("resignYear").value;
  var resign = {};
  if (valueresignYear != "") {
    resign["resignYear"] = valueresignYear;
    formType.push(resign);
  }

  let valueOther = document.getElementById("other").value;
  var other = {};
  if (valueOther != "") {
    other["other"] = valueOther;
    formType.push(other);
  }
  //set in json
  information["Type"] = formType;
}

var arrHead = new Array();  // array for header.
arrHead = ['ลำดับ', 'รหัสวิชา', 'ชื่อวิชา', 'Section','วัน/เวลา','หน่วยกิต','ผู้ชื่อสอน','ผู้สอนอนุญาต'];
/*function addRows(table_id){ 
  var Tab = document.getElementById(table_id);

  var rowCnt = Tab.rows.length;   // table row count.
  var tr = Tab.insertRow(rowCnt); // the table row.
  //tr = Tab.insertRow(rowCnt);

  for (var c = 0; c < arrHead.length; c++) {
      var td = document.createElement('td'); // table definition.
      td = tr.insertCell(c);

      if (c == 0) { 
          var ele = document.createElement('p');

          // set input attributes.
          ele.setAttribute('id', 'description');
          ele.setAttribute('data-content',rowCnt+'.');

          td.appendChild(ele);
      }
      else if (c == 5){
          var ele = document.createElement('input');
          ele.setAttribute('type', 'number');
          ele.setAttribute('value', '0');
          ele.className = "inputtable";
          ele.required = "required"
          ele.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
          ele.oninput="this.setCustomValidity('')";
          td.appendChild(ele);
      }
      else if (c == 7){
          var ele = document.createElement('input');
          ele.setAttribute('type', 'checkbox');
          ele.setAttribute('value', 'on');
          ele.style = "height:30px; width: 30px; margin-top: 10px;";
          ele.className = "inputtable";
          td.appendChild(ele);
      }
      else{
          var ele = document.createElement('input');
          ele.setAttribute('type', 'text');
          ele.setAttribute('value', '');
          ele.style = "width: 100px; height: 25px;";
          ele.className = "inputtable";
          ele.required = "required"
          ele.oninvalid="this.setCustomValidity('กรุณากรอกข้อมูล')";
          ele.oninput="this.setCustomValidity('')";

          td.appendChild(ele);
      }
  }
  if(table_id == 'addTable')
  {
    document.getElementById("v1").value = rowCnt;
  }
  else if(table_id == 'dropTable')
  {
    document.getElementById("v2").value = rowCnt;
  }
  else if(table_id == 'crossTable')
  {
    document.getElementById("v3").value = rowCnt;
  }
}*/

function deleteRows(table_id){
  var table = document.getElementById(table_id);
  var rowCount = table.rows.length;
  if(rowCount > '1'){
    var row = table.deleteRow(rowCount-1);
    rowCount--;
  }
  else{
    alert('Can\'t delete anymore');
  }
}

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

function delRow(a) {
  s = document.getElementById(a).rows.length;
    document.getElementById(a).deleteRow(s - 1);
}

function addValue(i) {
  var s = parseInt(document.getElementById(i).textContent);
  if (s < 10) {
    document.getElementById(i).innerHTML = s + 1;
    if (i == "v1") {
      addRow(document.getElementById("Add").id, s);
    } else if (i == "v2"){
      addRow(document.getElementById("Drop").id, s);
    } else {
      addRow(document.getElementById("Cross").id, s);
    }
  } else {
    alert("จำนวนวิชาเพิ่ม-ถอนเกินกว่าเกณฑ์กำหนด");
  }
}

function delValue(i) {
  var s = parseInt(document.getElementById(i).textContent);
  var c1 = parseInt(document.getElementById("v1").textContent);
  var c2 = parseInt(document.getElementById("v2").textContent);
  var c3 = parseInt(document.getElementById("v3").textContent);
  var sum = c1+c2+c3;
  if (s > 0) {
    if (i == "v1") {
      if(sum == 1 ){   
      }
        else{
          document.getElementById(i).innerHTML = s - 1;
          delRow(document.getElementById("Add").id);
        }
      } 
    else  if(i == "v2") {
      if(sum == 1 ){
        
      }
      else{
        document.getElementById(i).innerHTML = s - 1;
        delRow(document.getElementById("Drop").id);
      }
    }
    else if (i == "v3") {
      if(sum == 1 ){
        
      }
      else{
        document.getElementById(i).innerHTML = s - 1;
        delRow(document.getElementById("Cross").id);
      }
    }
  }
}



function table_to_array(table_id) {
  var myTab = document.getElementById(table_id);
  var jsonType = {};
  var arrValues = [];
  var YearValues;
  if(table_id == 'Add')
  {
    YearValues= document.getElementById("AddYear").value;
  }
  else if(table_id == 'Drop')
  {
    YearValues= document.getElementById("DropYear").value;
  }
  else if(table_id == 'Cross')
  {
    YearValues= document.getElementById("CrossYear").value;
  }

  if(YearValues == "" && myTab.rows.length > 2)
  {
    messageAlert = messageAlert + "Year must be filled out\n";
    return false;
  }
  else if(myTab.rows.length <= 2 && YearValues == "" )
  {
    return false;
  }

  if(table_id == 'Add')
  {
    jsonType["AddYear"] = YearValues;
  }
  else if(table_id == 'Drop')
  {
    jsonType["DropYear"] = YearValues;
  }
  else if(table_id == 'Cross')
  {
    jsonType["CrossYear"] = YearValues;
  }

  for (row = 1; row < myTab.rows.length; row++) {
    // loop through each cell in a row.
    var informationFromArray = {};
    var count = 0;
      for (c = 0; c < myTab.rows[row].cells.length; c++) {  
            var element = myTab.rows.item(row).cells[c];
            /*if(c > 0)
            {
              console.log(myTab.rows.item(row).cells[c]);
              console.log(element.lastElementChild.value);
            }*/
            if(element.childNodes[0].value == '' || element.childNodes[0].value < 1)
            {
              count -= 1;
            }
            if(c==1)
            {
              informationFromArray["subjectCode"] = element.lastElementChild.value;
              count++;
            }
            else if(c == 2)
            {
              informationFromArray["subjectName"] = element.lastElementChild.value;
              count++;
            }
            else if(c == 3)
            {
              informationFromArray["subjectSection"] = element.lastElementChild.value;
              count++;
            }
            else if(c == 4)
            {
              informationFromArray["subjectDate"] = element.lastElementChild.value;
              count++;
            }
            else if(c == 5)
            {
              informationFromArray["subjectCredit"] = element.lastElementChild.value;
              count++;
            }
            else if(c == 6)
            {
              informationFromArray["subjectTeacher"] = element.lastElementChild.value;

              count++;
            }
            else if(c == 7)
            {
              if(element.childNodes[0].checked)
              {
                informationFromArray["subjectTeacherCheck"] = true;
              }
              else
              {
                informationFromArray["subjectTeacherCheck"] = false;
              }
            }
        }
    if(count == 6)
    {
      arrValues.push(informationFromArray);
      for(var i = 0 ; i < allStakeholder.length ; i++)
      {
        let checkName = informationFromArray["subjectTeacher"].search(allStakeholderName[i]);
        if(checkName >= 0)
        {
          stakeholder.push(allStakeholder[i]);
          break;
        }
      }
    }
    else
    {
      if(table_id == 'Add')
      {
        messageAlert = messageAlert + "All information in Add table must be filled out\n";
        return 0;
      }
      else if(table_id == 'Drop')
      {
        messageAlert = messageAlert + "All information in Drop table must be filled out\n";
        return 0;
      }
      else if(table_id == 'Cross')
      {
        messageAlert = messageAlert + "All information in Cross table must be filled out\n";
        return 0;
      }
    }

  }

  if(table_id == 'Add')
  {
    jsonType["AddSubjectList"] = arrValues;
  }
  else if(table_id == 'Drop')
  {
    jsonType["DropSubjectList"] = arrValues;
  }
  else if(table_id == 'Cross')
  {
    jsonType["CrossSubjectList"] = arrValues;
  }
  formType.push(jsonType);
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

          td.appendChild(ele);
      }
      else{
          var ele = document.createElement('input');
          ele.setAttribute('type', 'text');
          ele.setAttribute('value', '');


          td.appendChild(ele);
      }
  }
}

function getLink()
{
  var link = {};
  var myTab = document.getElementById("fileLink");

  for (row = 1; row < myTab.rows.length; row++) {
    // loop through each cell in a row.
    var typeName = "";
    var linkDocument = "";
    var count = 0;
    for (c = 0; c < myTab.rows[row].cells.length; c++) {  
      var element = myTab.rows.item(row).cells[c];
      if(element.childNodes[0].value == '----')
      {
        count -= 1;
      }
      if(c==0)
      {
        typeName = element.childNodes[0].value;
        count++;
      }
      else if(c==1)
      {
        linkDocument = element.childNodes[0].value;
        count++;
      }
    }
    if(count == 2)
    {
      link[typeName] = linkDocument;
    }
    else
    {
      messageAlert = messageAlert + "Link must be filled out\n";
      return 0;
    }
  }
  information["Link"] = link;
}

function setDoneDate()
{
  information["doneDate"] =  "";
}

function checkEverything()
{
  getID();
  checkDate();
  checkSubject();
  checkDestination();
  checkName();
  checkLastname();
  checkID();
  checkAdvisor();
  checkAddress();
  checkNumber();
  table_to_array('Add');
  table_to_array('Drop');
  table_to_array('Cross');
  checkType();
  checkReason();
  getLink();
  setDoneDate();
  console.log (information["idForm"]);
  console.log (dataInform["idForm"]);
  console.log (checkInform["idForm"]);
  dataInform["stakeholder"] = stakeholder;
  checkInform["stakeholder"] = stakeholder;
  //var checked = new Array(stakeholder.length).fill(false);
  var checked = [];
  for(var i = 0 ; i < stakeholder.length ; i++)
  {
    checked.push("waiting");
  }

  checkInform["check"] = checked;
  checkInform["check_by_off"] = "waiting";
  var date = [];
  date.push(information.sendDate);
  for(var i = 0 ; i < stakeholder.length+1 ; i++)
  {
    date.push("-----");
  }
  checkInform["date"] = date;

  if(messageAlert != "")
  {
    alert(messageAlert);
    messageAlert="";
    information= {};
    dataInform = {};
    checkInform = {};
    return false;
  }
  console.log(JSON.stringify(information, null, 4));
  console.log(JSON.stringify(dataInform, null, 4));
  console.log(JSON.stringify(checkInform, null, 4));
  messageAlert="";
  if(confirm('ยืนยันที่จะยื่นคำร้องหรือไม่'))
  {
    loadDoc();
  }
}

function loadDoc(){
  // search student by name and year param and set hyperlink to info of student
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/saveStudent");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  var infoString = JSON.stringify(information);
  xhttp.send(infoString);
  alert("คำร้องของคุณถูกยื่น");

  xhttp.open("POST", "/saveDataInform");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  var infoString2 = JSON.stringify(dataInform);
  xhttp.send(infoString2);

  xhttp.open("POST", "/saveCheckInform");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  var infoString3 = JSON.stringify(checkInform);
  xhttp.send(infoString3);
  window.history.back();
} 

function main_page()
{
    window.location.href = "http://localhost:8080/Shomepage?id="+id;
}

function checkAll()
{
    window.location.href = "http://localhost:8080/Std_check?id="+id;
}

function logout()
{
    window.location.href = "http://localhost:8080/login";
}
function inbox()
{
    window.location.href = "http://localhost:8080/Scheck_messageList?id="+id;
}