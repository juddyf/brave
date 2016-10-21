function submit() {
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  var errorFlag = document.getElementById('error-flag');
  var passwordVal = password.value;
  var errorMessage = "";
  var errored = false;
  var capRegExp = new RegExp("[A-Z]");
  var alphanumRegExp = new RegExp("[^a-zA-Z0-9]");

  if (username.value.length <= 0) {
    errored = true;
    errorMessage += "Username cannot be blank.<br>"
    username.parentElement.className = "input-group error-border";
  } else {
    username.parentElement.className = "input-group";
  }

  if (passwordVal.length < 6 || !passwordVal.match(capRegExp) || !passwordVal.match(alphanumRegExp)) {
    // When a user fails to have a specific type of character, they will
    // likely want to see all of password requirements - so they don't
    // have to play guessing games.
    errored = true;
    errorMessage += "Password must be at least 6 characters long.<br>"
    errorMessage += "Password must contain one capital letter and one non-alphanumeric character.<br>"
    password.parentElement.className = "input-group error-border";
  } else {
    password.parentElement.className = "input-group";
  }

  if (errored) {
    errorFlag.innerHTML = errorMessage;
    errorFlag.className = "active";
  } else {
    errorFlag.className = "active fade-out";

    setTimeout(resetSpot, 1000);
  }

  function resetSpot() {
    errorFlag.className="fade-out";
    setTimeout(resetFade, 1000);
  }

  function resetFade() {
    errorFlag.className="";
  }
}

var opening = true;

function openMenu() {
  var menu = document.getElementById("menu");
  var header = document.getElementById("header");

  menu.classList.toggle("display");

  if (opening) {
    header.className = "button header-button";

    setTimeout(expandbutton, 400);

    function expandbutton() {
      header.classList.toggle("active");
    }

    opening = false;
  } else {
    header.className = "button header-button closing active";

    header.classList.toggle("active");

    opening = true;
  }
}

var hidden = true;

function pass() {
  var password = document.getElementById('password');

  if (hidden) {
    password.setAttribute('type', 'text');
    hidden = false;
  } else {
    password.setAttribute('type','password');
    hidden = true;
  }
}