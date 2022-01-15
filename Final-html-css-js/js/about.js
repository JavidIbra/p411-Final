$(document).ready(function () {
    AOS.init();
  
    updateNav();
  
    $(window).scroll(function () {
      updateNav();
    });
  
    function updateNav() {
      if ($(window).scrollTop() > 30) {
        $(".navbar").addClass("scrolled");
      } else {
        $(".navbar").removeClass("scrolled");
      }
    }
  
    // $(document).on("click", ".work-button", function () {
    //   $(this).addClass("active");
    // });
  });
  