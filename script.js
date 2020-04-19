// generate random password
function generate() {

  // set password length/complexity
  var complexity = document.querySelector("#slider").value;

  // possible password values
  var values = "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyz1234567890!@#$%^&*()_+=~";

  var password = "";

  // create for loop to choose password characters
  for (var i = 0; i < complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  // add password to textbox/display area
  document.querySelector("#display").value = password;

  // add password to previously generated passwords section
  document.querySelector("#lastNums").innerHTML += password + "<br />";


}

// set default length display of 25
document.querySelector("#length").innerHTML = "Length: 25";

// funtion to set length based on slider position
document.querySelector("#slider").oninput = function () {

  if (document.querySelector("#slider").value > 0) {
    document.querySelector("#length").innerHTML = "Length:" + document.querySelector("#slider").value;
  } else {
    document.querySelector("#length").innerHTML = "Length: 1";
  }
}

// function to copy password to clipboard
function copyPassword() {

  document.querySelector("#display").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard");
}