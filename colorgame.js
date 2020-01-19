var numSquare=6;
var color = generateRandomColor(numSquare);
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var pickedColor=pickColor();
var displayColor=document.querySelector("#displaycolor")
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numSquare=3;
	color = generateRandomColor(numSquare);
	pickedColor=pickColor();
	displaycolor.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
	if(color[i])
		squares[i].style.backgroundColor=color[i];
	else
		squares[i].style.display="none";
	
}
});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numSquare=6
	color = generateRandomColor(numSquare);
	pickedColor=pickColor();
	displaycolor.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
	if(color[i]){}
		squares[i].style.backgroundColor=color[i];
		squares[i].style.display="block";}
});

resetButton.addEventListener("click",function(){
	color = generateRandomColor(numSquare);
	pickedColor=pickColor();
	displaycolor.textContent=pickedColor;
	message.textContent="";
	resetButton.textContent="new game";
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=color[i];
	}
	h1.style.backgroundColor="steelblue";
});


displaycolor.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=color[i];

	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;

		if(clickedColor==pickedColor){
		    message.textContent="Correct";
		    resetButton.textContent="play again?";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}
		else{
			message.textContent="try again bruhh!!"
			this.style.backgroundColor="#232323";
		}
	});
}


function changeColor(color){
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=color;
}
}



function pickColor(){
	var random=Math.floor(Math.random()*color.length)
	return color[random];
}


function generateRandomColor(num){
	var arr=[];

	for(var i=0;i<num;i++){
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
	
}