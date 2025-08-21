
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


//////---- VIDEO - ZOOM - EFFCT ---///////////


gsap.registerPlugin(ScrollTrigger);  /// SCROLL TRIGGER


const video = document.querySelector(".video-holder video");

gsap.to(video, {
  scale: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".video-holder",
    scroller: "#main",
    start:"top bottom",
    end:"bottom top",
    scrub:true,
   
  }
});

//////---- ABOUT - SECTION - TEXT - ANIMATIONS ---///////////

const abouTitle = document.querySelectorAll(".abt-ttl");

abouTitle.forEach(title => {
  let letters = title.textContent.split("");
  title.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join("");
});

document.querySelectorAll(".abt-ttl").forEach(title => {
  gsap.from(title.querySelectorAll(".letter"), {
    y: 100,            
    opacity: 0,        
    stagger: 0.05,  
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: title,
      scroller: "#main",  
      start: "top 95%", 
      toggleActions: "play none none reverse"
    }
  });
});

gsap.to(".resume-btn", {
  opacity: 1,  
  y: 0,                   
  duration: 1,  
  delay: 1.2,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 10%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  }
});

const paragraph = document.querySelector(".about-content-text p");
const words = paragraph.innerText.trim().split(/\s+/);

paragraph.innerHTML = "";

words.forEach(word => {
  const span = document.createElement("span");
  span.textContent = word; 
  paragraph.appendChild(span);
});

gsap.to(".about-content-text p span", {
  x: 0,
  opacity: 1,
  filter: "blur(0px)",
  duration: 0.8,
  stagger: 0.05,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-content-text",
    scroller: "#main",
    start: "top 98%",
    toggleActions: "play none none reverse"
  }
});

//////---- WORK - SECTION - TEXT - ANIMATIONS ---///////////

const titles = document.querySelectorAll(".scroll-title");

titles.forEach(title => {
  let letters = title.textContent.split("");
  title.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join("");
});

document.querySelectorAll(".scroll-title").forEach(title => {
  gsap.from(title.querySelectorAll(".letter"), {
    y: 100,            
    opacity: 0,        
    stagger: 0.05,  
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: title,
      scroller: "#main",  
      start: "top 95%", 
      toggleActions: "play none none reverse"
    }
  });
});

gsap.to(".reveal-title", {
  opacity: 1,  
  y: 0,                   
  duration: 1,  
  delay: 1,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".work-section-header",
    start: "top 90%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  }
});

gsap.to(".work-header-text", {
  opacity: 1,  
  x: 0,                   
  duration: 1,  
  delay: 0.8,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".work-header-text",
    start: "top 90%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  },
});

gsap.fromTo(".work-header-text ion-icon",{ rotate: -40}, {
  rotate: 0,                 
  duration: 0.2,  
  delay: 0.8,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".work-header-text",
    start: "top 90%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  },
  onComplete: () => {
     gsap.to(".work-header-text ion-icon", {
        rotate: -40,
        duration: 0.5,
        delay: 0.8,
        ease: "power2.inOut",
      });
  }
})


gsap.utils.toArray(".hashtag").forEach((tag, i) => {
  gsap.to(tag, {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    duration: 1,
    delay: i * 0.3, 
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".works",
      scroller: "#main", 
      start: "top 90%",
      toggleActions: "play none none reverse", 
    },
  });
});

