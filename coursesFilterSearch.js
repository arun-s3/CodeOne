
document.addEventListener("DOMContentLoaded", () => {
    
    const courseGrid = document.querySelector(".course-grid")
    const allCourses = Array.from(document.querySelectorAll(".course"))
    const toggleBtn = document.getElementById("toggleCoursesBtn")
    const searchInput = document.getElementById("courseSearch")
    const sortSelect = document.getElementById("courseSort")

    sortSelect.value = ""

    const INITIAL_VISIBLE = 6
    const STEP = 3

    let visibleCount = INITIAL_VISIBLE
    let filteredCourses = [...allCourses]

    const getPrice = (course) => Number(course.dataset.price)
    const getRating = (course) => Number(course.dataset.rating)


    function getFilteredBySearch() {
        const value = searchInput.value.toLowerCase()
        return allCourses.filter((course) => course.querySelector("h4").innerText.toLowerCase().includes(value))
    }


    function render() {
        courseGrid.innerHTML = ""

        filteredCourses.slice(0, visibleCount).forEach((course) => {
            course.style.display = "block"
            courseGrid.appendChild(course)
        })

        toggleBtn.textContent = visibleCount >= filteredCourses.length ? "See less" : "See more"
        toggleBtn.style.display = filteredCourses.length <= INITIAL_VISIBLE ? "none" : "inline-block"
    }


    toggleBtn.addEventListener("click", () => {
        visibleCount = visibleCount >= filteredCourses.length ? INITIAL_VISIBLE : visibleCount + STEP
        render()
    })


    searchInput.addEventListener("input", () => {
        filteredCourses = getFilteredBySearch()
        sortSelect.value = ""
        visibleCount = INITIAL_VISIBLE
        render()
    })


    sortSelect.addEventListener("change", (e) => {
        filteredCourses = getFilteredBySearch()

        switch (e.target.value) {
            case "price-asc":
                filteredCourses.sort((a, b) => getPrice(a) - getPrice(b))
                break

            case "price-desc":
                filteredCourses.sort((a, b) => getPrice(b) - getPrice(a))
                break

            case "rating-desc":
                filteredCourses.sort((a, b) => getRating(b) - getRating(a))
                break
        }
        visibleCount = INITIAL_VISIBLE
        render()
    })


    render()
})
