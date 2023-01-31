var http = require('http');
var fs = require('fs');
var os = require("os");
http.createServer(function (req, res) {
  console.log(req.url);
  //console.log(req);
  if(req.method === 'GET'){
    var url = '';
    var index = req.url.indexOf('?');
    var path;
    if(index != -1)
      path = req.url.substring(0,index);
    else
      path = req.url;
    console.log('path: ' + path);
    switch(path){
      case '/login':
          url = 'login.html';
          break;
      case '/getStudent':
          url = 'res/student.json';
          break;
      case '/getDataLogin':
          url = 'res/dataLogin.json';
          break;
      case '/getDataInformation':
          url = 'res/Information.json';
          break;
      case '/getDataInform':
          url = 'res/dataInform.json';
          break;
      case '/getCheckInform':
          url = 'res/checkInform.json';
          break;
      case '/getResponseInform':
          url = 'res/responseInfo.json';
          break;
      case '/Shomepage':
          url = 'Std/Shomepage.html';
          break;
      case '/form':
          url = 'Std/form.html';
          break;
      case '/Std_check':
          url = 'Std/Std_check.html';
          break;
      case '/Scheck_form_std':
          url = 'Std/Scheck_form_std.html';
          break;
      case '/Scheck_messageList':
          url = 'Std/inboxlist.html';
          break;
      case '/Scheck_message':
          url = 'Std/inbox.html';
          break;
      case '/Thomepage':
          url = 'Teach/advisermain.html';
          break;
      case '/Tcheck_formList':
          url = 'Teach/adviser_list_check.html';
          break;
      case '/Tcheck_checkform':
          url = 'Teach/adviser_check_form.html';
          break;
      case '/Tcheck_responseList':
          url = 'Teach/adviser_list_return.html';
          break;
      case '/Tcheck_responseform':
          url = 'Teach/adviser_return_form.html';
          break;
      case '/Offhomepage':
          url = 'Off/Officer_main.html';
          break;
      case '/Off_check_formList':
          url = 'Off/Officer_checklist.html';
          break;
      case '/Officer_approve':
          url = 'Off/Officer_approve.html';
          break;
      case '/Officer_approveList':
          url = 'Off/Officer_approvelist.html';
          break;
      case '/Officer_approvedForm':
          url = 'Off/Officer_checkApprove.html';
          break;
      case '/Officer_printForm':
          url = 'Off/stuForm.html';
          break;
      case '/exit':
          process.exit();
          break;
      default:
          if(req.url.includes('.')){
            url = req.url;
            break;
          }
          url = 'redirect.html';
          break;
      }

      console.log(url);
      if(url){
        if(url.charAt(0) == '/'){
          url = url.substring(1);
        }
        fs.readFile(url, function(err, data) {
        
            console.log(err);
            if(err){
              res.writeHead(404, {'Content-Type': 'text/html'});
              res.write('<h1>404 NOT FOUND</h1>');
              return res.end();
            }else{
              if(url.endsWith('.html'))
                res.writeHead(200, {'Content-Type': 'text/html'});
              else if(url.endsWith('.js')){
                res.writeHead(200, {'Content-Type': 'text/javascript'});
              }else if(url.endsWith('.json')){
                res.writeHead(200, {'Content-Type': 'application/json'});
              }else if(url.endsWith('.css')){
                res.writeHead(200, {'Content-Type': 'text/css'});
              }else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
              }
              res.write(data);
              return res.end();
            }
        });
      }else{
        res.end();
      }
      // post on information.json
    }else if(req.method === 'POST')
    {
      var url = '';
      var index = req.url.indexOf('?');
      var path;
      if(index != -1)
      {
        path = req.url.substring(0,index);
      }
      else
        path = req.url
      console.log('path: ' + path);
      switch(path)
      {
        case '/saveStudent':
          req.on('data',chunk=>{
            let json = JSON.parse(chunk);
            let outputJson = [];
            let data = fs.readFileSync('res/Information.JSON',{encoding:'utf8',flag:'r'});
            console.log(typeof data);
            console.log("data >> " + data);
            outputJson = JSON.parse(data);
            console.log (outputJson);
            outputJson.push(json);
            outputJson = JSON.stringify(outputJson);

            fs.writeFileSync('res/Information.json',outputJson);
            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.write('OK');
            res.end();
          })
          break;
        case '/saveDataInform':
          req.on('data',chunk=>{
            let json = JSON.parse(chunk);
            let outputJson = [];
            let data = fs.readFileSync('res/dataInform.JSON',{encoding:'utf8',flag:'r'});
            console.log(typeof data);
            console.log("data >> " + data);
            outputJson = JSON.parse(data);
            console.log (outputJson);
            outputJson.push(json);
            outputJson = JSON.stringify(outputJson);

            fs.writeFileSync('res/dataInform.json',outputJson);
            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.write('OK');
            res.end();
          })
          break;
        case '/saveCheckInform':
          req.on('data',chunk=>{
            let json = JSON.parse(chunk);
            let outputJson = [];
            let data = fs.readFileSync('res/checkInform.JSON',{encoding:'utf8',flag:'r'});
            console.log(typeof data);
            console.log("data >> " + data);
            outputJson = JSON.parse(data);
            console.log (outputJson);
            outputJson.push(json);
            outputJson = JSON.stringify(outputJson);

            fs.writeFileSync('res/checkInform.json',outputJson);
            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.write('OK');
            res.end();
          })
          break;
        case '/saveNewStudent':
          req.on('data',chunk=>{

            fs.writeFileSync('res/Information.json',chunk);
            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.write('OK');
            res.end();
          })
          break;
        case '/saveNewDataInform':
          req.on('data',chunk=>{

            fs.writeFileSync('res/dataInform.json',chunk);
            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.write('OK');
            res.end();
          })
          break;
        case '/saveNewCheckInform':
          req.on('data',chunk=>{


            fs.writeFileSync('res/checkInform.json',chunk);
            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.write('OK');
            res.end();
          })
          break;
        case '/saveNewResponseInform':
          req.on('data',chunk=>{
            fs.writeFileSync('res/responseInfo.json',chunk);
            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.write('OK');
            res.end();
          })
          break;
        case '/saveResponseInform':
          req.on('data',chunk=>{
            let json = JSON.parse(chunk);
            let outputJson = [];
            let data = fs.readFileSync('res/responseInfo.json',{encoding:'utf8',flag:'r'});
            console.log(typeof data);
            console.log("data >> " + data);
            outputJson = JSON.parse(data);
            console.log (outputJson);
            outputJson.push(json);
            outputJson = JSON.stringify(outputJson);

            fs.writeFileSync('res/responseInfo.json',outputJson);
            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.write('OK');
            res.end();
          })
          break;
        default: res.end();
      }
    }
    else{
      res.end();
    }
//
}).listen(8080);

