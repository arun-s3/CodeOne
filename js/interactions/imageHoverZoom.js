
export function imageHoverZoom() {
    const imgs = document.querySelectorAll("#certified-teachers .teachers-grid .teacher-card img")

    if (!imgs.length) return

    imgs.forEach((img) => {
        img.addEventListener("mousemove", (e) => {
            const rect = img.getBoundingClientRect()
            const x = (e.clientX - rect.left) / rect.width - 0.5
            const y = (e.clientY - rect.top) / rect.height - 0.5

            img.style.transform = `scale(1.1) translate(${x * 6}px, ${y * 6}px)`
        })

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)"
        })
    })
}