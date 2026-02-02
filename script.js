document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("-dwBo9VZAI7dk6GTD");

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.textContent = "Sending...";
    status.style.color = "#475569";

    emailjs.send(
      "service_dcqzs69",
      "template_e8typ8o",
      {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      }
    ).then(() => {
      status.textContent = "Message sent successfully!";
      status.style.color = "green";
      form.reset();

      setTimeout(() => {
        status.textContent = "";
      }, 3000);

    }).catch(() => {
      status.textContent = "Failed to send message. Please try again.";
      status.style.color = "red";

      setTimeout(() => {
        status.textContent = "";
      }, 4000);
    });
  });

});
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove("active"));

          const activeLink = document.querySelector(
            `.nav-link[href="#${entry.target.id}"]`
          );

          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    {
      rootMargin: "-120px 0px -60% 0px",
      threshold: 0
    }
  );

  sections.forEach(section => observer.observe(section));
});
function forceDownload(e) {
  e.preventDefault();

  const link = document.createElement("a");
  link.href = "images/image.png";
  link.download = "Lakshay-Bhargav-Resume.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
