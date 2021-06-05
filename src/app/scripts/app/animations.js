/**
 * Animations are last to make sure other effects or movement happen first as height calculations can affect this
 */


//this is the most basic animation example, but please make more specific ones per module and remove this one.
//https://animejs.com/documentation/
const animation = (component) => {

  component.waypoint = new Waypoint({
    element: component,
    handler: function (direction) {
      console.log('trigger');
      anime({
        targets: component,
        opacity: [0, 1],
        translateY: [100, 0],
        easing: 'easeOutQuad',
        delay: anime.stagger(100)
      });
      this.destroy();
    },
    offset: "90%",
  });
}
