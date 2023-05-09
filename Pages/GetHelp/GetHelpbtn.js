function loginSuccessful() {
  // Get the button element using its ID
  var button = document.getElementById("login-button");

  // Change the button's text
  var buttonLink = button.querySelector(".login-button-link");
  buttonLink.innerHTML = "Successfully Submitted";
}