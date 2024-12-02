"use strict";

/*$(document).ready(function () {
  $('body').on({
    mousemove: function (e) {
      console.clear();
      let clientX = e.originalEvent.clientX;
      let clientY = e.originalEvent.clientY;
      $('#cursor').css({
        left: clientX - 40 + 'px',
        top: clientY - 40 + 'px',
      });
    },
  });

  $('.a').on({
    mouseover: function () {
      $('#cursor').addClass('mini');
    },
    mouseout: function () {
      $('#cursor').removeClass('mini');
    },
  });

  /* let headerPosition = $('.header').offset().top; */
/* $(window).scroll(function () { */
/*   let scrollValue = $(window).scrollTop(); */
/*   let bottom = $('.header').css('bottom'); */
/*   if (scrollValue > 0) { */
/*     $('.header').css('bottom', scrollValue + 'px'); */
/*   } else { */
/*     $('.header').css('bottom', scrollValue + '-5em'); */
/*   } */
/*   if (scrollValue > headerPosition) { */
/*     $('.header').addClass('sticky'); */
/*   } else { */
/*     $('.header').removeClass('sticky'); */
/*   } */
/* }); */
// });
