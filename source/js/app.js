$(document).ready(function() {
  // mobile menu
  $('.menu-button, ul a').click(function(){
    $('ul').toggleClass('show-menu');
    $('.menu-button').toggleClass('menu-open');
    $('.menu-button').toggleClass('menu-close');
  });


  //shows menu after scrolling
  $(document).scroll(function() {
    var y = $(this).scrollTop();

    if (y > 600) {
      $('.menu').removeClass('is-hidden').addClass('is-showing');
    } else {
      $('.menu').removeClass('is-showing').addClass('is-hidden');
    }
  });
});
