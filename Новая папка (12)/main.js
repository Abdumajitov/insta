const imger = document.querySelector(".imger3");
const comment = document.querySelector(".comment");
const child = document.querySelector(".child");
const owerley = document.querySelector(".owerley")
const bott = document.querySelector(".bott")

console.log(comment);


imger.addEventListener("click", () => {
    comment.classList.add("bott");
    owerley.classList.remove("child");
})
owerley.addEventListener("click", () => {
    owerley.classList.add("child");
    comment.classList.remove("bott");
})