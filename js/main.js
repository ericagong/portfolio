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
