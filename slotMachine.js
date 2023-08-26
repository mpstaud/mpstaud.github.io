let num1;
let num2;
let num3;
let num4;
let num5;
let num6;

function spin(){
    num1 = Math.random() * 5;
    let yourNumber = num1;
    return yourNumber;
  
}

function match(){
    num4 = Math.random() * 5;
    let luckyNumber = num4;
    return luckyNumber;
}

let att = spin();
let powerball = match();

console.log(att);
console.log(powerball);
