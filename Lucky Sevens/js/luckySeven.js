// JavaScript Document
function play() {
    var valuein = document.getElementById("input");
    var cashBet = valuein.value;

    if (cashBet.substring(0, 1) === "$") {
        startBet = cashBet.replace('$', ' ');
        //alert(cashBet);
        //var startBet = parseFloat(cashBet);
        //alert(startBet);

        if (!isNaN(startBet)) {
            if (startBet > 0) {
                console.log("start")
                
                var total = parseFloat(startBet);
                //console.log(total);
                //console.log(typeof(total));
                var maxTotal = total;
                var numOfRounds = 0;
                var maxRoll = 0;
                // alert(startBet);
               
                do {
                    numOfRounds++;
                    console.log("round")
                    console.log(numOfRounds)
                    var result = roll();
                    console.log("roll")
                    console.log(result)
                    if (result === 7) {
                       // console.log(typeof(total));
                        total = parseFloat(total);
                        total += 4;
                        //console.log(total)
                        //console.log(typeof(total));
                        total = parseFloat(total);
                        total = total.toFixed(2);
                        total = parseFloat(total);
                        maxTotal = parseFloat(maxTotal)
                        //console.log(total)
                        //console.log(typeof(total))
                        //console.log(typeof(maxTotal))
                        if (total > maxTotal) {
                            maxTotal = total;
                            maxRoll = numOfRounds;
                        }
                    }
                    else {
                       // console.log(typeof(total));
                        total = parseFloat(total);
                        total--;
                        total = total.toFixed(2)
                        //console.log(typeof(total));
                    }
                    console.log("total")
                    console.log(total)
                   // console.log(total)
                } while (total > 0)
                console.log("end");
                var table = document.getElementById("table");
                //var startBetSpot = document.getElementById("startBet");
                //startBetSpot.innerText=startBet;
                addElement("startBet", toCurrency(startBet))
                addElement("totalRoll", numOfRounds)
                addElement("highestAmount", toCurrency(maxTotal))
                addElement("rollCount", maxRoll)
                showTable(table);
                var millisecondsToWait = 1000;
                setTimeout(function () {
                    // Whatever you want to do after the wait
                    alert("Click Play to Play Again!")
                }, millisecondsToWait);
                
            }
            else {
                alert("Bet must be greater than 0");
            }
        }
        else {
            alert("Bet must be a number")
        }
    } else {
        alert("Input must be a currency value ($x.xx)")
    }
}
function toCurrency(value) {
    var dollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, });
    return dollar.format(value);
}
function addElement(spot, input) {
    var inputSpot = document.getElementById(spot);
    inputSpot.innerText = input;
}
function showTable(table) {
    //var table=document.getElementById("table");
    table.style.display = "flex";
}
function roll() {
    var rolls = rollDice() + rollDice();
   // console.log(rolls);
    return rolls;
}
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
function validate() {
    var valuein = document.getElementById("input");
    console.log(valuein.value)
    var cashBet = valuein.value;
    if (cashBet.substring(0, 1) === "$") {
        startBet = cashBet.replace('$', ' ');
        //alert(cashBet);
        //var startBet = parseFloat(cashBet);
        //alert(startBet);

        if (!isNaN(startBet)) {
            if (startBet <= 0) {
                alert("Bet must be greater than 0");
            }
        }
        else {
            alert("Bet must be a number")
        }
    } else {
        alert("Input must be a currency value ($x.xx)")
    }
}
