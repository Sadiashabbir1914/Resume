const display = document.querySelector('#display');

function append(input){
    display.value += input;
}

function deleteOnebyOne(input){
    display.value = display.value.toString().slice(0, -1);
}

function clearScreen(){
    display.value = "";
}

function equal(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Syntax error";
    }
   
}