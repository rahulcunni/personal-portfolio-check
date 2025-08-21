
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
   char.style.animationDelay = `${index * 0.06}s`
});


/////// ---- PROJECTS - SECTION - TEXT - ANIMATION --/////

const prTxt = document.querySelectorAll(".pr-ttl");

prTxt.forEach(title => {
  let letters = title.textContent.split("");
  title.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join("");
});

document.querySelectorAll(".pr-ttl").forEach(title => {
  gsap.from(title.querySelectorAll(".letter"), {
    y: 100,            
    opacity: 0,        
    stagger: 0.03,  
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: title,
      scroller: "#main",  
      start: "top 98%", 
      toggleActions: "play none none reverse"
    }
  });
});

gsap.to(".pr-txt-top", {
  opacity: 1,  
  y: 0,                   
  duration: 1,  
  delay: 0.8,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".first-sec",
    start: "top 60%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  },
});

gsap.to(".pr-txt-top", {
  opacity: 1,  
  y: 0,                   
  duration: 1,  
  delay: 0.8,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".first-sec",
    start: "top 60%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  },
});

gsap.to(".pr-txt-bottom", {
  opacity: 1,  
  y: 0,                   
  duration: 1,  
  delay: 0.8,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".third-sec",
    start: "top 60%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  },
});

/////// ---- PROJECTS - SECTION - 3D - ANIMATION --/////

const holders = document.querySelectorAll(".projects-img-holder");

holders.forEach(holder => {
  const image = holder.querySelector("img");

  holder.addEventListener("mousemove", (e) => {
    const rect = holder.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    const rotateX = offsetY * 8;
    const rotateY = offsetX * 8;

    image.style.transform = `scale(1.03) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    image.style.transition = "transform 0.5s ease";
  });

  holder.addEventListener("mouseleave", () => {
    image.style.transform = `scale(1) rotateX(0deg) rotateY(0deg)`;
    image.style.transition = "transform 0.5s ease";
  });
});



//////---- SCROLL - REVEAL - GSAP ---- ///////////

gsap.utils.toArray("[data-set]").forEach((section) => {

   gsap.set(section, {
    y:50,
   });

   gsap.to(section, {
     y:0,
     duration:3,
     ease: "power3.out",
     scrollTrigger: {
      trigger: section,
      scroller: "#main",
      start: "top 85%",
      toggleActions: "play none none reverse",
     }
   });
  });

//////---- SCROLL - REVEAL - GSAP ---- ///////////

gsap.to(".projects-ext", {
  y: 0,                   
  duration: 2.5,           
  ease: "power2.out",      
  scrollTrigger: {
    start: "top 95%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  },
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

