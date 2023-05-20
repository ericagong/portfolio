const searchElement = document.querySelector(".search");

const serachInputElement = searchElement.querySelector("input");

searchElement.addEventListener("click", function () {
  serachInputElement.focus();
});

serachInputElement.addEventListener("focus", function () {
  searchElement.classList.add("focused");
  serachInputElement.setAttribute(
    "placeholder",
    "프로젝트나 블로그 글을 검색해보세요!"
  );
});

serachInputElement.addEventListener("blur", function () {
  searchElement.classList.remove("focused");
  serachInputElement.setAttribute("placeholder", "");
  serachInputElement.value = "";
});

const badgesElement = document.querySelector("header .badges");

// lodash library 사용해 throttle 기능 구현
// gsap library 사용해 애니메이션 구현
// 실제로 요소 삭제도 필요
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      // badges 숨기기
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgesElement, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // badges 보이기
      gsap.to(badgesElement, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

const fadeInElements = document.querySelectorAll(".visual .fade-in");

// 순차적으로 이미지 보이기
fadeInElements.forEach(function (fadeInElement, index) {
  gsap.to(fadeInElement, 1, {
    delay: (index + 1) * 0.5,
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});

new Swiper(".projects .swiper", {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  autoplay: { delay: 5000 },
  loop: true,
  pagination: {
    el: ".projects .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".projects .swiper-prev",
    nextEl: ".projects .swiper-next",
  },
});

const projectsElement = document.querySelector(".projects");
const projectsToggleBtnElement = document.querySelector(".toggle-projects");
const projectsShowIconElement = projectsToggleBtnElement.querySelector(
  ".toggle-projects--show"
);
const projectsHideIconElement = projectsToggleBtnElement.querySelector(
  ".toggle-projects--hide"
);

let isHidePromotion = false;

projectsToggleBtnElement.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    projectsElement.classList.add("hide");
    projectsShowIconElement.classList.add("hide");
    projectsHideIconElement.classList.remove("hide");
  } else {
    // 보임 처리
    projectsElement.classList.remove("hide");
    projectsHideIconElement.classList.add("hide");
    projectsShowIconElement.classList.remove("hide");
  }
});

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션); 요소 대신 css 선택자 입력해도 gsap에서 자동으로 요소 찾아 수행
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyElements = document.querySelectorAll("section.scroll-spy");

spyElements.forEach(function (spyElement) {
  // new ScrollMagic.Scene({ 옵션 })
  new ScrollMagic.Scene({
    triggerElement: spyElement, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 뷰포트의 0~1 사이의 값으로 설정
  })
    .setClassToggle(spyElement, "show") // triggerHook으로 지정한 지점을 넘어서는 순간 show 클래스 추가
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");

thisYear.textContent = new Date().getFullYear();
