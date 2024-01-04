const target = document.querySelector("input");
const btn = document.getElementById("btn");

window.addEventListener("message", (e) => {
    target.value = e.data;
});

btn.addEventListener("click", (e) => {
    window.top.postMessage(target.value, "*");
    // window.parent.postMessage('msg', '*') // то же самое
});

document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
    });
});