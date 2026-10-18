
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("surpriseBtn");
  const surprise = document.getElementById("surprise");
  const counter = document.getElementById("counter");

  if (!button || !surprise) return;

  button.addEventListener("click", () => {
    surprise.classList.add("open");
    surprise.setAttribute("aria-hidden", "false");

    button.textContent = "💛 ¡Sorpresa!";
    button.disabled = true;

    if (counter) {
      const target = 6147;
      const duration = 1800;
      let start = null;

      function animate(timestamp) {
        if (start === null) start = timestamp;

        const progress = Math.min(
          (timestamp - start) / duration,
          1
        );

        counter.textContent = Math.floor(
          target * progress
        ).toLocaleString("es-AR");

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }

    setTimeout(() => {
      surprise.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 300);
  });
});
