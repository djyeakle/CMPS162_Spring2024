//dynamic code
function showNotifications(message) {
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

//document element id value to get message from text box