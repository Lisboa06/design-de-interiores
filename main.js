document.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 60) {
      document.querySelector(".container-fluid").classList.add("header-onScroll");
    //   document.querySelector(".container-fluid").classList.add("menu-icon-onScroll");
    } else {
      document.querySelector(".container-fluid").classList.remove("header-onScroll");
    //   document.querySelector(".container-fluid").classList.remove("menu-icon-onScroll");
    }
});

const slider = document.querySelector(".slider input");
const img = document.querySelector(".images .img-2");
const dragLine = document.querySelector(".slider .drag-line");
slider.oninput = ()=>{
  let sliderVal = slider.value;
  dragLine.style.left = sliderVal + "%";
  img.style.width = sliderVal + "%";
}