(function ($) {
  "use strict";

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".navbar").addClass("sticky-top");
    } else {
      $(".navbar").removeClass("sticky-top");
    }
  });

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });
})(jQuery);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.dataset.animation;

        // Add the class to trigger the animation
        entry.target.classList.add(animationClass);

        // Only unobserve if it's not a continuous animation like 'float'
        if (animationClass !== "animate-float") {
          observer.unobserve(entry.target); // animate only once
        }
      }
    });
  },
  { threshold: 0.2 }
); // trigger when 20% visible

// Attach the observer to all elements with the data-animation attribute
document.querySelectorAll("[data-animation]").forEach((el) => {
  observer.observe(el);
});
