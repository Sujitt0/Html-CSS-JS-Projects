gsap.to(".imagecontainer",{
    ease: Expo.easeInOut,
    width: "100%",
    duration: 2,
    stagger: 2,
    // repeat: -1
})

gsap.to(".text h1",{
    ease: Expo.easeInOut,
    top: "0%",
    stagger: 2,
    
})
gsap.to(".text h1",{
    ease: Expo.easeInOut,
    top: "-100%",
    stagger: 2,
    delay:2,
})