gsap.to(".gallery", {
  y: 0,                   
  duration: 1,  
  delay: 1.2,           
  ease: "power3.out",      
  scrollTrigger: {
    trigger: ".works",
    start: "top 30%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  }
});


//////----WORK - SECTION - POSTER - LIFT - UP - ANIMATION ---///////////


const hashtags = document.querySelectorAll(".hashtag");
const posters = document.querySelectorAll(".poster");

hashtags.forEach(tag => {

  tag.addEventListener("mouseenter", () => {
  const key = tag.dataset.key;

  posters.forEach(poster => {
     if(poster.dataset.hashtag === key) {
      const rotation = poster.dataset.rotate || 0; 
        gsap.to(poster, {
          y: -200,
          rotate:rotation,
          scale:1.05,
          duration: 0.6,
          ease: "power3.out",
          onStart: () => poster.style.zIndex = 999 
        });
     }
  });
  });


  tag.addEventListener("mouseleave", () => {
    posters.forEach(poster => {
         gsap.to(poster, {
          y: 0,
          rotate:0,
          scale:1,
          duration: 0.6,
          ease: "power3.inOut",
          onComplete: () => poster.style.zIndex = 1
        });
    })
  })
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


/////// ---- PROJECTS - SECTION - TEXT - ANIMATION --/////


const projectTitle = document.querySelectorAll(".project-title");

projectTitle.forEach(title => {
  let letters = title.textContent.split("");
  title.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join("");
});

document.querySelectorAll(".project-title").forEach(title => {
  gsap.from(title.querySelectorAll(".letter"), {
    y: 100,            
    opacity: 0,        
    stagger: 0.05,  
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: title,
      scroller: "#main",  
      start: "top 90%", 
      toggleActions: "play none none reverse"
    }
  });
});

gsap.to(".projects-text", {
  opacity: 1,  
  x: 0,                   
  duration: 1,  
  delay: 0.8,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".projects-text",
    start: "top 90%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  },
});

gsap.fromTo(".projects-text ion-icon",{ rotate: -40}, {
  rotate: 0,                 
  duration: 0.2,  
  delay: 0.8,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".projects-text",
    start: "top 90%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  },
  onComplete: () => {
     gsap.to(".projects-text ion-icon", {
        rotate: -40,
        duration: 0.5,
        delay: 0.8,
        ease: "power2.inOut",
      });
  }
});

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


/////// ---- STAGES - SECTION - TEXT - ANIMATION - GSAP --/////

const prcTtl= document.querySelectorAll(".prc-ttl");

prcTtl.forEach(title => {
  let letters = title.textContent.split("");
  title.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join("");
});

document.querySelectorAll(".prc-ttl").forEach(title => {
  gsap.from(title.querySelectorAll(".letter"), {
    y: 100,            
    opacity: 0,        
    stagger: 0.05,  
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: title,
      scroller: "#main",  
      start: "top 90%", 
      toggleActions: "play none none reverse"
    }
  });
});


gsap.to(".process-text", {
  opacity: 1,  
  x: 0,                   
  duration: 1,  
  delay: 0.8,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".work-process",
    start: "top 90%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  },
});

gsap.fromTo(".process-text ion-icon",{ rotate: -40}, {
  rotate: 0,                 
  duration: 0.2,  
  delay: 0.8,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".work-process",
    start: "top 90%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  },
  onComplete: () => {
     gsap.to(".process-text ion-icon", {
        rotate: -40,
        duration: 0.5,
        delay: 0.8,
        ease: "power2.inOut",
      });
  }
});


/////// ---- STAGES - SECTION - VIDEO - MOVE - GSAP --/////


document.querySelectorAll(".elem").forEach(function (elem) {
  const video = elem.querySelector("video");

  let mouseX = 0;
  let mouseY = 0;

  let currentX = 0;
  let currentY = 0;

  elem.addEventListener("mouseenter", () => {
    gsap.to(video, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  });

  elem.addEventListener("mouseleave", () => {
    gsap.to(video, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  });

  elem.addEventListener("mousemove", (e) => {
    const bounds = elem.getBoundingClientRect();
    mouseX = e.clientX - bounds.left;
    mouseY = e.clientY - bounds.top;
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    gsap.set(video, {
      x: currentX,
      y: currentY,
      rotation: (mouseX - currentX) * 0.2, 
      transformOrigin: "center",
    });

    requestAnimationFrame(animate);
  }

  animate();
});


gsap.utils.toArray(".elem .lf-sec").forEach((sec, i) => {
  gsap.from(sec, {
    x: -20,
    duration: 1,
    delay: i * 0.2, 
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".elem",
      start: "top 85%",  
      scroller: "#main",
      toggleActions: "play none none reverse", 
    },
  });
});


document.querySelectorAll(".elem").forEach((elem) => {
  let progressBar = elem.querySelector(".progress-bar");

  gsap.to(progressBar, {
    width: "100%",
    ease: "power3.out",
    duration: 2,
    scrollTrigger: {
      trigger: elem,
      start: "top 95%", 
     // end: "top 90%", 
      scroller: "#main",
      //scrub: true,
    }
  });
});

gsap.to(".progress-bar-bottom", {
    width: "100%",
    ease: "power3.out",
    duration: 2,
    delay: 0.8,
    scrollTrigger: {
      trigger: ".last-progress-trigger",
      start: "top 90%", 
     // end: "top 90%", 
      scroller: "#main",
      //scrub: true,
    }
  });




/////// ---- PHOTOGRAPHY - SECTION - AUDIO - TRIGGER --/////


const audioBtn = document.getElementById("audioBtn");
const jungleSound = document.getElementById("jungleSound");
const wavePath = document.getElementById("wave");
const photographySection = document.getElementById("photography-showcase");

let isPlaying = false;
let audioUnlocked = false;

const waves = [
  "M0 20 Q 10 10, 20 20 T 40 30 T 60 20 T 80 10 T 100 20 T 120 30",
  "M0 20 Q 10 30, 20 20 T 40 10 T 60 20 T 80 30 T 100 20 T 120 10", 
  "M0 20 Q 10 15, 20 25 T 40 15 T 60 25 T 80 15 T 100 25 T 120 15"  
];


let waveAnim = gsap.to(wavePath, {
  duration: 0.6,
  repeat: -1,
  yoyo: true,
  attr: { d: waves[0] },
  ease: "sine.inOut",
  onRepeat: () => {
    gsap.to(wavePath, { attr: { d: gsap.utils.random(waves) }, duration: 0.6 });
  }
});


function unlockAudio() {
  if (!audioUnlocked) {
    jungleSound.play().then(() => {
      jungleSound.pause();
      audioUnlocked = true;
    }).catch(err => console.log("Autoplay blocked:", err));
  }
}
window.addEventListener("click", unlockAudio);
window.addEventListener("scroll", unlockAudio);


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && audioUnlocked) {
      jungleSound.play();
      waveAnim.play();
    } else {
      jungleSound.pause();
      waveAnim.pause();
    }
  });
}, { threshold: 0.2 });


