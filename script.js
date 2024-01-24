const musics = [
  "musics/clap.wav",
  "musics/hihat.wav",
  "musics/kick.wav",
  "musics/openhat.wav",
  "musics/boom.wav",
  "musics/ride.wav",
  "musics/snare.wav",
  "musics/tom.wav",
];
const allKeys = document.querySelectorAll(".key");
allKeys.forEach((val, index) => {
  val.addEventListener("click", () => {
    let audio = document.createElement("audio");
    audio.src = musics[index];
    audio.controls = true;
    audio.autoplay = true;
    audio.style.display = "none";

    // Append the audio element to the body or any other container
    document.body.appendChild(audio);
  });
});
