window.addEventListener('scroll', () => {
  document.querySelectorAll('.gallery-item').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('active');
    }
  });
});
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const bg = card.style.backgroundImage;
    const imageUrl = bg.slice(5, -2); // remove url("...")

    modal.style.display = "block";
    modalImg.src = imageUrl;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};