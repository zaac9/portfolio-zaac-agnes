// alert();

/////From: https://stackoverflow.com/questions/20632943/how-can-i-make-a-div-disappear-when-scrolling-down-100px-from-the-top
mouseIcon = document.querySelector('.middle');
lines = document.querySelectorAll('.line');
hamburger = document.querySelector('.hamburger');
navbar = document.querySelector('.nav-bar');

hamburgerHeight = hamburger.offsetHeight;
navbarHeight = navbar.offsetHeight;

// console.log("hamburger height: " + hamburgerHeight + "navbar height: " + navbarHeight)

$(window).bind('scroll', function(){
	if ($(window).scrollTop() > 100) {
		$(mouseIcon).hide();
	} else {
		$(mouseIcon).show();
	}
});

$(window).scroll(function() {
	var scroll=$(window).scrollTop();

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
});




// mouseIcon = document.querySelector('.middle');



// window.addEventListener('scroll', function(e){
// 	if (mouseIcon.scrollTop > 100) {
// 		mouseIcon.style.display = "none";
// 	} else {
// 		mouseIcon.style.display = "block";
// 	}
// });

// let prevScrollPos = window.pageYOffset;
// window.onScroll = function() {
// 	var currentScrollPos = window.pageYOffset;
// 	if (prevScrollPos > currentScrollPos){
// 		// mouseIcon.style.display = "none";
// 		mouseIcon.style.top = "0";
// 	} else {
// 		// mouseIcon.style.display = "block";
// 		mouseIcon.style.top = "-500px";
// 	}
// 	prevScrollPos = currentScrollPos;
// }







