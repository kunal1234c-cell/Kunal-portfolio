
console.log("Welcome to Kunal's Portfolio!");

// Select sections and cards to animate
const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .education-card"
);

// Add reveal class
revealElements.forEach((element) => {
    element.classList.add("reveal");
});

// Observe elements when they enter the screen
const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

// Start observing
revealElements.forEach((element) => {
    observer.observe(element);
});

