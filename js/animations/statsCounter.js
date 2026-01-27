
export function statsCounter() {
    const counters = document.querySelectorAll("#credentials span[data-count]")
    let hasAnimated = false

    const animateCount = (el) => {
        const target = +el.dataset.count
        const duration = 1500
        const start = performance.now()

        const update = (currentTime) => {
            const progress = Math.min((currentTime - start) / duration, 1)
            const value = Math.floor(progress * target)

            if (target >= 1000) {
                el.textContent = value >= 1000 ? Math.floor(value / 1000) + "k+" : value
            } else {
                el.textContent = value + (el.dataset.count < 100 ? "+" : "")
            }

            if (progress < 1) {
                requestAnimationFrame(update)
            }
        }

        requestAnimationFrame(update)
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    document.querySelector("#credentials").classList.add("animate")
                    counters.forEach((counter, i) => {
                        setTimeout(() => animateCount(counter), i * 300)
                    })

                    hasAnimated = true
                    observer.disconnect()
                }
            })
        },
        { threshold: 0.4 },
    )

    const section = document.querySelector("#credentials")
    if (!section) return
    observer.observe(section)

}