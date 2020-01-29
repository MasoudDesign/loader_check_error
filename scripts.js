const indicator = document.querySelector(".editor-indicator");

let currentState = indicator.dataset.state;

indicator.addEventListener("click", () => {
  let nextState = "";

  if (currentState == "EMPTY") {
    nextState = "ACTIVE";
  } else if (currentState == "ACTIVE") {
    nextState = "SUCCESS";
  } else if (currentState == "SUCCESS") {
    nextState = "ERROR";
  } else {
    nextState = "EMPTY";
  }
  
  indicator.dataset.state = nextState;
  currentState = nextState;
});
