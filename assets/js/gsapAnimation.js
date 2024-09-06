// Select all elements with the class "title_one"
const titleOnes = document.querySelectorAll(".title_one");

// Loop through each selected element
titleOnes.forEach((titleOne) => {
    // Create a SplitText instance for each title element
    var titleOneSplit = new SplitText(titleOne, {
        type: "words,chars",
        textAlign: "center", // This should be handled via CSS, not in JS
    });

    // Apply the GSAP animation to the words
    gsap.from(titleOneSplit.words, {
        scrollTrigger: {
            trigger: titleOne,
            toggleActions: "restart none none none",
        },
        duration: 1,
        opacity: 0,
        x: 20,
        stagger: 0.02,
    });

    // Apply the GSAP animation to the characters
    gsap.from(titleOneSplit.chars, {
        scrollTrigger: {
            trigger: titleOne,
            toggleActions: "restart none none none",
        },
        duration: 1,
        opacity: 0,
        x: 40,
        stagger: 0.02,
    });
});

const smoother = ScrollSmoother.create({
    content: "#scrollsmoother-container",
    smooth: 1.3,
    normalizeScroll: true,
    ignoreMobileResize: true,
    effects: true,
});
