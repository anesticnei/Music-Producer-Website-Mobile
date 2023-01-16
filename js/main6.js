let homeBtn = document.getElementById('home-btn');
let myMusicBtn = document.getElementById('my-music-btn');
let aboutMeBtn = document.getElementById('about-me-btn');
let contactMeBtn = document.getElementById('contact-me-btn');
let logo = document.getElementById('logo-btn');
// const homeBtn = document.getElementById('home-btn');
// const myMusicBtn = document.getElementById('my-music-btn');
// const aboutMeBtn = document.getElementById('about-me-btn');
// const contactMeBtn = document.getElementById('contact-me-btn');

logo.addEventListener("click", () => {

    document.getElementById('about-me-btn').classList.remove('button-active');
    document.getElementById('home-btn').classList.add('button-active');
    document.getElementById('my-music-btn').classList.remove('button-active');
    document.getElementById('contact-me-btn').classList.remove('button-active');
    
    // document.querySelector('html').style.backgroundImage = "url(/pictures/background-img.png)";
    document.querySelector('html').style.backgroundImage = "url(/pictures/music-img.png)";
    
    let home = document.getElementById('hero-wrapp');
    home.style.display = "block";
    
    let contact = document.getElementById('contact-me');
    contact.style.display = "none";
    
    let music = document.getElementById('my-music');
    music.style.display = "none";
    
    let about = document.getElementById('about-me');
    
    about.style.display = "none";
 });

    
    
    homeBtn.addEventListener("click", () => {
        
        document.getElementById('about-me-btn').classList.remove('button-active');
        document.getElementById('home-btn').classList.add('button-active');
        document.getElementById('my-music-btn').classList.remove('button-active');
        document.getElementById('contact-me-btn').classList.remove('button-active');
        

        document.querySelector('html').style.backgroundImage = "url(/pictures/music-img.png)";
        
        let home = document.getElementById('hero-wrapp');
        home.style.display = "block";
        
        let contact = document.getElementById('contact-me');
        contact.style.display = "none";
        
        let music = document.getElementById('my-music');
        music.style.display = "none";
        
        let about = document.getElementById('about-me');
        
        about.style.display = "none";
    });
    
myMusicBtn.addEventListener("click", () => {
    document.getElementById('about-me-btn').classList.remove('button-active');
    document.getElementById('home-btn').classList.remove('button-active');
    document.getElementById('my-music-btn').classList.add('button-active');
    document.getElementById('contact-me-btn').classList.remove('button-active');

    document.querySelector('html').style.backgroundImage = "url(/pictures/background-img.png)";

    let home = document.getElementById('hero-wrapp');
    home.style.display = "none";

    let contact = document.getElementById('contact-me');
    contact.style.display = "none";

    let music = document.getElementById('my-music');
    music.style.display = "block";






    let about = document.getElementById('about-me');
    about.style.display = "none";
});

aboutMeBtn.addEventListener("click", () => {
    document.getElementById('about-me-btn').classList.add('button-active');
    document.getElementById('home-btn').classList.remove('button-active');
    document.getElementById('my-music-btn').classList.remove('button-active');
    document.getElementById('contact-me-btn').classList.remove('button-active');

    document.querySelector('html').style.backgroundImage = "url(/pictures/about-me-img.png)";

    let home = document.getElementById('hero-wrapp');
    home.style.display = "none";

    let contact = document.getElementById('contact-me');
    contact.style.display = "none";

    let music = document.getElementById('my-music');
    music.style.display = "none";

    let about = document.getElementById('about-me');
    about.style.display = "block";
    
});

contactMeBtn.addEventListener("click", () => {
    document.getElementById('about-me-btn').classList.remove('button-active');
    document.getElementById('home-btn').classList.remove('button-active');
    document.getElementById('my-music-btn').classList.remove('button-active');
    document.getElementById('contact-me-btn').classList.add('button-active');

    document.querySelector('html').style.backgroundImage = "url(/pictures/contact-img.png)";

    let home = document.getElementById('hero-wrapp');
    home.style.display = "none";

    let contact = document.getElementById('contact-me');
    contact.style.display = "block";

    let music = document.getElementById('my-music');
    music.style.display = "none";

    let about = document.getElementById('about-me');
    about.style.display = "none";
});


const tiktokBtn = document.getElementById('icon-tiktok');
const instaBtn = document.getElementById('icon-instagram');
const ytbBtn = document.getElementById('icon-youtube');

tiktokBtn.addEventListener("click", () => {
    window.open('https://www.tiktok.com')
});

instaBtn.addEventListener("click", () => {
    window.open('https://www.instagram.com')
});

ytbBtn.addEventListener("click", () => {
    window.open('https://www.youtube.com/')
});


const listenBtn = document.getElementById('listen-btn');

listenBtn.addEventListener("click", () => {
    window.open('https://open.spotify.com/')
});


let swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });