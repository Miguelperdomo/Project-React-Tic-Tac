//import { Game } from "../Game/index";
//import React, { useState } from "react";

//Creating cell for player
export const Cell = ({ table, onClickCell, indexTable }) => {
  //const [player, setPlayer] = useState("");
  return (
    <>
      <div onClick={() => onClickCell(indexTable)} className="Game-cell">
        {table[indexTable]}
      </div>
    </>
  );
};
