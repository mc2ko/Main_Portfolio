//로딩중
$(function () {
  const $loading = $(".loading");
  $loading.children("p").fadeOut();
  $loading.delay(250).fadeOut(800);
});

//메인
$(function () {
  const $header = $(".menu");
  const $background = $(".background");
  const $aboutme = $("#aboutme");
  const $nav = $("nav");
  const $mnus = $(".gnb a");
  const $btnGnb = $(".btn-gnb");
  const $aside = $("aside");
  const $cutLine = $(
    "#aboutme, #skill, #ability, #uxdesign, #portfolio, #contact, footer"
  );
  const $neoBar = $(".neoBar");
  const $neoCharacter = $(".neoCharacter");
  const $neoBarAni = $(".neoBarAni");

  const headerH = $background.height();
  const arrTopVal = []; //header이후에 존재하는 section의 top값

  // 처음로딩 및 화면사이즈변화에 따른 이벤트
  $(window).on("load resize", function () {
    const backgroundH = $background.height();

    //UI디자인 이미지 가로크기 비율에 맞춰 세로크기 정하기
    $(".uiDesignTab").css("height", $(".design01").width() * 0.749);
    $(".cutLine01").css("height", $(".cutLine01").width() * 0.749);
    $(".cutLine02").css("height", $(".cutLine02").width() * 0.749);
    $(".cutLine03").css("height", $(".cutLine03").width() * 0.749);
    $(".cutLine04").css("height", $(".cutLine04").width() * 0.666);
    $(".cutLine05").css("height", $(".cutLine05").width() * 1.5);
    $(".cutLine06").css("height", $(".cutLine06").width() * 0.562);

    // 헤더바 높이 자동 조절
    // $header.css({ top: backgroundH });

    // 어바웃미~하단까지 자바스크립트로 헤더바아래로 위치 올리기
    for (let c = 0; c < $cutLine.length; c++) {
      $($cutLine[c]).css({ top: -backgroundH + 67 });
    }

    // #wrap 높이 조정
    $("#wrap").height(-backgroundH + 67);

    // 스마트폰 사이즈에서 버튼메뉴 보여주기
    if (window.innerWidth > 640) {
      $nav.show();
    } else {
      $btnGnb.removeClass("clse");
      $nav.hide();
    }

    //각 section의 top값을 배열에 저장
    $("section").each(function (idx) {
      arrTopVal[idx - 1] = $(this).offset().top;
    });
  }); //end of load resize 이벤트

  // 스크롤위치 변화에 따른 이벤트
  $(window).on("scroll", function () {
    const backgroundH = $background.height();
    let scrollTop = $(this).scrollTop();

    //헤더바 상단표시
    if (scrollTop > backgroundH) {
      $header.addClass("fixed");
      $aboutme.css({
        // marginTop: headerH,
        marginTop: 0,
      });
    } else {
      $header.removeClass("fixed");
      $aboutme.css({
        marginTop: 0,
      });
    }

    //스크롤바 위치에 따른 메뉴활성화 표시
    for (let i = 0; i < $mnus.length; i++) {
      if (scrollTop >= arrTopVal[i] - headerH - 50) {
        $mnus.parent().removeClass("on");
        $mnus.eq(i).parent().addClass("on").siblings().removeClass("on");
      } else if (scrollTop < arrTopVal[0] - headerH - 150) {
        $mnus.parent().removeClass("on");
      }
    } //end of for

    // 스크롤바 위치에 따른 네오바 이동
    if (scrollTop < 971) {
      $neoBar.css({ right: 500 });
    } else if (scrollTop > 970 && scrollTop < 1921) {
      $neoBar.css({ right: 410 });
      $neoCharacter.stop().css({ display: "none" });
      $neoBarAni.stop().css({ display: "block" });
      setTimeout(function () {
        $neoCharacter.css({ display: "block" });
        $neoBarAni.css({ display: "none" });
      }, 1800);
    } else if (scrollTop > 1920 && scrollTop < 3111) {
      $neoBar.css({ right: 330 });
      $neoCharacter.stop().css({ display: "none" });
      $neoBarAni.stop().css({ display: "block" });
      setTimeout(function () {
        $neoCharacter.css({ display: "block" });
        $neoBarAni.css({ display: "none" });
      }, 1800);
    } else if (scrollTop > 3110 && scrollTop < 4071) {
      $neoBar.css({ right: 230 });
      $neoCharacter.stop().css({ display: "none" });
      $neoBarAni.stop().css({ display: "block" });
      setTimeout(function () {
        $neoCharacter.css({ display: "block" });
        $neoBarAni.css({ display: "none" });
      }, 1800);
    } else if (scrollTop > 4070 && scrollTop < 5681) {
      $neoBar.css({ right: 118 });
      $neoCharacter.stop().css({ display: "none" });
      $neoBarAni.stop().css({ display: "block" });
      setTimeout(function () {
        $neoCharacter.css({ display: "block" });
        $neoBarAni.css({ display: "none" });
      }, 1800);
    } else if (scrollTop > 5680) {
      $neoBar.css({ right: 8 });
      $neoCharacter.stop().css({ display: "none" });
      $neoBarAni.stop().css({ display: "block" });
      setTimeout(function () {
        $neoCharacter.css({ display: "block" });
        $neoBarAni.css({ display: "none" });
      }, 1800);
    }

    // 탑버튼 노출 처리
    if (scrollTop > 120) {
      $aside.fadeIn();
    } else {
      $aside.fadeOut();
    }
  }); //end of scroll

  // Home버튼 처리
  $(".menuLeft a").on("click", function () {
    $mnus.eq(0).parent().addClass("on").siblings().removeClass("on");
  });

  // 클릭시 해당 section간 이동
  $mnus.on("click", function (evt) {
    evt.preventDefault();

    //nowIdx
    let nowIdx = $mnus.index(this);

    //네오바 버튼클릭 이동
    switch (nowIdx) {
      case 0: {
        $neoBar.css({ right: 500 });
        $neoCharacter.stop().css({ display: "none" });
        $neoBarAni.stop().css({ display: "block" });
        setTimeout(function () {
          $neoCharacter.css({ display: "block" });
          $neoBarAni.css({ display: "none" });
        }, 1800);
        break;
      }
      case 1: {
        $neoBar.css({ right: 410 });
        $neoCharacter.stop().css({ display: "none" });
        $neoBarAni.stop().css({ display: "block" });
        setTimeout(function () {
          $neoCharacter.css({ display: "block" });
          $neoBarAni.css({ display: "none" });
        }, 1800);
        break;
      }
      case 2: {
        $neoBar.css({ right: 330 });
        $neoCharacter.stop().css({ display: "none" });
        $neoBarAni.stop().css({ display: "block" });
        setTimeout(function () {
          $neoCharacter.css({ display: "block" });
          $neoBarAni.css({ display: "none" });
        }, 1800);
        break;
      }
      case 3: {
        $neoBar.css({ right: 230 });
        $neoCharacter.stop().css({ display: "none" });
        $neoBarAni.stop().css({ display: "block" });
        setTimeout(function () {
          $neoCharacter.css({ display: "block" });
          $neoBarAni.css({ display: "none" });
        }, 1800);
        break;
      }
      case 4: {
        $neoBar.css({ right: 118 });
        $neoCharacter.stop().css({ display: "none" });
        $neoBarAni.stop().css({ display: "block" });
        setTimeout(function () {
          $neoCharacter.css({ display: "block" });
          $neoBarAni.css({ display: "none" });
        }, 1800);
        break;
      }
      case 5: {
        $neoBar.css({ right: 8 });
        $neoCharacter.stop().css({ display: "none" });
        $neoBarAni.stop().css({ display: "block" });
        setTimeout(function () {
          $neoCharacter.css({ display: "block" });
          $neoBarAni.css({ display: "none" });
        }, 1800);
        break;
      }
    }

    //animate
    $("html, body")
      .stop()
      .animate({
        scrollTop: arrTopVal[nowIdx] - 50,
      });

    if (!(window.innerWidth > 640)) {
      $btnGnb.trigger("click"); //클릭이벤트 강제발생
    }
  });

  // 반응형 햄버거 버튼
  $btnGnb.on("click", function () {
    $(this).toggleClass("clse");
    $nav.toggle();
  });

  $(".logo")
    .add($aside)
    .on("click", function (evt) {
      evt.preventDefault();
      $("html,body").stop().animate({ scrollTop: 0 });
    });
});

