import React from "react";
import { SpinnerCircular } from "spinners-react";

const Loading = () => (
  <div className="loading-container">
    <SpinnerCircular
      size={60}
      thickness={100}
      speed={100}
      color="#36ad47"
      secondaryColor="rgba(0, 0, 0, 0)"
    />
  </div>
);

export default Loading;
