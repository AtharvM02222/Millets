
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#btnscroll").fadeIn();
      } else {
        $("#btnscroll").fadeOut();
      }
    });
    $("#btnscroll").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });
  