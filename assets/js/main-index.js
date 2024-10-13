const form = document.getElementById("myForm");
const result = document.getElementById("result");
const scriptURL = "https://script.google.com/macros/s/AKfycbz04ecIYaOzzkqkB8idypPrZ9HmW9SaIOLJGe5yJbXRW0_xUlvpYSz0rwwJCxhlxpPK/exec"; // Replace with your Web app URL

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission
  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(new FormData(form))),
    headers: {
      "Content-Type": "application/json", // Send JSON
    },
  })
    .then((response) => {
      console.log("Response:", response); // Log response details
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Log HTTP errors
      }
      return response.json(); // Parse the response as JSON
    })
    .then((data) => {
      console.log("Response data:", data); // Log the response data
      if (data.result === "success") {
        result.innerHTML =
          '<p class="text-success">Form submitted successfully!</p>'; // Show success message
        form.reset(); // Reset the form fields
      } else {
        result.innerHTML = `<p class="text-danger">${data.message}</p>`; // Show specific error message
      }
    })
    .catch((error) => {
      console.error("Error!", error.message); // Log error messages to console
      result.innerHTML = `<p class="text-danger">There was an error submitting the form: ${error.message}</p>`; // Show error message
    });
});

function animateProgress() {
  const progressBars = document.querySelectorAll(".circular-progress");
  progressBars.forEach((bar) => {
    const value = bar.querySelector(".progress-value");
    const percentage = parseInt(value.textContent);
    let progress = 0;
    const timer = setInterval(() => {
      progress += 1;
      value.textContent = `${progress}%`;
      bar.style.background = `conic-gradient(var(--color-secondary) ${
        progress * 3.6
      }deg, #e0e0e0 0deg)`;
      if (progress >= percentage) {
        clearInterval(timer);
      }
    }, 20);
  });
}

// Run animation when the skills section is in view
const skillsSection = document.querySelector("#skills");
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateProgress();
    observer.unobserve(skillsSection);
  }
});
observer.observe(skillsSection);
$(window).on("scroll", function () {
  $("section").each(function () {
    var top_of_element = $(this).offset().top;
    var bottom_of_element = top_of_element + $(this).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    var top_of_screen = $(window).scrollTop();

    if (
      bottom_of_screen > top_of_element &&
      top_of_screen < bottom_of_element
    ) {
      $(this).addClass("visible");
    } else {
      $(this).removeClass("visible"); // Optional: remove class when not in view
    }
  });
});
particlesJS("particles-js", {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    shape: {
      type: "char",
      character: {
        value: ["{", "}", "<", ">", "[", "]", "0", "1", "o", "k"],
        font: "Verdana",
        style: "",
        weight: "400",
      },
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 16,
      random: true,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: true,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
});
const typed = new Typed("#typed", {
  strings: [
    "a Web Developer",
    "a Full Stack Developer",
    "a Problem Solver",
    "a Code Enthusiast",
    "a Tech Explorer",
    "a Creative Coder",
    "a JavaScript Ninja",
    "a Backend Engineer",
    "a Lifelong Learner",
  ],
  typeSpeed: 100,
  backSpeed: 150,
  backDelay: 2000,
  loop: true,
});
