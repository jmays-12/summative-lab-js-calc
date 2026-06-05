let history = [];

function addToHistory(operation, input1, input2, result, error = null) {
    history.push({operation, input1, input2, result, error});
}

function add(a, b) {
    const result = a + b
    addToHistory("+", a, b, result);
    return result;
}

function subtract(a, b) {
    const result = a - b;
    addToHistory("-", a, b, result);
    return result;
}

function multiply(a, b) {
    const result = a * b;
    addToHistory("*", a, b, result);
    return result;    
}

function divide(a, b) {
  if (b === 0) {
    addToHistory("/", a, b, null, "Cannot divide by zero");
    return null;
  }

  const result = a / b;
  addToHistory("/", a, b, result);
  return result;
}

function showHistory() {
  if (history.length === 0) {
    console.log("No calculations yet.");
    return;
  }

  history.forEach(function(entry) {
    if (entry.error) {
      console.log(`${entry.input1} ${entry.operation} ${entry.input2} = ERROR (${entry.error})`);
    } else {
      console.log(`${entry.input1} ${entry.operation} ${entry.input2} = ${entry.result}`);
    }
  });
}

function clearHistory() {
    history = [];
    console.log("History cleared.");
}

add(150, 5);
subtract(39027, 3403922);
multiply(48293, 3200);
divide(510000, 600);
divide(4000, 0);

showHistory();

//simulating clear button on calc
clearHistory();

showHistory();
