"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Square;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Square(props) {
  return _react.default.createElement("button", {
    className: "square",
    onClick: props.onClick
  }, props.value);
}