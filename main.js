
window.onload = menubar;


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