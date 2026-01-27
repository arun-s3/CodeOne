
export function responsiveMenu() {
    const hamburger = document.querySelector(".hamburger")
    const menu = document.querySelector(".menuContainer")

    if (!hamburger || !menu) return

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active")
    })

    let resizeTimer
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer)
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 900) {
                menu.classList.remove("active")
            }
        }, 75)
    })
}