$(document).ready(function() {
    $(document).on('click', '.menu-link', function() {
      $toggle = $('.navbar-toggler');

      if (materialKit.misc.navbar_menu_visible == 1) {
        $('html').removeClass('nav-open');
        materialKit.misc.navbar_menu_visible = 0;
        $('#bodyClick').remove();
        setTimeout(function() {
          $toggle.removeClass('toggled');
        }, 550);

        $('html').removeClass('nav-open-absolute');
      } else {
        setTimeout(function() {
          $toggle.addClass('toggled');
        }, 580);


        div = '<div id="bodyClick"></div>';
        $(div).appendTo("body").click(function() {
          $('html').removeClass('nav-open');

          if ($('nav').hasClass('navbar-absolute')) {
            $('html').removeClass('nav-open-absolute');
          }
          materialKit.misc.navbar_menu_visible = 0;
          $('#bodyClick').remove();
          setTimeout(function() {
            $toggle.removeClass('toggled');
          }, 550);
        });

        if ($('nav').hasClass('navbar-absolute')) {
          $('html').addClass('nav-open-absolute');
        }

        $('html').addClass('nav-open');
        materialKit.misc.navbar_menu_visible = 1;
      }
  });
});
