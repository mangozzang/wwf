new fullpage('#fullpage', {
  verticalCentered: false,
  scrollBar:true,
  anchors: ['anchor1', 'anchor2', 'anchor3'],
  menu: '#menu',
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$("nav > ul > li")
.mouseover(function(){$(this).find(".sub").stop().slideDown(300);})
.mouseout(function(){$(this).find(".sub").stop().slideUp(300);});