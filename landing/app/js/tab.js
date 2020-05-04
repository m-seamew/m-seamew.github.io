$(document).ready(function () {
  $(".js-tabs__nav-silver").click(function () {

    if ($(".js-tabs__nav-silver").not("_active")) {
      $(".tabs__navigation-item._active").removeClass('_active');
      $(".js-tabs__nav-silver").addClass('_active');
    };


    $(".js-tabs__nav-silver").addClass('_active');

    $(".tabs__tab--silver").addClass('tabs__tab--position1');
    if ($(".tabs__tab--gold").is(".tabs__tab--position1")) {
      $(".tabs__tab--gold").addClass('tabs__tab--position2');
      $(".tabs__tab--gold").removeClass('tabs__tab--position1');

      if ($(".tabs__tab--silver").is(".tabs__tab--position2")) {
        $(".tabs__tab--silver").removeClass('tabs__tab--position2');
      }
      else {
        $(".tabs__tab--platinum").addClass('tabs__tab--position3');
        $(".tabs__tab--platinum").removeClass('tabs__tab--position2');
      }
      $(".tabs__tab--silver").removeClass('tabs__tab--position3');
    }

    if ($(".tabs__tab--platinum").is(".tabs__tab--position1")) {
      $(".tabs__tab--platinum").addClass('tabs__tab--position2');
      $(".tabs__tab--platinum").removeClass('tabs__tab--position1');

      if ($(".tabs__tab--silver").is(".tabs__tab--position2")) {
        $(".tabs__tab--silver").removeClass('tabs__tab--position2');
      }
      else {
        $(".tabs__tab--gold").addClass('tabs__tab--position3');
        $(".tabs__tab--gold").removeClass('tabs__tab--position2');
      }
      $(".tabs__tab--silver").removeClass('tabs__tab--position3');
    }
  });


  //platinum


  $(".js-tabs__nav-platinum").click(function () {
    if ($(".js-tabs__nav-platinum").not("_active")) {
      $(".tabs__navigation-item._active").removeClass('_active');

      $(".js-tabs__nav-platinum").addClass('_active');
    };

    $(".tabs__tab--platinum").addClass('tabs__tab--position1');
    if ($(".tabs__tab--gold").is(".tabs__tab--position1")) {
      $(".tabs__tab--gold").addClass('tabs__tab--position2');
      $(".tabs__tab--gold").removeClass('tabs__tab--position1');

      if ($(".tabs__tab--platinum").is(".tabs__tab--position2")) {
        $(".tabs__tab--platinum").removeClass('tabs__tab--position2');
      }
      else {
        $(".tabs__tab--silver").addClass('tabs__tab--position3');
        $(".tabs__tab--silver").removeClass('tabs__tab--position2');
      }
      $(".tabs__tab--platinum").removeClass('tabs__tab--position3');
    }

    if ($(".tabs__tab--silver").is(".tabs__tab--position1")) {
      $(".tabs__tab--silver").addClass('tabs__tab--position2');
      $(".tabs__tab--silver").removeClass('tabs__tab--position1');

      if ($(".tabs__tab--platinum").is(".tabs__tab--position2")) {
        $(".tabs__tab--platinum").removeClass('tabs__tab--position2');
      }
      else {
        $(".tabs__tab--gold").addClass('tabs__tab--position3');
        $(".tabs__tab--gold").removeClass('tabs__tab--position2');
      }
      $(".tabs__tab--platinum").removeClass('tabs__tab--position3');
    }
  });

  //gold

  $(".js-tabs__nav-gold").click(function () {
    if ($(".js-tabs__nav-gold").not("_active")) {
      $(".tabs__navigation-item._active").removeClass('_active');

      $(".js-tabs__nav-gold").addClass('_active');
    };

    $(".tabs__tab--gold").addClass('tabs__tab--position1');
    if ($(".tabs__tab--silver").is(".tabs__tab--position1")) {
      $(".tabs__tab--silver").addClass('tabs__tab--position2');
      $(".tabs__tab--silver").removeClass('tabs__tab--position1');

      if ($(".tabs__tab--gold").is(".tabs__tab--position2")) {
        $(".tabs__tab--gold").removeClass('tabs__tab--position2');
      }
      else {
        $(".tabs__tab--platinum").addClass('tabs__tab--position3');
        $(".tabs__tab--platinum").removeClass('tabs__tab--position2');
      }
      $(".tabs__tab--gold").removeClass('tabs__tab--position3');
    }

    if ($(".tabs__tab--platinum").is(".tabs__tab--position1")) {
      $(".tabs__tab--platinum").addClass('tabs__tab--position2');
      $(".tabs__tab--platinum").removeClass('tabs__tab--position1');

      if ($(".tabs__tab--gold").is(".tabs__tab--position2")) {
        $(".tabs__tab--gold").removeClass('tabs__tab--position2');
      }
      else {
        $(".tabs__tab--silver").addClass('tabs__tab--position3');
        $(".tabs__tab--silver").removeClass('tabs__tab--position2');
      }
      $(".tabs__tab--gold").removeClass('tabs__tab--position3');
    }
  });
});