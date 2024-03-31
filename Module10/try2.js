setTimeout(() => {
    try {
        console.log(hello);
    } catch (error){
        console.log("An error occured", error.message);
    }
}, 1000)