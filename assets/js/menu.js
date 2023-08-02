$(document).ready(() => {
  $("#header .header-nav-button").click(() => {
    $("#header .header-nav.mobile").hasClass("active")
      ? $("#header .header-nav.mobile").removeClass("active")
      : $("#header .header-nav.mobile").addClass("active");
  });

  $("#header .header-nav .header-button-container .search-button").click(() => {
    if (
      $("#header .header-nav .header-button-container .search-button").hasClass(
        "active"
      )
    ) {
      $(
        "#header .header-nav .header-button-container .search-button"
      ).removeClass("active");
      $("#header .header-content .header-nav").css("gap", "70px");
    } else {
      $("#header .header-nav .header-button-container .search-button").addClass(
        "active"
      );
      $("#header .header-content .header-nav").css("gap", "47px");
    }
  });
});
