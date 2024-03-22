function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }






/*loginform*/


function validateForm(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get input values
  var loginId = document.getElementById('loginId').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  
  // Validate login ID
  if (loginId.trim() === '') {
      alert("Please enter login ID.");
      return;
  }

  // Validate password
  if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
  }

  // Validate confirm password
  if (password !== confirmPassword) {
      alert("Passwords mismatch,Please enter the same password.");
      return;
  }
  
  alert(loginId+" ! you are successfully registered in Inmakes Infotech");
}

