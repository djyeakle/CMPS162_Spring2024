var number = "bc";

try {
    if (isNaN(number)) {
        throw new Error("Not a numeric value");
    } else {
        console.log("It is a numeric value"); 
    } 
    } catch (error) {
        console.log(error.message);
    }