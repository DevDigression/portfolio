$(openDisplay);

function openDisplay() {
	handleNav();
}

function handleNav() {
	$(".landing-nav").on("click", function() {
		$("nav")
			.find("a")
			.removeClass("active");
	});

	$(".about-nav").on("click", function() {
		$(".about-nav")
			.find("a")
			.addClass("active");
		$(".projects-nav")
			.find("a")
			.removeClass("active");
		$(".contact-nav")
			.find("a")
			.removeClass("active");
	});

	$(".projects-nav").on("click", function() {
		$(".projects-nav")
			.find("a")
			.addClass("active");
		$(".about-nav")
			.find("a")
			.removeClass("active");
		$(".contact-nav")
			.find("a")
			.removeClass("active");
	});

	$(".contact-nav").on("click", function() {
		$(".contact-nav")
			.find("a")
			.addClass("active");
		$(".projects-nav")
			.find("a")
			.removeClass("active");
		$(".about-nav")
			.find("a")
			.removeClass("active");
	});
}

$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		if (
			location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length
				? target
				: $("[name=" + this.hash.slice(1) + "]");
			if (target.length) {
				event.preventDefault();
				$("html, body").animate(
					{
						scrollTop: target.offset().top
					},
					1000
				);
			}
		}
	});
