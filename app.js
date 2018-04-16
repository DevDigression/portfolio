$(openDisplay);

function openDisplay() {
	handleNav();
}

function handleNav() {
	$(".landing-nav").on("click", function() {
		$(".about-nav").removeClass("active");
		$(".projects-nav").removeClass("active");
		$(".contact-nav").removeClass("active");
		$(".projects-page").addClass("no-display");
		$(".contact-page").addClass("no-display");
		$(".about-page").addClass("no-display");
		$(".landing-page").removeClass("no-display");
	});

	$(".about-nav").on("click", function() {
		$(".about-nav").addClass("active");
		$(".projects-nav").removeClass("active");
		$(".contact-nav").removeClass("active");
		$(".landing-page").addClass("no-display");
		$(".projects-page").addClass("no-display");
		$(".contact-page").addClass("no-display");
		$(".about-page").removeClass("no-display");
	});

	$(".projects-nav").on("click", function() {
		$(".projects-nav").addClass("active");
		$(".about-nav").removeClass("active");
		$(".contact-nav").removeClass("active");
		$(".projects-nav").addClass("active");
		$(".landing-page").addClass("no-display");
		$(".about-page").addClass("no-display");
		$(".contact-page").addClass("no-display");
		$(".projects-page").removeClass("no-display");
	});

	$(".contact-nav").on("click", function() {
		$(".contact-nav").addClass("active");
		$(".projects-nav").removeClass("active");
		$(".about-nav").removeClass("active");
		$(".contact-nav").addClass("active");
		$(".landing-page").addClass("no-display");
		$(".about-page").addClass("no-display");
		$(".projects-page").addClass("no-display");
		$(".contact-page").removeClass("no-display");
	});
}
