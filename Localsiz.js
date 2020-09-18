var cellArr      =  Array.from(document.getElementsByClassName("grid-item"));
var Turnlabel1   =  document.getElementById("player1Turn");
var Turnlabel2   =  document.getElementById("player2Turn");
var scoreLabel_1 =  document.getElementById("score1");
var scoreLabel_2 =  document.getElementById("score2");
var player_Won   =  document.getElementById("playerWon");

/*Turnlabel1.innerHTML   =   localStorage.getItem("Turnlabel1");
Turnlabel2.innerHTML   =   localStorage.getItem("Turnlabel2");
scoreLabel_1.innerHTML =   localStorage.getItem("score1");
scoreLabel_2.innerHTML =   localStorage.getItem("score2");
  */
  //console.log(document.getElementsByClassName("grid-item"))
  //document.getElementsByClassName("grid-item").innerHTML = localStorage.getItem("table").split(",");
  //Array.from(document.getElementsByClassName("grid-item")).forEach(function(el,i){el.innerHTML =localStorage.getItem("table").split(",")[i]})
  //var table = new Array(9);

Turnlabel1.innerHTML = "Player 1 Turn!"

var gameState = {
	move:0,
	table: [],
	score1:0,
	score2:0
};

/*localStorage.setItem("score1" , gameState.score1 );
localStorage.setItem("score2" , gameState.score2 );
localStorage.setItem("Turnlabel1",Turnlabel1.innerHTML);
localStorage.setItem("Turnlabel2",Turnlabel2.innerHTML);
*/
//localStorage.setItem("table",table);


function initHandlers() {
	cellArr.forEach( cell => {
		cell.addEventListener("click", changeCellContent);
		cell.addEventListener("mouseover", cellOver);
		cell.addEventListener("mouseout", cellOut);
	});

}

function cellOver(){
	 event.target.style.backgroundColor = '	#7FFF00'; //açık yeşil
}    //#FF8C00 turuncu

function cellOut(){
	 event.target.style.backgroundColor = '#e3e4f2';
}

function clearBoard () {
	cellArr.forEach( cell => cell.innerHTML = "");
}

 /*function clearTable(){
	
        for(i=0;i<table.length;i++)
	}

*/
function changeCellContent(){
	
  /*if(this.innerHTML === '') {
	this.innerHTML = (gameState.move % 2 === 0) ? "X" : "O";
	
	gameState.move++;
	*/
	if(this.innerHTML === '') {
	  if(Turnlabel1.innerHTML === "Player 1 Turn!") this.innerHTML = "X"; // table[e.target.id] = "X"}
	  else if(Turnlabel2.innerHTML === "Player 2 Turn!") this.innerHTML = "O"; // table[e.target.id] = "O"}
	checkMatch();
	changeTurn();
	check_GameWin();
  }
  
  
  //if(player_Won.innerHTML != "")  
 // localStorage.setItem("table",table);


}

function Turning1(){
	Turnlabel1.innerHTML = "Player 1 Turn!";
	Turnlabel2.innerHTML = "";
 /*localStorage.setItem("Turnlabel1","Player 1 Turn!");
 localStorage.setItem("Turnlabel2","");
*/
}


function changeTurn() {
   if(Turnlabel2.innerHTML === ''){
	  Turnlabel1.innerHTML = "";
	  Turnlabel2.innerHTML = "Player 2 Turn!";
	 /*localStorage.setItem("Turnlabel1","");
	 localStorage.setItem("Turnlabel2","Player 2 Turn!");*/
 	}	else if (Turnlabel1.innerHTML === ''){
	  Turnlabel2.innerHTML = "";
	  Turnlabel1.innerHTML = "Player 1 Turn!";
	  /*localStorage.setItem("Turnlabel1","Player 1 Turn!");
	  localStorage.setItem("Turnlabel2","");*/
   }	
}

function player1_Won(){
	player_Won.innerHTML = "Player 1 Won!";
}

function player2_Won(){
	player_Won.innerHTML = "Player 2 Won!";
}

function Draw(){
	player_Won.innerHTML = "DRAW!";
}

