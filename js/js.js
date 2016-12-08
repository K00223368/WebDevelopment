function validateForm() {
    var x = document.forms["form"]["firstname"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
    
    
    var y = document.forms["form"]["lastname"].value;
    if (y == "") {
        alert("Last Name must be filled out");
        return false;
    }
    var z = document.forms["form"]["email"].value;
    if (z == "") {
        alert("email must be filled out");
        return false;
    }
    
    var atpos = z.indexOf("@");
    var dotpos = z.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=z.length) {
        alert("Not a valid e-mail address");
        return false;
    }

}