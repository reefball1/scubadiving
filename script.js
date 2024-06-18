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
    const isHeaderScrolled = document.body.scrollTop > 75 || document.documentElement.scrollTop > 75;
    const isTransparentHeader = document.querySelectorAll("#transparent-header").length > 0;

    const spanColor = (isMenuOpen || isHeaderScrolled || !isTransparentHeader) ? "black" : "white";
    const textColor = (isMenuOpen || isHeaderScrolled || !isTransparentHeader) ? "black" : "white";

    hamburgerSpans.forEach(function(span) {
        span.style.backgroundColor = spanColor;
    });

    headerText.forEach(function(text) {
        text.style.color = textColor;
    });

    const header = document.querySelector("#header");
    if (isHeaderScrolled || isMenuOpen) {
        header.style.backgroundColor = "white";
    } else {
        header.style.backgroundColor = "transparent";
    }
}

document.getElementById('hamburger-icon').onclick = function() {
    toggleMenu();
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const header = document.getElementById("header");
    const hasScrolled = document.body.scrollTop > 75 || document.documentElement.scrollTop > 75;

    if (hasScrolled) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }

    updateHeaderStyles();
}

window.onload = function() {
    document.body.className += " loaded";
    updateHeaderStyles();
}
