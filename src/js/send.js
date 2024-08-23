export const send = () => {
    const addClass = () => {
        document.querySelector('#add-sent').classList.add("sent");
    };

    const sendLetter = document.getElementById("sendLetter");
    sendLetter.addEventListener("click", addClass);
};
