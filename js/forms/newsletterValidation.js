export function newsletterValidation() {
    const form = document.querySelector(".newsletter-form")
    if (!form) return

    const input = form.querySelector(".newsletter-input")
    const errorMsg = document.querySelector(".newsletter-section .newsletter-error")

    const modal = document.createElement("div")
    modal.className = "newsletter-modal hidden"
    modal.innerHTML = `
        <div class="newsletter-modal-content">
            <h3>You're subscribed! 🎉</h3>
            <p>
                Thank you for subscribing!  
                We’ll send you the latest updates, new courses, and news straight to your inbox.
            </p>
            <button type="button" class="close-modal">Got it</button>
        </div>
    `
    document.body.appendChild(modal)

    const closeModal = () => modal.classList.add("hidden")

    modal.querySelector(".close-modal").addEventListener("click", closeModal)
    modal.addEventListener("click", (e) => e.target === modal && closeModal())

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    input.addEventListener("input", (e) => {
        e.preventDefault()

        const email = input.value.trim()
        errorMsg.textContent = ""
        input.classList.remove("error")

        if(!email) return

        if (!isValidEmail(email)) {
            errorMsg.textContent = "Please enter a valid email address"
            input.classList.add("error")
            return
        }
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const email = input.value.trim()
        errorMsg.textContent = ""
        input.classList.remove("error")

        if (!email) {
            errorMsg.textContent = "Please enter your email address"
            input.classList.add("error")
            return
        }

        if (!isValidEmail(email)) {
            errorMsg.textContent = "Please enter a valid email address"
            input.classList.add("error")
            return
        }

        modal.classList.remove("hidden")
        input.value = ""
    })
}
