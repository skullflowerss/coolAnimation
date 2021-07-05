let open = document.querySelector('.active');
let close = document.querySelector('.exit');
let tl = gsap.timeline();

tl.to('.overlay', {
    opacity: 1, x: 0, scale: 1, duration: .3, pointerEvents:'auto'
})

tl.to('.stagger', {x: 0, opacity: 1, stagger: .2}, "-=.3")
tl.pause()


open.addEventListener('click',()=>{
    tl.play();

})

close.addEventListener('click',()=>{
    tl.reverse();

})