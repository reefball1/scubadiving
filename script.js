document.addEventListener('DOMContentLoaded', function () {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector("#hamburger-icon");
    const header = document.querySelector("#header");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    header.classList.toggle("open");

    updateHeaderStyles();
  }

  function updateHeaderStyles() {
    const icon = document.querySelector("#hamburger-icon");
    const hamburgerSpans = document.querySelectorAll("#hamburger-icon span");
    const headerText = document.querySelectorAll(".website-title, .menu-links a");
    const isMenuOpen = icon.classList.contains('open');
    const isHeaderScrolled = document.body.scrollTop > 25 || document.documentElement.scrollTop > 25;
    const isTransparentHeader = document.querySelectorAll("#transparent-header").length > 0;

    const spanColor = (isMenuOpen || isHeaderScrolled || !isTransparentHeader) ? "black" : "white";
    const textColor = (isMenuOpen || isHeaderScrolled || !isTransparentHeader) ? "black" : "white";

    hamburgerSpans.forEach(function (span) {
      span.style.backgroundColor = spanColor;
    });

    headerText.forEach(function (text) {
      text.style.color = textColor;
    });

    const header = document.querySelector("#header");
    if (isHeaderScrolled || isMenuOpen) {
      header.style.backgroundColor = "white";
    } else {
      header.style.backgroundColor = "transparent";
    }
  }

  document.getElementById('hamburger-icon').onclick = function () {
    toggleMenu();
  }

  // Close hamburger menu when clicking on menu links
  const menuLinks = document.querySelectorAll('.menu-links a');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector("#hamburger-icon");
      const header = document.querySelector("#header");
      
      // Only close if menu is currently open
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        icon.classList.remove("open");
        header.classList.remove("open");
        updateHeaderStyles();
      }
    });
  });

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const header = document.getElementById("header");
    const hasScrolled = document.body.scrollTop > 25 || document.documentElement.scrollTop > 25;

    if (hasScrolled) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }

    updateHeaderStyles();
  }

  window.onload = function () {
    document.body.className += " loaded";
    updateHeaderStyles();
  }


  function linkToAccordion(accordionID) {
    const id = document.getElementById(accordionID)
    if (id != null) {
      id.onclick = function () {
        toggleAccordion(accordionID);
      }
    }
  }

  function toggleAccordion(buttonID) {
    const button = document.getElementById(buttonID);
    const content = button.nextElementSibling;
    const arrow = button.querySelector('.arrow');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      arrow.classList.remove('down');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      arrow.classList.add('down');
    }
  }

  linkToAccordion('mask-accordion')
  linkToAccordion('snorkel-accordion')
  linkToAccordion('fins-accordion')
  linkToAccordion('bag-accordion')
  linkToAccordion('wetsuit-accordion')
  linkToAccordion('dive-computer-accordion')

  window.addEventListener('resize', function() {
    const header = document.querySelector("#header");
    if (window.innerWidth >= 1200 && header.classList.contains('open')) {
      toggleMenu();
    }
  })

  let currentTestimonialIndex = 1;
  const totalTestimonials = 3;

  window.changeTestimonial = function(direction) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    cards[currentTestimonialIndex - 1].classList.remove('active');
    dots[currentTestimonialIndex - 1].classList.remove('active');
    
    currentTestimonialIndex += direction;
    
    if (currentTestimonialIndex > totalTestimonials) {
      currentTestimonialIndex = 1;
    } else if (currentTestimonialIndex < 1) {
      currentTestimonialIndex = totalTestimonials;
    }
    
    cards[currentTestimonialIndex - 1].classList.add('active');
    dots[currentTestimonialIndex - 1].classList.add('active');
  }

  window.currentTestimonial = function(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Set current index and add active class
    currentTestimonialIndex = index;
    cards[index - 1].classList.add('active');
    dots[index - 1].classList.add('active');
  }

  setInterval(() => {
    changeTestimonial(1);
  }, 25000);

})