//화면위치에 따른 연출
$(function () {
  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop();

    // 덩쿨나무 장식 영역
    if (scrollTop > $("#skill").offset().top - window.innerHeight + 800) {
      $("#decoLeft").css({ display: "block" });
      $("#decoRight").css({ display: "block" });
      $("#sideDecoLeft").fadeIn(0);
      $("#sideDecoRight").fadeIn(0);
    } else if (
      scrollTop <
      $("#skill").offset().top - window.innerHeight + 780
    ) {
      $("#decoLeft").fadeOut();
      $("#decoRight").fadeOut();
    }

    //ability 영역
    if (scrollTop > $("#ability").offset().top - window.innerHeight + 300) {
      $("#ability .bar").each(function () {
        $(this).width($(this).children("span").text());
      });
      // $("#sideDecoLeft").css({ opacity: 1 });
    } else if (
      scrollTop <
      $("#ability").offset().top - window.innerHeight + 200
    ) {
      $("#ability .bar").width(0); //막대그래프 리셋
      // $("#sideDecoLeft").css({ opacity: 0 });
    }

    // 화면을 내렸다 올려도 막대그래프 리셋되게 연습하기
    if (scrollTop >= $("#ability").offset().top + 480) {
      $("#ability .bar").width(0);
    }
  });
});

