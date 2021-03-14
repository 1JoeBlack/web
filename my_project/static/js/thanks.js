const thanks = document.querySelector('.jumbotron');

const tl = new TimelineMax();

tl.fromTo(thanks, 1.2,{opacity: 0, scale:0}, {opacity:1, scale:1, ease:Power2.easeInOut});