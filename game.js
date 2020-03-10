window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick=startGame;
	//setTimeout(timeStart,1000);
	menubar();
}
var countdown=0;
function startGame(){

	if(countdown<=0||check)
	{	
		countdown=30;
		check=false;
		
	alert("Ready");
	addBox();
	timeStart();
	}
}
var check=false;
function timedown()
{
	var x = document.getElementById('clock');
	countdown--;
	x.innerHTML=countdown;
	if(countdown<=0)
	{
		clearScreen();
		clearInterval(timer);
		
	}
}
var timer = null;
function timeStart(){
	var TIMER_TICK = 1000;
	
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	
	timer =setInterval(timedown,1000) ;
	
	
	
	function timeCount(){
		var allbox = document.querySelectorAll("#squares-layer div");
		
	}
}
var allboxcount=0;
function addBox(){
	
	var numbox = document.getElementById("numbox").value;
	allboxcount=numbox;
	console.log(numbox)
	var squaresLayer = document.getElementById("squares-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor=colorDrop;
		//add element to HTML node
		squaresLayer.appendChild(tempbox);

		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	console.log(box);
	box.onclick = function(){
		var boxtar=document.getElementById(box.id);
		boxtar.parentNode.removeChild(boxtar);
		allboxcount--;
		if(allboxcount<=0)
		{	check=true;
			clearInterval(timer);
			alert("you win");
		}
		
		
	}
}


function clearScreen(){
	
	var allbox =document.querySelectorAll(".square") ;
	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		var x=document.getElementById("box"+i);
    x.parentNode.removeChild(x);
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
