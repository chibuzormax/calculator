// function to clear screen
function clearScreen() {
  document.getElementById("result").value = "";
}

// function to Delete
function del() {
  let x = document.getElementById("result").value;
  document.getElementById("result").value = x.substring(0, x.length - 1);
}

// function to display values
function display(value) {
  document.getElementById("result").value += value;
}

// function to evaluate the expression and return the value
function calculate() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

// Square root function
function sqrt() {
  let x = document.getElementById("result").value;
  let y = Math.sqrt(x);
  document.getElementById("result").value = y;
}

// Square function
function pow2() {
  let x = document.getElementById("result").value;
  let y = Math.pow(x, 2);
  document.getElementById("result").value = y;
}

// Cube function
function pow3() {
  let x = document.getElementById("result").value;
  let y = Math.pow(x, 3);
  document.getElementById("result").value = y;
}

// sine function
function sin() {
  let x = document.getElementById("result").value;
  let y = Math.sin(x * (Math.PI / 180));
  document.getElementById("result").value = y;
}

// cosine function
function cos() {
  let x = document.getElementById("result").value;
  let y = Math.cos(x * (Math.PI / 180));
  document.getElementById("result").value = y;
}

// tan function
function tan() {
  let x = document.getElementById("result").value;
  let y = Math.tan(x * (Math.PI / 180));
  document.getElementById("result").value = y;
}

// log function
function log() {
  let x = document.getElementById("result").value;
  let y = Math.log();
  document.getElementById("result").value = y;
}
