$(function() {
var $fotoramaDiv = $('#fotorama').fotorama();
var fotorama = $fotoramaDiv.data('fotorama');
fotorama.show(0);
fotorama.startAutoplay(3000)
fotorama.setOptions({
  nav: false,
  arrows: false,
  loop:true,
  infinite:true,
  dots:false,
});

// $('.slider').slick({
// 	slidesToShow:1,
// 	slidesToScroll:1,
// 	infinite:true
// })
})