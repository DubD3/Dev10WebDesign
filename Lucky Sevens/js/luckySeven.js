// JavaScript Document
function main(){
    var test = document.getElementById("input");
    var startBet = test.value;
    var total = startBet;
    var maxTotal = total;
    var numOfRounds = 0;
    alert(startBet);
    do {
        var result = roll();
        if(result ===7){
            total +=4;
            if(total > maxTotal){
                maxTotal = total;
            }
        }
        else{
            total--;
        }
        numOfRounds++;
    }while(total > 0)
    console.log("HERE");
    console.log(numOfRounds);
    showTable();
}

function showTable() {
	var table=document.getElementById("table");
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