function clear_WonBoard(){
	player_Won.innerHTML = "";
}
function check_GameWin(){
	if(gameState.score1 === 5){
		player_Won.innerHTML = "PLAYER 1 WON THE GAME";
		//localStorage.setItem("score1",0);
		//localStorage.setItem("score2",0);
		Turning1();
	}
	if(gameState.score2 === 5){
		player_Won.innerHTML = "PLAYER 2 WON THE GAME";
		/*localStorage.setItem("score1",0);
		localStorage.setItem("score2",0);*/
		Turning1();
	}
	/* if(localStorage.getItem("score1") === 5 || localStorage.getItem("score2") === 5){
		localStorage.setItem("score1",0);
		localStorage.setItem("score2",0);
	}
  */
     //do not call clear_WonBoard()
     //do not call clearBoard()
}

function GameWin(){
	if(gameState.score1 !== 5 && gameState.score2 !== 5){
		setTimeout(()=> clearBoard(), 1500);
		setTimeout(()=> clear_WonBoard(), 1500);
	}
}

  /*function check_isFinished(isClearBoard, isWon, isplayer_one=false){
	if(isClearBoard && gameState.score1 != 5 && gameState.score2 != 5){
       setTimeout(()=> clearBoard(), 1000);
	}
    if(isWon == true)
    	isplayer_one ? player1_Won() : player2_Won();
	    setTimeout(()=> clear_WonBoard(), 1000);

}
*/


