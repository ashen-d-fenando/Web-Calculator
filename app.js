let dispaly = document.getElementById('display');
let equelBtn = document.getElementById("equelBtn");
let clearbtn = document.getElementById("clearbtn");
let backSpacebtn = document.getElementById("backSpacebtn");


//Functions for clear Display

function clearDisplay(){
  if (dispaly.value == "Syntax Error" || dispaly.value == 'Infinity' || dispaly.value =="undefined") {
    dispaly.value = '';
  }
}


//Input only [0-9] numbera or [+ , * ,-,/] in keybord
dispaly.addEventListener('input', function () {
  clearDisplay();
  this.value = this.value.replace(/[^0-9+\-=\/\*\.]/g, '');
  dispaly.focus();
});

// Adding Number input through button

function addNum(num) {
  if (dispaly.value.length < 15) {
    clearDisplay();
    dispaly.value = dispaly.value + num;
    dispaly.focus();
  }
}

//Adding operation through btn
function addOperation(operation) {
  if (dispaly.value.length < 13) {
    clearDisplay();
    dispaly.value = dispaly.value + operation;
    dispaly.focus();
  }
}



//Equel Button 

function equal() {
  try {
    let resultValue = eval(dispaly.value);
    dispaly.value = resultValue;
    console.log(resultValue);
  } catch (error) {
    dispaly.value = 'Syntax Error';
    console.log(error);
  }
}

// Getting result when press Enter key 
dispaly.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    equal();
  }
})


// Backspace button 

backSpacebtn.addEventListener("click", function () {
  // Get current cursor positions
  const start = dispaly.selectionStart;
  const end = dispaly.selectionEnd;


  if (start !== end) {
    dispaly.value = dispaly.value.slice(0, start) + dispaly.value.slice(end);
    dispaly.focus();
    dispaly.setSelectionRange(start, start);
  } else if (start > 0) {
    dispaly.value =
      dispaly.value.slice(0, start - 1) + dispaly.value.slice(end);
    dispaly.focus();
    dispaly.setSelectionRange(start - 1, start - 1);

  } else {
    dispaly.focus();

  }

});


//clear btn

clearbtn.addEventListener("click",()=>{
  dispaly.value = '';
  dispaly.focus();
})