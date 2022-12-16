// Img => alt
let imgs = document.querySelectorAll(`img`);

for (const img of imgs) {
  if (img.hasAttribute("alt")) {
    img.getAttribute("alt") === "" ? img.setAttribute("alt", "Picture") : "";
  } else img.setAttribute("alt", "Picture");
  img.setAttribute("decoding", "async");
}
// Start button top
const btnTop = document.querySelector(`#btnTop`);

onscroll = () =>
  window.scrollY >= 600
    ? (btnTop.style.display = `block`)
    : (btnTop.style.display = `none`);

btnTop.addEventListener(`click`, () =>
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
);
// End button top

// Start Header
// toggleMenu

document
  .querySelector(`header nav .toggle-menu`)
  .addEventListener(`click`, () => {
    [`mainMenu`, `menuAnimation`].map((e) =>
      document.querySelector(`.menu`).classList.toggle(e)
    );
    document.querySelector(`.mainLi`).classList.toggle(`menuAnimation`);
  });

// End Header

// Start Search

const mainSearch = document.querySelector(`#mainSearch`);
const searchForm = document.querySelector(`.searchForm`);
const searchInput = document.querySelector(`#search`);
const btnSearch = document.querySelector(`#btnSearch`);

mainSearch.addEventListener(`click`, function () {
  searchForm.style.display = `flex`;
});

document.addEventListener(`click`, function (element) {
  if (
    element.target != mainSearch &&
    element.target != searchInput &&
    element.target != btnSearch
  ) {
    searchForm.style.display = `none`;
  }
});

// End Search

// Start landing

const slides = document.querySelector(
  `.landing .landingContainer .landingSlides`
);
const count = document.querySelector(
  `.landing .landingContainer .landingSlides`
).children;

let slider = 0;

document.querySelector(`#slidesAngle`).addEventListener(`click`, (e) => {
  rightAngle(e.target);
  leftAngle(e.target);
  bullets(slider);
});

const rightAngle = (element) => {
  if (element === document.querySelector(`#leftAngle`)) {
    slider++;
    if (slider > count.length - 1) slider = 0;
    slides.style.cssText = `transform: translateX(-${slider * 100}%)`;
  }
};

const leftAngle = (element) => {
  if (element === document.querySelector(`#rightAngle`)) {
    slider--;
    if (slider < 0) slider = 2;
    slides.style.cssText = `transform: translateX(-${slider * 100}%)`;
  }
};

const bullets = (slider) => {
  document.querySelectorAll(`.landing .moveMenu li`).forEach((e, i) => {
    if (slider === i) e.classList.add("active");
    else e.classList.remove("active");
  });
};

// End landing

// Start Status

const cardContainer = document.querySelector(
  `.status .container .statusInfo1 .cardContainer`
);

const statusA = setInterval(() => statusInfo(), 3000);

const statusInfo = () => {
  slider++;
  if (slider > cardContainer.children.length - 1) slider = 0;
  cardContainer.style.cssText = `transform: translateX(-${slider * 100}%)`;
  statusBullets(slider);
};

const statusBullets = (slider) => {
  document
    .querySelectorAll(`.status .container .statusInfo1 .moveMenu li`)
    .forEach((e, i) => {
      if (slider === i) e.classList.add("active");
      else e.classList.remove("active");
    });
};

// End Status

// Start portfolio

let cards = [...document.querySelector(`#cardContainer`).children];

document.querySelector(`#portfolioMenu`).addEventListener(`click`, (e) => {
  if (e.target.textContent === "ALL") {
    cards.forEach((ele) => (ele.style.display = `block`));
  } else {
    cards.forEach((ele) => {
      ele.dataset.type !== e.target.textContent.toLowerCase()
        ? (ele.style.display = `none`)
        : (ele.style.display = `block`);
    });
  }
});

document.querySelector(`#more`).addEventListener(`click`, () => {
  cards.forEach((e) => {
    document.querySelector(
      `#cardContainer`
    ).innerHTML += `<div data-type="${e.dataset.type}" class="${e.className}">${e.innerHTML}</div>`;
  });
  cards = [...document.querySelector(`#cardContainer`).children];
});

// End portfolio
