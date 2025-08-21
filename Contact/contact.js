
 ///--- WEBSITE - SMOOTH - SCROLL - LOCOMOTIVE ----/////

function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smoothMobile: true, 
    lerp: 0.08, 
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

locomotiveAnimation();


//////---- NAVBAR - ANIMATION ---///////////


const buttonToggler = document.querySelector("[data-nav-toggler]");
const navSlider = document.querySelector(".nav-slider");
const navItems = document.querySelectorAll(".nav-slider-list .navbar-slider-link");
const navIcon = buttonToggler.querySelector("ion-icon");

let navOpen = false;

buttonToggler.addEventListener("click", () => {
    navOpen = !navOpen;

    if (navOpen) {
        gsap.to(navSlider, {
            height: "auto",
            padding:"0px 0px 20px 0px",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            onStart: () => {
                navSlider.style.pointerEvents = "auto";
            }
        });
        gsap.fromTo(
            navItems,
            { opacity: 0, y: -10 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.07,
                duration: 0.3,
                ease: "power2.out",
                delay: 0.1
            }
        );

        navIcon.setAttribute("name", "close-outline");

    } else {
        gsap.to(navSlider, {
            height: 0,
            padding: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
                navSlider.style.pointerEvents = "none";
            }
        });

        navIcon.setAttribute("name", "reorder-two-outline");
    }
});


//////---- ANIMATION - DELAY---///////////


const chars = document.querySelectorAll(".word");

chars.forEach((char,index) => {
   char.style.animationDelay = `${index * 0.1}s`
});

//////---- CONTACT - TEXT - ANIMATIONS ---///////////

gsap.to(".cont-ttl h1", {
   opacity:1,
   x:0,
   delay:0.2,
   duration: 2,
   ease:"power2.out",
   ScrollTrigger: {
    start:"top 95%",
    scroller:"#main"
   }
})


//////---- SCROLL - REVEAL - GSAP ---- ///////////

gsap.utils.toArray("[data-set]").forEach((section) => {

   gsap.set(section, {
    y:50,
   });

   gsap.to(section, {
     y:0,
     duration:2,
     ease: "power3.out",
     scrollTrigger: {
      scroller: "#main",
      start: "top 85%",
      toggleActions: "play none none reverse",
     }
   });
  });


gsap.to(".contact-footer", {
  y:0,
  duration:1,
  scrollTrigger: {
    trigger: ".contact-right-sec", 
    start: "bottom 90%", 
    scroller:"#main",
    toggleActions: "play none none reverse" 
  }

})


//////---- CUSTOM - CURSOR ---///////////

const cursor = document.querySelector(".cursor");

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

gsap.ticker.add(() => {

  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;

  gsap.set(cursor, { x: cursorX, y: cursorY });
});

document.querySelectorAll("a, button, .hover-btn").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("opacity");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("opacity");
  });
});
