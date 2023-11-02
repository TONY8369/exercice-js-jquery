// Exercice 1
function changeText() {
    let div = document.getElementById("exercise1Div");
    div.innerHTML = "Nouveau texte!";
  }
  
  // Exercice 2
  let clickCount = 0;
  function incrementCounter() {
    clickCount++;
    document.getElementById("clickCount").textContent = clickCount;
  }
  
  // Exercice 3
  function toggleClass() {
    let div = document.getElementById("exercise3Div");
    div.classList.toggle("exercice3");
  }

  // Exercice 4
  function changeBackgroundColor() {
    console.log('test');
    let div = document.getElementById("exercise4Div");
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    div.style.backgroundColor = bgColor;
  }

  // Exercice 5
  function displayInputValue() {
    let input = document.getElementById("inputText");
    let display = document.getElementById("displayText");
    display.textContent = "Le contenu du champ est : " + input.value;
  }

  // Exercice 6
  let quotes = ["Citation 1", "Citation 2", "Citation 3"];
  function generateRandomQuote() {
    let div = document.getElementById("exercise6Div");
    let randomIndex = Math.floor(Math.random() * quotes.length);
    div.textContent = quotes[randomIndex];
  }

  // Exercice 7
  let exercise7Div = document.getElementById("exercise7Div");
  exercise7Div.addEventListener("mouseover", function() {
    exercise7Div.style.backgroundColor = "yellow";
  });
  exercise7Div.addEventListener("mouseout", function() {
    exercise7Div.style.backgroundColor = "lightgray";
  });

  // Exercice 8
  function validateForm(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name !== "" && email !== "") {
      document.getElementById("formValidationMessage").textContent = "Formulaire valide";
    } else {
      document.getElementById("formValidationMessage").textContent = "Veuillez remplir tous les champs";
    }
  }

  // Exercice 9
  function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    document.getElementById("exercise9Div").textContent = hours + ":" + minutes + ":" + seconds;
  }
  setInterval(updateTime, 1000);

  // Exercice 10
  function calculate() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    let operator = document.getElementById("operator").value;
    let result;
    
    if (operator === "+") {
      result = input1 + input2;
    } else if (operator === "-") {
      result = input1 - input2;
    } else if (operator === "*") {
      result = input1 * input2;
    } else if (operator === "/") {
      result = input1 / input2;
    }
    
    document.getElementById("result").textContent = "Résultat : " + result;
  }

  // Exercice 11
  function toggleElements() {
    let element1 = document.getElementById("element1");
    let element2 = document.getElementById("element2");
    let element3 = document.getElementById("element3");

    if (element1.style.display === "none") {
      element1.style.display = "block";
      element2.style.display = "block";
      element3.style.display = "block";
    } else {
      element1.style.display = "none";
      element2.style.display = "none";
      element3.style.display = "none";
    }
  }

  // Exercice 12
  let exercise12Div = document.getElementById("exercise12Div");
  exercise12Div.addEventListener("click", function() {
    exercise12Div.style.transition = "background-color 2s";
    exercise12Div.style.backgroundColor = "blue";
  });

  // Exercice 13
  let dragElement = document.getElementById("dragElement");
  let dropElement = document.getElementById("dropElement");

  dragElement.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text", event.target.id);
  });

  dropElement.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  dropElement.addEventListener("drop", function(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  });

  // Exercice 14
  function calculateTip() {
    let billAmount = parseFloat(document.getElementById("billAmount").value);
    let tipPercentage = parseInt(document.getElementById("tipPercentage").value);
    let totalAmount = billAmount + (billAmount * tipPercentage / 100);
    document.getElementById("totalAmount").textContent = "Montant total avec pourboire : " + totalAmount;
  }

  // Exercice 15
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);

    if (guess === secretNumber) {
      document.getElementById("guessMessage").textContent = "Bravo ! Vous avez deviné le nombre.";
    } else if (guess < secretNumber) {
      document.getElementById("guessMessage").textContent = "Le nombre est plus grand.";
    } else {
      document.getElementById("guessMessage").textContent = "Le nombre est plus petit.";
    }
  }

  // Exercice 16
  function changeImage() {
    let color = document.getElementById("colorSelect").value;
    let image = document.getElementById("colorImage");
    image.src = color + ".jpg";
  }

  // Exercice 17 (suite)
  function displayCurrentTime() {
    let currentTime = new Date();
    document.getElementById("currentTime").textContent = "Heure actuelle : " + currentTime.toLocaleTimeString();
  }
  setInterval(displayCurrentTime, 1000);

  // Exercice 18
  let scrollContainer = document.getElementById("scrollContainer");
  let scrollImages = document.getElementsByClassName("scrollImage");
  let scrollIndex = 0;

  function scrollLeft() {
    if (scrollIndex > 0) {
      scrollIndex--;
      scrollContainer.scrollLeft -= scrollImages[scrollIndex].width;
    }
  }

  function scrollRight() {
    if (scrollIndex < scrollImages.length - 1) {
      scrollContainer.scrollLeft += scrollImages[scrollIndex].width;
      scrollIndex++;
    }
  }

  // Exercice 19
  function changeBackgroundColor(color) {
    let div = document.getElementById("colorChangeDiv");
    div.style.backgroundColor = color;
  }

  // Exercice 20
  function addItemToList() {
    let input = document.getElementById("listInput");
    let list = document.getElementById("list");
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = "";
  }