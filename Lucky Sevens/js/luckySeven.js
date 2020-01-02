// JavaScript Document
function main(){
    var test = document.getElementById("input");
    var startBet = test.value;
    if(!isNaN(startBet)){
    if(startBet > 0){
    var total = startBet;
    var maxTotal = total;
    var numOfRounds = 0;
    var maxRoll = 0;
    alert(startBet);
    do {
        numOfRounds++;
        var result = roll();
        if(result ===7){
            total +=4;
            if(total > maxTotal){
                maxTotal = total;
                maxRoll = numOfRounds;
            }
        }
        else{
            total--;
        }
        
    }while(total > 0)
    console.log("HERE");
    console.log(numOfRounds);
    var table=document.getElementById("table");
    //var startBetSpot = document.getElementById("startBet");
    //startBetSpot.innerText=startBet;
    addElement("startBet",startBet)
    addElement("totalRoll",numOfRounds)
    addElement("highestAmount",maxTotal)
    addElement("rollCount", maxRoll)
    showTable(table);
    }
    else{
        alert("Bet must be greater than 0");
    }
}
else{
    alert("Bet must be a number")
}
}
function addElement(spot, input){
    var inputSpot = document.getElementById(spot);
    inputSpot.innerText=input;
}
function showTable(table) {
	//var table=document.getElementById("table");
    table.style.display = "flex";
}
function roll(){
    rolls = rollDice()+rollDice();
    console.log(rolls);
    return rolls;
}
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }