const heads = document.querySelector(".heads");
const headss = document.querySelector(".headss");
const headsss = document.querySelector(".headsss");
const headsOffsetTop = heads.offsetTop;
const headssOffsetTop = headss.offsetTop;
const headsssOffsetTop = headss.offsetTop;

window.addEventListener("scroll", function () {
  if (window.scrollY > headsOffsetTop) {
    heads.classList.add("sticky");
    headss.classList.add("sticky");
    headsss.classList.add("sticky");
  } else {
    heads.classList.remove("sticky");
    headss.classList.remove("sticky");
    headsss.classList.remove("sticky");
  }
});
