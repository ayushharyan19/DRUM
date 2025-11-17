const drums = document.querySelectorAll(".s1 div");

drums.forEach(drum => {
  const audio = drum.querySelector("audio");

  drum.addEventListener("click", () => {
    playSound(audio, drum);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

 
  const keyMap = {
    "q": 0,
    "w": 1,
    "e": 2,
    "a": 3,
    "s": 4,
    "d": 5,
    "f": 6
  };

  const index = keyMap[key];
  if (index !== undefined) {
    const drum = drums[index];
    const audio = drum.querySelector("audio");
    playSound(audio, drum);
  }
});

// FUNCTION TO PLAY SOUND + ANIMATION
function playSound(audio, drumElement) {
  audio.currentTime = 0; // Restart audio
  audio.play();

  // Add animation
  drumElement.classList.add("active-effect");

  setTimeout(() => {
    drumElement.classList.remove("active-effect");
  }, 150);
}