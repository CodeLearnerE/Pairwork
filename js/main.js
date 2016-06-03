$('#video').YTPlayer({
    fitToBackground: false,
    videoId: 'dorZ3vag5PI',
    playerVars: {
      //autohide: 0
    controls: 2,
    heightStr : 100
   }
})

$('.my-slideshow').bjqs({
	responsive : true,
	height : 700,
	width: '100%',
	nexttext : '',
	prevtext : '',
	showmarkers : false
});


var slideArrows = $('.my-slideshow').find('.bjqs-controls.v-centered li a');
slideArrows.first().append('<i class="fa fa-angle-left fa-4x" aria-hidden="true"></i>');
slideArrows.last().append('<i class="fa fa-angle-right fa-4x" aria-hidden="true"></i>');