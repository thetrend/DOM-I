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

// Get nav link texts to match
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(navLink => {
  navLink.textContent = 'say something'
});

// Update CTA h1
let h1 = document.querySelector('.cta-text > h1');
h1.textContent = siteContent.cta.h1;
// Update CTA button
let ctaButton = document.querySelector('.cta-text > button');
ctaButton.textContent = siteContent.cta.button;
// Update CTA image
let ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent.cta["img-src"];

// Update text-content h4s
let tcH4List = document.querySelectorAll('.text-content > h4');
tcH4List[0].textContent = siteContent["main-content"]["features-h4"];
tcH4List[1].textContent = siteContent["main-content"]["about-h4"];
tcH4List[2].textContent = siteContent["main-content"]["services-h4"];
tcH4List[3].textContent = siteContent["main-content"]["product-h4"];
tcH4List[4].textContent = siteContent["main-content"]["vision-h4"];

// Update middle-img
let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Update text-content p tags
let tcPList = document.querySelectorAll('.text-content > p');
tcPList[0].textContent = siteContent["main-content"]["features-content"];
tcPList[1].textContent = siteContent["main-content"]["about-content"];
tcPList[2].textContent = siteContent["main-content"]["services-content"];
tcPList[3].textContent = siteContent["main-content"]["product-content"];
tcPList[4].textContent = siteContent["main-content"]["vision-content"];

// Update Contact
let contactH4 = document.querySelector('.contact > h4');
contactH4.textContent = siteContent.contact["contact-h4"];
let contactPList = document.querySelectorAll('.contact > p');
contactPList[0].textContent = siteContent.contact.address;
contactPList[1].textContent = siteContent.contact.phone;
contactPList[2].textContent = siteContent.contact.email;