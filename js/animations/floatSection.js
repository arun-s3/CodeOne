
export function floatSection() {
    const floatSections = document.querySelectorAll("#great-floats-container .floats-container")

    if (!floatSections.length) return

    
    const floatObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal")
                    floatObserver.unobserve(entry.target)
                }
            })
        },
        {
            threshold: 0.3,
        },
    )

    floatSections.forEach((section) => floatObserver.observe(section))
}