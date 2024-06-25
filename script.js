const cursor = document.querySelector(".cursor");
const hoverItems = document.querySelectorAll(".hover-item");
const smallCursor = document.querySelectorAll(".small");
const darkModeToggle = document.querySelector(".tgl");
const header = document.querySelector(".header"); 

const menuIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header div nav a");

// interactive navbar

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header div nav a[href*=' + id + ' ]').classList.add('active');
            });
        }
    });
}


let updateMousePosition = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
}

window.addEventListener("mousemove", updateMousePosition);

hoverItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
    });
    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });
});

smallCursor.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        cursor.classList.add("small");
    });
    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("small");
    });
});

// Dark Mode Enable / Disable

darkModeToggle.addEventListener("change", function () {
    if (this.checked) {
        // Change to dark mode variables
        document.documentElement.style.setProperty(
            "--main-color",
            "var(--main-color-dark)"
        );
        document.documentElement.style.setProperty(
            "--bg-color",
            "var(--bg-color-dark)"
        );
        document.documentElement.style.setProperty(
            "--text-color",
            "var(--text-color-dark)"
        );
        document.documentElement.style.setProperty(
            "--secondary-bg-color",
            "var(--secondary-bg-color-dark)"
        );
    } else {
        // Change back to light mode variables
        document.documentElement.style.setProperty(
            "--main-color",
            "var(--main-color-light)"
        );
        document.documentElement.style.setProperty(
            "--bg-color",
            "var(--bg-color-light)"
        );
        document.documentElement.style.setProperty(
            "--text-color",
            "var(--text-color-light)"
        );
        document.documentElement.style.setProperty(
            "--secondary-bg-color",
            "var(--secondary-bg-color-light)"
        );
    }
});

window.addEventListener("scroll", (e) => {
    if (this.scrollY > 50) {
        header.style.setProperty("background-color", "rgba(0, 0, 0, 0.1");
        header.style.setProperty("backdrop-filter", "blur(6.9px)");
        header.style.setProperty("box-shadow", "0 0 25px var(--secondary-bg-color-dark)");
        header.style.setProperty("transform", "scale(1.01)");
    }
    else {
        header.style.setProperty("background-color", "rgba(0, 0, 0, 0.0")
        header.style.setProperty("backdrop-filter", "blur(0px)");
        header.style.setProperty("box-shadow", "none");
        header.style.setProperty("transform", "scale(1)");
    }
    
});

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// // Highlight active navigation item based on scroll position
// const sections = document.querySelectorAll('section');
// const navLinks = document.querySelectorAll('.navbar a');

// window.addEventListener('scroll', () => {
//     let current = '';

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (pageYOffset >= sectionTop - sectionHeight / 3) {
//             current = section.getAttribute('id');
//         }
//     });

//     navLinks.forEach(a => {
//         a.classList.remove('active');
//         if (a.href.includes(`#${current}`)) {
//             a.classList.add('active');
//         }
//     });
// });

