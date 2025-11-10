// Start Of Elements Variables
let langSelector = document.querySelector(".nav-container .lang");
let langList = document.querySelector(".lang-list");
let langOptions = document.querySelectorAll(".lang-list li");
let listIcon = document.querySelector(
  "header .container .nav-container .list-icon"
);
let navList = document.querySelector("header .container .nav-container .nav");
let contactBtn = document.querySelector("li.contact-button");
let pageLang = document.documentElement.lang;
let cardBtn = document.querySelectorAll(".activity .card-button");
let activityClose = document.querySelectorAll(".activity .activity-info .btn");
let contactForm = document.querySelector(".form");
let sendBtn = document.querySelector(".form button");
// End Of Elements Variables

// Function: Create Contact Form
function createContactForm(formlang) {
  let texts = {
    de: {
      name: "Vor-Nachname",
      city: "Stadt",
      email: "Email_Adresse",
      phone: "Handy_Nummer",
      message: "Deine Nachricht",
      send: "Nachrichten senden",
    },
    ar: {
      name: "الاسم",
      city: "المدينة",
      email: "الايميل",
      phone: "موبايل",
      message: "Deine Nachricht",
      send: "ارسال",
    },
  };

  let lang = texts[formlang] || texts.ar;
  let form = document.createElement("form");
  form.id = "contact";

  // Ensure the form posts to FormSubmit and uses POST
  form.action = "https://formsubmit.co/gehad3129@gmail.com";
  form.method = "POST";

  // Hidden fields: subject, captcha off, and _next redirect (will be updated if needed)
  let hiddenSubject = document.createElement("input");
  hiddenSubject.type = "hidden";
  hiddenSubject.name = "subject";
  hiddenSubject.value = "Neue Kontaktanfrage über die Webseite";
  form.appendChild(hiddenSubject);

  let hiddenCaptcha = document.createElement("input");
  hiddenCaptcha.type = "hidden";
  hiddenCaptcha.name = "_captcha";
  hiddenCaptcha.value = "false";
  form.appendChild(hiddenCaptcha);

  let hiddenNext = document.createElement("input");
  hiddenNext.type = "hidden";
  hiddenNext.name = "_next";
  // default to absolute if origin available, fallback to a relative path
  hiddenNext.value =
    (window.location.origin && window.location.origin !== "null"
      ? window.location.origin
      : window.location.href.replace(/\/[^/]*$/, "")) + "/pages/danke.html";
  form.appendChild(hiddenNext);

  const fields = [
    { id: "name", type: "text", label: lang.name },
    { id: "city", type: "text", label: lang.city },
    { id: "mail", type: "email", label: lang.email },
    { id: "phone", type: "tel", label: lang.phone },
  ];

  fields.forEach(({ id, type, label }) => {
    let cont = document.createElement("div");
    let labelEl = document.createElement("label");
    labelEl.setAttribute("for", id);
    labelEl.textContent = label;
    let input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = id; // IMPORTANT: set name so the field is sent
    input.placeholder = "";
    input.required = true;
    cont.appendChild(labelEl);
    cont.appendChild(input);
    form.appendChild(cont);
  });

  let msgCont = document.createElement("div");
  let msgLabel = document.createElement("label");
  msgLabel.setAttribute("for", "toughts");
  msgLabel.textContent = lang.message;
  let msgInput = document.createElement("textarea");
  msgInput.id = "toughts";
  msgInput.name = "message"; // IMPORTANT: set name for textarea
  msgInput.placeholder = "";
  msgInput.required = true;
  msgCont.appendChild(msgLabel);
  msgCont.appendChild(msgInput);
  form.appendChild(msgCont);

  let btn = document.createElement("button");
  btn.type = "submit"; // ensure it submits
  btn.textContent = lang.send;
  form.appendChild(btn);
  document.body.appendChild(form);
}

// Language Selector
langSelector.addEventListener("click", () => {
  langList.classList.toggle("visible");
  langSelector.classList.toggle("shadow");
  langList.style.display = langList.classList.contains("visible")
    ? "block"
    : "none";
});

// Burger Icon Toggle
listIcon.addEventListener("click", () => {
  navList.classList.toggle("list-visible");
  listIcon.classList.toggle("shadow");
  navList.style.display = navList.classList.contains("list-visible")
    ? "flex"
    : "none";
});

// Global Scroll Listener: close menus on scroll only if open
let lastScrollY = window.scrollY;
document.addEventListener("scroll", () => {
  let currentScrollY = window.scrollY;

  // Close language list if open
  if (langList.classList.contains("visible")) {
    langList.classList.remove("visible");
    langSelector.classList.remove("shadow");
    langList.style.display = "none";
  }

  // Close nav menu if open
  if (navList.classList.contains("list-visible")) {
    // Optional: nur bei Scroll nach unten ausblenden, sonst kannst du die nächste Zeile entfernen
    if (currentScrollY > lastScrollY) {
      navList.classList.remove("list-visible");
      listIcon.classList.remove("shadow");
      navList.style.display = "none";
    }
  }

  lastScrollY = currentScrollY;
});

// Activity Card Toggle
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

// Swiper Setup
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

// Landing Slider
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
        " تعزيز الترابط بين الشباب من مختلف الثقافات ",
        "تدعم برامجنا الشباب في اكتشاف قدراتهم الإبداعية وتطويرها.",
        "نرافق الشباب في مسيرتهم التعليمية ونفتح لهم أبوابًا لفرص وآفاق جديدة.",
      ];

const images = [
  "../content/images/aboutus-landing.png",
  "../content/images/erasmus-landing.jpeg",
  "../content/images/erasmus1.png",
  "../content/images/erasmus2.png",
];

let currentIndex = 0;
const textContainer = document.getElementById("landing-text-container");
const textElement = document.getElementById("landing-text");
const imageContainer = document.getElementById("landing-image-container");
const imageElement = document.getElementById("landing-image");

function slideChange() {
  textContainer.classList.add("slide-out-right");
  imageContainer.classList.add("slide-out-right");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    textElement.textContent = texts[currentIndex];
    imageElement.src = images[currentIndex];
    textContainer.classList.remove("slide-out-right");
    imageContainer.classList.remove("slide-out-right");
    textContainer.classList.add("slide-in-left");
    imageContainer.classList.add("slide-in-left");
  }, 800);

  setTimeout(() => {
    textContainer.classList.remove("slide-in-left");
    imageContainer.classList.remove("slide-in-left");
  }, 1600);
}
setInterval(slideChange, 6000);