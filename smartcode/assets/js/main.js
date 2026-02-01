/* ===========================
   MOBILE NAVIGATION TOGGLE
=========================== */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

/* ===========================
   THEME TOGGLE (Dark / Light)
=========================== */
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("theme-dark");
    body.classList.toggle("theme-light");
  });
}

/* ===========================
   CONTACT FORM HANDLER
=========================== */
const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simulate sending message
    contactStatus.textContent = "Message sent successfully!";
    contactStatus.style.color = "#22c55e";

    // Clear form
    contactForm.reset();

    // Hide message after 3 seconds
    setTimeout(() => {
      contactStatus.textContent = "";
    }, 3000);
  });
}

/* ===========================
   SMOOTH SCROLL (Optional)
=========================== */
const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
/* =========================================
   Premium Mouse-Tracking 3D Tilt Effect
   ========================================= */

const cards = document.querySelectorAll('.course-card, .project-card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * -6;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
      scale(1.02)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `
      perspective(900px)
      rotateX(0)
      rotateY(0)
      translateY(0)
      scale(1)
    `;
  });
});
/*emailjs.init("BTJ_g1XgbA7I7X-zt");

emailjs.sendForm(
  "service_ab123",
  "template_xy789",
  this
)*/
/* ===========================
   SMARTCODE SUBSCRIPTION
=========================== */

document.addEventListener("DOMContentLoaded", () => {

  const forms = document.querySelectorAll(".smartcode-subscribe-form");

  if (!forms.length) return;

  forms.forEach(form => {
    form.addEventListener("submit", async e => {
      e.preventDefault();

      const emailInput = form.querySelector(".subscriber-email");
      if (!emailInput) return;

      const email = emailInput.value;

      const popup = document.getElementById("subscribePopup");
      const title = document.getElementById("popupTitle");
      const msg = document.getElementById("popupMsg");

      if (popup) popup.style.display = "flex";

      const SCRIPT_URL = "https://script.google.com/macros/s/XXXXXXXX/exec"; // 👈 YOUR URL
      const PHONE = "919999999999"; // 👈 YOUR WHATSAPP NUMBER

      let duplicate = false;

      try {
        const res = await fetch(SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            source: "SmartCode Website"
          })
        });

        const data = await res.json();
        duplicate = data.duplicate;

      } catch (err) {
        console.error("Subscription error:", err);
      }

      if (duplicate) {
        title.innerText = "⚠️ Already Subscribed";
        msg.innerText = "You are already subscribed. Opening WhatsApp…";
      } else {
        title.innerText = "✅ Subscription Successful";
        msg.innerText = "Opening WhatsApp to confirm…";
      }

      const whatsappMsg = encodeURIComponent(
`Hello SmartCode Team 👋

📩 Subscription Request

Email: ${email}

Please confirm the subscription.`
      );

      setTimeout(() => {
        window.open(`https://wa.me/${PHONE}?text=${whatsappMsg}`, "_blank");
        if (popup) popup.style.display = "none";
        form.reset();
      }, 1500);
    });
  });

});

