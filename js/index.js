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

let circleImg = document.getElementById("cta-img");
circleImg.setAttribute('src', siteContent["cta"]["img-src"])

let midImg = document.querySelector("#middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let aOne = document.querySelectorAll("a")[0];
aOne.textContent = siteContent["nav"]["nav-item-1"];

let aTwo = document.querySelectorAll("a")[1];
aTwo.textContent = siteContent["nav"]["nav-item-2"];

let aThree = document.querySelectorAll("a")[2];
aThree.textContent = siteContent["nav"]["nav-item-3"];

let aFour = document.querySelectorAll("a")[3];
aFour.textContent = siteContent["nav"]["nav-item-4"];

let aFive = document.querySelectorAll("a")[4];
aFive.textContent = siteContent["nav"]["nav-item-5"];

let aSix = document.querySelectorAll("a")[5];
aSix.textContent = siteContent["nav"]["nav-item-6"];

let newNavOne = document.createElement('a');
newNavOne.textContent = "Ideas";
aSix.appendChild(newNavOne);
newNavOne.style.marginLeft = '35%';

let newNavTwo = document.createElement('a');
newNavTwo.textContent = "Help";
aOne.prepend(newNavTwo);
newNavTwo.style.marginRight = '35%';

let DOM = document.querySelectorAll("h1")[0];
DOM.textContent = siteContent["cta"]["h1"];

let DOMButton = document.querySelectorAll("button")[0];
DOMButton.textContent = siteContent["cta"]["button"];

let featureHead = document.querySelectorAll('h4')[0];
featureHead.textContent = siteContent["main-content"]["features-h4"];

let featureContent = document.querySelectorAll('p')[0];
featureContent.textContent = siteContent["main-content"]["features-content"];

let aboutHead = document.querySelectorAll('h4')[1];
aboutHead.textContent = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelectorAll("p")[1];
aboutContent.textContent = siteContent["main-content"]['about-content'];

let serviceHead = document.querySelectorAll('h4')[2];
serviceHead.textContent = siteContent['main-content']['services-h4'];

let serviceContent = document.querySelectorAll('p')[2];
serviceContent.textContent = siteContent['main-content']['services-content'];

let productHead = document.querySelectorAll('h4')[3];
productHead.textContent = siteContent['main-content']['product-h4'];

let productContent = document.querySelectorAll('p')[3];
productContent.textContent = siteContent['main-content']['product-content'];

let visionHead = document.querySelectorAll('h4')[4];
visionHead.textContent = siteContent['main-content']['vision-h4'];

let visionContent = document.querySelectorAll('p')[4];
visionContent.textContent = siteContent['main-content']['vision-content'];

let contactHead = document.querySelectorAll('h4')[5];
contactHead.textContent = siteContent['contact']['contact-h4'];

let contactAdd = document.querySelectorAll('p')[5];
contactAdd.textContent = siteContent['contact']['address'];

let contactNum = document.querySelectorAll('p')[6];
contactNum.textContent = siteContent['contact']['phone'];

let contactMail = document.querySelectorAll('p')[7];
contactMail.textContent = siteContent['contact']['email'];

let footerContent = document.querySelectorAll('p')[8];
footerContent.textContent = siteContent['footer']['copyright'];

let navColor = document.querySelectorAll('a');
navColor.forEach(Colour => {Colour.style.color = 'green';})


let back = document.querySelector('body');
back.style.backgroundColor = 'alicewhite';
back.style.color = 'slategrey';

DOMButton.style.borderRadius = '10%';

footerContent.style.border = '1px dashed grey';
footerContent.style.padding = '2% 0% 2% 0%';

let navBack = document.querySelector('header');
navBack.style.backgroundColor = 'lightblue';

DOMButton.addEventListener('click', (bait) => {back.style.backgroundColor = 'black', back.style.color = 'orange', navBack.style.backgroundColor = 'silver';})

let newButton = document.createElement('button');

newButton.textContent = "HOLD UP!";
footerContent.appendChild(newButton);

newButton.addEventListener('click', (wait) => {back.style.backgroundColor = 'white', back.style.color = 'slategrey', navBack.style.backgroundColor = 'lightblue';})
