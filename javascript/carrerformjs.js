



/*contact*/
function isNumberKey(evt){ 
    var charCode = (evt.which) ? evt.which : event.keyCode 
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    alert("please enter numbers only.");

        return false; }

return true; 


}


function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}




function validateForm()
 {
    var fname = document.getElementById('fname').value.trim();
    var lname = document.getElementById('lname').value.trim();
    var email = document.getElementById('email').value.trim();
    const year = document.getElementById('year').value.trim();
    const contact = document.getElementById('contact').value.trim();
    var gender = document.getElementById('gender').value.trim();
    var skill = document.getElementById('skill').value.trim();
    
    if (!fname||!email|| !year || !contact || !skill) {
        alert("Please fill all Mandatory fields.");
        return false;
    }
    
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    alert( fname +"! You Successfully applied for a " +skill);

    document.getElementById('form1').reset(); 
    return false; 


}







