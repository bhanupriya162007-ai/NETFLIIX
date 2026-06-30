// ===========================================
// NETFLIX INDIA CLONE
// SCRIPT.JS - PART 1
// ===========================================

// ================================
// NAVBAR COLOR CHANGE
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }

});

// ================================
// BACK TO TOP BUTTON
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ================================
// HAMBURGER MENU
// ================================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ================================
// SCROLL BUTTONS
// ================================

const sliders = document.querySelectorAll(".slider-container");

sliders.forEach(slider => {

    const movieRow = slider.querySelector(".movie-row");

    const leftBtn = slider.querySelector(".left");

    const rightBtn = slider.querySelector(".right");

    if (!movieRow || !leftBtn || !rightBtn) return;

    rightBtn.addEventListener("click", () => {

        movieRow.scrollBy({
            left: 600,
            behavior: "smooth"
        });

    });

    leftBtn.addEventListener("click", () => {

        movieRow.scrollBy({
            left: -600,
            behavior: "smooth"
        });

    });

});

// ================================
// FADE-IN ANIMATION
// ================================

const fadeElements = document.querySelectorAll(".movie-section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

fadeElements.forEach(section => {

    section.classList.add("fade");

    observer.observe(section);

});

// ================================
// BUTTON ANIMATION
// ================================

const buttons = document.querySelectorAll(".hero-buttons button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});
// ===========================================
// NETFLIX INDIA CLONE
// SCRIPT.JS - PART 2
// ===========================================

// Movie poster list (replace these with your own poster images)
const posters = [
    "https://picsum.photos/220/330?21",
    "https://picsum.photos/220/330?22",
    "https://picsum.photos/220/330?23",
    "https://picsum.photos/220/330?24",
    "https://picsum.photos/220/330?25",
    "https://picsum.photos/220/330?26",
    "https://picsum.photos/220/330?27",
    "https://picsum.photos/220/330?28",
    "https://picsum.photos/220/330?29",
    "https://picsum.photos/220/330?30"
];

const movieTitles = [
    "Shadow Hunt",
    "Lost Kingdom",
    "Night Escape",
    "The Last Hero",
    "Dark City",
    "Future World",
    "Silent Killer",
    "Red Horizon",
    "Mission Alpha",
    "Infinity"
];

// Generate movie cards
const repeatRows = document.querySelectorAll(".repeat");

repeatRows.forEach(row => {

    posters.forEach((poster, index) => {

        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
            <img src="${poster}" alt="${movieTitles[index]}">
        `;

        card.title = movieTitles[index];

        row.appendChild(card);

    });

});

// ===========================================
// CARD HOVER EFFECT
// ===========================================

document.addEventListener("mouseover", (e) => {

    const card = e.target.closest(".movie-card");

    if (!card) return;

    card.style.zIndex = "100";

});

document.addEventListener("mouseout", (e) => {

    const card = e.target.closest(".movie-card");

    if (!card) return;

    card.style.zIndex = "1";

});

// ===========================================
// KEYBOARD SLIDER CONTROL
// ===========================================

document.addEventListener("keydown", (e) => {

    const firstRow = document.querySelector(".movie-row");

    if (!firstRow) return;

    if (e.key === "ArrowRight") {

        firstRow.scrollBy({
            left: 400,
            behavior: "smooth"
        });

    }

    if (e.key === "ArrowLeft") {

        firstRow.scrollBy({
            left: -400,
            behavior: "smooth"
        });

    }

});

// ===========================================
// OPTIONAL AUTO SCROLL
// (Disabled by default)
// ===========================================

// Uncomment if you want auto-scroll

/*
setInterval(() => {

    document.querySelectorAll(".movie-row").forEach(row => {

        row.scrollBy({
            left: 250,
            behavior: "smooth"
        });

    });

}, 5000);
*/

// ===========================================
// HERO BUTTON ACTIONS
// ===========================================

const playBtn = document.querySelector(".play-btn");
const infoBtn = document.querySelector(".info-btn");

if (playBtn) {
    playBtn.addEventListener("click", () => {
        alert("▶ Play button clicked!");
    });
}

if (infoBtn) {
    infoBtn.addEventListener("click", () => {
        alert("ℹ More Info button clicked!");
    });
}

// ===========================================
// PAGE LOADED
// ===========================================

window.addEventListener("load", () => {

    console.log("Netflix India Clone Loaded Successfully!");

});