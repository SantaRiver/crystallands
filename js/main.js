AOS.init();

$(function () {



  $('.filter__item-drop').on('click', function () {
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

  $('.gameplay-sublist__item.health').on('click', function () {
    $('.modal-dialog.dialog-health').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.hunger').on('click', function () {
    $('.modal-dialog.dialog-hunger').addClass('modal-dialog--visible');
  });
  
  $('.gameplay-sublist__item.energy').on('click', function () {
    $('.modal-dialog.dialog-energy').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.ownership').on('click', function () {
    $('.modal-dialog.dialog-ownership').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.rent').on('click', function () {
    $('.modal-dialog.dialog-rent').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.workshop').on('click', function () {
    $('.modal-dialog.dialog-workshop').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.farm').on('click', function () {
    $('.modal-dialog.dialog-farm').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.foundry').on('click', function () {
    $('.modal-dialog.dialog-foundry').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.corral').on('click', function () {
    $('.modal-dialog.dialog-corral').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.forge').on('click', function () {
    $('.modal-dialog.dialog-forge').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.inworkshop').on('click', function () {
    $('.modal-dialog.dialog-in-workshop').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.infoundry').on('click', function () {
    $('.modal-dialog.dialog-in-foundry').addClass('modal-dialog--visible');
  });
  $('.gameplay-sublist__item.ingarden').on('click', function () {
    $('.modal-dialog.dialog-in-garden').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.incorral').on('click', function () {
    $('.modal-dialog.dialog-in-corral').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.forest2').on('click', function () {
    $('.modal-dialog.dialog-hunt-forest').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.mine2').on('click', function () {
    $('.modal-dialog.dialog-hunt-mine').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.mine').on('click', function () {
    $('.modal-dialog.dialog-work-mine').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.forest').on('click', function () {
    $('.modal-dialog.dialog-work-forest').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.marker').on('click', function () {
    $('.modal-dialog.dialog-external-marker').addClass('modal-dialog--visible');
  });

  $('.gameplay-sublist__item.market').on('click', function () {
    $('.modal-dialog.dialog-game-market').addClass('modal-dialog--visible');
  });

  $('.modal-close').on('click', function () {
    $('.modal-dialog').removeClass('modal-dialog--visible');
  });


  $(document).keydown(function (event) {
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

