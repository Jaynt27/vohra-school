/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;
        let count = 0;

        const updateCounter = () => {

            const increment = target / 100;

            if(count < target){

                count += increment;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

const statSection = document.querySelector(".stats");

const statObserver = new IntersectionObserver(entries => {

    if(entries[0].isIntersecting){

        startCounter();
        statObserver.disconnect();

    }

});

if(statSection){
    statObserver.observe(statSection);
}

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section, .stat-card, .facility-card, .contact-card, .testimonial"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el => {

    el.classList.add("hidden");
    revealObserver.observe(el);

});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(3,8,20,0.95)";
        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.25)";

    }else{

        navbar.style.background =
        "rgba(7,27,58,.45)";

        navbar.style.boxShadow = "none";

    }

});

/* =========================
   TESTIMONIAL SLIDER
========================= */

const testimonials =
document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function showTestimonial(index){

    testimonials.forEach(item => {

        item.style.display = "none";

    });

    testimonials[index].style.display = "block";

}

if(testimonials.length){

    showTestimonial(0);

    setInterval(() => {

        testimonialIndex++;

        if(testimonialIndex >= testimonials.length){

            testimonialIndex = 0;

        }

        showTestimonial(testimonialIndex);

    },5000);

}

/* =========================
   ADMISSION MODAL
========================= */

const modal =
document.getElementById("modal");

const openBtn =
document.getElementById("openModal");

const closeBtn =
document.querySelector(".close");

if(openBtn){

    openBtn.addEventListener("click", () => {

        modal.style.display = "block";

    });

}

if(closeBtn){

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });

}

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        const img =
        document.createElement("img");

        img.src = image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(
            lightbox.firstChild
            );

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

/* =========================
   MOBILE MENU
========================= */

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-active");

    });

}

/* =========================
   FLOATING PARTICLES
========================= */

const particles =
document.getElementById("particles");

for(let i=0;i<40;i++){

    const particle =
    document.createElement("span");

    const size =
    Math.random()*8 + 3;

    particle.style.width =
    size + "px";

    particle.style.height =
    size + "px";

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.top =
    Math.random()*100 + "%";

    particle.style.position =
    "absolute";

    particle.style.borderRadius =
    "50%";

    particle.style.background =
    "rgba(255,255,255,.2)";

    particle.style.animation =
    `particleMove ${
        Math.random()*10+8
    }s linear infinite`;

    particles.appendChild(particle);

}

/* =========================
   HERO PARALLAX
========================= */

const hero =
document.querySelector(".hero");

window.addEventListener("mousemove", e => {

    const x =
    (window.innerWidth/2 - e.pageX)/30;

    const y =
    (window.innerHeight/2 - e.pageY)/30;

    const shapes =
    document.querySelectorAll(".floating-shape");

    shapes.forEach(shape => {

        shape.style.transform =
        `translate(${x}px,${y}px)`;

    });

});

/* =========================
   SMOOTH LINKS
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target =
    document.querySelector(
        this.getAttribute("href")
    );

    if(target){

        target.scrollIntoView({
            behavior:"smooth"
        });

    }

});

});

/* =========================
   PAGE LOADER EFFECT
========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
        "opacity 1s ease";

        document.body.style.opacity = "1";

    },100);

});