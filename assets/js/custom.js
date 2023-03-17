
$('.mu-speakers-slider').slick({
	slidesToShow: 5,
	responsive: [
		{
			breakpoint: 1199,
			settings: {
				arrows: true,
				slidesToShow: 4
			}
		},
		{
			breakpoint: 991,
			settings: {
				arrows: true,
				slidesToShow: 3
			}
		},
		{
			breakpoint: 754,
			settings: {
				arrows: true,
				slidesToShow: 2
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



