let operand1;
let operand2;
let operator;
document.addEventListener('click',(e)=>{
    if (!e.target.matches('button'))
        return;
    const clickedText = e.target.textContent; 
    const display = document.querySelector('.display');
    
    if(clickedText == 'AC'){
        display.textContent = 0;
        operand1=undefined;
        operand2=undefined;
        operator=undefined;
    }
    else if(clickedText=='+/-'){
        if (operand2)
            operand2=-operand2;
        else if(operand1)
            operand1=-operand1;
        else
            return
    }
    else if(clickedText=='%'){
        if (operand2)
            operand2=operand2/100;
        else if(operand1)
            operand1=operand1/100;
        else
            return    
    }
    else if((operand1 && operand2 && operator)  || clickedText=='=' ){
        operand1 = doOperation(operand1,operand2,operator);
        display.textContent = operand1;
    }
    
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

const doOperation = function(operand1,operand2,operator){
    let result;
    switch(operator){
        case '+':
            result = add(operand1,operand2);
            return result;
        case '-':
            result = subtract(operand1,operand2);
            return result;
        case '*':
            result = multiplication(operand1,operand2);
            return result;
        case '/':
            result = division(operand1,operand2);
            return result;
        default:
            break;
    }
}