/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

/* About Tabs */
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('qual_active')
    })
    target.classList.add('qual_active')

    tabs.forEach(tab =>{
      tab.classList.remove('qual_active')
    })
    tab.classList.add('qual_active')

  })
})

/* Skills Tabs */
const skillsContent = document.getElementsByClassName('skills_content'),
  skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
  let itemClass = this.parentNode.className
  console.log('toggleSkillsdfghjk')
  console.log(skillsContent)
  for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills_content skills_close'
  }
  if(itemClass === 'skills_content skills_close'){
    this.parentNode.className = 'skills_content skills_open'
  }
}

skillsHeader.forEach((el) =>{
  el.addEventListener('click', toggleSkills)
})






// Get the container element
var navContainer = document.getElementById("navbarSupportedContent");

// Get all buttons with class="btn" inside the container
var a = navContainer.getElementsByClassName("navbarlink");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}







// Typing Animation
var typed = new Typed(".typing", {
    strings: ["Data Science", "Machine Learning", "Deep Learning", "Artificial Intelligence", "Graphic Design"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})

// Typing Animation
var typed = new Typed(".typing1", {
  strings: ["Data Scientist", "Machine Learning Engineer", "Graphic Designer", "Blogger"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})

// Navigation
// element references
const header = document.querySelector(".header");
const spot = document.querySelector(".spot");

// handler
const handleScroll = (entries) => {
  const spotIsVisible = entries[0].isIntersecting;
  if (spotIsVisible) header.classList.remove("fixed-top");
  else header.classList.add("fixed-top");
};

// options
const options = {
  root: null, // null means that root element = browser viewport.
  rootMargin: "0px", // margin around the browser viewport.
  threshhold: 0, // see below what 0 means.
};

// initialize and start the observer.
const observer = new IntersectionObserver(handleScroll, options);
observer.observe(spot);

window.addEventListener("hashchange", function() { scrollBy(0, 0) });


var top1 = $('#home').offset().top;
var top2 = $('#about').offset().top;
var top3 = $('#skills').offset().top;
var top4 = $('#projects').offset().top;
var top5 = $('#contact').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
    $('#change').css('background-color', 'var(--background-color-2)');
    $('#nav-home').addClass("active")
    $('#nav-about').removeClass("active")
    $('#nav-skills').removeClass("active")
    $('#nav-projects').removeClass("active")
    $('#nav-contact').removeClass("active")

  }
  else if (scrollPos > top2 && scrollPos <= top3) {
    $('#change').css('background-color', 'var(--background-color)');
    $('#nav-about').addClass("active")
    $('#nav-home').removeClass("active")
    $('#nav-skills').removeClass("active")
    $('#nav-projects').removeClass("active")
    $('#nav-contact').removeClass("active")
}
  else if (scrollPos > top3 && scrollPos <= top4) {
      $('#change').css('background-color', 'var(--background-color-2)');
      $('#nav-skills').addClass("active")
      $('#nav-about').removeClass("active")
      $('#nav-home').removeClass("active")
      $('#nav-projects').removeClass("active")
      $('#nav-contact').removeClass("active")
  }
  else if (scrollPos > top4 && scrollPos <= top5) {
        $('#change').css('background-color', 'var(--background-color)');
        $('#nav-projects').addClass("active")
        $('#nav-about').removeClass("active")
        $('#nav-skills').removeClass("active")
        $('#nav-home').removeClass("active")
        $('#nav-contact').removeClass("active")
    }
  else if (scrollPos >= top5) {
    $('#change').css('background-color', 'var(--background-color-2)');
    $('#nav-contact').addClass("active")
    $('#nav-about').removeClass("active")
    $('#nav-skills').removeClass("active")
    $('#nav-projects').removeClass("active")
    $('#nav-home').removeClass("active")

  }
});

