const checkPermission = () => {
    if (!("serviceWorker" in navigator)){
        throw new Error("No support from service worker");
    }

    if (!("Notification" in window)){
        throw new Error("No support from API");
    }
}

const registerSW = async () => {
    const registration = await navigator.serviceWorker.register("sw.js");
    return registration;
}

const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission !== "granted"){
        throw new Error("Notification Permission not granted");
    } else {
        new Notification("School is almost out");
    }
}