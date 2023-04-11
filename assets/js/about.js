gsap.registerPlugin(ScrollTrigger);

function LandingPageScrollTrigger() {

    gsap.to('#About-Section', { 
        opacity: 1, duration: 20,
    }); 
    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#ImgWrapper",
            start: "0% 0%",
            end: "100% 0%",
            pin: "#ImgWrapper",
            scrub: 2,
        }
    })
    // LandingPageScrollTrigger
    //   .to('#ImgWrapper #img8', { transform: 'translateZ(2200px)', }, 0)
    //   .from('#codeby a', { y: 130, opacity: 0 }, 0.31)
    //     .to('#codeby a', { y: 0, opacity: 0 }, 2)
    //   .from('#codeby #test', { y: 130, opacity: 0 }, 3)
    //     .to('#codeby #test', { y: 0, opacity: 0 }, 5)
    //   .from('#codeby #test1', { y: 130, opacity: 0 }, 6)
    //     .to('#codeby #test1', { y: 0, opacity: 0 }, 8)
    //   .from('#codeby #test2', { y: 130, opacity: 0 }, 9)
    //     .to('#codeby #test2', { y: 0, opacity: 0 }, 11)
    //   .from('#codeby #test3', { y: 130, opacity: 0 }, 12)
    //     .to('#codeby #test3', { y: 0, opacity: 0 }, 14)
    // .to('#ImgWrapper #img8', { transform: 'translateZ(0px)', }, 15)
  LandingPageScrollTrigger
    .to('#ImgWrapper #img8', { transform: 'translateZ(2200px)', }, 0)
      .from('#codeby a', { y: 130, opacity: 0 }, 0.31)
        .to('#codeby a', { y: 0, opacity: 0 }, 3)
      .from('#codeby #test', { y: 130, opacity: 0 }, 4)
        .to('#codeby #test', { y: 0, opacity: 0 }, 7)
      .from('#codeby #test1', { y: 130, opacity: 0 }, 8)
        .to('#codeby #test1', { y: 0, opacity: 0 }, 11)
      .from('#codeby #test2', { y: 130, opacity: 0 }, 12)
        .to('#codeby #test2', { y: 0, opacity: 0 }, 15)
      .from('#codeby #test3', { y: 130, opacity: 0 }, 16)
        .to('#codeby #test3', { y: 0, opacity: 0 }, 19)
      .to('#ImgWrapper #img8', { transform: 'translateZ(0px)', }, 20)

};
        

//---------------------/Landing Page ScrollTrigger---------------------

window.onload = () => {
    LandingPageScrollTrigger();
}