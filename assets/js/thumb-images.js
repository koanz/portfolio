$(document).ready(function(){
	$('.thumb').click(function(){
		var src = $(this);
		$('.box-img').fadeIn(300, function(){
			$('.box-img').css({
				'position':'absolute',
				'top':'0',
				'left':'0',
				'width':'100%',
				'height':'100%',
				'background-color':'rgba(0,0,0,0.8)',
				'z-index':'999',
				'display':'block'
			});

			$('.container-box-img').prepend('<img class="images" style="border: 1px solid rgba(255,255,255,0.5);" src="'+src.find('img').attr('src')+'" />')
			
			$('.container-box-img').css({
				'position':'fixed',
				'top':'50px',
				'width':'80%',
				'left':'0',
				'right':'0',
				'margin':'auto',
				'z-index':'10000',
				'display':'block'
			});
		});
	});

	$('.box-img').click(function(){
		$(this).fadeOut(300, function(){
			$('.box-img').css('display','none');
			$('.container-box-img').css('display','none');
			$('.container-box-img').empty();
		});
	});
});