// function login() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
  
//     // Perform validation and login functionality here
//     // ...
  
//     // Redirect to the home page after successful login
//     window.location.href = "home.html";
//   }



  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform validation
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return false;
    }
  
    // Simulate login functionality (replace with actual login logic)
    // if (username === "admin" && password === "password") {
      else{
      alert("Login successful!");
      window.location.href = "home.html"; // Redirect to the home page after successful login
    // } else {
    //   alert("Invalid username or password. Please try again.");
    // }
  }
}
  