gsap.to('.card__image img', {
    x:100,
    duration:10,
    repeat:-1,
    yoyo:true
  
    
  }) 
  const timeline = gsap.timeline({
              scrollTrigger: {
                  trigger: '.main-page',
                  start: 'top 0%',
                  end: '',
                  scrub: 1,
              
              }
          });
  timeline
  .add('smoother-section-animation')
              // .to('.section-smoother .content', {duration: 1.2, y: -110 * vh, ease: 'linear'}, 'smoother-section-animation+=.2')
  
  
              .to('.section-smoother .inner-container', {duration: 1.9, y: '-110rem', ease: 'linear'}, 'smoother-section-animation+=.2')
              .from('.section-smoother .inner-container .flex-container-2', {duration: .3, x: '4rem', ease: 'linear'}, 'smoother-section-animation+=.2')
              .fromTo('.section-smoother .inner-container .flex-container-3', {duration: .3, x: '8rem', ease: 'linear'}, {duration: .3, x: '4rem', ease: 'linear'}, 'smoother-section-animation+=.2')
              .fromTo('.section-smoother .inner-container .flex-container-4', {duration: .3, x: '12rem', ease: 'linear'}, {duration: .3, x: '8rem', ease: 'linear'}, 'smoother-section-animation+=.2')
              .to('.section-smoother .inner-container .flex-container-3', {duration: .3, delay: .3, x: 0, ease: 'linear'}, 'smoother-section-animation+=.2')
              .to('.section-smoother .inner-container .flex-container-4', {duration: .3, delay: .3, x: '4rem', ease: 'linear'}, 'smoother-section-animation+=.2')
              .to('.section-smoother .inner-container .flex-container-4', {duration: .3, delay: .6, x: 0, ease: 'linear'}, 'smoother-section-animation+=.2')
              // .from('.section-smoother .content', {duration: .8, y: 110 * vh, ease: 'linear'}, 'smoother-section-animation+=.2')
              .to('.section-phone', {duration: .1, autoAlpha: 0, ease: 'linear'}, 'smoother-section-animation+=.2');
  
  