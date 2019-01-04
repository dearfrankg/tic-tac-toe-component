"use strict";

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it("should render without crashing", function () {
  shallow(_react.default.createElement(_.default, null));
});
it("should render game status correctly", function () {
  var wrapper = mount(_react.default.createElement(_.default, null));

  var getGameInfo = function getGameInfo() {
    return wrapper.find("div.game-info").children().first().text();
  };

  var simulateSquareClick = function simulateSquareClick(square) {
    return wrapper.find("button.square").at(square).simulate("click");
  };

  expect(getGameInfo()).toEqual("Next player: X");
  simulateSquareClick(0); // player1

  expect(getGameInfo()).toEqual("Next player: O");
  simulateSquareClick(1); // player2

  simulateSquareClick(4); // player1

  simulateSquareClick(5); // player2

  simulateSquareClick(8); // player1

  expect(getGameInfo()).toEqual("Winner: X");
});