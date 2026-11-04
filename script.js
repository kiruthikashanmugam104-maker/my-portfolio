// MOBILE NAVIGATION MENU

function toggleMenu() {

```
const nav = document.getElementById("navLinks");

nav.classList.toggle("active");
```

}

// TYPING ANIMATION

const roles = [
"AI & ML Student",
"Aspiring Developer",
"Tech Enthusiast"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typingEffect() {

```
const typingElement = document.getElementById("typing");

const currentRole = roles[roleIndex];

if (!deleting) {

    typingElement.textContent =
        currentRole.substring(0, characterIndex + 1);

    characterIndex++;

    if (characterIndex === currentRole.length) {
        deleting = true;
        setTimeout(typingEffect, 1200);
        return;
    }

} else {

    typingElement.textContent =
        currentRole.substring(0, characterIndex - 1);

    characterIndex--;

    if (characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

}

setTimeout(typingEffect, deleting ? 50 : 100);
```

}

typingEffect();
