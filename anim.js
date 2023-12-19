let tache= document.querySelector('.bloc-container')

window.addEventListener('load',()=>{
    TweenMax.staggerFrom(tache, 2, {scale: 0.5, opacity: 0, delay:0.5, ease:Elastic.easeOut}, 0.3)
})