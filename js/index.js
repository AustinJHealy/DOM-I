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
logo.setAttribute('src', siteContent["nav"]["img-src"]);


 
const navAnchors = Array.from(document.querySelectorAll("nav a"));
  
for (let i=0; i<navAnchors.length; i++) {
    navAnchors[i].textContent = siteContent.nav[`nav-item-${i+1}`]};

const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML =`DOM<br> Is<br> Awesome`;

const ctaButton = document.querySelector(`.cta-text button`);
ctaButton.textContent= "Get Started";

const ctaImg = document.getElementById(`cta-img`);
ctaImg.setAttribute(`src`, siteContent.cta[`img-src`]);

const mainTextContentHeaders = Array.from(document.querySelectorAll(`.text-content h4`));

const mainTextContent = Array.from(document.querySelectorAll(`.text-content p`));

mainTextContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
mainTextContent[0].textContent = siteContent["main-content"]["features-content"];

mainTextContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
mainTextContent[1].textContent = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById(`middle-img`);
middleImg.src = siteContent[`main-content`][`middle-img-src`];

mainTextContentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
mainTextContent[2].textContent = siteContent["main-content"]["services-content"];

mainTextContentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
mainTextContent[3].textContent = siteContent["main-content"]["product-content"];

mainTextContentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
mainTextContent[4].textContent = siteContent["main-content"]["vision-content"];

const contactHeader = document.querySelector(`.contact h4`);
contactHeader.textContent = siteContent[`contact`][`contact-h4`];





 





