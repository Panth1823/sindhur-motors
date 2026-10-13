import React from "react";

export default function Home({ onReplayIntro }) {
  return (
    <div>
      <h1>Home</h1>
      {onReplayIntro && (
        <button onClick={onReplayIntro}>Replay Intro</button>
      )}
    </div>
  );
}
