const drums = document.querySelectorAll(".s1 div");

drums.forEach(drum => {
  const audio = drum.querySelector("audio");

  drum.addEventListener("click", () => {
    playSound(audio, drum);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  drums.forEach((drum) => {
    const keys = drum.getAttribute("data-keys").split(",");

    if (keys.includes(key)) {
      const audio = drum.querySelector("audio");
      playSound(audio, drum);
    }
  });
});


function playSound(audio, drumElement) {
  audio.currentTime = 0; 
  audio.play();

  
  drumElement.classList.add("active-effect");

  setTimeout(() => {
    drumElement.classList.remove("active-effect");
  }, 150);
}
