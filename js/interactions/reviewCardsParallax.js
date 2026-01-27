
export function reviewCardsParallax() {
    const cards = document.querySelectorAll("#student-reviews .reviews-grid .review-card")

    if (!cards.length) return

    cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            card.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
        })

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translate(0,0)"
        })
    })
}