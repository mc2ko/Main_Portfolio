//로딩중
$(function () {
	const $loading = $('.loading');
	$loading.children('p').fadeOut();
	$loading.delay(250).fadeOut(800);
});

//메뉴, 스크롤
$(function () {
	const $home = $('#home');
	const $backImage = $('.background');
	const $video = $('video');
	const $header = $home.nextAll('header');
	const $intro = $home.children('.intro');
	const $nav = $header.find('nav'); //직계자손선택 find()
	const $mnus = $nav.find('a');
	const $btnGnb = $header.find('.btn-gnb');
	const $aside = $('aside');

	const headerH = $header.height();
	const arrTopVal = []; //header이후에 존재하는 section의 top값

	$(window).on('load resize', function () {
		/*
		  브라우저 화면의 크기
	
		  1) 스크롤바와 툴바를 포함하지 않은 브라우저 화면의 크기
			 window.innerWidth
			 window.innerHeight
	
		  2) 스크롤바와 툴바를 포함한 브라우저 화면의 크기
			 window.outerWidth
			 window.outerHeight
	   */
		$home.height(window.innerHeight);
		$home.width(window.innerWidth);

		if (window.innerWidth > 640) {
			$nav.show();
		} else {
			$btnGnb.removeClass('clse');
			$nav.hide();

			$home.css({
				transform: 'scale(1)',
			});
		}

		//각 section의 top값을 배열에 저장
		$('header~section').each(function (idx) {
			arrTopVal[idx] = $(this).offset().top;
		});
	}); //end of load resize 이벤트

	$(window).on('scroll', function () {
		let scrollTop = $(this).scrollTop();
		const $aboutme = $home.nextAll('#aboutme');

		//헤더 고정
		if (scrollTop > $(this).height()) {
			$header.addClass('fixed');
			$aboutme.css({
				marginTop: headerH,
			});
		} else {
			$header.removeClass('fixed');
			$aboutme.css({
				marginTop: 0,
			});
		}

		//메뉴활성화 표시
		for (let i = 0; i < $mnus.length; i++) {
			if (scrollTop >= arrTopVal[i] - headerH - 150) {
				$mnus.eq(i).parent().addClass('on').siblings().removeClass('on');
			} else if (scrollTop < arrTopVal[0] - headerH - 150) {
				$mnus.parent().removeClass('on');
			}
		} //end of for

		// 탑버튼 노출 처리
		if (scrollTop > 120) {
			$aside.fadeIn();
		} else {
			$aside.fadeOut();
		}
	}); //end of scroll

	$mnus.on('click', function (evt) {
		evt.preventDefault();

		//nowIdx
		let nowIdx = $mnus.index(this);

		//animate
		$('html, body')
			.stop()
			.animate({
				scrollTop: arrTopVal[nowIdx] - headerH,
			});

		if (!(window.innerWidth > 640)) {
			$btnGnb.trigger('click'); //클릭이벤트 강제발생
		}
	});

	// 반응형 햄버거 버튼
	$btnGnb.on('click', function () {
		$(this).toggleClass('clse');
		$nav.toggle();
	});

	$('.logo')
		.add($aside)
		.on('click', function (evt) {
			evt.preventDefault();
			$('html,body').stop().animate({ scrollTop: 0 });
		});
});

//ability 영역
$(function () {
	$(window).on('scroll', function () {
		const scrollTop = $(this).scrollTop();

		if (scrollTop > $('#ability').offset().top - window.innerHeight + 300) {
			$('#ability .bar').each(function () {
				$(this).width($(this).children('span').text());
			});
		} else if (scrollTop < $('#ability').offset().top - window.innerHeight + 200) {
			$('#ability .bar').width(0); //막대그래프 리셋
		}

		// 화면을 내렸다 올려도 막대그래프 리셋되게 연습하기
		if (scrollTop >= $('#ability').offset().top + 280) {
			$('#ability .bar').width(0);
		}
	});
});
