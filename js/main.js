import { statsCounter } from "./animations/statsCounter.js"
import { revealCourses } from "./animations/revealCourses.js"
import { floatSection } from "./animations/floatSection.js"

import { teacherCardsTilt } from "./interactions/teacherCardsTilt.js"
import { imageHoverZoom } from "./interactions/imageHoverZoom.js"
import { reviewCardsParallax } from "./interactions/reviewCardsParallax.js"

import { responsiveMenu } from "./ui-events/responsiveMenu.js"

import { formValidation } from "./forms/formValidation.js"
import { newsletterValidation } from "./forms/newsletterValidation.js"

import { testimonyCarousel } from "./components/testimonyCarousel.js"

import { coursesFilterSearch } from "./features/coursesFilterSearch.js"

document.addEventListener("DOMContentLoaded", () => {
    statsCounter()
    revealCourses()
    floatSection()

    teacherCardsTilt()
    imageHoverZoom()
    reviewCardsParallax()

    responsiveMenu()

    formValidation()
    newsletterValidation()

    testimonyCarousel()

    coursesFilterSearch()
})