observer.observe(photographySection);

audioBtn.addEventListener("click", () => {
  if (!isPlaying) {
    jungleSound.muted = false;
    jungleSound.play();
    gsap.to(wavePath, { stroke: "#000000ff", duration: 0.3 });
    isPlaying = true;
  } else {
    jungleSound.muted = true;
    gsap.to(wavePath, { stroke: "#000000ff", duration: 0.3  });
    isPlaying = false;
  }
});


/////// ---- PHOTOGRAPHY - SECTION - TEXT - ANIMATION --/////


gsap.to(".showcase-header", {
  opacity: 1,  
  y: 0,                   
  duration: 1,  
  delay: 0.8,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".photography-showcase",
    start: "top 90%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  },
});


/////// ---- PHOTOGRAPHY - SCROLLER - ANIMATIONS --/////

/////// ---- TOP - SCROLLER --/////
 const track = document.querySelector(".images-move-top");
 const slides = Array.from(track.children);

 slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  track.appendChild(clone);
 });

 let pos = 0;
 let speed = -0.5; 
 let raf;
 let isDown = false;
 let startX = 0;
 let lastX = 0;
 let velocity = 0;

 function animate() {
  pos += speed;

  if (pos <= -track.scrollWidth / 2) pos = 0;
  if (pos > 0) pos = -track.scrollWidth / 2;

  track.style.transform = `translateX(${pos}px)`;
  raf = requestAnimationFrame(animate);

  speed *= 0.95;
  if (Math.abs(speed) < 0.05 && !isDown) speed = -0.5; 
}

 animate();

track.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.clientX;
  lastX = e.clientX;
  track.classList.add("active");
  cancelAnimationFrame(raf);
});

window.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  const dx = e.clientX - lastX;
  pos += dx;
  track.style.transform = `translateX(${pos}px)`;
  velocity = dx;
  lastX = e.clientX;
});

window.addEventListener("mouseup", () => {
  if (!isDown) return;
  isDown = false;
  track.classList.remove("active");

  speed = velocity;
  animate();
});

gsap.to(".showcase-img-scroller-top", {
  opacity: 1,                     
  duration: 1.5,  
  delay: 0.5,           
  ease: "power3.out",      
  scrollTrigger: {
    trigger: ".photography-showcase",
    start: "top 90%",
    scroller: "#main", 
     toggleActions: "play none none reverse",                
  },
});

