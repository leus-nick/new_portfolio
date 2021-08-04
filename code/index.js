// FILL HEADER ON SCROLL

window.addEventListener('scroll', function () {
  if (pageYOffset >= 50) {
    document.querySelector('nav').classList.add('filled');
  } else {
    document.querySelector('nav').classList.remove('filled');
  }
});

// OBSERVER TO START THE ANIMATION WHEN THE OBJECT IS IN THE VIEWPORT

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      entry.target.classList.add('circle__animation');
    }
  });
});

const skillList = document.querySelectorAll('.circle');
console.log(skillList);

skillList.forEach((skill) => {
  observer.observe(skill);
});

//
