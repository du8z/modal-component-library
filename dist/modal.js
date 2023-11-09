"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  let {
    show,
    onClose,
    message
  } = _ref;
  const handleClose = () => {
    onClose();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal ".concat(show ? "show" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "close",
    onClick: handleClose
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("p", {
    className: "messageModal"
  }, message)));
}