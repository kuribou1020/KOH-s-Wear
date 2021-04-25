$(function(){

	// メニューに関する動作で実行する関数 //
	const navToggle = function() {
		$('.nav-list').toggleClass('nav-list-open');
		$('.line1').toggleClass('line1-action');
		$('.line2').toggleClass('line2-action');
		$('.line3').toggleClass('line3-action');
	}

	// 3本線(×ボタン)を押したら、メニュー表示(非表示) //
	$('.nav-btn').on('click', function() {
		navToggle();
	});

	// メニューを押したらメニュー全体とメニューボタンを非表示、×ボタンを3本線に戻す //
	$('.nav-list a').click(function() {
		var id = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top
		}, 800);
		navToggle();
	});

	// ブランドメニューまでスクロールされたらトップに戻るボタンを表示 //
	$(window).scroll(function() {
		var brandH = $('.brand-wrapper').offset().top;
		if ($(this).scrollTop() > brandH) {
			$('.top-btn').show();
		} else {
			$('.top-btn').hide();
		}
	});

	// トップに戻るボタンの動作 //
	$('.top-btn').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});
