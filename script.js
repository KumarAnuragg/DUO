function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x + 2 + "px"
  crsr.style.top = dets.y + 2 + "px"
})

var tl = gsap.timeline({
    
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        //markers: true,
        start:"top 27%",
        end:"top 0",
        scrub: 3
    }
})

tl.to(".page1 h1",{
    x: -100,

},"anim")

tl.to(".page1 h2", {
    x:100
},"anim")

tl.to(".page1 video",{
    width:"90%"
},"anim")

var tl2 = gsap.timeline({
    
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      //markers: true,
      start:"top -95%",
      end:"top -130%",
      scrub: 3
  }
})

tl2.to(".main",{
  backgroundColor: "#fff"
})

var tl3 = gsap.timeline({
    
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      //markers: true,
      start:"top -345%",
      end:"top -400%",
      scrub: 3
  }
})

tl3.to(".main",{
  backgroundColor: "#0F0D0D"
})


// var boxes = document.querySelectorAll("#box")
// boxes.forEach(function(elem){
//     elem.addEventListener("mouseenter", function(){
//       elem.style.backgroundColor= "red"  
//   })
//   elem.addEventListener("mouseleave", function(){
//     elem.style.backgroundColor= "transparent"  
// })
// })

var boxes = document.querySelectorAll("#box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
      var att = elem.getAttribute("data-image")
      crsr.style.width = "470px"
      crsr.style.height = "380px"
      crsr.style.borderRadius = "0"
      crsr.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave", function(){
    crsr.style.width = "20px"
    crsr.style.height = "20px"
    crsr.style.borderRadius = "50%"
    crsr.style.backgroundImage = "none"
})
})


var h4 = document.querySelectorAll('#nav a')
var purple = document.querySelector('#purple')
h4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
      purple.style.display = "block"
      purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave", function(){
      purple.style.display = "none"
      purple.style.opacity = "0"
    })
})

