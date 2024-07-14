const cursor = document.querySelector(".cursor");
const hoverItems = document.querySelectorAll(".hover-item");
const smallCursor = document.querySelectorAll(".small");
const darkModeToggle = document.querySelector(".tgl");
const header = document.querySelector(".header"); 

const menuIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header div nav a");

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((items) => {
    items.forEach(item => {
        if (!item.isIntersecting)
            return;
        if (item.target.classList.contains("fade-up")) {
            item.target.classList.add("visible-up");
            console.log(item.target);
        }
        else if (item.target.classList.contains("fade-right")) {
            item.target.classList.add("visible-right");
        }
        else if (item.target.classList.contains("fade-left")) {
            item.target.classList.add("visible-left");
        }
        else if (item.target.classList.contains("fade-in")) {
            item.target.classList.add("visible-in");
        }
    })
})

hiddenElements.forEach((element) => {observer.observe(element)});
// header.classList.remove("visible-down");
document.addEventListener('DOMContentLoaded', (event) => {
    const text = baffle(".data");
    text.set({
        characters: '░▒░ ░██░> @#$%^&*()_+[]{}<>?|~`!▓ >█> ░/█>█ █░ ░/░▒',
        speed: 69
    });

    text.start();
    text.reveal(2000);
});
window.onload = () => header.classList.add("visible-down");
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

// const darkModeToggle = document.getElementById("darkModeToggle");

// Function to apply the selected theme
function applyTheme(theme) {
    if (theme === "dark") {
        document.documentElement.style.setProperty("--main-color", "var(--main-color-dark)");
        document.documentElement.style.setProperty("--bg-color", "var(--bg-color-dark)");
        document.documentElement.style.setProperty("--text-color", "var(--text-color-dark)");
        document.documentElement.style.setProperty("--secondary-bg-color", "var(--secondary-bg-color-dark)");
        darkModeToggle.checked = true; // Update toggle state
    } else {
        document.documentElement.style.setProperty("--main-color", "var(--main-color-light)");
        document.documentElement.style.setProperty("--bg-color", "var(--bg-color-light)");
        document.documentElement.style.setProperty("--text-color", "var(--text-color-light)");
        document.documentElement.style.setProperty("--secondary-bg-color", "var(--secondary-bg-color-light)");
        darkModeToggle.checked = false; // Update toggle state
    }
}

// Event listener for toggle change
darkModeToggle.addEventListener("change", function () {
    if (this.checked) {
        applyTheme("dark");
        localStorage.setItem("theme", "dark"); // Save theme preference to localStorage
    } else {
        applyTheme("light");
        localStorage.setItem("theme", "light"); // Save theme preference to localStorage
    }
});

// On page load, check localStorage for theme preference and apply it
document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        applyTheme(savedTheme);
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

// Download CV
document.querySelector('.hire').addEventListener('click', function() {
    // Path to the file
    const filePath = 'assets/Gursimran Singh\'s CV.pdf';

    // Create a link element
    const a = document.createElement('a');
    a.href = filePath;
    a.download = 'Gursimran Singh\'s CV.pdf'; // File name
    a.click();
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

