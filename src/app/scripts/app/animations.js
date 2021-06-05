/**
 * Animations are last to make sure other effects or movement happen first as height calculations can affect this
 */


//this is the most basic animation example, but please make more specific ones per module and remove this one.
//https://animejs.com/documentation/
const animationOnScroll = (component) => {
  anime({
    targets: component,
    opacity: [0, 1],
    translateY: [100, 0],
    easing: 'easeOutQuad',
    delay: anime.stagger(100)
  });
}


const components = document.querySelectorAll('body')[0].childNodes[1].children;

//console.dir(components);
/*components.forEach(component=>{
  console.log(component)
})*/