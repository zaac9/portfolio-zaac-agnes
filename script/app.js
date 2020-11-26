const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".grid-main-nav");
let width=window.innerWidth;

// if(screen.width<768) {
hamburger.addEventListener("click", function() {
	navLinks.classList.toggle("open");
	console.log("clicked hamburger");

	links.forEach(function(link) {
		link.classList.toggle("fade");

	// 	link.addEventListener("click", function() {
	// 		navLinks.classList.toggle("open");
	// 		console.log("clicked a nav-link");
	// 		// links.forEach(function(l){
	// 		// 	l.classList.toggle("fade");
	// 		// });
	// 	})

	});
});
// }

// Close Nav Menu when clicking a link
	links.forEach(function(link) {
		link.addEventListener("click", function() {
			if (screen.width<768) {
				navLinks.classList.toggle("open");
				console.log("clicked a nav-link");

				// Toglle fade class so it works next time hamburger is clicked
				links.forEach(function(l){
					l.classList.toggle("fade");
				});
			}
		})

	});
	




// function closeNav() {
// 	navLinks.classList.toggle("open");
// 	console.log("clicked a nav-link");
// };

// if (screen.width<768) {
// 	for (var i=0; i<links.length; i++) {
// 		links.addEventListener("click", function() {
// 			navLinks.classList.toggle("open");
// 			console.log("clicked a nav-link");
// 		});
// 	}
// }

// $(navLinks).on("click", function(){
// 	$("menu").hide();
// 	$("menu-icon").removeClass("active");
// });