document.addEventListener("DOMContentLoaded", () => {
  const boot = document.getElementById("boot");
  const bar = document.getElementById("progressBar");
  const percent = document.getElementById("progressPercent");
  const text = document.getElementById("progressText");
  if (boot && bar) {
    let value = 0;
    const timer = setInterval(() => {
      value += Math.floor(Math.random() * 13) + 7;
      if (value >= 100) value = 100;
      bar.style.width = value + "%";
      if (percent) percent.textContent = value + "%";
      if (text) text.textContent = value < 40 ? "Opening portfolio..." : value < 75 ? "Loading Eyleen's world..." : "Almost there ♡";
      if (value === 100) {
        clearInterval(timer);
        setTimeout(() => boot.classList.add("hidden"), 350);
      }
    }, 90);
  }

  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("photoModalImage");
  const close = () => { if (!modal) return; modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); if (modalImg) modalImg.src = ""; };
  document.querySelectorAll(".photo-thumb").forEach(btn => btn.addEventListener("click", () => {
    if (!modal || !modalImg) return;
    modalImg.src = btn.dataset.full;
    modalImg.alt = btn.querySelector("img").alt;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }));
  document.querySelector(".photo-modal-close")?.addEventListener("click", close);
  modal?.addEventListener("click", e => { if (e.target === modal) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
});
