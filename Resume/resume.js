
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


//- CONTENT - TEXT - ANIMATIONS-//

//////---- ABOUT - ME - TITLE - ANIMATIONS ---///////////

gsap.registerPlugin(ScrollTrigger);

gsap.to(".rs-abt-ttl ", {
  opacity: 1,
  x: 0,
  duration: 1.5,
  ease: "power2.out",
  ScrollTrigger: {
    start:"top 95%",
    scroller: "#main",
  }
} );

const paragraph = document.querySelector(".rs-abt-pg p");
const words = paragraph.innerText.trim().split(/\s+/);

paragraph.innerHTML = "";

words.forEach(word => {
  const span = document.createElement("span");
  span.textContent = word + " "; 
  paragraph.appendChild(span);
});

gsap.to(".rs-abt-pg p span", {
  x: 0,
  opacity: 1,
  duration: 0.8,
  stagger: 0.05,
  ease: "power2.out",
  scrollTrigger: {
    scroller: "#main",
    start: "top 98%",
    toggleActions: "play none none reverse"
  }
});

//////---- EDUCATION - TITLE - ANIMATIONS ---///////////

gsap.to(".rs-ed-ttl", {
  opacity: 1,
  x: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".rs-ed",
    start: "top 95%",
    scroller: "#main",
  }
})

const edyears = document.querySelectorAll(".ed-con h5");

edyears.forEach(title => {
  gsap.from(title, {
    x: -20,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: title, 
      start: "top 95%",
      scroller: "#main",  
    }
  });
});

const edParagraphs = document.querySelectorAll(".ed-con p"); 

edParagraphs.forEach(paragraph => {
  const words = paragraph.textContent.trim().split(/\s+/);
  paragraph.textContent = "";

  words.forEach(w => {
    const span = document.createElement("span");
    span.textContent = w + " ";
    paragraph.appendChild(span);
  });

  gsap.set(paragraph.querySelectorAll("span"), {
    opacity: 0,
    x: -30,
    display: "inline-block"
  });

  gsap.to(paragraph.querySelectorAll("span"), {
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: paragraph,
      scroller: "#main", 
      start: "top 95%",
    }
  });
});

//////---- EXPERIENCE - TITLE - ANIMATIONS ---///////////

gsap.to(".rs-ex-ttl", {
  opacity: 1,
  x: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".rs-ex",
    start: "top 95%",
    scroller: "#main",
  }
})

const exyears = document.querySelectorAll(".ex-con h5");

exyears.forEach(title => {
  gsap.from(title, {
    x: -20,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: title, 
      start: "top 95%",
      scroller: "#main",  
    }
  });
});

const exParagraphs = document.querySelectorAll(".ex-con p"); 

exParagraphs.forEach(paragraph => {
  const words = paragraph.textContent.trim().split(/\s+/);
  paragraph.textContent = "";

  words.forEach(w => {
    const span = document.createElement("span");
    span.textContent = w + " ";
    paragraph.appendChild(span);
  });

  gsap.set(paragraph.querySelectorAll("span"), {
    opacity: 0,
    x: -30,
    display: "inline-block"
  });

  gsap.to(paragraph.querySelectorAll("span"), {
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: paragraph,
      scroller: "#main", 
      start: "top 95%",
    }
  });
});

//////---- DESIGN - SKILLS - TITLE - ANIMATIONS ---///////////

gsap.to(".ds-ttl", {
  opacity: 1,
  x: 0,
  duration: 1.5,
  ScrollTrigger: {
    start: "top 95%",
    scroller: "#main",
  }
});

const dstitle = document.querySelectorAll(".cs-con p");

dstitle.forEach(title => {
  gsap.from(title, {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: title, 
      start: "top 95%",
      scroller: "#main",  
    }
  });
});


//////---- CODING - SKILLS - TITLE - ANIMATIONS ---///////////

gsap.to(".cs-ttl", {
  opacity: 1,
  x: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".rs-cs-sk",
    start: "top 95%",
    scroller: "#main",
  }
})


//////---- SOFT - SKILLS - TITLE - ANIMATIONS ---///////////

gsap.to(".sfk-ttl", {
  opacity: 1,
  x: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".rs-sfk",
    start: "top 95%",
    scroller: "#main",
  }
})
/*
const containers = document.querySelectorAll(".sfk-elem");

containers.forEach(container => {

  gsap.from(container, {
     y: 10,
     opacity:1,
     duration:1,
     ease: "power2.out",
     scrollTrigger:{
      scroller:container,
      start:"top 95%",
      scroller:"#main"
     }
  })
})
*/
gsap.to(".sfk-con", {
  opacity: 1,
  x: 0,
  duration: 1.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".rs-sfk",
    start: "top 95%",
    scroller: "#main",
  }
})

//////---- SOCIAL - MEDIA - TITLE - ANIMATIONS ---- ///////////

gsap.to(".sm-ttl", {
  opacity: 1,
  x: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".rs-sm",
    start: "top 95%",
    scroller: "#main",
  }
})

const containers = document.querySelectorAll(".sm-elem");

containers.forEach(container => {

 gsap.set(container, {
  x: 20,
  opacity: 0
 })

 gsap.to(container, {
  x: 0,
  opacity: 1,
  duration: 1.5,
  delay:0.3,
  stagger: 0.05,
  ease: "power2.out",
  scrollTrigger: {
    trigger:container,
    start:"top 95%",
    scroller:"#main"
  }
 })
})


//////---- SCROLL - REVEAL - GSAP ---- ///////////

gsap.utils.toArray("[data-set]").forEach((section) => {

   gsap.set(section, {
    y:30,
   });

   gsap.to(section, {
     opacity:1,
     y:0,
     duration:1.5,
     ease: "power3.out",
     scrollTrigger: {
      trigger: section,
      scroller: "#main",
      start: "top 85%",
      toggleActions: "play none none reverse",
     }
   });
  });

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

document.querySelectorAll("a, button, p, .hover-btn").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("opacity");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("opacity");
  });
});


