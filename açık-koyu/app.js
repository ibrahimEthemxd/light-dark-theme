const btn = document.getElementById("button")

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
    localStorage.setItem('theme', document.body.classList)
})
if (localStorage.getItem("theme")) {
    document.body.classList.add(localStorage.getItem("theme"))
}