const navbar = document.querySelector("nav")
const slideShow = document.getElementById("slide-show")

const slideShowOptions = {
    rootMargin: "-300px 0px 0px 0px"
  };
  
  const slideShowObserver = new IntersectionObserver(function(
    entries,
    slideShowObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    });
  },
  slideShowOptions);
  
  slideShowObserver.observe(slideShow);