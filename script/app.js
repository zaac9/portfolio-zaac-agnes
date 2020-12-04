const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".grid-main-nav");
const icon = document.querySelector(".icon");

let lines = document.querySelectorAll('.line');
let navbar = document.querySelector('.nav-bar');

let hamburgerHeight = hamburger.offsetHeight;
let navbarHeight = navbar.offsetHeight;

let width=window.innerWidth;


//// About page Popup
var modal = document.getElementById("myModal");
var about = document.getElementById("about-btn");
var span = document.getElementsByClassName("close")[0];

// console.log("hamburger height: " + hamburgerHeight + "navbar height: " + navbarHeight)

//// Open Menu when click Hamburger
hamburger.addEventListener("click", function() {
	navLinks.classList.toggle("open");
	console.log("clicked hamburger");

	if(navLinks.classList.contains("open")) {
		// setTimeout (function() {
		// 	navbar.style.background="#fa5914";
		// }, 150);
		icon.classList.add("icon-fixed");

		lines.forEach(function(l) {
			l.style.background="#FCFCFC";
		});
	} else {
		// setTimeout (function() {
		// 	navbar.style.background="#FCFCFC";
		// }, 150);
		icon.classList.remove("icon-fixed");
		lines.forEach(function(l) {
			l.style.background="#ffdf2b";
		});
		
	}


	links.forEach(function(link) {
		link.classList.toggle("fade");
	});
});


//// Close Nav Menu when clicking a link
	links.forEach(function(link) {
		link.addEventListener("click", function() {
			if (screen.width<768) {
				navLinks.classList.toggle("open");
				console.log("clicked a nav-link");
				//// Toggle fade class so it works next time hamburger is clicked
				links.forEach(function(l){
					l.classList.toggle("fade");
				});
				lines.forEach(function(l) {
					l.style.background="#ffdf2b";
				});
			}

		})

	});
	
//// Change Hamburger Color when user scrolls down
// $(window).scroll(function() {
// 	var scroll=$(window).scrollTop();

	// if(navLinks.classList.contains("open")) {
	// 	lines.forEach(function(line) {
	// 		line.style.background="#FCFCFC";
	// 	});
// 	} else {
// 		// minus 7 is to compensate for hamburger padding at top
// 		if(scroll >= navbarHeight - 7 -hamburgerHeight/2) {
// 			lines.forEach(function(line) {
// 				line.style.background="#23B2F9";
// 			});

// 		} else {
// 			lines.forEach(function(line) {
// 				line.style.background="#FCFCFC";
// 			});
// 		}
// 	}
// });






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