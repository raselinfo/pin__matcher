// Generated pin handler
function getPin(id) {
    const generatePin = Math.random() * 10000;
    const pin = (generatePin + "").split(".")[0];
    if (pin.length > 3) {
        console.log(pin)
        return setInputValue(id, pin);
    } else {
        return getPin(id)
    }
}
// Set input value
function setInputValue(id, digit) {
    const input = document.getElementById(id);
    input.value = digit;
}


function getDigit(event) {
    const digits = document.querySelectorAll("div.button");
    if (event.target.innerText === "<") {
        console.log(event.target);

        const digitInput = document.getElementById("digit__input");
        const cutNumber = digitInput.value.substr(0, digitInput.value.length - 1);
        console.log(cutNumber);

        digitInput.value = cutNumber;
    } else {
        for (var i = 0; i < digits.length; i++) {
            if (event.target.innerText === "C") {
                setInputValue("digit__input", "");
            } else if (
                event.target === digits[i] && event.target.innerText != "C" && event.target.innerText != "<"
            ) {
                const digitInput = document.getElementById("digit__input");
                digitInput.value = digitInput.value + digits[i].innerText;
            }
        }
    }
}


// Submit Button Handle
function submitBtn() {
    const pin = document.getElementById("generated__pin").value;
    const matchDigit = document.getElementById("digit__input").value;
    if (matchDigit === "") {
        const matchedNotPin = document.getElementById("notMatched");
        matchedNotPin.style.display = "block";
        left();
    } else if (pin === matchDigit) {
        const matchedPin = document.getElementById("matched");
        matchedPin.style.display = "block"

        const matchedNotPin = document.getElementById("notMatched");
        matchedNotPin.style.display = "none"

    } else {
        const matchedNotPin = document.getElementById("notMatched");
        matchedNotPin.style.display = "block"

        const matchedPin = document.getElementById("matched");
        matchedPin.style.display = "none";
        left();
    }
}

function left() {
    const leftCount = document.getElementById("leftCount");
    let leftCountNumber = parseInt(leftCount.innerText);
    leftCountNumber = leftCountNumber - 1;
    if (leftCountNumber < 1) {
        const container = document.getElementById("mainContainer");
        container.style.display = "none";

        const tryAgain = document.getElementById("try__again");
        tryAgain.style.display = "block";
    } else {
        leftCount.innerText = leftCountNumber;
    }
}


function tryAgainBtn() {
    location.reload();
}