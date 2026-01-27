
export function revealCourses() {
    const courseCards = document.querySelectorAll("#popular-courses-container .course")

    const courseObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${index * 0.35}s`
                    entry.target.classList.add("course-visible")
                    courseObserver.unobserve(entry.target)
                }
            })
        },
        {
            threshold: 0.2,
        },
    )

    courseCards.forEach((card) => courseObserver.observe(card))
}