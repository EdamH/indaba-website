
/* ----------------------------------------------------------- */
/*  5. SPEAKERS SLIDEER ( SLICK SLIDER )
/* ----------------------------------------------------------- */

$('.mu-speakers-slider').slick({
	slidesToShow: 4,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: true,
				slidesToShow: 1
			}
		}
	]
});



