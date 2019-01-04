import React from "react";
import Board from ".";

it("should render without crashing", () => {
  const squares = Array(9).fill(null);
  shallow(<Board squares={squares} />);
});

it("should call click handler for appropriate square", () => {
  const onClick = jest.fn();
  const squares = Array(9).fill(null);
  const wrapper = mount(<Board squares={squares} onClick={onClick} />);

  const simulateSquareClick = square =>
    wrapper
      .find("button.square")
      .at(square)
      .simulate("click");

  simulateSquareClick(0);
  expect(onClick).toBeCalledWith(0);

  simulateSquareClick(5);
  expect(onClick).toBeCalledWith(5);
});