//UI디자인 살펴보기
$(function () {
  const $designTab = $(".btnDesignTab p");
  const $uiDesign = $(".maps .uiDesign");
  const $btnCount01 = $(".design01 a");
  const $btnCount02 = $(".design02 a");
  const $btnCount03 = $(".design03 a");
  const $btnCount04 = $(".design04 a");
  const $btnCount05 = $(".design05 a");
  const $btnCount06 = $(".design06 a");
  const $frame = $(".imageFrame");
  const $popupImage = $("#popupImage > img");

  let nowIdx = 0;

  // UI디자인텝 활성화
  for (let t = 0; t < $designTab.length; t++) {
    $designTab.eq(t).on("click", function (evt) {
      evt.preventDefault();

      $designTab.eq(t).css({ opacity: 1 }).siblings().css({ opacity: 0.5 });
      $uiDesign
        .eq(t)
        // .css({ display: "block" })
        .css({ visibility: "visible" })
        .siblings()
        // .css({ display: "none" });
        .css({ visibility: "hidden" });

      // 디자인텝 초기화
      nowIdx = 0;
      for (let resetIdx = 0; resetIdx < $designTab.length; resetIdx++) {
        $frame.eq(resetIdx).animate({ left: -100 * nowIdx + "%" });
      }
    });
  }

  // UI디자인 다음버튼
  $(".btn_designRight").on("click", function (evt) {
    evt.preventDefault();

    for (let tabOn = 0; tabOn < $designTab.length; tabOn++) {
      if ($designTab.eq(tabOn).css("opacity") == 1) {
        switch (tabOn) {
          case 0:
            if (nowIdx < $btnCount01.length - 1) {
              nowIdx++;
            } else {
              nowIdx = 0;
            }

            $frame.eq(0).animate({ left: -100 * nowIdx + "%" });
            break;

          case 1:
            if (nowIdx < $btnCount02.length - 1) {
              nowIdx++;
            } else {
              nowIdx = 0;
            }

            $frame.eq(1).animate({ left: -100 * nowIdx + "%" });
            break;

          case 2:
            if (nowIdx < $btnCount03.length - 1) {
              nowIdx++;
            } else {
              nowIdx = 0;
            }

            $frame.eq(2).animate({ left: -100 * nowIdx + "%" });
            break;

          case 3:
            if (nowIdx < $btnCount04.length - 1) {
              nowIdx++;
            } else {
              nowIdx = 0;
            }

            $frame.eq(3).animate({ left: -100 * nowIdx + "%" });
            break;

          case 4:
            if (nowIdx < $btnCount05.length - 1) {
              nowIdx++;
            } else {
              nowIdx = 0;
            }

            $frame.eq(4).animate({ left: -100 * nowIdx + "%" });
            break;

          case 5:
            if (nowIdx < $btnCount06.length - 1) {
              nowIdx++;
            } else {
              nowIdx = 0;
            }

            $frame.eq(5).animate({ left: -100 * nowIdx + "%" });
            break;
        }
      }
    }
  });

  // UI디자인 이전버튼
  $(".btn_designLeft").on("click", function (evt) {
    evt.preventDefault();

    for (let tabOn = 0; tabOn < $designTab.length; tabOn++) {
      if ($designTab.eq(tabOn).css("opacity") == 1) {
        switch (tabOn) {
          case 0:
            if (nowIdx > 0) {
              nowIdx--;
            } else {
              nowIdx = $btnCount01.length - 1;
            }

            $frame.eq(0).animate({ left: -100 * nowIdx + "%" });
            break;

          case 1:
            if (nowIdx > 0) {
              nowIdx--;
            } else {
              nowIdx = $btnCount02.length - 1;
            }

            $frame.eq(1).animate({ left: -100 * nowIdx + "%" });
            break;

          case 2:
            if (nowIdx > 0) {
              nowIdx--;
            } else {
              nowIdx = $btnCount03.length - 1;
            }

            $frame.eq(2).animate({ left: -100 * nowIdx + "%" });
            break;

          case 3:
            if (nowIdx > 0) {
              nowIdx--;
            } else {
              nowIdx = $btnCount04.length - 1;
            }

            $frame.eq(3).animate({ left: -100 * nowIdx + "%" });
            break;

          case 4:
            if (nowIdx > 0) {
              nowIdx--;
            } else {
              nowIdx = $btnCount05.length - 1;
            }

            $frame.eq(4).animate({ left: -100 * nowIdx + "%" });
            break;

          case 5:
            if (nowIdx > 0) {
              nowIdx--;
            } else {
              nowIdx = $btnCount06.length - 1;
            }

            $frame.eq(5).animate({ left: -100 * nowIdx + "%" });
            break;
        }
      }
    }
  });

  // UI디자인01 상세보기 팝업창
  for (let i = 0; i < $btnCount01.length; i++);
  {
    $btnCount01.on("click", function (evt) {
      evt.preventDefault();

      const tempImage = $(this).attr("href");
      $popupImage.attr({ src: tempImage });
      $("#popupImage").css({ display: "block" });
    });
  }

  // UI디자인02 상세보기 팝업창
  for (let i = 0; i < $btnCount02.length; i++);
  {
    $btnCount02.on("click", function (evt) {
      evt.preventDefault();

      const tempImage = $(this).attr("href");
      $popupImage.attr({ src: tempImage });
      $("#popupImage").css({ display: "block" });
    });
  }

  // UI디자인03 상세보기 팝업창
  for (let i = 0; i < $btnCount03.length; i++);
  {
    $btnCount03.on("click", function (evt) {
      evt.preventDefault();

      const tempImage = $(this).attr("href");
      $popupImage.attr({ src: tempImage });
      $("#popupImage").css({ display: "block" });
    });
  }

  // UI디자인04 상세보기 팝업창
  for (let i = 0; i < $btnCount04.length; i++);
  {
    $btnCount04.on("click", function (evt) {
      evt.preventDefault();

      const tempImage = $(this).attr("href");
      $popupImage.attr({ src: tempImage });
      $("#popupImage").css({ display: "block" });
    });
  }

  // UI디자인05 상세보기 팝업창
  for (let i = 0; i < $btnCount05.length; i++);
  {
    $btnCount05.on("click", function (evt) {
      evt.preventDefault();

      const tempImage = $(this).attr("href");
      $popupImage.attr({ src: tempImage });
      $("#popupImage").css({ display: "block" });
    });
  }

  // UI디자인06 상세보기 팝업창
  for (let i = 0; i < $btnCount06.length; i++);
  {
    $btnCount06.on("click", function (evt) {
      evt.preventDefault();

      const tempImage = $(this).attr("href");
      $popupImage.attr({ src: tempImage });
      $("#popupImage").css({ display: "block" });
    });
  }

  // UI디자인 상세보기 팝업창 닫기
  $("#popupImage").on("click", function (evt) {
    evt.preventDefault();

    $("#popupImage").css({ display: "none" });
  });
});

