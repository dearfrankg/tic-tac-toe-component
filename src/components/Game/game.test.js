import React from "react";
import Game from ".";

it("should render without crashing", () => {
  shallow(<Game />);
});

it("should render game status correctly", () => {
  const wrapper = mount(<Game />);

  const getGameInfo = () =>
    wrapper
      .find("div.game-info")
      .children()
      .first()
      .text();

  const simulateSquareClick = square =>
    wrapper
      .find("button.square")
      .at(square)
      .simulate("click");

  expect(getGameInfo()).toEqual("Next player: X");

  simulateSquareClick(0); // player1

  expect(getGameInfo()).toEqual("Next player: O");

  simulateSquareClick(1); // player2
  simulateSquareClick(4); // player1
  simulateSquareClick(5); // player2
  simulateSquareClick(8); // player1

  expect(getGameInfo()).toEqual("Winner: X");
});
