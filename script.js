// THEME
function toggleTheme() {
    document.body.classList.toggle("light");
}

// MENU
function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

// TYPING
const text = "Welcome to My Portfolio...";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
    }
}

typeEffect();
tsParticles.load("particles-js", {
    background: {
        color: "transparent"
    },
    particles: {
        number: {
            value: 120
        },
        color: {
            value: ["#ffffff", "#38bdf8", "#a855f7"]
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.6
        },
        size: {
            value: { min: 1, max: 3 }
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            outModes: {
                default: "out"
            }
        }
    },

    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab"
            }
        },
        modes: {
            grab: {
                distance: 140,
                links: {
                    opacity: 0.5
                }
            }
        }
    }
});