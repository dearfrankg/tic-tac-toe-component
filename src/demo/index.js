import React from "react";
import { Game } from "../components";
import pkg from "../../package.json";

const Demo = () => (
  <>
    <h1>tic-tac-toe-component v{pkg.version} demo</h1>
    <Game />
  </>
);

export default Demo;
