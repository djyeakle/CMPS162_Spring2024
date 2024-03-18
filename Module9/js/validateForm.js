function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    //Reset error message on main screen
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";

    document.getElementById("name").classList.remove("error");
    document.getElementById("email").classList.remove("error");

    document.getElementById("name").classList.remove("error-pink");
    document.getElementById("email").classList.remove("error-pink");

    var isValid = true;
    
    //Identify if name is empty
    if (name.trim() === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        document.getElementById("name").classList.add("error");
        document.getElementById("name").classList.add("error-pink");
        isValid = false;
    }

    if (email.trim() === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        document.getElementById("email").classList.add("error");
        document.getElementById("email").classList.add("error-pink");
        isValid = false;
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerHTML = "Invalid email format";
            document.getElementById("email").classList.add("error");
            document.getElementById("email").classList.add("error-pink");
            isValid = false;
        }
    }

    //Submit form
    if (isValid) {
        document.getElementById("myForm").onsubmit();
    }

}