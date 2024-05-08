// 시작 인덱스는 빈 li 다음부터
let currentIndex = 1;
const items = document.querySelectorAll(".footer-swiper-container ul li");
// li 태그 길이
const totalItems = items.length;
// 보여지는 screen의 높이
const containerHeight = document.querySelector(
  ".footer-swiper-container"
).offsetHeight;
// 인터벌 고유값
let autoSlideInterval = null;
let clickTimeout = null;

// 현재 인덱스를 받아서 인덱스 * 지정한 단위높이만큼 ul을 움직이게 한다.
function moveToIndex(index) {
  let yOffset = -(index * containerHeight);
  // 움직여야하는 y높이
  if (index === 0) {
    // 마지막에서 첫번째로 넘어가는 코드
    const ul = document.querySelector(".footer-swiper-container ul");
    ul.style.transition = "none";
    ul.style.transform = `translateY(0px)`;
    currentIndex = 0;
    ++index;
    setTimeout(function () {
      const ul = document.querySelector(".footer-swiper-container ul");
      // 두 번째 이동을 위해 transition 설정
      ul.style.transition = "transform 300ms"; // 2단계 이동에는 transition 적용
      // 두 번째 움직임 (300ms 동안 부드럽게 변화)
      ul.style.transform = `translateY(-50px)`; // 최종 위치로 이동
      currentIndex = index;
    }, 10);
  } else {
    // 평상시
    const ul = document.querySelector(".footer-swiper-container ul");
    ul.style.transition = "300ms";
    // translateY()로 ul을 움직이고, currentIndex를 현재 인덱스로 수정
    ul.style.transform = `translateY(${yOffset}px)`;
    currentIndex = index;
  }
}

// 인터벌을 설정하는 함수
function autoSlide() {
  autoSlideInterval = setInterval(() => {
    // 전역변수 currentIndex를 기준으로 넘어감
    let nextIndex = (currentIndex + 1) % totalItems;
    // 즉시 움직임
    moveToIndex(nextIndex);
  }, 5000); // 넘어가는 시간 설정
}

document
  .getElementById("swiper_button_prev_footer")
  .addEventListener("click", () => {
    if (currentIndex === 1) {
      return;
    }
    clearInterval(autoSlideInterval);
    // 타임아웃 클리어
    clearTimeout(clickTimeout);
    let nextIndex = (currentIndex - 1 + totalItems) % totalItems;
    // 즉시 움직임
    moveToIndex(nextIndex);
    clickTimeout = setTimeout(autoSlide, 2000); // 버튼을 누르면 2초 후 다시 자동 슬라이드 시작
  });

document
  .getElementById("swiper_button_next_footer")
  .addEventListener("click", () => {
    if (currentIndex === 4) {
      return;
    }
    clearInterval(autoSlideInterval);
    // 타임아웃 클리어
    clearTimeout(clickTimeout);
    let nextIndex = (currentIndex + 1) % totalItems;
    moveToIndex(nextIndex);
    clickTimeout = setTimeout(autoSlide, 2000); // 버튼을 누르면 2초 후 다시 자동 슬라이드 시작
  });

document.querySelector(
  ".footer-swiper-container ul"
).style.transform = `translateY(-50px)`;
autoSlide(); // 페이지 로드 시 자동 슬라이드 시작
