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
