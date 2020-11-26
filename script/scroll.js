// // alert();

/////From: https://stackoverflow.com/questions/20632943/how-can-i-make-a-div-disappear-when-scrolling-down-100px-from-the-top
let mouseIcon = document.querySelector('.middle');


$(window).bind('scroll', function(){
	if ($(window).scrollTop() > 70) {
		$(mouseIcon).hide();
	} else if (screen.width > 820){
		$(mouseIcon).show();
	}
});



