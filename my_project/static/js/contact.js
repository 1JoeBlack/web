const contact = document.querySelector('.jumbotron');

const tl = new TimelineMax();

// tl.fromTo(contact, 1, {opacity: 0}, {opacity: 1, ease:Power2.easeInOut})
tl.fromTo(contact, 1.2,{opacity: 0, scale:0}, {opacity:1, scale:1});

