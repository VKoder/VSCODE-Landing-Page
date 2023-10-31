// CURSOR - 1) csr ko grb kiya var ka use krke... 2) event listener lagaya ..
// 3) dets ye obj ka jisme cursor ki detail hoti hai....4) bas usko manipulate kiya
var csr = document.querySelector("#cursor");
var blur_csr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  csr.style.left = dets.x + "px";
  csr.style.top = dets.y + "px";
  blur_csr.style.left = dets.x - 250 + "px";
  blur_csr.style.top = dets.y - 250 + "px";
});

//CODE FOR MOUSE HOVER-------
var h4all = document.querySelectorAll("#nav h4"); //nav ke sare h4 select kiye
h4all.forEach(function (elem) {
  // jabbhi mouse kisi bhi h4 pe jayega change them
  elem.addEventListener("mouseenter", function () {
    csr.style.scale = 3;
    csr.style.border = "1px solid #fff";
    csr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    csr.style.scale = 1;
    csr.style.border = "0px solid #2615e1";
    csr.style.backgroundColor = "#2615e1";
  });
});
// SCROLL TRIGGER NAV KA BG
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "90px",
  duration: 0.01,
  //change this above properties of nav when scroller trigger nav
  scrollTrigger: {
    trigger: "#nav", // change nav
    scroller: "body",
    // markers:true,
    start: "top -10%", //jab scrolling yaha pochega
    end: "top -11%",
    scrub: 1, // mouse scroll smoothness
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

//SCROLL TRIGGER POP UP ABOUT SECTION
gsap.from("#about-us img,#about-us-in", {
  y: 80, //initially they will be 80px down from there actual position
  opacity: 0, // initially there opacity will be 0
  duration: 0.5,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 60%", //scroller yaha jayega to from ko start kro and end me jayega to end karo
    end: "top 55%",
    scrub: 1,
  },
  // it means when we start opacity will 0 and when end opacity will 1 with animation
});

//FOR CARDS
gsap.from(".card", {
  scale: 0.8,
  opacity: 1,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 58%",
    end: "top 55%",
    scrub: 1,
  },
});

gsap.to("#colon-1", {
  x: 130,
  y: 90,
  duration: 1,
  scrollTrigger: {
    trigger: "#colon-1",
    scroller: "body",
    start: "top 35%",
    end: "top 30%",
    scrub: 1,
  },
});
gsap.to("#colon-2", {
  x: -130,
  y: -90,
  duration: 1,
  scrollTrigger: {
    trigger: "#colon-1",
    scroller: "body",
    start: "top 35%",
    end: "top 30%",
    scrub: 1,
  },
});

gsap.from("#page4 h1", {
  y: 100,
  opacity: 0,
  duration: 0.1,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 120%",
    end: "top 119%",
    scrub: 1,
  },
});
document.getElementById("arrow").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.querySelector("#page2").scrollIntoView({
    behavior: "smooth",
  });
});
window.addEventListener('resize', function () {
    if (window.innerWidth <= 990 && window.innerWidth >=500) {
      alert('Please Open this in a Desktop Site for a good experience');
    }
  });