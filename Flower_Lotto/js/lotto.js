const $randomLotto = $(".startButton");
const $fixedResult = $(".result");

//위치값 변수

const unfoldAni = $(".flowerColor"); // 꽃 위치
const facePosition = $(".face"); // 꽃 얼굴 위치
const faceSelectN01 = $(".faceSelect01"); // 웃는 얼굴 위치
const faceSelectN02 = $(".faceSelect02"); // 둘러보는 얼굴 위치
const faceSelectN03 = $(".faceSelect03"); // 노래하는 얼굴 위치
const faceSelectN04 = $(".faceSelect04"); // 반한 얼굴 위치
const leaf01Position = $(".leaf01"); // 왼쪽잎 위치
const leaf02Position = $(".leaf02"); // 오른쪽잎 위치
const balloonColor = $(".balloon"); // 풍선이미지 위치
const numberImage01 = $(".number01"); // 풍선숫자 10단위 위치
const numberImage02 = $(".number02"); // 풍선숫자 1단위 위치
const topPosition = $(".topPosition"); // 풍선별 위치
const moving = $(".moving"); // 풍선별 이동 위치
const musician = $(".music"); // 음악가 위치

for (let repeat = 0; repeat < 6; repeat++) {
  $(leaf01Position[repeat]).css({ scale: "50%" });
  $(leaf02Position[repeat]).css({ scale: "50%" });
}

// 태양 연출
let sunAni = setInterval(function () {
  let sunAni01 = setTimeout(function () {
    $(".sun").css({ backgroundPosition: "-853px -191px" });
  }, 500);
  let sunAni02 = setTimeout(function () {
    $(".sun").css({ backgroundPosition: "-853px -327px" });
  }, 1000);
  let sunAni03 = setTimeout(function () {
    $(".sun").css({ backgroundPosition: "-853px -463px" });
  }, 1500);
  let sunAni04 = setTimeout(function () {
    $(".sun").css({ backgroundPosition: "-853px -327px" });
  }, 2000);
}, 2000);

// 웃는 얼굴
$(".faceSelect01").css({ backgroundPosition: "-623px -775px" });

// 둘러보는 얼굴
let face02 = setInterval(function () {
  let face02_01 = setTimeout(function () {
    $(".faceSelect02").css({ backgroundPosition: "-623px -801px" });
  }, 1600);
  let face02_02 = setTimeout(function () {
    $(".faceSelect02").css({ backgroundPosition: "-623px -827px" });
  }, 3200);
}, 3200);

// 노래하는 얼굴
let face03 = setInterval(function () {
  let face03_01 = setTimeout(function () {
    $(".faceSelect03").css({ backgroundPosition: "-623px -853px" });
  }, 1000);
  let face03_02 = setTimeout(function () {
    $(".faceSelect03").css({ backgroundPosition: "-623px -879px" });
  }, 2000);
}, 2000);

// 반한 얼굴
let face04 = setInterval(function () {
  let face04_01 = setTimeout(function () {
    $(".faceSelect04").css({ backgroundPosition: "-623px -906px" });
  }, 300);
  let face04_02 = setTimeout(function () {
    $(".faceSelect04").css({ backgroundPosition: "-623px -932px" });
  }, 600);
  let face04_03 = setTimeout(function () {
    $(".faceSelect04").css({ backgroundPosition: "-623px -958px" });
  }, 900);
  let face04_04 = setTimeout(function () {
    $(".faceSelect04").css({ backgroundPosition: "-623px -932px" });
  }, 1200);
}, 1200);

