let display = document.getElementById("calc-dis");

function add(value){
    display.value+=value;
}

function clearDisplay(){
    display.value="";
}

function deleteLast(){
    display.value=display.value.slice(0,-1);
}

function percentage(){
    if(display.value!==""){
        display.value=Number(display.value)/100;
    }
}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="ERROR";
    }
}