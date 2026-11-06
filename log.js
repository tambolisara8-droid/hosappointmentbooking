function loginuser(event) {
  event.preventDefault();
  var storedUser = JSON.parse(localStorage.getItem("userData"));
  var enteredName = document.getElementById("fullname").value;
  var enteredPassword = document.getElementById("password").value;

  if (storedUser && storedUser.fullname === enteredName && storedUser.password === enteredPassword) {
    alert("Login successful!");
    window.location.href = "userpage.html";
  } else {
    alert("Invalid username or password.");
  }
}