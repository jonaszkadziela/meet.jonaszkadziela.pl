$(document).ready(function()
{
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function()
  {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname)
    {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length)
      {
        $('html, body').animate({
          scrollTop: (target.offset().top - 80)
        }, "slow");
        return false;
      }
    }
  });

  $('body').scrollspy(
  {
    target: '.js-nav',
    offset: 80
  });

  function navbarCollapse()
  {
    if ($(".js-nav").offset().top > 100)
    {
      $(".js-nav").addClass("navbar-shrink");
    }
    else
    {
      $(".js-nav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);
});