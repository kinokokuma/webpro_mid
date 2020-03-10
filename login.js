function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;

function loginLoad(){
	// วิธีใช้ getParams()
	var parameter = getParams();
	console.log(parameter["username"]);
	var form=document.getElementById("submit");
	form.onclick=checkLogin; 
	menubar();
}

function checkLogin(){
	
	if((document.getElementById("username").value !=getParams()["username"])
	||(document.getElementById("pw").value !=getParams()["password"]))
    {
        alert("Pw หรือId ไม่ถูก");
        return false;
	}
	else{
		alert("ถูก");
	}
}
function menubar() {
    let Onclick = document.getElementById('header');
    let bar = document.getElementsByClassName('menubar');
   

    Onclick.onclick = function() {
       for(let i=0;i<bar.length;i++)
       {
        bar[i].classList.toggle('baropen');
       }
        
    }
}

			