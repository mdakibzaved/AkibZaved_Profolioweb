
// ScrollReveal

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading',{origin:'top'})
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'})
ScrollReveal().reveal('.home-content h1,.about',{origin:'left'})


// Typed
const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Youtuber','Blogger'],
    typeSpeed: 50,
    backSpeed:100,
    backDelay:1000,
    loop:true
});