import React, { useEffect } from "react";
import "./side.scss";
import sound from "../../assets/sound/사운드.mp3";

const Side = () => {
  useEffect(() => {
    const audio = document.getElementById("myAudio");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    if (audio.paused) {
      playBtn.style.display = "block";
      pauseBtn.style.display = "none";
    } else {
      playBtn.style.display = "none";
      pauseBtn.style.display = "block";
    }
    playBtn.addEventListener("click", () => {
      audio.play();
      playBtn.style.display = "none";
      pauseBtn.style.display = "block";
    });
    pauseBtn.addEventListener("click", () => {
      audio.pause();
      playBtn.style.display = "block";
      pauseBtn.style.display = "none";
    });
  }, []);
  return (
    <div className="side">
      <audio
        id="myAudio"
        loop="loop"
        autoPlay="autoplay"
        src={sound}
        controls
      ></audio>
      <button id="playBtn"></button>
      <button id="pauseBtn"></button>
    </div>
  );
};

export default Side;
