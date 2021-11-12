$(document).ready(function() {

	 // preload the image for each link
	var image, imagecounter=1, imageCache=[];
	$('#image_list img').each(function(){
		image = new Image();
		let url ="./Activity10_images/h" + imagecounter +".jpg";
		image.src= url;
		image.title = $(this).attr('alt');
		imageCache[imagecounter-1] = image;
		imagecounter++;
	});
		
    // set up the event handlers for each link
	const pic1 = document.getElementById("#pic1");
	const pic2 = document.getElementById("#pic2");
	const pic3 = document.getElementById("#pic3");
	const pic4 = document.getElementById("#pic4");
	const pic5 = document.getElementById("#pic5");
	const pic6 = document.getElementById("#pic6");
		
    // get the image URL and caption for each image and animate the caption
	$('#pic1').click(function(event){
		event.preventDefault();
		$('.vanish').fadeOut(3000, 
			function(){
				var nextImage =imageCache[0];
				$('#current_image').attr('src',nextImage.src).fadeIn(3000);
				$('#caption').text(nextImage.title).fadeIn(3000);
			});
	});
	
	$('#pic2').click(function(event){
		event.preventDefault();
		$('.vanish').fadeOut(3000, 
			function(){
				var nextImage =imageCache[1];
				$('#current_image').attr('src',nextImage.src).fadeIn(3000);
				$('#caption').text(nextImage.title).fadeIn(3000);
			});
	});
	
	$('#pic3').click(function(event){
		event.preventDefault();
		$('.vanish').fadeOut(3000, 
			function(){
				var nextImage =imageCache[2];
				$('#current_image').attr('src',nextImage.src).fadeIn(3000);
				$('#caption').text(nextImage.title).fadeIn(3000);
			});
	});
	$('#pic4').click(function(event){
		event.preventDefault();
		$('.vanish').fadeOut(3000, 
			function(){
				var nextImage =imageCache[3];
				$('#current_image').attr('src',nextImage.src).fadeIn(3000);
				$('#caption').text(nextImage.title).fadeIn(3000);
			});
	});

$('#pic5').click(function(event){
		event.preventDefault();
		$('.vanish').fadeOut(3000, 
			function(){
				var nextImage =imageCache[4];
				$('#current_image').attr('src',nextImage.src).fadeIn(3000);
				$('#caption').text(nextImage.title).fadeIn(3000);
			});
	});

$('#pic6').click(function(event){
		event.preventDefault();
		$('.vanish').fadeOut(3000, 
			function(){
				var nextImage =imageCache[5];
				$('#current_image').attr('src',nextImage.src).fadeIn(3000);
				$('#caption').text(nextImage.title).fadeIn(3000);
			});
	});


    // move the focus to the first link
	document.getElementById('pic1').focus();
}); // end ready