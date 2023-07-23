import {Store} from "react-notifications-component";

export default function (title, message, type) {
    Store.addNotification({
        title,
        message,
        type,
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: true
        }
    })
}