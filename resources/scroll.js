window.onscroll = function() {
    "use strict";
    if (document.documentElement.scrollTop>50 ) {
      document.getElementById("header").classList.add("scroll-color");
    }
    else {
      document.getElementById("header").classList.remove("scroll-color");
    }
}