function Refresh(){
	
	clearBoard ();
	clear_WonBoard();
	Turning1();
    scoreLabel_1.innerHTML = 0;
    scoreLabel_2.innerHTML = 0;
    gameState.score1 = 0;
    gameState.score2 = 0;
    /*localStorage.setItem("score1",0);
    localStorage.setItem("score2",0);*/
   // if(gameState.move % 2 != 0) gameState.move++;
   //clearTable();
}
function checkMatch() {

     if( cellArr[0].innerHTML === cellArr[4].innerHTML &&
     	 cellArr[4].innerHTML === cellArr[8].innerHTML && cellArr[0].innerHTML !== ""){
     	if(cellArr[0].innerHTML === "X") {
     		gameState.score1++;
     		//localStorage.setItem("score1",gameState.score1 );
     		scoreLabel_1.innerHTML = gameState.score1;
     		  //check_isFinished(false,true,true);
                player1_Won();
                if(gameState.score1 !== 5 && gameState.score2 !== 5)
                 setTimeout(()=> clear_WonBoard(), 1500);

                 
     	}else {
     		gameState.score2++;
     		//localStorage.setItem("score2",gameState.score2 );
     		scoreLabel_2.innerHTML = gameState.score2;
     		//check_isFinished(false,true,false);
     		    player2_Won();
     		    if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     		
     	}
     	//check_isFinished(true,false);
         GameWin();
      
         //clearBoard();
     }else if( cellArr[0].innerHTML === cellArr[1].innerHTML &&
     	 cellArr[1].innerHTML === cellArr[2].innerHTML && cellArr[0].innerHTML !== ""){
     	if(cellArr[0].innerHTML === "X") {
     		gameState.score1++;
     		//localStorage.setItem("score1",gameState.score1 );
     		scoreLabel_1.innerHTML = gameState.score1;
     		//check_isFinished(false,true,true);
     		     player1_Won();
     		     if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     		      
     	}else {
     		gameState.score2++;
     		//localStorage.setItem("score2",gameState.score2 );
     		scoreLabel_2.innerHTML = gameState.score2;
     		//check_isFinished(false,true,false);
     		    player2_Won();
     		    if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
    		
     	}
         GameWin();
         //check_isFinished(true,false);
     
       //  clearBoard();
     }else if( cellArr[3].innerHTML === cellArr[4].innerHTML &&
     	 cellArr[4].innerHTML === cellArr[5].innerHTML && cellArr[3].innerHTML !== ""){
     	if(cellArr[3].innerHTML === "X") {
     		gameState.score1++;
     		//localStorage.setItem("score1",gameState.score1 );
     		scoreLabel_1.innerHTML = gameState.score1;
     		//check_isFinished(false,true,true);
     		      player1_Won();
     		      if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     		  
     	}else {
     		gameState.score2++; 
     		//localStorage.setItem("score2",gameState.score2 );
     		scoreLabel_2.innerHTML = gameState.score2;
     		// check_isFinished(false,true,false);
     		     player2_Won();
     		     if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     	}
     	//check_isFinished(true,false);
         GameWin();
     
        // clearBo7ard();
     }else if( cellArr[6].innerHTML === cellArr[7].innerHTML &&
     	 cellArr[7].innerHTML === cellArr[8].innerHTML && cellArr[6].innerHTML !== ""){
     	if(cellArr[6].innerHTML === "X") {
     		gameState.score1++;
     		//localStorage.setItem("score1",gameState.score1 );
     		scoreLabel_1.innerHTML = gameState.score1;
     		//check_isFinished(false,true,true);
     		       player1_Won();
     		       if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     	}else {
     		gameState.score2++;
     		//localStorage.setItem("score2",gameState.score2 );
     		scoreLabel_2.innerHTML = gameState.score2;
     		//check_isFinished(false,true,false);
     		     player2_Won();
     		     if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     		 
     	}
     	GameWin();
         // check_isFinished(true,false);
     
        // clearBoard();
     }else if( cellArr[2].innerHTML === cellArr[4].innerHTML &&
     	 cellArr[4].innerHTML === cellArr[6].innerHTML && cellArr[2].innerHTML !== ""){
     	if(cellArr[2].innerHTML === "X") {
     		gameState.score1++;
     		//localStorage.setItem("score1",gameState.score1 );
     		scoreLabel_1.innerHTML = gameState.score1;
     		//check_isFinished(false,true,true);
     		       player1_Won();
     		       if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     		   
     	}else {
     		gameState.score2++;
     		//localStorage.setItem("score2",gameState.score2 );
     		scoreLabel_2.innerHTML = gameState.score2;
                     //check_isFinished(false,true,false);
     		      player2_Won(); 
     		      if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     	}
     	GameWin();
         //check_isFinished(true,false);
     
       //  clearBoard();
     }else if( cellArr[0].innerHTML === cellArr[3].innerHTML &&
     	 cellArr[3].innerHTML === cellArr[6].innerHTML && cellArr[0].innerHTML !== ""){
     	if(cellArr[0].innerHTML === "X") {
     		gameState.score1++;
     		//localStorage.setItem("score1",gameState.score1 );
     		scoreLabel_1.innerHTML = gameState.score1;
     		//check_isFinished(false,true,true);
     		       player1_Won();
     		       if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     		  
     	}else {
     		gameState.score2++;
     		//localStorage.setItem("score2",gameState.score2 );
     		scoreLabel_2.innerHTML = gameState.score2;
     		//check_isFinished(false,true,false);
     		      player2_Won();
     		      if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     		  
     	}
     	GameWin();
         //check_isFinished(true,false);
     
        // clearBoard();
     }else if( cellArr[1].innerHTML === cellArr[4].innerHTML &&
     	 cellArr[4].innerHTML === cellArr[7].innerHTML && cellArr[1].innerHTML !== ""){
     	if(cellArr[1].innerHTML === "X") {
     		gameState.score1++;
     		//localStorage.setItem("score1",gameState.score1 );
     		scoreLabel_1.innerHTML = gameState.score1;
     		//check_isFinished(false,true,true);
     		        player1_Won();
     		        if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     	}else {
     		gameState.score2++;
     		//localStorage.setItem("score2",gameState.score2 );
     		scoreLabel_2.innerHTML = gameState.score2;
     		//check_isFinished(false,true,false);
     		     player2_Won();
     		     if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     		 
     	}
     	GameWin();
          //check_isFinished(true,false);
     
       //  clearBoard();
     }else if( cellArr[2].innerHTML === cellArr[5].innerHTML &&
     	 cellArr[5].innerHTML === cellArr[8].innerHTML && cellArr[2].innerHTML !== ""){
     	if(cellArr[2].innerHTML === "X") {
     		gameState.score1++;
     		//localStorage.setItem("score1",gameState.score1 );
     		scoreLabel_1.innerHTML = gameState.score1;
     		//check_isFinished(false,true,true);
     		      player1_Won();
     		      if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     		  
     	}else {
     		gameState.score2++;
     		//localStorage.setItem("score2",gameState.score2 );
     		scoreLabel_2.innerHTML = gameState.score2;
     		//check_isFinished(false,true,false);
     		    player2_Won();
     		    if(gameState.score1 !== 5 && gameState.score2 !== 5)
     		    setTimeout(()=> clear_WonBoard(), 1500);
     		
     	}
     	GameWin();
         //check_isFinished(true,false);
     
         //clearBoard();
     }else{
     	  	if(cellArr.filter(cell =>  (cell.innerHTML === "") ).length ===0){
     	  		Draw();
     	  		//check_isFinished(true,true);
     	  		setTimeout(()=> clearBoard(), 1500);
     	  		setTimeout(()=> clear_WonBoard(), 1500);
     	  		
     	  	}

        }
        
}


initHandlers();
