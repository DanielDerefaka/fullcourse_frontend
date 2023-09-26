import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

const YoutubePlayer = ({ videoId, height, width }) => {
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts = {
    height: height || "360",
    width: width || "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Container>
      <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
    </Container>
  );
};

export default YoutubePlayer;

const Container = styled.div`
  margin: 2rem 0rem;
`;
