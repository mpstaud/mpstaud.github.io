let bal;
let val;
let con;

function getInput(){
    bal = document.getElementById("myBalance").value;
    val = document.getElementById("myGoal").value;
    con = document.getElementById("myContribution").value;
    parseInt(bal);
    parseInt(val);
    parseInt(con);

}

function readyWhen(){
    getInput();
    let remainder = val - bal;
    let numMonths = remainder / con;
    alert("It will take you "+ numMonths + ' months to save $'+val)
}

