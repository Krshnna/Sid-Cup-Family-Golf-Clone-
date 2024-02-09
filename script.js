const cursor = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.3,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1.2,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -50%",
    end: "top -60%",
    scrub: 1.3,
  },
});

gsap.from("#about-us img, #about-us-in", {
  y: 90,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1.2,
  },
});

gsap.from(".card", {
  scale: 0.8,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1.4,
  },
});
gsap.from("#colon1", {
  x: -60,
  y: -60,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 70%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  x: 60,
  y: 60,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 60%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
    y : 80,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 95%",
        end: "top 55%",
        scrub: 2,
    }
})

const navh4 = document.querySelectorAll("#nav h4");

navh4.forEach((elem) => {
  elem.addEventListener("mouseenter", function () {
    cursor.style.scale = 2;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.border = "0 solid #95C11E";
    cursor.style.backgroundColor = "#95C11E";
  });
});
