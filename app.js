const toogle = document.getElementById("toogle");

console.log(toogle)

toogle.addEventListener("change", (e) => {
    document.body.classList.toogle("dark", e.target.checked)
})