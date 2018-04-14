$(openDisplay);

function openDisplay() {
	$(".about-nav").addClass("active");
	handleNav();
}

function handleNav() {
	$(".about-nav").on("click", function() {
		$(".about-nav").addClass("active");
		$(".projects-nav").removeClass("active");
		$(".contact-nav").removeClass("active");
		$(".projects-page").addClass("no-display");
		$(".contact-page").addClass("no-display");
		$(".about-page").removeClass("no-display");
	});

	$(".projects-nav").on("click", function() {
		$(".projects-nav").addClass("active");
		$(".about-nav").removeClass("active");
		$(".contact-nav").removeClass("active");
		$(".projects-nav").addClass("active");
		$(".about-page").addClass("no-display");
		$(".contact-page").addClass("no-display");
		$(".projects-page").removeClass("no-display");
	});

	$(".contact-nav").on("click", function() {
		$(".contact-nav").addClass("active");
		$(".projects-nav").removeClass("active");
		$(".about-nav").removeClass("active");
		$(".contact-nav").addClass("active");
		$(".about-page").addClass("no-display");
		$(".projects-page").addClass("no-display");
		$(".contact-page").removeClass("no-display");
	});
}
