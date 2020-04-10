const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Update nav anchors
let navBar = document.querySelector("nav");

let navAnchorOne = document.querySelectorAll("a")[0];
navAnchorOne.classList.add(siteContent["nav"]["nav-item-1"]);
navAnchorOne.textContent = siteContent["nav"]["nav-item-1"];

let navAnchorTwo = document.querySelectorAll("a")[1];
navAnchorTwo.classList.add(siteContent["nav"]["nav-item-2"]);
navAnchorTwo.textContent = siteContent["nav"]["nav-item-2"];

let navAnchorThree = document.querySelectorAll("a")[2];
navAnchorThree.classList.add(siteContent["nav"]["nav-item-3"]);
navAnchorThree.textContent = siteContent["nav"]["nav-item-3"];

let navAnchorFour = document.querySelectorAll("a")[3];
navAnchorFour.classList.add(siteContent["nav"]["nav-item-4"]);
navAnchorFour.textContent = siteContent["nav"]["nav-item-4"];

let navAnchorFive = document.querySelectorAll("a")[4];
navAnchorFive.classList.add(siteContent["nav"]["nav-item-5"]);
navAnchorFive.textContent = siteContent["nav"]["nav-item-5"];

let navAnchorSix = document.querySelectorAll("a")[5];
navAnchorSix.classList.add(siteContent["nav"]["nav-item-6"]);
navAnchorSix.textContent = siteContent["nav"]["nav-item-6"];

let navAnchorZero = document.createElement("a");
navAnchorZero.classList.add(siteContent["nav"]["nav-item-1"]);
navAnchorZero.textContent = "Apply";

let navAnchorSeven = document.createElement("a");
navAnchorSeven.classList.add(siteContent["nav"]["nav-item-6"]);
navAnchorSeven.textContent = "Resources";

navBar.prepend(navAnchorZero);
navBar.appendChild(navAnchorSeven);

//Render the cta section
let ctaHeader = document.querySelector("h1");
ctaHeader.textContent = siteContent["cta"]["h1"];
ctaHeader.style.display = "flex";

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//Set the main content
let featureH4 = document.querySelectorAll("h4")[0];
featureH4.textContent = siteContent["main-content"]["features-h4"];

let featureContent = document.querySelectorAll("p")[0];
featureContent.textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelectorAll("h4")[1];
aboutH4.textContent = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelectorAll("p")[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let servicesH4 = document.querySelectorAll("h4")[2];
servicesH4.textContent = siteContent["main-content"]["services-h4"];

let servicesContent = document.querySelectorAll("p")[2];
servicesContent.textContent = siteContent["main-content"]["services-content"];

let productH4 = document.querySelectorAll("h4")[3];
productH4.textContent = siteContent["main-content"]["product-h4"];

let productContent = document.querySelectorAll("p")[3];
productContent.textContent = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelectorAll("h4")[4];
visionH4.textContent = siteContent["main-content"]["vision-h4"];

let visionContent = document.querySelectorAll("p")[4];
visionContent.textContent = siteContent["main-content"]["vision-content"];

//Render contact
let contactHeader = document.querySelectorAll("h4")[5];
contactHeader.textContent = siteContent["contact"]["contact-h4"];

let contactAddress = document.querySelectorAll("p")[5];
contactAddress.textContent = siteContent["contact"]["address"];

let contactNumber = document.querySelectorAll("p")[6];
contactNumber.textContent = siteContent["contact"]["phone"];

let contactEmail = document.querySelectorAll("p")[7];
contactNumber.textContent = siteContent["contact"]["email"];

//Render footer
let footerCR = document.querySelectorAll("p")[8];
footerCR.textContent = siteContent["footer"]["copyright"];