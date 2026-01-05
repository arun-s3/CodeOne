  
  
  const counters = document.querySelectorAll('#credentials span[data-count]');
  let hasAnimated = false;

  const animateCount = (el) => {
    const target = +el.dataset.count
    const duration = 1500
    const start = performance.now()

    const update = (currentTime) => {
      const progress = Math.min((currentTime - start) / duration, 1)
      const value = Math.floor(progress * target)

      if (target >= 1000) {
        el.textContent = value >= 1000
          ? Math.floor(value / 1000) + 'k+'
          : value
      } else {
        el.textContent = value + (el.dataset.count < 100 ? '+' : '')
      }

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        document.querySelector('#credentials').classList.add('animate');
        counters.forEach((counter, i) => {
          setTimeout(() => animateCount(counter), i * 300)
        })

        hasAnimated = true
        observer.disconnect()
      }
    })
  }, { threshold: 0.4 });

observer.observe(document.querySelector('#credentials'));


const courseCards = document.querySelectorAll("#popular-courses-container .course");

const courseObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 0.35}s`
        entry.target.classList.add("course-visible")
        observer.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.2,
  }
);

courseCards.forEach((card) => courseObserver.observe(card));


document.querySelectorAll("#certified-teachers .teachers-grid .teacher-card").forEach(card => {
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
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0)
    `;
  });
});


document.querySelectorAll("#certified-teachers .teachers-grid .teacher-card img").forEach(img => {
  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    img.style.transform = `scale(1.1) translate(${x * 6}px, ${y * 6}px)`
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)"
  })
});


document.querySelectorAll("#student-reviews .reviews-grid .review-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    card.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translate(0,0)"
  });
});


const floatSections = document.querySelectorAll("#great-floats-container .floats-container");
const floatoObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        floatoObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3
  }
);

floatSections.forEach(section => floatoObserver.observe(section));


const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menuContainer');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active')
});

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 900) {
            menu.classList.remove('active')
        }
    }, 75)
});


