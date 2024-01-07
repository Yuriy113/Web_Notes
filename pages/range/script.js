const progress = document.getElementById("progress");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");

inc.addEventListener("click", () => {
    progress.value += 10;
});
dec.addEventListener("click", () => {
    progress.value -= 10;
});

const meter = document.getElementById("meter");
const incMeter = document.getElementById("incMeter");
const decMeter = document.getElementById("decMeter");

incMeter.addEventListener("click", () => {
    meter.value += 10;
});
decMeter.addEventListener("click", () => {
    meter.value -= 10;
});

const range = document.getElementById("rangeInput");
const inputVal = document.querySelector(".input-val");
const decRange = document.getElementById("decRange");
const incRange = document.getElementById("incRange");

range.addEventListener("input", (e) => {
    inputVal.innerText = e.target.value;
});

incRange.addEventListener("click", () => {
    range.value = +range.value + 10;
    inputVal.innerText = range.value;
});
decRange.addEventListener("click", () => {
    range.value = +range.value - 10;
    inputVal.innerText = range.value;
});