//contact링크
$(function () {
  //전화 링크
  $(".linkBtn01").on("click", function (evt) {
    evt.preventDefault();

    $(".linkBtn01 p").css({ display: "block" });
    setTimeout(function () {
      $(".linkBtn01 p").css({
        display: "none",
      });
    }, 500);
  });

  //이메일 링크
  $(".linkBtn02").on("click", function (evt) {
    evt.preventDefault();

    $(".linkBtn02 p").css({ display: "block" });
    setTimeout(function () {
      $(".linkBtn02 p").css({
        display: "none",
      });
      $("#contact-form").css({ display: "block" });
    }, 500);
  });

  //인스타그램 링크
  $(".linkBtn03").on("click", function (evt) {
    evt.preventDefault();

    $(".linkBtn03 p").css({ display: "block" });
    setTimeout(function () {
      $(".linkBtn03 p").css({
        display: "none",
      });
    }, 500);
  });

  //카톡추가 링크
  $(".linkBtn04").on("click", function (evt) {
    evt.preventDefault();

    $(".linkBtn04 p").css({ display: "block" });
    setTimeout(function () {
      $(".linkBtn04 p").css({
        display: "none",
      });
    }, 500);
  });

  //이메일 보내기 취소
  $("#contact-form .btnCancel").on("click", function (evt) {
    evt.preventDefault();

    $("#contact-form").css({ display: "none" });
  });

  $("#contact-form").on("click", function (evt) {
    evt.preventDefault();

    $("#contact-form").css({ display: "none" });
  });

  $(
    "#contact-form p, #contact-form label, #contact-form input, #contact-form textarea"
  ).on("click", function (evt) {
    evt.stopPropagation();
  });
});

//이스터 에그
$(function () {
  // BGM버튼
  $(".btnBGM").on("click", function (evt) {
    console.log("눌렀다!");
  });

  $(".btn_boneEye").on("click", function (evt) {
    evt.preventDefault();

    $(".btn_boneEye").css({ opacity: 1 });
    setTimeout(function () {
      $(".btn_boneEye").css({ opacity: 0 });
    }, 6000);
  });
});
