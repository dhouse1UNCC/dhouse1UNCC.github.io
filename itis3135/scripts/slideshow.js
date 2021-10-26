$(function() {
	$('#slideshow_preview a').each(function(){
		var img = new Image();
		img.src = $(this).attr('href');
	});
	
	$('#slideshow_preview a').click(function(evt){
		var imgURL = $(this).attr("href");
		$("#slideshow_current").attr("src", imgURL);
		
		var imgTitle =$(this).attr('title');
		$("#slideshow_title").text(imgTitle);
		
		evt.preventDefault();
	});
	$('#slideshow_preview:first-child a').focus();
});