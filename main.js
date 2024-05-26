document.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 60) {
      document.querySelector(".container-fluid").classList.add("header-onScroll");
    //   document.querySelector(".container-fluid").classList.add("menu-icon-onScroll");
    } else {
      document.querySelector(".container-fluid").classList.remove("header-onScroll");
    //   document.querySelector(".container-fluid").classList.remove("menu-icon-onScroll");
    }
});
