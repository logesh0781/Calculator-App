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

document.addEventListener("keydown", function(event){
    if(!isNaN(event.key) || ['+','-','*','/','.'].includes(event.key)){
        add(event.key);
    }
    else if(event.key==="Enter" || event.key==="="){
        calculate();
    }
    else if(event.key==="Backspace"){
        deleteLast();
    }
    else if(event.key==="Escape" || event.key==="Delete"){
        clearDisplay();
    }
})
