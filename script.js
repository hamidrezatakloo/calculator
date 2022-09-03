let operand1;
let operand2;
let operator;
document.addEventListener('click',(e)=>{
    if (!e.target.matches('button'))
        return;
    const clickedText = e.target.textContent; 
    const display = document.querySelector('.display');
})

const add =function(num1,num2){
    return (num1+num2);
}

const subtract = function(num1,num2){
    return(num1-num2);
}

const multiplication = function(num1,num2){
    return num1 * num2;
}

const division = function(num1,num2){
    return num1/num2;
}