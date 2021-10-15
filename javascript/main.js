dinerHeader();
function dinerHeader() {
  document.getElementById("Dinner__logo").style.cssText = "font-size:36px; font-weight:700;"
  document.getElementById("Dinner__search").style.cssText = "right:25px; top:0px; bottom: 0px;"
  document.getElementById("Dinner__input").style.cssText = "height: 45px; padding: 10px 50px 10px 20px; border: 1px solid white;"
  document.getElementById("close__menu").style.cssText = "width: 45px;height: 45px;position: absolute;right: 40px;top: 40px;overflow: hidden;border: none;     display: flex;align-items: center;justify-content: center; background: #ff6600; color:white; border-radius: 8px;"
}

const moon = document.getElementById("change__theme__moon");
const sun = document.getElementById("change__theme__sun");
moon.addEventListener('click', function () {
  sun.style.visibility = "visible";
  moon.style.visibility = "hidden";
  document.getElementById("dinerAbout").className = "Diner__about";
  document.getElementById("dinerNew").className = "Diner__new";
  document.getElementById("deliCountup").className = "deli__countup";
  document.getElementById("deliVideo").className = "deli__video";
  document.getElementById("dinerPost").className = "Diner__post";
  document.getElementById("testDark").className = "Diner__testimonial";
  document.getElementById("dinerFooter").className = "Diner__footer";
  document.getElementById("Dinner__input").style.cssText = "height: 45px; padding: 10px 50px 10px 20px; border: 1px solid white;"
})
sun.addEventListener('click', function () {
  moon.style.visibility = "visible";
  sun.style.visibility = "hidden";
  document.getElementById("dinerAbout").className = "Diner__about__dark";
  document.getElementById("dinerNew").className = "Diner__new__dark";
  document.getElementById("deliCountup").className = "deli__countup__dark";
  document.getElementById("deliVideo").className = "deli__video__dark";
  document.getElementById("dinerPost").className = "Diner__post__dark";
  document.getElementById("testDark").className = "Diner__testimonial__dark";
  document.getElementById("dinerFooter").className = "Diner__footer__dark";
  document.getElementById("Dinner__input").style.cssText = "height: 45px; padding: 10px 50px 10px 20px; border: 1px solid #232220; color: #c2d0da; background-color: #232220;"
})

// function openNav() {
//     document.getElementById("Diner__menu").style.display = "block";
//     document.getElementById("Diner__menu").classList.remove("container");
// }

// function closeNav() {
//     document.getElementById("Diner__menu").style.display = "none";
// }

const button = document.getElementById("Dinner__bars");
const closeBtn = document.getElementById("close__menu");
const overlay = document.getElementById("Diner__menu");

button.addEventListener('click', function () {
  overlay.classList.add('overlay-show');
})

closeBtn.addEventListener('click', function () {
  overlay.classList.remove('overlay-show');
})

$('.counter').countUp({
  'time': 2000,
  'delay': 10
});

// JS SLICK
$(document).ready(function () {
  $('.testimonial__content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
});

// MODAL JS
$(document).ready(function () {
  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
  });
  $('#myModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  $('#myModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc);
  })
});