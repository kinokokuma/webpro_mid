var x=0;
window.onload = menubar;
function postFunction()
{   var name=["post1","reply1","reply2"];
    var contentText=document.getElementById("text1").value;
    var post= document.getElementById(name[x]);
    x++;
    if(x>2)
    {
        x=2
    }
   
    post.innerHTML=contentText;
}
function clearFunction()
{  var i;
    var name=["post1","reply1","reply2"];
    for(i=0;i<3;i++)
    {
    var post= document.getElementById(name[i]);
    post.innerHTML="";
    }
    x=0;
   
    
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