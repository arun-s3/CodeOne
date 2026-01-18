
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".reviews-grid")
    const cards = Array.from(track.children)
    const prevBtn = document.querySelector(".carousel-btn.prev")
    const nextBtn = document.querySelector(".carousel-btn.next")

    let index = 0
    let visibleCount = getVisibleCount()

    function getVisibleCount() {
        if (window.innerWidth < 600) return 1
        if (window.innerWidth < 900) return 2
        return 3
    }

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 32 
        track.style.transform = `translateX(-${index * cardWidth}px)`
    }

    nextBtn.addEventListener("click", () => {
        if (index < cards.length - visibleCount) {
            index++
            updateCarousel()
        }
    })

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--
            updateCarousel()
        }
    })

    window.addEventListener("resize", () => {
        visibleCount = getVisibleCount()
        index = Math.min(index, cards.length - visibleCount)
        updateCarousel()
    })
})
