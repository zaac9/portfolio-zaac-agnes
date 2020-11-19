// alert();

/////From: https://stackoverflow.com/questions/20632943/how-can-i-make-a-div-disappear-when-scrolling-down-100px-from-the-top
mouseIcon = document.querySelector('.middle');

$(window).bind('scroll', function(){
	if ($(window).scrollTop() > 100) {
		$(mouseIcon).hide();
	} else {
		$(mouseIcon).show();
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







