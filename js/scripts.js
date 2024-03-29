$(function() {

  "use strict";

  /*===============================================
    Preloader
  ===============================================*/
  $(window).load(function () {
    $("body").addClass("loaded");
  });

  /*===============================================
    Parallax
  ===============================================*/
  $(".parallax-section").parallax({
    speed : 0.3
  });

  /*===============================================
    Scroll Spy
  ===============================================*/
  $('body').scrollspy({ 
    target: '.menu', 
    offset: 50
  });

  /*===============================================
    Smooth Scrolling
  ===============================================*/
  var htmlBody = $("html,body");
  var windowWidth = $(window).width();

  $(document).ready(function(e) {
    $(".menu li a, .hire-background a").on("click", function(e) {
      if (windowWidth >= 768) {
        htmlBody.animate({scrollTop: $(this.hash).offset().top - 50}, 800, "easeInOutQuart");  
      }
      if (windowWidth <= 767) {
        htmlBody.animate({scrollTop: $(this.hash).offset().top - 0}, 800, "easeInOutQuart");
      }
      e.preventDefault();                                  
    });
  });

  /*===============================================
    Circular Progress bar
  ===============================================*/
  $(".dial").knob({
    'width': '100',
    'height': '100',
    'thickness': .03,
    'fgColor': 'rgb(255, 255, 255)',
    'bgColor': 'rgba(255, 255, 255, .0)',
    'inputColor': 'rgb(255, 255, 255)',
    'readOnly': true,
    'font': 'Open Sans',
    'fontWeight': "300",
      parse: function (v) {return parseInt(v, 10);},
      format: function (v) {return v + "%";}
  });

  /*===============================================
    Circular Progress bar Animate when visible
  ===============================================*/
  $(".dial").each(function () {
    var $this = $(this);
    var myVal = $this.data("number");
    $(".skill-bar").appear(function() {
      $({
        value: 0
      }).animate({
        value: myVal,
      }, {
        duration: 2000,
        easing: 'swing',
        step: function () {
          $this.val(Math.ceil(this.value)).trigger('change');
        }
      })
    },{accX: 0, accY: -10});
  });

  /*===============================================
    Contact Form
  ===============================================*/
  $("#contactform").on('submit',function(e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (name == '') {
      $("#name").css('border-color','rgba(255, 0, 0, 0.7)');
    }
    if (email == '') {
      $("#email").css('border-color','rgba(255, 0, 0, 0.7)');
    }
    if (message == '') {
      $("#message").css('border-color','rgba(255, 0, 0, 0.7)');
    }
    else {
      $.ajax({
        url:'contact_form.php',
        data:$(this).serialize(),
        type:'POST',
        success:function(data){
          $("#success").show().fadeIn(1000); //=== Show Success Message==
          $('#contactform').each(function(){
            this.reset();
          });
        },
        error:function(data){
          $("#error").show().fadeIn(1000); //===Show Error Message====
        }
      });
    }
    e.preventDefault(); //=== To Avoid Page Refresh and Fire the Event "Click"===
  });

  /*===============================================
    Magnific Popup
  ===============================================*/
  $('.lightbox-popup').magnificPopup({ 
    type:'inline',
    fixedContentPos: false,
    removalDelay: 100,
    closeBtnInside: true,
    preloader: false,
    mainClass: 'mfp-fade'
  });

  /*===============================================
    Counter
  ===============================================*/
  $(".facts-background [data-to]").each(function() {
    var $this = $(this);
    $this.appear(function() {
      $this.countTo({
        speed: 1500,
        onComplete: function() {
          if($this.data("append")) {
            $this.html($this.html() + $this.data("append"));
          }
        }
      });
    }, {accX: 0, accY: -10});
  });

  /*===============================================
    Owl Carousel
  ===============================================*/
  $("#portfolioSlider").owlCarousel({
    slideSpeed: 800,
    paginationSpeed: 800,
    rewindSpeed: 800,
    autoPlay: 5000, // 5 seconds
    loop: true,
    singleItem: true
  });

  $("#clientSlider").owlCarousel({
    items: 1,
    itemsDesktop: [1199,1],
    itemsDesktopSmall: [979,1],
    itemsTablet: [768,1],
    itemsMobile: [479,1],
    autoPlay: 3000, // 3 seconds
    loop: true,
    stopOnHover: true,
    pagination: true,
    slideSpeed: 400,
    paginationSpeed: 400,
    rewindSpeed: 800,
    rewindNav:false,
    singleItem: false
  });

  $("#clientSliderrep").owlCarousel({
    items: 1,
    itemsDesktop: [1199,1],
    itemsDesktopSmall: [979,1],
    itemsTablet: [768,1],
    itemsMobile: [479,1],
    autoPlay: 3000, // 3 seconds
    loop: true,
    stopOnHover: true,
    pagination: false,
    autoplayHoverPause:true
  })

  /*===============================================
    Toggle Menu
  ===============================================
  var menu = $(".menu");
  var toggleBtn = $(".toggle-btn");

  toggleBtn.on("click", function(e) {
    if (menu.hasClass("show-menu")) {
      menu.removeClass("show-menu");
    }
    else {
      menu.addClass("show-menu");
    }
    e.stopPropagation();
  });

  // Navicon transform into X //
  toggleBtn.on("click", function() {
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
    else {
      toggleBtn.addClass("toggle-close");
    }
  });

  // Close Menu
  if (windowWidth <= 767) {
    $(document).on("click", function() {
      if (menu.hasClass("show-menu")) {
        menu.removeClass("show-menu");
      }
      if (toggleBtn.hasClass("toggle-close")) {
        toggleBtn.removeClass("toggle-close");
      }
    });
  }

  /*===============================================
   Hover Text
  ===============================================*/


});