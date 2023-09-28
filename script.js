
gsap.from('nav img, h3, button',{
   y:-100,
   duration:1,
   stagger:.2,
   opacity:0
})

gsap.from('.mytxt h1',{
    y:100,
    duration:1,
    delay:1,
    stagger:.2,
    opacity:0
 })

gsap.from('.txt .img1',{
 
    duration:3,
    delay:1,
    stagger:.2,
    opacity:0,
 })
 gsap.from('.txt .img2',{
    duration:3,
    delay:1,
    stagger:.2,
    opacity:0
 })
 gsap.from('.mytxt span',{
    duration:3,
    rotate:180
 })

 gsap.from('.main3 img',{
    duration:3,
    delay:1,
    stagger:.2,
    opacity:0,
    y:100
 })

 gsap.to('p',{
    y:8,
    repeat:-1,
    delay:3,
    yoyo:true,
    stagger:1
 })

 gsap.to('.down',{
    y:8,
    repeat:-1,
    delay:3,
    yoyo:true,
    stagger:1
 })