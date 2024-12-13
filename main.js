
    var tl = gsap.timeline();

    tl.to("#page1", {
        y: "100vh",
        scale: 0.6,
        duration: 0
    })
    .to("#page1", {
        y: "5vh",
        duration: 2,
        delay: 1
    })
    .to("#page1", {
        y: "0vh",
        rotate: 360, // Double the rotation for a longer spin
        scale: 1,
        duration: 3, // Increase duration for a slower spin
        ease: "power3.out" // Smooth, slow start and end
    });

