





// Get all the speaker containers
const speakerContainers = document.querySelectorAll('.mu-single-speakers');
console.log(speakerContainers);
// Add a hover event listener to each container
speakerContainers.forEach(container => {
	container.addEventListener('mouseenter', () => {
	
		const imgcontainer = container.querySelector('.speaker-img');
		// Get the info container for this speaker
		const infoContainer = container.querySelector('.mu-single-speakers-info');

		// Apply the transition effect
		imgcontainer.style.filter = 'blur(10px)';
		infoContainer.style.transform = 'translateY(-120%)';
		infoContainer.style.display = 'block';
		infoContainer.style.opacity = '1';
	});

	container.addEventListener('mouseleave', () => {
		// Get the info container for this speaker
		const infoContainer = container.querySelector('.mu-single-speakers-info');
		const imgcontainer = container.querySelector('.speaker-img');
		// Remove the transition effect

		// infoContainer.style.display = 'none';
		infoContainer.style.transform = 'translateY(-160%)';
		imgcontainer.style.filter = 'blur(0px)';
		infoContainer.style.opacity = '0';

	});
});

$('.mu-speakers-slider').slick({
	slidesToShow: 4,
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
				arrows: false,
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}
	]
});
