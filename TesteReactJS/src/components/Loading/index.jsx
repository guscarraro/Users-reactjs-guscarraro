import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/loading.json";

const DefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = () => {
  return <Lottie options={DefaultOptions} height={150} width={150} />;
};

export default Loading;
