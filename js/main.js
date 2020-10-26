$(function() {

if(window.innerWidth = 768) {
	$('.footer__list-title').on('click',(e)=> {
	$(e.target).next().slideToggle('200');
	$($(e.target).children()).toggleClass('active');
})
}




})