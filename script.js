const typedTextSpan = document.getElementById('typed-text');
const typedDescriptionSpan = document.getElementById('typed-description');
const textArray = ["Jiteshwar", "a Software Engineer"];
const descriptionArray = [
  "Welcome! I'm Jiteshwar, a dedicated and innovative software engineer specializing in frontend development, Python programming, and cybersecurity.",
  "My journey has taken me through a multitude of projects, from crafting sleek and user-friendly web applications to exploring the depths of cybersecurity. Let's connect and build something remarkable together!"
];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length; 
    type(); 
  }
}

document.addEventListener("DOMContentLoaded", function() {
  type();
});

setTimeout(typeDescription, 3000);

function typeDescription() {
  let descriptionIndex = 0;
  let descCharIndex = 0;
  typedDescriptionSpan.innerHTML = ""; 
  const typeDescriptionInterval = setInterval(function() {
    if (descCharIndex < descriptionArray[descriptionIndex].length) {
      typedDescriptionSpan.textContent += descriptionArray[descriptionIndex].charAt(descCharIndex);
      descCharIndex++;
    } else {
      clearInterval(typeDescriptionInterval);
    }
  }, 50);
}

const toggleSwitch = document.querySelector('#switch');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
  }
});


const toTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  if (pageYOffset > 75) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});