const targetElement = document.querySelector(".target");
const originElement = document.querySelector(".origin");

const SECRET_WORD = "победа";

const alphabet = "победа";

function shuffleWord(word) {
    let arr = word.split("");
    return arr.sort((a, b) => a.localeCompare(b));
}

for (let letter of shuffleWord(SECRET_WORD)) {
    letterElem = document.createElement("div");
    letterElem.innerText = letter.toUpperCase();
    letterElem.classList.add("origin__letters");
    originElement.appendChild(letterElem);
}

for (let letter of SECRET_WORD) {
    dropElem = document.createElement("div");
    dropElem.classList.add("target__letters");
    targetElement.appendChild(dropElem);
}

const targetLetters = targetElement.querySelectorAll(".target__letters");
const originLetters = originElement.querySelectorAll(".origin__letters");

for (let letter of originLetters) {
    letter.draggable = true;
    letter.addEventListener("dragstart", (e) => {
        letter.classList.add("selected");
    });
    letter.addEventListener("dragend", (e) => {
        letter.classList.remove("selected");
    });
}

for (let zone of targetLetters) {
    zone.addEventListener("dragover", (e) => {
        zone.classList.add("over");
        e.preventDefault();
    });
    zone.addEventListener("dragleave", (e) => {
        zone.classList.remove("over");
    });
    zone.addEventListener("drop", (e) => {
        const selected = document.querySelector(".selected");
        e.target.appendChild(selected);
        // TODO: replace appendChild method with replaceChild
        // targetElement.replaceChild(selected, e.target);
        checkResult();
    });
}

function checkResult() {
    const originLength = originElement.querySelectorAll(".origin__letters").length;

    if (originLength > 0) return;

    let attempt = "";

    const targetLetters = targetElement.querySelectorAll(".target__letters");
    for (let div of targetLetters) {
        attempt += div.innerText.toLowerCase();
    }

    const tempResult = document.querySelectorAll(".origin__letters");

    const success = attempt === SECRET_WORD;
    if (success) {
        for (let div of tempResult) {
            div.classList.add("success");
        }
    } else {
        for (let div of tempResult) {
            div.classList.add("issue");
        }
    }
}
