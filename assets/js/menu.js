$(document).ready(() => {
  $("#header .header-nav-button").click(() => {
    $("#header .header-nav.mobile").hasClass("active")
      ? $("#header .header-nav.mobile").removeClass("active")
      : $("#header .header-nav.mobile").addClass("active");
  });
});
