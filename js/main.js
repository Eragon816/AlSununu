// -------------------------
// Start Of Elements Variables
// -------------------------
let langSelector = document.querySelector(".nav-container .lang");
let langList = document.querySelector(".lang-list");
let listIcon = document.querySelector(
  "header .container .nav-container .list-icon"
);
let navList = document.querySelector("header .container .nav-container .nav");
let cardBtn = document.querySelectorAll(".activity .card-button");
let pageLang = document.documentElement.lang;

// Landing Slider Elements
const textContainer = document.getElementById("landing-text-container");
const textElement = document.getElementById("landing-text");
const imageContainer = document.getElementById("landing-image-container");
const imageElement = document.getElementById("landing-image");

// -------------------------
// Language Selector Toggle
// -------------------------
langSelector.addEventListener("click", () => {
  langList.classList.toggle("visible");
  langSelector.classList.toggle("shadow");
  langList.style.display = langList.classList.contains("visible")
    ? "block"
    : "none";
});

// -------------------------
// Burger Icon Toggle
// -------------------------
listIcon.addEventListener("click", () => {
  navList.classList.toggle("list-visible");
  listIcon.classList.toggle("shadow");
  navList.style.display = navList.classList.contains("list-visible")
    ? "flex"
    : "none";
});

// -------------------------
// Close menus on scroll
// -------------------------
let lastScrollY = window.scrollY;
document.addEventListener("scroll", () => {
  let currentScrollY = window.scrollY;

  if (langList.classList.contains("visible")) {
    langList.classList.remove("visible");
    langSelector.classList.remove("shadow");
    langList.style.display = "none";
  }

  if (navList.classList.contains("list-visible")) {
    if (currentScrollY > lastScrollY) {
      navList.classList.remove("list-visible");
      listIcon.classList.remove("shadow");
      navList.style.display = "none";
    }
  }

  lastScrollY = currentScrollY;
});

// -------------------------
// Activity Card Toggle
// -------------------------
cardBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let activityCont = e.currentTarget.closest(".activity");
    let activityInfo = activityCont.querySelector(".activity-info");
    let closeBtn = activityCont.querySelector(".btn");
    activityInfo.classList.toggle("visible");
    activityInfo.style.opacity = "1";
    closeBtn.onclick = () => {
      activityInfo.classList.remove("visible");
      activityInfo.style.opacity = "0";
    };
  });
});

// -------------------------
// Swiper Setup
// -------------------------
if (document.querySelector(".swiper")) {
  new Swiper(".swiper", {
    speed: 500,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  });
}

// -------------------------
// Landing Slider Setup
// -------------------------
const texts =
  pageLang === "de"
    ? [
        "Der Al-Sununu Verein engagiert sich für Jugendliche mit Migrationshintergrund und unterstützt sie dabei, ihre Talente zu entfalten, ihre kulturellen Wurzeln zu stärken und neue Perspektiven zu entdecken.",
        "Wir fördern den Zusammenhalt zwischen Jugendlichen verschiedener Kulturen und schaffen Räume für Austausch und gegenseitiges Verständnis.",
        "Unsere Angebote unterstützen junge Menschen dabei, ihre kreativen Fähigkeiten zu entdecken und weiterzuentwickeln.",
        "Wir begleiten Jugendliche auf ihrem Bildungsweg und öffnen Türen für neue Chancen und Perspektiven.",
      ]
    : [
        "تلتزم جمعية السنونو بدعم الشباب من ذوي الخلفيات المهاجرة،ومساعدتهم على تنمية مواهبهم، وتعزيز جذورهم الثقافية،واكتشاف آفاق جديدة.",
        "تعزيز الترابط بين الشباب من مختلف الثقافات",
        "تدعم برامجنا الشباب في اكتشاف قدراتهم الإبداعية وتطويرها.",
        "نرافق الشباب في مسيرتهم التعليمية ونفتح لهم أبوابًا لفرص وآفاق جديدة.",
      ];

const images = [
  "../content/images/aboutus-landing.png",
  "../content/images/activities-landing.png",
  "../content/images/erasmus1.png",
  "../content/images/erasmus2.png",
];

let currentIndex = 0;

// -------------------------
// Landing Slider Function
// -------------------------
function slideChange() {
  if (!textContainer || !imageContainer) return;

  const nextIndex = (currentIndex + 1) % texts.length;

  if (pageLang === "ar") {
    // Slide-Out alte Elemente
    textContainer.classList.add("slide-out-left");
    imageContainer.classList.add("slide-out-left");

    setTimeout(() => {
      // Inhalt wechseln
      textElement.textContent = texts[nextIndex];
      imageElement.src = images[nextIndex];

      // Slide-In neue Elemente
      textContainer.classList.remove("slide-out-left");
      imageContainer.classList.remove("slide-out-left");
      textContainer.classList.add("slide-in-right");
      imageContainer.classList.add("slide-in-right");

      // Nach Animation wieder entfernen
      setTimeout(() => {
        textContainer.classList.remove("slide-in-right");
        imageContainer.classList.remove("slide-in-right");
      }, 800);

      currentIndex = nextIndex;
    }, 800);
  } else {
    // LTR Version
    textContainer.classList.add("slide-out-right");
    imageContainer.classList.add("slide-out-right");

    setTimeout(() => {
      textElement.textContent = texts[nextIndex];
      imageElement.src = images[nextIndex];

      textContainer.classList.remove("slide-out-right");
      imageContainer.classList.remove("slide-out-right");
      textContainer.classList.add("slide-in-left");
      imageContainer.classList.add("slide-in-left");

      setTimeout(() => {
        textContainer.classList.remove("slide-in-left");
        imageContainer.classList.remove("slide-in-left");
      }, 800);

      currentIndex = nextIndex;
    }, 800);
  }
}

// -------------------------
// Start Slider
// -------------------------
if (textContainer && imageContainer) {
  setInterval(slideChange, 6000);
}
