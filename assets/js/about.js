gsap.registerPlugin(ScrollTrigger);

function LandingPageScrollTrigger() {

    gsap.to('#About-Section', { 
        opacity: 1, duration: 5,
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
    LandingPageScrollTrigger
        // .to('#ImgWrapper #img7', { transform: 'translateZ(4500px)', }, 0)
        // .to('#ImgWrapper #img6', { transform: 'translateZ(3700px)', }, 0)
        // .to('#ImgWrapper #img5', { transform: 'translateZ(3100px)', }, 0)
        // .to('#ImgWrapper #img4', { transform: 'translateZ(2800px)', }, 0)
        // .to('#ImgWrapper #img3', { transform: 'translateZ(2600px)', }, 0)
        // .to('#ImgWrapper #img2', { transform: 'translateZ(2400px)', }, 0)
        // .to('#ImgWrapper #img1', { transform: 'translateZ(2200px)', }, 0)
        .to('#ImgWrapper #img8', { transform: 'translateZ(2200px)', }, 0)
        .from('#codeby a', { y: 130, opacity: 0 }, 0.31)
          .to('#codeby a', { y: 0, opacity: 0 }, 2)
        .from('#codeby #test', { y: 130, opacity: 0 }, 2)

          .to('#codeby #test', { y: 0, opacity: 0 }, 3)
        .from('#codeby #test1', { y: 130, opacity: 0 }, 4)
          .to('#codeby #test1', { y: 0, opacity: 0 }, 5)
        .from('#codeby #test2', { y: 130, opacity: 0 }, 6)
    .to('#codeby #test2', { y: 0, opacity: 0 }, 8)
    // .to('#ImgWrapper #img6', { transform: 'translateZ(0px)  translateX(200px)', }, 7)
    // .to('#ImgWrapper #img5', { transform: 'translateZ(0px)  translateX(100px)', }, 8)
    // .to('#ImgWrapper #img4', { transform: 'translateZ(0px)', }, 9)
    // .to('#ImgWrapper #img3', { transform: 'translateZ(0px)',transform: 'translateX(0px)' }, 10)
    // .to('#ImgWrapper #img2', { transform: 'translateZ(0px)  translateX(50px)', }, 11)
    // .to('#ImgWrapper #img1', { transform: 'translateZ(0px)', }, 12)
    .to('#ImgWrapper #img8', { transform: 'translateZ(0px)', }, 9)

};
        

//---------------------/Landing Page ScrollTrigger---------------------

window.onload = () => {
    LandingPageScrollTrigger();
}