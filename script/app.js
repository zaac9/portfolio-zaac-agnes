const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".grid-main-nav");

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
			}
		})

	});
	
//// Change Hamburger Color when user scrolls down
$(window).scroll(function() {
	var scroll=$(window).scrollTop();

	if(navLinks.classList.contains("open")) {
		lines.forEach(function(line) {
			line.style.background="#FCFCFC";
		});
	} else {
		// minus 7 is to compensate for hamburger padding at top
		if(scroll >= navbarHeight - 7 -hamburgerHeight/2) {
			lines.forEach(function(line) {
				line.style.background="#23B2F9";
			});

		} else {
			lines.forEach(function(line) {
				line.style.background="#FCFCFC";
			});
		}
	}
});


//// Popup for About Content from: https://www.w3schools.com/howto/howto_css_modals.asp

// When the user clicks the button, open the modal 
// about.onclick = function() {
//   modal.style.display = "block";
// }
about.addEventListener("click", function() {
	modal.style.display = "block";
});

span.addEventListener("click", function() {
	modal.style.display = "none";
});

window.addEventListener("click", function() {
	if (event.target == modal) {
		modal.style.display = "none";
	}
});


// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }




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