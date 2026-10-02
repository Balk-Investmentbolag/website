// Balk Investmentbolag - the website's one script: a gold play button on the
// film. The page is complete without it; the film then has the browser's own
// controls from the start.

(function setUpFilm() {
  const video = document.querySelector(".film video");
  const playButton = document.querySelector(".film-play");
  if (!video || !playButton) return;

  // The gold button stands in for the browser's controls until the film starts.
  video.controls = false;
  playButton.hidden = false;

  playButton.addEventListener("click", () => {
    video.controls = true;
    video.play().catch(() => {
      // Refused or unplayable: the browser's own controls are there to try again.
    });
  });

  video.addEventListener("play", () => {
    video.controls = true;
    playButton.hidden = true;
  });
})();
