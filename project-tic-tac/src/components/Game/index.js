import "./Game.css";
//import Input from "./Campos-input";
import React, { useState } from "react";
import { Cell } from "../Cell/Cell";
import { Form } from "../Form/Form";

export const Game = ({ table, onClickCell }) => {
  const [gameStatus, setGameStatus] = useState({});
  JSON.stringify(gameStatus);

  return (
    <>
      <Form setGameStatus={setGameStatus} />
      <div className="printData">
        <h3>First name: {gameStatus.firstUserName}</h3>
        <h3>Letter First Player: {gameStatus.userFirstLetter}</h3>
        <h3>Second name: {gameStatus.secondUserName}</h3>
        <h3>Letter Second Player: {gameStatus.userSecondLetter}</h3>
      </div>
      <section className="Game">
        <Cell table={table} onClickCell={onClickCell} indexTable={0} />
        <Cell table={table} onClickCell={onClickCell} indexTable={1} />
        <Cell table={table} onClickCell={onClickCell} indexTable={2} />
        <Cell table={table} onClickCell={onClickCell} indexTable={3} />
        <Cell table={table} onClickCell={onClickCell} indexTable={4} />
        <Cell table={table} onClickCell={onClickCell} indexTable={5} />
        <Cell table={table} onClickCell={onClickCell} indexTable={6} />
        <Cell table={table} onClickCell={onClickCell} indexTable={7} />
        <Cell table={table} onClickCell={onClickCell} indexTable={8} />
      </section>
    </>
  );
};
