
export function teacherCardsTilt() {
    const cards = document.querySelectorAll("#certified-teachers .teachers-grid .teacher-card")

    if (!cards.length) return

    cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect()

            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateX = ((y - centerY) / centerY) * -8
            const rotateY = ((x - centerX) / centerX) * 8

            card.style.transform = `
              perspective(1000px)
              rotateX(${rotateX}deg)
              rotateY(${rotateY}deg)
              translateZ(10px)
            `
        })

        card.addEventListener("mouseleave", () => {
            card.style.transform = `
              perspective(1000px)
              rotateX(0deg)
              rotateY(0deg)
              translateZ(0)
            `
        })
    })
}