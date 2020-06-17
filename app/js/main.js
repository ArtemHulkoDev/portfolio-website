$(function (){

  window.onload = function () {
    setInterval(() => {
      document.body.classList.add('loaded__hiding');
      window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded__hiding');
      }, 1000);
    }, 2000);
  }

  var progress = document.getElementById('progressbar');
  var totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function(){
    var progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
  }

  $(".home").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });

  $(".about-me").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });

  $(".my-skills").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });

  $(".portfolio").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });

  $(".header__anchor").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });

  $(".contacts").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });

  $(".js-range-slider").ionRangeSlider({
    type: "single",
    skin: "round",
    min: 0,
    max: 100,
    grid: true,
    postfix: "%",
    from_fixed: true
  });
  
  $(window).scroll(function(){
    var docscroll=$(document).scrollTop();
    if(docscroll>$(window).height()){
      $('nav').addClass('fixed');
    }else{
      $('nav').removeClass('fixed');
    }
  });
  
  $('.nav-btn').on('click', function(){
    $('.nav__inner').slideToggle();
  });

  AOS.init({
    once: true,
    duration: 1000,
    delay: 300,
    offset: 0,
    anchorPlacement: 'bottom-bottom'
  });


});
