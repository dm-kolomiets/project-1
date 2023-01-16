var _functions = {}, winWidth;

jQuery(function($) {
  ("use strict");

  /* function on page ready */
  var isTouchScreen =
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i);
  if (isTouchScreen) $("html").addClass("touch-screen");
  var winScr,
    winHeight,
    is_Mac = navigator.platform.toUpperCase().indexOf("MAC") >= 0,
    is_IE =
      /MSIE 9/i.test(navigator.userAgent) ||
      /rv:11.0/i.test(navigator.userAgent) ||
      /MSIE 10/i.test(navigator.userAgent) ||
      /Edge\/\d+/.test(navigator.userAgent),
    is_Chrome =
      navigator.userAgent.indexOf("Chrome") >= 0 &&
      navigator.userAgent.indexOf("Edge") < 0;

  /* check browser */
  winWidth = $(window).width();
  winHeight = $(window).height();

  if (is_Mac) {
    $("html").addClass("mac");
  }
  if (is_IE) {
    $("html").addClass("ie");
  }
  if (is_Chrome) {
    $("html").addClass("chrome");
  }

  /* page loader and etc */
  if ($(".select-box").length) {
    $(".SelectBox").each(function () {
      if ($(this).hasClass("search")) {
        $(".SelectBox.search").SumoSelect({ search: true, searchText: "" });
      } else {
        $(".SelectBox").SumoSelect();
      }
    });
  }

  //rellax
  setTimeout(function () {
    $("body").addClass("site-ready");
  }, 500);

  setTimeout(function () {
    if (!is_IE && $(".rellax").length && $(window).width() > 1199) {
      let rellax = new Rellax(".rellax");
    }
  }, 100);

  /* function on page scroll */
  $(window).scroll(function () {
    _functions.scrollCall();
  });

  _functions.scrollCall = function () {
    winScr = $(window).scrollTop();
    if (winScr > 10) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  };

  /*menu*/
  $(".mobile-button").on("click", function () {
    if (!$("body, html").find("header").hasClass("scrolled")) {
      $("body, html").find("header").addClass("scrolled");
    }
    $(this).toggleClass("active");
    $("html").toggleClass("overflow-menu");
    $(this).parents("header").toggleClass("open-menu");
  });

  //layer close
  $(".layer-close").on("click", function () {
    $("header").removeClass("open-menu");
  });

  // sub-menu
  $(document).on("click", ".menu-item-has-children", function () {
    if ($(window).width() < 1200) {
      $(this).toggleClass("open");
      $(this).find(".sub-menu").slideToggle();
    }
  });

  /* swiper sliders */
  _functions.getSwOptions = function (swiper) {
    var options = swiper.data("options");
    options = !options || typeof options !== "object" ? {} : options;
    var $p = swiper.closest(".swiper-entry"),
      slidesLength = swiper.find(">.swiper-wrapper>.swiper-slide").length;
    if (!options.pagination)
      options.pagination = {
        el: $p.find(".swiper-pagination")[0],
        clickable: true,
      };
    if (!options.navigation)
      options.navigation = {
        nextEl: $p.find(".swiper-button-next")[0],
        prevEl: $p.find(".swiper-button-prev")[0],
      };
    options.preloadImages = false;
    options.lazy = { loadPrevNext: true };
    options.observer = true;
    options.observeParents = true;
    options.watchOverflow = true;
    if (!options.speed) options.speed = 500;
    options.roundLengths = false;
    if (!options.centerInsufficientSlides)
      options.centerInsufficientSlides = false;
    if (slidesLength <= 1) {
      options.loop = false;
    }
    if (isTouchScreen) options.direction = "horizontal";

    if (options.customPagination) {
      options.pagination.renderBullet = function (index, className) {
        var slide = swiper.find(".swiper-slide").eq(index);
        if (slide.data("video")) className += " video";
        return (
          '<span class="' +
          className +
          ' custom" style="background-image: url(' +
          slide.data("preview") +
          ')"><span></span></span>'
        );
      };
    }

    if (options.progressbar) {
      options.pagination.type = "progressbar";
    }

    if (options.customFraction) {
      if (slidesLength > 10) {
        $p.addClass("custom-fraction");
        $p.closest(".section").find(".c-fraction-current").text("1");
        $p.closest(".section").find(".c-fraction-total").text(slidesLength);
      }
    }

    if (options.customNumber) {
      options.pagination.renderBullet = function (index, className) {
        return '<span class="' + className + '">0' + (index + 1) + "</span>";
      };
    }

    return options;
  };

  _functions.initSwiper = function (el) {
    var swiper = new Swiper(el[0], _functions.getSwOptions(el));
  };

  $(".swiper-entry .swiper-container").each(function () {
    _functions.initSwiper($(this));
  });

  $(".swiper-thumbs").each(function () {
    var top = $(this).find(".swiper-container.swiper-thumbs-top")[0].swiper,
      bottom = $(this).find(".swiper-container.swiper-thumbs-bottom")[0].swiper;
    top.thumbs.swiper = bottom;
    top.thumbs.init();
    top.thumbs.update();
  });

  //custom fraction
  $(".custom-fraction").each(function () {
    var $this = $(this),
      $thisSwiper = $this.find(".swiper-container")[0].swiper;

    $thisSwiper.on("slideChange", function () {
      $this
        .closest(".section")
        .find(".c-fraction-current")
        .text(function () {
          if ($thisSwiper.realIndex < 100) {
            return $thisSwiper.realIndex + 1;
          } else {
            return $thisSwiper.realIndex + 1;
          }
        });
    });
  });

  function pageScroll(current, headerHeight) {
    if ($(window).width() > 991) {
      $("html, body").animate({ scrollTop: current.offset().top - 90 }, 888);
    } else {
      $("html, body").animate({ scrollTop: current.offset().top - 59 }, 777);
    }
  }

  //scroll animation
  $(window).on("scroll load", function () {
    if (
      $(".animate-item").length &&
      (!isTouchScreen || $(window).width() >= 1200)
    ) {
      $(".animate-item")
        .not(".animated")
        .each(function () {
          var th = $(this);
          if (
            $(window).scrollTop() >=
            th.offset().top - $(window).height() * 1
          ) {
            th.addClass("animated");
          }
        });
    }
  });

  //anchor scroll
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 100,
            },
            1000
          );
          $(".mobile-button").removeClass("active");
          $("html").removeClass("overflow-menu");
          $("header").removeClass("open-menu");
          return false;
        }
      }
    });
  });

  //accordion
  $(document).on(
    "click",
    ".accordion:not(.employment-accord) .accordion-item .accordion-title",
    function () {
      var headerHeight = $("header").height(),
        current = $(this);
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").next().slideUp();
      } else {
        $(this)
          .closest(".accordion")
          .find(".accordion-title")
          .not(this)
          .removeClass("active")
          .next()
          .slideUp();
        $(this).addClass("active").next().slideDown();
      }
    }
  );

  // =============================
  // SUMOSELECT
  // =============================
  if ($(".SelectBox").length) {
    $(".SelectBox").each(function () {
      $(this).SumoSelect();
    });
  }

  /* inputs  */
  $(document).on("focus", ".input-field-wrapper .input", function () {
    $(this).closest(".input-field-wrapper").addClass("focus");
  });
  $(document).on("blur", ".input-field-wrapper .input", function () {
    $(this).closest(".input-field-wrapper").removeClass("focus");
  });
  $(document).on("keyup", ".input-field-wrapper .input", function () {
    if ($(this).val())
      $(this).closest(".input-field-wrapper").addClass("value");
    else $(this).closest(".input-field-wrapper").removeClass("value");
  });

  // Invalid Input
  $(document).on("blur", ".input-field-wrapper .input[required]", function () {
    if ($(this).val().trim()) {
      $(this).closest(".input-field-wrapper").removeClass("invalid");
    } else {
      $(this).closest(".input-field-wrapper").addClass("invalid");
    }
  });

  $(document).ready(function () {
    let $this = $(".input-field-wrapper .input");
    if ($this.val()) {
      $this.closest(".input-field-wrapper").addClass("value");
    }
  });

  // search
  $(document)
    .find("#search")
    .on("keyup", function () {
      $(this).closest(".search-form").addClass("active");
      if ($(this).val() === "") {
        $(this).closest(".search-form").removeClass("active");
      }
    });

  $(document)
    .find(".close-button")
    .on("click", function () {
      $(this).closest(".search-form").removeClass("active");
      $(this).closest(".input-search").find("#search").val("");
      $(this)
        .closest(".search-form")
        .find(".input-field-wrapper")
        .removeClass("value");
    });

  // visible blog filter
  $(document).on("click", ".open_filter", function (e) {
    e.preventDefault();
    $(this).closest(".left_blog").toggleClass("open");
    $(this).closest(".left_blog").find(".sidebar").slideToggle(555);

    if ($(".left_blog").hasClass("open")) {
      $(".left_blog .open_filter").text($(this).data("read-less"));
    } else {
      $(".left_blog .open_filter").text($(this).data("read-more"));
    }
  });

  // age popup
  $(document).on("click", "#no_age", function () {
    $(this).closest(".banner-content").find(".hidden_content").slideDown(555);
  });
});
