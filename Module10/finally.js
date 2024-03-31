try {
    console.log("Inside try block");
} catch (error) {
    console.log("An error occured", error.message);
} finally {
    console.log("Finally completed the execution");
}