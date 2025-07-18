const input = document.getElementById("inputText");
const display = document.getElementById("displayText");
const container = document.querySelector(".container");

input.addEventListener("input", function () {
    display.textContent = input.value;

    let fontSize = 100;
    display.style.fontSize = fontSize + "px";


    while ((display.scrollWidth > container.clientWidth || display.scrollHeight > container.clientHeight) && fontSize > 5) {
        fontSize--;
        display.style.fontSize = fontSize + "px";
    }
});
