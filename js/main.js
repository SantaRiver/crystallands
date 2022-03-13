AOS.init();
  
$(function () {

  

  $('.filter__item-drop').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(300);
  });


 $(".header-wrap__button").on('click', function () {
   $('.header-wrap').addClass('header-wrap--close');
   $('.header-wrapper').removeClass('header-wrapper--overflow');

 });

 $('.header-burger').on('click', function () {
   $('.header-wrap').toggleClass('header-wrap--close');
   $('.header-wrapper').addClass('header-wrapper--overflow');

 });

 $('.gameplay-button').on('click', function () {
   $('.gameplay-list__item').toggleClass('gameplay-list__item--visible');
   $('.gameplay-list').toggleClass('gameplay-list--visible');
   $('.gameplay-line').toggleClass('gameplay-line--visible');
   $('.gameplay-cursor').toggleClass('gameplay-cursor--hidden');



 });

 $('.needs').on('click', function () {
   $('.gameplay-sublist__needs').addClass('gameplay-sublist__needs--visible');
 });

 $('.trade').on('click', function () {
   $('.gameplay-sublist__trade').addClass('gameplay-sublist__trade--visible');
 });

 $('.work').on('click', function () {
   $('.gameplay-sublist__work').addClass('gameplay-sublist__work--visible');
 });

 $('.hunt').on('click', function () {
   $('.gameplay-sublist__hunt').addClass('gameplay-sublist__hunt--visible');
 });

 $('.craft').on('click', function () {
   $('.gameplay-sublist__craft').addClass('gameplay-sublist__craft--visible');
 });

 $('.building').on('click', function () {
   $('.gameplay-sublist__building').addClass('gameplay-sublist__building--visible');
 });

 $('.land').on('click', function () {
   $('.gameplay-sublist__land').addClass('gameplay-sublist__land--visible');
 });

  // $('.gameplay-list__item').hover(
  //   function() {
  //     $( this ).removeClass('class-name');
  //   }, function() {
  //     $( this ).addClass('class-name');
  //   }
  // );

  $('.gameplay-sublist__item').on('click', function(){
    $('.modal-dialog').addClass('modal-dialog--visible');
  });

  $('.modal-close').on('click', function(){
    $('.modal-dialog').removeClass('modal-dialog--visible');
  });

  
    $(document).keydown(function(event) {
        if (event.keyCode == 27) {
            event.preventDefault();
            $(".modal-dialog").removeClass("modal-dialog--visible");
        }
    });



  $(document).mouseup(function (e) {
    var container = $(".header-wrap");
    if (container.has(e.target).length === 0) {
      container.addClass("header-wrap--close");

    }
  });

  
});
   
  