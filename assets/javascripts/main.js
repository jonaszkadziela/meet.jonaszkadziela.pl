/* --------------------------------
Main Function
-------------------------------- */

$(document).ready(function()
{
  typed();
  navbarCollapse();
  nicescroll();
  lightgallery($("#trips-gallery"), 1);

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click", linkTrigger);
  $(window).on("scroll", navbarCollapse);
  $(window).on("resize", nicescroll);

  $("body").scrollspy(
  {
    target: ".js-nav",
    offset: 80
  });
  $(".js-about-text").click(function()
  {
    objectSwapText($(".js-about-text"), "Pokaż więcej", "Pokaż mniej");
  });

  new ResizeSensor(jQuery('body'), function()
  { 
    $("html").getNiceScroll().resize();
  });
});

/* --------------------------------
Function Navbar Collapse
-------------------------------- */

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

/* --------------------------------
Function Link Trigger
-------------------------------- */

function linkTrigger()
{
  if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname)
  {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length)
    {
      $("html, body").animate(
      {
        scrollTop: (target.offset().top - (80 - 1))
      }, "slow");
      return false;
    }
  }
}

/* --------------------------------
Typed.js Setup
-------------------------------- */

function typed()
{
  var typedOptions = {
    strings: [
      "pasjonuję się informatyką!",
      "uwielbiam robotykę!",
      "kocham poznawać nowe technologie!"
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
  }
  new Typed(".js-intro", typedOptions);
}

/* --------------------------------
Nicescroll.js Setup
-------------------------------- */

function nicescroll()
{
  testExp = new RegExp("Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile", "i");
  if (jQuery().niceScroll)
  {
    if (!(testExp.test(navigator.userAgent)))
    {
      $("html").niceScroll
      ({
        scrollspeed: 40,
        mousescrollstep: 38,
        cursorwidth: 8,
        cursorborder: "1px solid #555",
        cursorborderradius: "10px",
        cursorcolor: '#111',
        cursoropacitymax: 0.5,
        touchemulate: true,
        preventmultitouchscrolling: false, 
        autohidemode: true
      });
    }
    else
    {
      $("html").getNiceScroll().remove();
    }
  }
}

/* --------------------------------
lightGallery.js Setup
-------------------------------- */

function lightgallery(handle, galleryID)
{
  handle.lightGallery({
    galleryId: galleryID,
    selector: "a",
    width: "1920px",
    height: "1080px",
    mode: "lg-slide",
    addClass: "fixed-size",
    counter: false,
    download: false,
    fullScreen: false,
    autoplay: false,
    share: false,
    thumbnail: false,
    autoplayControls: false,
    actualSize: false,
    speed: 500
  });
}

/* --------------------------------
Function Object Swap Text
-------------------------------- */

function objectSwapText(obj, text1, text2)
{
  obj.html() == text1 ? obj.html(text2) : obj.html(text1);
}