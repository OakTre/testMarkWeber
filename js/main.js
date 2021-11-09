window.onload = function (){
	document.querySelector(".preloader").classList.add("_is-loaded");

	setTimeout(() => {
		animStart();
	}, 500);
};

function animStart() {
	const timeline = gsap.timeline();

	timeline
		.to(".header__container", { y: 0, opacity: 1, duration: 0.4, clearProps: "all"})
		.to(".header__top-image", { y: 0, opacity: 1, duration: 0.4, clearProps: "opacity"}, "-=0.2")
		.to(".hero__blocks", { y: 0, opacity: 1, duration: 0.4, clearProps: "opacity"}, "-=0.5")
		.to(".hero-bg-wrap", { y: 0, opacity: 1, duration: 0.4, clearProps: "all"}, "-=0.5")
		.to(".hero-bg-wrap2", { y: 0, opacity: 1, duration: 0.4, clearProps: "opacity"}, "-=0.5")
};

document.addEventListener("DOMContentLoaded", function(event) {
	// const options = BodyScrollOptions = {
	// 	reserveScrollBarGap: true,
	// };

	gsap.registerPlugin(ScrollTrigger);

	gsap.set(".header__container", {y: 25, opacity: 0});
	gsap.set(".header__top-image", {y: -25, opacity: 0});
	gsap.set(".hero__blocks", {y: 25, opacity: 0});
	gsap.set(".hero-bg-wrap", {y: 144, opacity: 0, bottom: 212});
	gsap.set(".hero-bg-wrap2", {y: 144, opacity: 0, bottom: 290});


	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".hero-bg-wrap",
			start: "-30% top",
			end: "+=20%",
			pin: true,
			scrub: true,
			scrub: 8,
		}
	});

	tl.to(".hero-bg-wrap", {
		bottom: 0
	})

	let tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".hero-bg-wrap2",
			start: "-30% top",
			end: "+=40%",
			pin: true,
			scrub: true,
			scrub: 1,
		}
	});

	tl2.to(".hero-bg-wrap2", {
		bottom: 0,
	})
});
