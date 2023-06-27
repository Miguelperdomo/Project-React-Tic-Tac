import React from "react";
import ReactDOM from "react-dom";
import { WonScreen } from "../Won-Lost";

export const Modal = ({ playerWin, onClickReplay }) => {
  return ReactDOM.createPortal(
    <WonScreen winPlayer={playerWin} onClickReplay={onClickReplay} />,
    document.getElementById("modal")
  );
};
