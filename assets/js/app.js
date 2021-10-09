const bars = document.querySelectorAll("#first-bar");
const mainBar = document.querySelector("#main-bar");

// mainBar.addEventListener("click", (e) => {
//   if (mainBar.classList.contains("cc")) {
//     for (let i = 0; i < bars.length; i++) {
//       if (i == 0) {
//         bars[i].style.transform = "rotate(45deg) translateY(14px)";
//       }
//       if (i == 1) {
//         bars[i].style.transform = "rotate(0) translateX(100px)";
//         bars[i].style.opacity = "0";
//       }
//       if (i == bars.length - 1) {
//         bars[i].style.transform = "rotate(-45deg) translateY(-14px)";
//       }
//     }
//     mainBar.classList.remove("cc");
//   } else {
//     for (let i = 0; i < bars.length; i++) {
//       if (i == 0) {
//         bars[i].style.transform = "rotate(0deg) translateY(0px)";
//       }
//       if (i == 1) {
//         bars[i].style.transform = "translateX(0px)";
//         bars[i].style.opacity = "1";
//       }
//       if (i == bars.length - 1) {
//         bars[i].style.transform = "rotate(0deg) translateY(0px)";
//       }
//     }
//     mainBar.classList.add("cc");
//   }
// });

//active class add on scroll
const section = document.querySelectorAll(".section");
const navItem = document.querySelectorAll("header .big-screen-menu ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  section.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navItem.forEach((a) => {
    a.classList.remove("font-bold");
    if (a.classList.contains(current)) {
      a.classList.add("font-bold");
    }
  });
});

//active class add on scroll

//scroll to top
const scrollToTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", (e) => {
  if (scrollY > 200) {
    scrollToTop.style.transform = "translateY(0)";
    scrollToTop.style.opacity = "1";
  } else {
    scrollToTop.style.transform = "translateY(80px)";
    scrollToTop.style.opacity = "0";
  }
});
//scroll to top

// show/hide sidebar
const menu = document.querySelector(".menu");
mainBar.addEventListener("click", (e) => {
  if (menu.classList.contains("-left-full")) {
    menu.classList.remove("-left-full");
    menu.classList.add("left-0");
  } else {
    menu.classList.remove("left-0");
    menu.classList.add("-left-full");
  }
});
// show/hide sidebar

// close side bar on mobile menu
const sidebarClose = document.querySelector(".sidebarClose");
sidebarClose.addEventListener("click", (e) => {
  if (menu.classList.contains("left-0")) {
    menu.classList.remove("left-0");
    menu.classList.add("-left-full");
  }
});

// close side bar on mobile menu

//tab-big screen

const bigTab = document.querySelectorAll(".big-tab-item");
const bigContents = document.querySelectorAll(".big-tab-body");

for (let i = 0; i < bigTab.length; i++) {
  bigTab[i].addEventListener("click", (e) => {
    bigTab.forEach((tab) => {
      tab.classList.remove("bg-accetnLight");
      tab.classList.remove("border-r-2");
      tab.classList.remove("border-heighlight");
      tab.classList.remove("font-bold");
    });

    bigTab[i].classList.add("bg-accetnLight");
    bigTab[i].classList.add("border-r-2");
    bigTab[i].classList.add("border-heighlight");
    bigTab[i].classList.add("font-bold");

    bigContents.forEach((c) => {
      c.style.visibility = "hidden";
      c.style.opacity = "0";
      c.style.transform = "scale(0.95)";
    });

    bigContents[i].style.visibility = "visible";
    bigContents[i].style.opacity = "1";
    bigContents[i].style.transform = "scale(1)";
  });
}
bigTab[0].click();

//tab-big screen

//tab

const tabs = document.querySelectorAll(".tab-item");
const contents = document.querySelectorAll(".tab-body");

// console.log(tabs);

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("bg-accent");
      tab.classList.remove("border-b");
      tab.classList.remove("border-heighlight");
      tab.classList.remove("font-bold");
    });

    tabs[i].classList.add("bg-accent");
    tabs[i].classList.add("border-b");
    tabs[i].classList.add("border-heighlight");
    tabs[i].classList.add("font-bold");

    contents.forEach((c) => {
      c.style.visibility = "hidden";
      c.style.opacity = "0";
      c.style.transform = "scale(0.95)";
    });

    contents[i].style.visibility = "visible";
    contents[i].style.opacity = "1";
    contents[i].style.transform = "scale(1)";
  });
}
tabs[0].click();

//tab

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    nav: true,
    loop: true,
    dots: true,
    lazyLoad: true,
    smartSpeed: 1000,
    navText: [
      "<div><svg width='50' height='50' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='35' cy='35' r='31' fill='#0D2D52' stroke='#092545' stroke-width='8'/><path d='M40.3738 24.9596C40.7288 25.3147 40.7611 25.8702 40.4706 26.2617L40.3738 26.3739L31.748 35.0001L40.3738 43.6263C40.7288 43.9813 40.7611 44.5369 40.4706 44.9284L40.3738 45.0405C40.0187 45.3955 39.4632 45.4278 39.0717 45.1373L38.9595 45.0405L29.6262 35.7072C29.2712 35.3522 29.2389 34.7966 29.5294 34.4051L29.6262 34.293L38.9595 24.9596C39.3501 24.5691 39.9832 24.5691 40.3738 24.9596Z' fill='white'/></svg></div>",
      "<div><svg width='50' height='50' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='35' cy='35' r='31' fill='#0D2D52' stroke='#092545' stroke-width='8'/><path d='M29.6262 24.9596C29.2712 25.3147 29.2389 25.8702 29.5294 26.2617L29.6262 26.3739L38.252 35.0001L29.6262 43.6263C29.2712 43.9813 29.2389 44.5369 29.5294 44.9284L29.6262 45.0405C29.9812 45.3955 30.5368 45.4278 30.9283 45.1373L31.0404 45.0405L40.3738 35.7072C40.7288 35.3522 40.7611 34.7966 40.4706 34.4051L40.3738 34.293L31.0404 24.9596C30.6499 24.5691 30.0167 24.5691 29.6262 24.9596Z' fill='white'/></svg></div>",
    ],
  });
});

//add active class on nav item

// const item = document.querySelectorAll(".nav-item");
// const itemSmall = document.querySelectorAll(".nav-item-small");

// item.forEach((b) => {
//   b.addEventListener("click", (e) => {
//     item.forEach((el) => el.classList.remove("font-bold"));
//     b.classList.add("font-bold");
//   });
// });
// item[0].click();

// itemSmall.forEach((b) => {
//   b.addEventListener("click", (e) => {
//     itemSmall.forEach((el) => el.classList.remove("font-bold"));
//     b.classList.add("font-bold");
//   });
// });
// itemSmall[0].click();

// scroll animation
AOS.init({
  duration: 1000,
});
// scroll animation

//sticky menu
function stickyElement(e) {
  var navbar = document.querySelector(".navigation");
  var scrollValue = window.scrollY;

  if (scrollValue > 0) {
    navbar.classList.add("fixed");
    // navbar.classList.add("translate-y-0");
  } else if (scrollValue < 0) {
    navbar.classList.remove("fixed");
    // navbar.classList.remove("translate-y-0");
  }
}

window.addEventListener("scroll", stickyElement);

// particle js implementation
particlesJS("particles-js", {
  particles: {
    number: {
      value: 52,
      density: {
        enable: true,
        value_area: 631.3280775270874,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
// particle js implementation
