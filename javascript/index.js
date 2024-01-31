function toggleDisplay() {
  const navbar = $(".MNavbar");
  const isOpen = navbar.css("display") === "none";

  if (isOpen) {
    navbar.fadeIn();
    $(".OpenIcon").hide();
    $(".CloseIcon").show();
  } else {
    navbar.fadeOut();
    $(".OpenIcon").show();
    $(".CloseIcon").hide();
  }
}

$(document).ready(function () {
  console.log("loaded");
  $(".CloseIcon").hide();

  // Initially show or hide the menu based on screen width
  if (window.innerWidth > 767) {
    $(".MNavbar").show();
  } else {
    $(".MNavbar").hide();
  }

  // Toggle menu visibility on hamburger icon click
  $(".Hamburger").on("click", function () {
    toggleDisplay();
  });

  const slides = $(".slides");
  const slideCount = $(".slide").length;
  let currentIndex = 0;
  let intervalId;

  // Function to update slide based on index
  function updateSlide() {
    const slideWidth = $(".slide").width();
    slides.css("transform", `translateX(${-currentIndex * slideWidth}px)`);
    $(".slide").removeClass("active");
    $(".slide").eq(currentIndex).addClass("active");
  }

  // Function to move to next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlide();
  }

  // Function to move to previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlide();
  }

  // Click handlers for next and previous buttons
  $(".next").click(nextSlide);
  $(".prev").click(prevSlide);

  // Auto-scroll function every 3 seconds
  function startAutoScroll() {
    intervalId = setInterval(nextSlide, 3000); // Change 3000 to adjust auto-scroll speed (in milliseconds)
  }

  // Start auto-scroll on page load
  startAutoScroll();

  // Pause auto-scroll on hover
  $(".carousel").hover(
    function () {
      clearInterval(intervalId);
    },
    function () {
      startAutoScroll();
    }
  );

  $(".ReplayButton").click(function () {
    $(".Video").get(0).currentTime = 0;
    $(".Video").get(0).play();
    $(".ButtonContainer").hide();
  });

  $(".Video").on("ended", function () {
    $(".ButtonContainer").show();
  });

  $(".QuoteButton").click(function () {
    window.scrollTo(0, 0);
    // Add logic to navigate to the order page
  });

  function animateLogos() {
    $(".LogosWrapper").animate(
      { marginLeft: "-100%" },
      30000,
      "linear",
      function () {
        $(".LogosWrapper").css("marginLeft", "0");
        animateLogos();
      }
    );
  }

  function animateLogosMobile() {
    $(".LogosWrapper").animate(
      { marginLeft: "-100%" },
      10000,
      "linear",
      function () {
        $(".LogosWrapper").css("marginLeft", "0");
        animateLogosMobile();
      }
    );
  }

  if ($(window).width() <= 768) {
    animateLogosMobile();
  } else {
    animateLogos();
  }

  $("#tab2").hide();

  $("#tab1bt").click(function () {
    openTab($("#tab1"), $("#tab2"), $("#tab1bt"), $("#tab2bt"));
  });

  $("#tab2bt").click(function () {
    openTab($("#tab2"), $("#tab1"), $("#tab2bt"), $("#tab1bt"));
  });

  function openTab(activeTab, inactiveTab, activeBtn, inactiveBtn) {
    console.log(`click ${activeTab.attr("id")}`);
    inactiveBtn.removeClass("active");
    activeBtn.addClass("active");
    inactiveTab.hide();
    activeTab.show();
  }

  const tables = [
    $("#drill-hole-size"),
    $("#min-clearance"),
    $("#bga"),
    $("#min-anual"),
    $("#solder-mask"),
    $("#legend"),
    $("#board-outline"),
    $("#panalization"),
  ];

  tables.forEach((element) => {
    element.slideUp();
    const img = element.attr("id") + "-img";
    $(`#${img}`).toggleClass("rotator");
  });

  function toggleDataContainer(btnId, imgId, containerId) {
    const button = $(`#${btnId}`);
    const arrow = $(`#${imgId}`);
    const container = $(`#${containerId}`);

    container.slideToggle();
    arrow.toggleClass("rotator");

    // Close other containers and reset arrows except the current one
    // $(`[id^='pcb-Specifications']`).not(container).slideUp();
    // $(`[id^='arrow-img']`).not(arrow).removeClass("rotate");
  }

  // Click event for all buttons
  $("[id$='-bt']").click(function () {
    const btnId = $(this).attr("id");
    const imgId = btnId.replace("-bt", "-img");
    const containerId = btnId.replace("-bt", "");
    toggleDataContainer(btnId, imgId, containerId);
  });
});
