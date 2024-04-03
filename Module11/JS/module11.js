var inpt;

function getUserInput() {
    inpt = document.getElementById("input").value;
}

function notify(message) {
    if (!("Notification" in window)){
        alert("This browser is not supported");
    } else if (Notification.permission === "granted"){
        var notification = new Notification(document.title, {body: message});
    } else if (Notification.permission === "denied"){
        Notification.requestPermission().then(function (permission){
            if(permission === "granted"){
                var notification = new Notification(document.title, {body: message});
            }
        });
    }

}