// 스타트버튼
$randomLotto.on("click", function () {
  // 연출 애니메이션 초기화
  $(".closeWindow").css({ display: "none" });
  $(".faceSelect").css({ visibility: "hidden" });

  for (let reset = 0; reset < 6; reset++) {
    $(unfoldAni[reset]).css({ backgroundPosition: "-521px -693px" });
    $(unfoldAni[reset]).removeClass("faceDance");
    $(facePosition[reset]).removeClass("faceDancer");
    $(facePosition[reset]).css({ opacity: "0" });
    $(leaf01Position[reset]).css({ scale: "50%" });
    $(leaf02Position[reset]).css({ scale: "50%" });
    $(leaf01Position[reset]).removeClass("leafAni");
    $(leaf02Position[reset]).removeClass("leafAni");
    $(numberImage01[reset]).css({ display: "block" });
    $(numberImage01[reset]).css({ backgroundPosition: "-235px -963px" });
    $(numberImage02[reset]).css({ backgroundPosition: "-235px -963px" });
    $(topPosition[reset]).removeClass("balloonsAni");
    $(moving[reset]).css({ display: "none" });
    $(musician[reset]).css({ visibility: "hidden" });
  }

  // 연출되는 동안 버튼 비활성화
  $(".buttonNormal").css("display", "none");

  // 1~45 로또볼을 저장한 배열변수
  const balls = new Array();
  for (ballNumber = 1; ballNumber <= 45; ballNumber++) {
    balls.push(ballNumber);
  }

  // 추출할 당첨번호를 저장할 배열변수
  const lotto = [];
  const face = [];

  // 당첨번호 추출 및 숫자에 따른 꽃과 풍선 컬러 결정

  const lastColor = new Array();
  for (let ballCount = 0; ballCount < 6; ballCount++) {
    let tempValue = Math.floor(Math.random() * balls.length);
    tempNumber = tempValue + 1;
    lotto.push(balls[tempValue]);
    let tempCount = balls[tempValue];
    balls.splice(tempValue, 1);

    // 꽃과 풍선 컬러 결정
    if (tempCount > 0 && tempCount < 11) {
      lastColor.push("yellow");
      $(balloonColor[ballCount]).css({ backgroundPosition: "-525px -1px" });
    } else if (tempCount > 10 && tempCount < 21) {
      lastColor.push("blue");
      $(balloonColor[ballCount]).css({ backgroundPosition: "-621px -1px" });
    } else if (tempCount > 20 && tempCount < 31) {
      lastColor.push("red");
      $(balloonColor[ballCount]).css({ backgroundPosition: "-717px -1px" });
    } else if (tempCount > 30 && tempCount < 41) {
      lastColor.push("gray");
      $(balloonColor[ballCount]).css({ backgroundPosition: "-813px -1px" });
    } else if (tempCount > 40 && tempCount < 46) {
      lastColor.push("green");
      $(balloonColor[ballCount]).css({ backgroundPosition: "-909px -1px" });
    }

    // 꽃 얼굴 결정
    let faceCount = Math.floor(tempCount % 4);
    face.push(faceCount);
  }

  // -----------------------------로또 번호 확인중----------------------!!!
  console.log(lotto);

  // 풍선 이미지번호 출력
  for (let t = 0; t < 6; t++) {
    // 10 단위 이미지 번호
    if (lotto[t] > 9 && lotto[t] < 20) {
      $(numberImage01[t]).css({ backgroundPosition: "-1px -963px" });
    } else if (lotto[t] > 19 && lotto[t] < 30) {
      $(numberImage01[t]).css({ backgroundPosition: "-27px -963px" });
    } else if (lotto[t] > 29 && lotto[t] < 40) {
      $(numberImage01[t]).css({ backgroundPosition: "-53px -963px" });
    } else if (lotto[t] > 39 && lotto[t] < 46) {
      $(numberImage01[t]).css({ backgroundPosition: "-79px -963px" });
    } else if (lotto[t] < 10) {
      $(numberImage01[t]).css({ display: "none" });
    }

    //1단위 이미지번호
    let tempLottoNum = lotto[t] % 10;
    switch (tempLottoNum) {
      case 1:
        $(numberImage02[t]).css({ backgroundPosition: "-1px -963px" });
        break;
      case 2:
        $(numberImage02[t]).css({ backgroundPosition: "-27px -963px" });
        break;
      case 3:
        $(numberImage02[t]).css({ backgroundPosition: "-53px -963px" });
        break;
      case 4:
        $(numberImage02[t]).css({ backgroundPosition: "-79px -963px" });
        break;
      case 5:
        $(numberImage02[t]).css({ backgroundPosition: "-105px -963px" });
        break;
      case 6:
        $(numberImage02[t]).css({ backgroundPosition: "-131px -963px" });
        break;
      case 7:
        $(numberImage02[t]).css({ backgroundPosition: "-157px -963px" });
        break;
      case 8:
        $(numberImage02[t]).css({ backgroundPosition: "-183px -963px" });
        break;
      case 9:
        $(numberImage02[t]).css({ backgroundPosition: "-209px -963px" });
        break;
      case 0:
        $(numberImage02[t]).css({ backgroundPosition: "-235px -963px" });
        break;
    }
  }

  let genTime = -600;
  let coolTime = 0;

  // 창문 열기 연출
  $(".windowsAni").css({ display: "block" });
  const closeTime = setTimeout(function () {
    $(".windowsAni").css({ display: "none" });
  }, 900);

  // 꽃피우기 연출
  for (let i = 0; i < 6; i++) {
    genTime = genTime + 600;

    // 꽃 얼굴 정하기
    if (face[i] === 0) {
      $(faceSelectN01[i]).css({ visibility: "visible" });
    } else if (face[i] === 1) {
      $(faceSelectN02[i]).css({ visibility: "visible" });
    } else if (face[i] === 2) {
      $(faceSelectN03[i]).css({ visibility: "visible" });
      $(musician[i]).css({ visibility: "visible" });
    } else if (face[i] === 3) {
      $(faceSelectN04[i]).css({ visibility: "visible" });
    }

    // 결정된 꽃 컬러 적용
    switch (lastColor[i]) {
      case "yellow":
        const flowerTimeYellow = setTimeout(function () {
          $(unfoldAni[i]).css({ display: "block" });
          let unfoldTime01 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-1px -881px" });
            $(leaf01Position[i]).animate({ scale: "100%" });
            $(leaf02Position[i]).animate({ scale: "100%" });
          }, 150);
          let unfoldTime02 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-1px -799px" });
            $(leaf01Position[i]).addClass("leafAni");
          }, 300);
          let unfoldTime03 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-1px -717px" });
          }, 450);
          let unfoldTime04 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-1px -635px" });
            $(facePosition[i]).css({ opacity: "1" });
            $(leaf02Position[i]).addClass("leafAni");
            $(facePosition[i]).addClass("faceDancer");
            $(unfoldAni[i]).addClass("faceDance");
          }, 600);
        }, genTime);
        break;

      case "blue":
        const flowerTimeBlue = setTimeout(function () {
          $(unfoldAni[i]).css({ display: "block" });
          let unfoldTime01 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-77px -881px" });
            $(leaf01Position[i]).animate({ scale: "100%" });
            $(leaf02Position[i]).animate({ scale: "100%" });
          }, 150);
          let unfoldTime02 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-77px -799px" });
            $(leaf01Position[i]).addClass("leafAni");
          }, 300);
          let unfoldTime03 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-77px -717px" });
          }, 450);
          let unfoldTime04 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-77px -635px" });
            $(facePosition[i]).css({ opacity: "1" });
            $(leaf02Position[i]).addClass("leafAni");
            $(facePosition[i]).addClass("faceDancer");
            $(unfoldAni[i]).addClass("faceDance");
          }, 600);
        }, genTime);
        break;

      case "red":
        const flowerTimeRed = setTimeout(function () {
          $(unfoldAni[i]).css({ display: "block" });
          let unfoldTime01 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-153px -881px" });
            $(leaf01Position[i]).animate({ scale: "100%" });
            $(leaf02Position[i]).animate({ scale: "100%" });
          }, 150);
          let unfoldTime02 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-153px -799px" });
            $(leaf01Position[i]).addClass("leafAni");
          }, 300);
          let unfoldTime03 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-153px -717px" });
          }, 450);
          let unfoldTime04 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-153px -635px" });
            $(facePosition[i]).css({ opacity: "1" });
            $(leaf02Position[i]).addClass("leafAni");
            $(facePosition[i]).addClass("faceDancer");
            $(unfoldAni[i]).addClass("faceDance");
          }, 600);
        }, genTime);
        break;

      case "gray":
        const flowerTimeGray = setTimeout(function () {
          $(unfoldAni[i]).css({ display: "block" });
          let unfoldTime01 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-229px -881px" });
            $(leaf01Position[i]).animate({ scale: "100%" });
            $(leaf02Position[i]).animate({ scale: "100%" });
          }, 150);
          let unfoldTime02 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-229px -799px" });
            $(leaf01Position[i]).addClass("leafAni");
          }, 300);
          let unfoldTime03 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-229px -717px" });
          }, 450);
          let unfoldTime04 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-229px -635px" });
            $(facePosition[i]).css({ opacity: "1" });
            $(leaf02Position[i]).addClass("leafAni");
            $(facePosition[i]).addClass("faceDancer");
            $(unfoldAni[i]).addClass("faceDance");
          }, 600);
        }, genTime);
        break;

      case "green":
        const flowerTimeGreen = setTimeout(function () {
          $(unfoldAni[i]).css({ display: "block" });
          let unfoldTime01 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-305px -881px" });
            $(leaf01Position[i]).animate({ scale: "100%" });
            $(leaf02Position[i]).animate({ scale: "100%" });
          }, 150);
          let unfoldTime02 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-305px -799px" });
            $(leaf01Position[i]).addClass("leafAni");
          }, 300);
          let unfoldTime03 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-305px -717px" });
          }, 450);
          let unfoldTime04 = setTimeout(function () {
            $(unfoldAni[i]).css({ backgroundPosition: "-305px -635px" });
            $(facePosition[i]).css({ opacity: "1" });
            $(leaf02Position[i]).addClass("leafAni");
            $(facePosition[i]).addClass("faceDancer");
            $(unfoldAni[i]).addClass("faceDance");
          }, 600);
        }, genTime);
        break;
    } //end of switch
  } //end of for

  // 상단 풍선 애니메이션 연출
  for (let n = 0; n < 6; n++) {
    coolTime = coolTime + 600;
    const balloonAni = setTimeout(function () {
      $(topPosition[n]).addClass("balloonsAni");
      $(moving[n]).show(500);
    }, coolTime);
  } //end of for

  // 버튼 활성화
  const createButton = setTimeout(function () {
    $(".buttonNormal").css({ display: "block" });
  }, 5000);
});
