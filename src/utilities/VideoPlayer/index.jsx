"use client";

import { useState } from "react";

const { default: YouTube } = require("react-youtube");

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setOpen] = useState(false);

  const handleButton = () => {
    setOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <>
        <div className="video-container">
          <div className="video-box">
            <YouTube
              id="myvideo"
              videoId={youtubeId}
              onReady={(event) => event.target.pauseVideo()}
            />
            <button
              className="bx bx-x close-video"
              onClick={handleButton}
            ></button>
          </div>
        </div>
      </>
    );
  };

  const BtnWatch = () => {
    return (
      <>
        <button onClick={handleButton} className="watch-btn">
          <i className="bx bx-right-arrow tombol"></i>
          <span>Watch the trailer</span>
        </button>
      </>
    );
  };

  return isOpen ? <Player /> : <BtnWatch />;
};

export default VideoPlayer;
