var  arr = document.getElementsByClassName("grid-item");

window.onload = function () {

let move = 0;
let table=new Array(9);
let count1=0;
let count2=0;

for(let i=0;i < document.getElementsByClassName("grid-item").length;i++){
	let activeCell;
	activeCell = document.getElementsByClassName("grid-item")[i];
	activeCell.onmouseover=function(){
		activeCell.style.backgroundColor = '#FF8C00';
	}
}
for(let i=0;i < document.getElementsByClassName("grid-item").length;i++){
	let activeCell;
	activeCell = document.getElementsByClassName("grid-item")[i];
	activeCell.onmouseout=function(){
		activeCell.style.backgroundColor = '#e3e4f2';
	}
}

for(let i=0; i < arr.length; i++){
	arr[i].onclick = function(){
		console.log(i);
		console.log(table);
   if(arr[i].innerHTML == '') {
	  if(move % 2 == 0){
	  	  table[i]='X';
		  arr[i].innerHTML = 'X'
	  }
      else if(move % 2 != 0){
      		table[i]='O';
      	  	arr[i].innerHTML = 'O'
      }
      move++;
     }
     console.log(arr);

    

     function clear(){
     	for(i=0;i<table.length;i++){
     		table[i]='';
     		document.getElementsByClassName("grid-item")[i].innerHTML = "";
     	}
     }
     
     if(arr[0].innerHTML == arr[4].innerHTML && arr[4].innerHTML == arr[8].innerHTML && arr[8].innerHTML == 'X'){
         count1++;
         document.getElementById("score1").innerHTML = count1;
         
         window.setTimeout(()=> {
         	clear();
         }, 1000);
     }
     
     else  if(arr[0].innerHTML == arr[1].innerHTML && arr[1].innerHTML == arr[2].innerHTML && arr[2].innerHTML=='X'){
     	count1++;
     	document.getElementById("score1").innerHTML=count1;
     	
     	window.setTimeout(()=> {
         	
         	clear();
         }, 1000);
     }

     

   if(document.getElementById("player2Turn").innerHTML == ''){
	  document.getElementById("player1Turn").innerHTML = "";
	  document.getElementById("player2Turn").innerHTML = "Player 2 Turn!";
  }
   else if(document.getElementById("player1Turn").innerHTML == ''){
	  document.getElementById("player2Turn").innerHTML = "";
	  document.getElementById("player1Turn").innerHTML = "Player 1 Turn!";
       }
   
    }
    }

  }
  
 

