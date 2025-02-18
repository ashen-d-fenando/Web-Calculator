let display = document.getElementById('display');
let equelBtn = document.getElementById("equelBtn");
let clearbtn = document.getElementById("clearbtn");
let backSpacebtn = document.getElementById("backSpacebtn");

//Functions for clear Display

function clearDisplay(){
  if (display.value == "Syntax Error" || display.value == 'Infinity' || display.value =="undefined" ||  display.value == "NaN") {
    display.value = '';
  }
}

//Input only [0-9] numbera or [+ , * ,-,/] in keybord
display.addEventListener('input', function () {
  clearDisplay();
  this.value = this.value.replace(/[^0-9+\-=\/\*\.]/g, '');
  display.focus();
});

// Adding Number input through button

function addNum(num) {
  if (display.value.length < 15) {
    clearDisplay();
    display.value = display.value + num;
    display.focus();
  }
}

//Adding operation through btn
function addOperation(operation) {
  if (display.value.length < 13) {
    clearDisplay();
    display.value = display.value + operation;
    display.focus();
  }
}

//Equel Button 

function equal() {
  try {
    let resultValue = eval(display.value);
    display.value = resultValue;
    console.log(resultValue);
  } catch (error) {
    display.value = 'Syntax Error';
    console.log(error);
  }
}

// Getting result when press Enter key 
display.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    equal();
  }
})

// Backspace button 

backSpacebtn.addEventListener("click", function () {
  // Get current cursor positions
  const start = display.selectionStart;
  const end = display.selectionEnd;

  if (start !== end) {
    display.value = display.value.slice(0, start) + display.value.slice(end);
    display.focus();
    display.setSelectionRange(start, start);
  } else if (start > 0) {
    display.value =
      display.value.slice(0, start - 1) + display.value.slice(end);
    display.focus();
    display.setSelectionRange(start - 1, start - 1);

  } else {
    display.focus();
  }
});

//clear btn

clearbtn.addEventListener("click",()=>{
  display.value = '';
  display.focus();
})