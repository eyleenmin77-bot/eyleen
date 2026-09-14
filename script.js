document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("photoModalImage");
  const close = () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); modalImg.src = ""; };
  document.querySelectorAll(".photo-thumb").forEach(btn => btn.addEventListener("click", () => {
    modalImg.src = btn.dataset.full;
    modalImg.alt = btn.querySelector("img").alt;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }));
  document.querySelector(".photo-modal-close")?.addEventListener("click", close);
  modal?.addEventListener("click", e => { if (e.target === modal) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
});
