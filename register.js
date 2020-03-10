
window.onload = pageLoad;

function pageLoad(){
    var form=document.getElementById("submit");
    form.onclick=validateForm; 
    menubar();
	
}

function validateForm() {
    var x= document.forms["myForm"]
    if(document.getElementById("Pw").value !=document.getElementById("chackPw").value)
    {
        var error=document.getElementById("errormsg")
        error.innerText="Pw ไม่ตรงกัน";
        return false;
    }
  
   
}function menubar() {
    let Onclick = document.getElementById('header');
    let bar = document.getElementsByClassName('menubar');
   

    Onclick.onclick = function() {
       for(let i=0;i<bar.length;i++)
       {
        bar[i].classList.toggle('baropen');
       }
        
    }
}