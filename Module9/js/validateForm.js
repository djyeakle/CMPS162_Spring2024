function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var phone = document.getElementById("phone").value;
    var occupation = document.getElementById("occupation").value;

    //Reset error message on main screen
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("cityError").innerHTML = "";
    document.getElementById("stateError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("occupationError").innerHTML = "";

    document.getElementById("name").classList.remove("error");
    document.getElementById("email").classList.remove("error");
    document.getElementById("city").classList.remove("error");
    document.getElementById("state").classList.remove("error");
    document.getElementById("phone").classList.remove("error");
    document.getElementById("occupation").classList.remove("error");

    document.getElementById("name").classList.remove("error-pink");
    document.getElementById("email").classList.remove("error-pink");
    document.getElementById("city").classList.remove("error-pink");
    document.getElementById("state").classList.remove("error-pink");
    document.getElementById("phone").classList.remove("error-pink");
    document.getElementById("occupation").classList.remove("error-pink");

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

    if (city.trim() === "") {
        document.getElementById("cityError").innerHTML = "City is required";
        document.getElementById("city").classList.add("error");
        document.getElementById("city").classList.add("error-pink");
        isValid = false;
    }

    if (state.trim() === "") {
        document.getElementById("stateError").innerHTML = "State is required";
        document.getElementById("state").classList.add("error");
        document.getElementById("state").classList.add("error-pink");
        isValid = false;
    }

    if (phone.trim() === "") {
        document.getElementById("phoneError").innerHTML = "Phone number is required";
        document.getElementById("phone").classList.add("error");
        document.getElementById("phone").classList.add("error-pink");
        isValid = false;
    } else {
        if (isNaN(phone)) {
            document.getElementById("phoneError").innerHTML = "Invalid phone number";
            document.getElementById("phone").classList.add("error");
            document.getElementById("phone").classList.add("error-pink");
            isValid = false;
        }
    }

    if (occupation.trim() === "") {
        document.getElementById("occupationError").innerHTML = "Occupation is required";
        document.getElementById("occupation").classList.add("error");
        document.getElementById("occupation").classList.add("error-pink");
        isValid = false;
    }

    //Submit form
    if (isValid) {
        document.getElementById("myForm").onsubmit();
    }

}