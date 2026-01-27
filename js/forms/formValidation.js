
export function formValidation() {
    
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
    const submitBtn = document.getElementById("submitBtn")
    const toggleLink = document.getElementById("toggleLink")
    const toggleText = document.getElementById("toggleText")
    const formTitle = document.getElementById("formTitle")
    const formError = document.getElementById("formError")

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

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()

        const isValid = validateForm()
        if (!isValid) return

        if (isSignup) {
            console.log("Signup success")
            alert("Success! \n\n" + "This is a demo project.\n" + "No real account is created and no data is stored.")

        } else {
            console.log("Login success")
            alert("Login successful! \n\n" + "This is a demo project.\n" + "No real account is created and no data is stored.")
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