/////// ---- BOTTOM - SCROLLER --/////

const trackRight = document.querySelector(".images-move-bottom");
const slidesRight = Array.from(trackRight.children);

slidesRight.forEach(slide => {
  const clone = slide.cloneNode(true);
  trackRight.appendChild(clone);
});

let scrollWidthRight = trackRight.scrollWidth / 2;
let posRight = -scrollWidthRight;
let speedRight = 0.5; 
let rafRight;
let isDownRight = false;
let lastXRight = 0;
let velocityRight = 0;

function updateScrollWidth() {
  scrollWidthRight = trackRight.scrollWidth / 2;
  posRight = -scrollWidthRight;
}

window.addEventListener("resize", () => {
  updateScrollWidth();
});

function animateRight() {
  posRight += speedRight;

  if (posRight >= 0) posRight = -scrollWidthRight;
  if (posRight <= -scrollWidthRight) posRight = 0;

  trackRight.style.transform = `translateX(${posRight}px)`;
  rafRight = requestAnimationFrame(animateRight);

  speedRight *= 0.95;
  if (Math.abs(speedRight) < 0.05 && !isDownRight) speedRight = 0.5; 
}

animateRight();

trackRight.addEventListener("mousedown", (e) => {
  isDownRight = true;
  lastXRight = e.clientX;
  trackRight.classList.add("active");
  cancelAnimationFrame(rafRight);
});

window.addEventListener("mousemove", (e) => {
  if (!isDownRight) return;
  const dx = e.clientX - lastXRight;
  posRight += dx;
  trackRight.style.transform = `translateX(${posRight}px)`;
  velocityRight = dx;
  lastXRight = e.clientX;
});

window.addEventListener("mouseup", () => {
  if (!isDownRight) return;
  isDownRight = false;
  trackRight.classList.remove("active");

  speedRight = velocityRight;
  animateRight();
});
gsap.to(".showcase-img-scroller-bottom", {
  opacity: 1,                     
  duration: 1.5,  
  delay: 0.5,           
  ease: "power3.out",      
  scrollTrigger: {
    trigger: ".photography-showcase",
    start: "top 90%",
    scroller: "#main", 
     toggleActions: "play none none reverse",                
  },
});

/////// ---- FOOTER - ANIMATIONS --/////

gsap.registerPlugin(ScrollTrigger);

function splitToLetters(selector) {
  document.querySelectorAll(selector).forEach(el => {
    let letters = el.textContent.split("");
    el.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join("");
  });
}

splitToLetters(".btm-ttl");
splitToLetters(".btm-symbol");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".bottom-title",
    scroller: "#main",
    start: "top 80%",
    end: "bottom 40%",
    toggleActions: "play reverse play reverse"
  }
});

tl.from(".btm-ttl .letter", {
  y: 100,
  opacity: 0,
  stagger: 0.05,
  duration: 1,
  ease: "power3.out"
})


.from(".btm-symbol .letter", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: -0.8,
  ease: "power3.out"
}); 


gsap.to(".bottom-text", {
  opacity: 1,  
  x: 0,                   
  duration: 1,  
  delay: 0.8,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  },
});

gsap.to(".final-section", {
  opacity: 1,  
  y: 0,               
  duration: 1,  
  delay: 1,           
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".footer",
    start: "top 95%",
    scroller: "#main",                
    toggleActions: "play none none reverse", 
  },
});


//////---- SCROLL - REVEAL - GSAP ---///////////


gsap.utils.toArray("[data-set]").forEach((section) => {

   gsap.set(section, {
    opacity:0,
    y:40
   });

   gsap.to(section, {
     opacity:1,
     y:0,
     duration:2,
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

document.querySelectorAll("a, button, .hover-btn").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("opacity");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("opacity");
  });
});

//////---- BACK - TO - TOP ---///////////

// Back to top click handler
document.querySelectorAll('.back-to-top').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        locoScroll.scrollTo('#home'); // ID of your top section
    });
});



//////---- BACK - END ---///////////


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#message-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    };

    try {
      const res = await fetch("http://localhost:3000/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("☺️ Thanks ! Message sent successfully!");
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("⚠️ Server error. Please try again.");
    }
  });
});
