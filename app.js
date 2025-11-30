/*-------------------------------- Constants --------------------------------*/
const button = document.querySelectorAll('.button')
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/
let num1 = ''
let num2 = ''
let opr ='' 

/*------------------------ Cached Element References ------------------------*/
const numBtn = document.querySelectorAll('.number')
const oprBtn = document.querySelectorAll('.operator')
const eqlBtn = document.querySelector('.equals')
/*----------------------------- Event Listeners -----------------------------*/
button.forEach(button => {
    button.addEventListener('click',() => {
        const value = button.textContent

        if (button.classList.contains('number')){
            handleNumber(value)
        }
        else if (button.classList.contains('operator')){
            handleOperator(value)
        }
        else if (button.classList.contains('equals')){
            handleEquals()
        }
    })
});
/*-------------------------------- Functions --------------------------------*/
function handleNumber(number){
    num1 += number 
    display.textContent =num1
}

function handleOperator(operator){
    if (operator === 'C'){
        num1 =''
        num2 =''
        opr  =''
        display.textContent =''
        return
    }
    opr  = operator
    num2 = num1 
    num1 =''
}

function handleEquals(){
    if (num2 && opr && num2){
        const rslt = calculate (num1 ,opr, num2)
        display.textContent = rslt 
        num1 = String(rslt)
        num2 =''
        opr  =''
    }
}

function calculate (first, operator, secnd){
    first = Number(first)
    secnd = Number(secnd)

    if (operator === '+'){
        return first + secnd
    } else if (operator === '-'){
        return  secnd - first
    } else if (operator === '*'){
        return first * secnd
    } else if (operator === '/'){
        if (secnd === 0) return 'Error'
        return first / secnd 
    }
}