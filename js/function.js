//로딩중
$(function () {
	const $loading = $('.loading');
	$loading.children('p').fadeOut();
	$loading.delay(250).fadeOut(800);
});

//메뉴, 스크롤
$(function () {
	const $header = $('.menu');
	const $background = $('.background');
	const $mouse = $('.mouse');
	const $aboutme = $('#aboutme');
	const $nav = $('nav');
	const $mnus = $('.gnb a');
	const $btnGnb = $('.btn-gnb');
	const $aside = $('aside');
	const $cutLine = $('#aboutme, #skill, #ability, #uxdesign, #portfolio, #contact, footer');

	const headerH = $background.height();
	const arrTopVal = []; //header이후에 존재하는 section의 top값

	$(window).on('load resize', function () {
		const backgroundH = $background.height();

		// 헤더바 높이 자동 조절
		// $header.css({ top: backgroundH });

		// 어바웃미~하단까지 위치 올리기
		for (let c = 0; c < $cutLine.length; c++) {
			$($cutLine[c]).css({ top: -backgroundH + 67 });
		}

		// #wrap 높이 조정
		$('#wrap').height(-backgroundH + 67);

		// 스마트폰 사이즈에서 버튼메뉴 보여주기
		if (window.innerWidth > 640) {
			$nav.show();
		} else {
			$btnGnb.removeClass('clse');
			$nav.hide();
		}

		//각 section의 top값을 배열에 저장
		$('section').each(function (idx) {
			arrTopVal[idx - 1] = $(this).offset().top;
		});
	}); //end of load resize 이벤트

	$(window).on('scroll', function () {
		const backgroundH = $background.height();
		let scrollTop = $(this).scrollTop();

		//헤더바 상단표시
		if (scrollTop > backgroundH) {
			$header.addClass('fixed');
			$aboutme.css({
				// marginTop: headerH,
				marginTop: 0,
			});
		} else {
			$header.removeClass('fixed');
			$aboutme.css({
				marginTop: 0,
			});
		}

		//스크롤바 위치에 따른 메뉴활성화 표시
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

	//   클릭시 해당 section간 이동
	$mnus.on('click', function (evt) {
		evt.preventDefault();

		//nowIdx
		let nowIdx = $mnus.index(this);

		//animate
		$('html, body').stop().animate({
			scrollTop: arrTopVal[nowIdx],
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