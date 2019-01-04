"use strict";

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it("should render without crashing", function () {
  var squares = Array(9).fill(null);
  shallow(_react.default.createElement(_.default, {
    squares: squares
  }));
});
it("should call click handler for appropriate square", function () {
  var onClick = jest.fn();
  var squares = Array(9).fill(null);
  var wrapper = mount(_react.default.createElement(_.default, {
    squares: squares,
    onClick: onClick
  }));

  var simulateSquareClick = function simulateSquareClick(square) {
    return wrapper.find("button.square").at(square).simulate("click");
  };

  simulateSquareClick(0);
  expect(onClick).toBeCalledWith(0);
  simulateSquareClick(5);
  expect(onClick).toBeCalledWith(5);
});