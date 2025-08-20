let current = '';
let firstvalue = null;
let op = '';
let display = document.getElementById('display');
let copy = document.getElementById('copy');
let text = ''
let result;

function inputValue(number){
    if (current.length < 16){
        current += number;
    }
    if (op === ''){;
        text = ''
        copy.textContent = '';
    }
    display.textContent = current;
}


function operator(symbol){
    if (op !== ''){
        text = '';
        copy.textContent = result;
        calculate();
    }
    if (firstvalue === null){
        firstvalue = parseFloat(current);
    }
    op = symbol;
    text += firstvalue + op
    copy.textContent = text
    current = ''
}

function calculate(){
    if(firstvalue !== null && current !== '' && op !== ''){
        
        display.textContent = ''
        switch(op){
            case '+':
                result = firstvalue + parseFloat(current);
                break;
                case '-':
                    result = firstvalue - current;
                break;
                case '*':
                    result = firstvalue * current;
                    break;
                case '/':
                    result = firstvalue / current;
                    break;
                case '%':
                    result = firstvalue % current;
                    break;
                default:
                    result = "Error";
                    break;
        }
        if (current === ''){
            clears();
        }
        text += current;
        copy.textContent = text;
        display.textContent = result;
        firstvalue = result;
        op = ''
        current = ''
    }
}

function clears(){
    firstvalue = null;
    display.textContent = 0;
    current = ''
    copy.textContent = ''
    text = ''

}

function del(){
    current = current.slice(0, -1)
    display.textContent = current
    if (current.length === 0){
        display.textContent = '0';
    }
}




