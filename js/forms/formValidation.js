
export function formValidation() {
    
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
    const submitBtn = document.getElementById("submitBtn")
    const toggleLink = document.getElementById("toggleLink")
    const toggleText = document.getElementById("toggleText")
    const formTitle = document.getElementById("formTitle")
    const formError = document.getElementById("formError")

    const authModal = document.getElementById("authModal")
    const authModalTitle = document.getElementById("authModalTitle")
    const authModalMessage = document.getElementById("authModalMessage")
    const authModalBtn = document.getElementById("authModalBtn")

    let isSignup = false

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    function validateForm() {
        const email = emailInput.value.trim()
        const password = passwordInput.value.trim()

        if (!emailRegex.test(email)) {
            formError.textContent = "Enter a valid email address"
            return false
        }

        if (!passwordRegex.test(password)) {
            formError.textContent = "Password must be 8+ chars, include uppercase, lowercase & number"
            return false
        }

        formError.textContent = ""
        return true
    }


    emailInput.addEventListener("input", () => {
        const value = emailInput.value.trim()

        if (value === "") {
            formError.textContent = ""
            return
        }

        if (!emailRegex.test(value)) {
            formError.textContent = "Enter a valid email address"
        } else {
            formError.textContent = ""
        }
    })

    passwordInput.addEventListener("input", () => {
        const value = passwordInput.value.trim()

        if (value === "") {
            formError.textContent = ""
            return
        }

        if (!passwordRegex.test(value)) {
            formError.textContent = "Password must be 8+ chars, include uppercase, lowercase & number"
        } else {
            formError.textContent = ""
        }
    })

    function showModal(title, message) {
        authModalTitle.textContent = title
        authModalMessage.textContent = message
        authModal.classList.remove("hidden")
    }

    authModalBtn.addEventListener("click", () => {
        authModal.classList.add("hidden")
    })

    authModal.addEventListener("click", (e) => {
        if (e.target === authModal) {
            authModal.classList.add("hidden")
        }
    })

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()

        const isValid = validateForm()
        if (!isValid) return

        if (isSignup) {
            showModal(
                "Account created 🎉",
                "Your account has been created successfully. This is a demo project — no data is stored.",
            )
        } else {
            showModal(
                "Login successful 👋",
                "Welcome back! This is a demo project — no real authentication happens here.",
            )
        }
    })

    toggleLink.addEventListener("click", () => {
        isSignup = !isSignup
        formError.textContent = ""
        emailInput.value = ""
        passwordInput.value = ""

        if (isSignup) {
            formTitle.textContent = "Sign up here"
            submitBtn.textContent = "Sign up"
            passwordInput.placeholder = "Create a strong password"
            toggleText.textContent = "Already have an account?"
            toggleLink.textContent = "Login"
        } else {
            formTitle.textContent = "Login here"
            submitBtn.textContent = "Login"
            passwordInput.placeholder = "Enter password here"
            toggleText.textContent = "Don't have an account?"
            toggleLink.textContent = "Sign up"
        }
    })
}