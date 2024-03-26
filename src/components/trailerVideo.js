import React from "react";
import useBackgroundTrailer from "../hooks/useBackgroundTrailer";
import { useSelector } from "react-redux";

const TrailerVideo = ({ movieId }) => {
  let trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useBackgroundTrailer(movieId);
  return (
    <div className="trailerVideo">
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&showinfo=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrailerVideo;
