"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _PanelContext = _interopRequireDefault(require("../PanelContext"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var HIDDEN_STYLE = {
  visibility: 'hidden'
};
function Header(_ref) {
  var prefixCls = _ref.prefixCls,
    _ref$prevIcon = _ref.prevIcon,
    prevIcon = _ref$prevIcon === void 0 ? "\u2039" : _ref$prevIcon,
    _ref$nextIcon = _ref.nextIcon,
    nextIcon = _ref$nextIcon === void 0 ? "\u203A" : _ref$nextIcon,
    _ref$superPrevIcon = _ref.superPrevIcon,
    superPrevIcon = _ref$superPrevIcon === void 0 ? "\xAB" : _ref$superPrevIcon,
    _ref$superNextIcon = _ref.superNextIcon,
    superNextIcon = _ref$superNextIcon === void 0 ? "\xBB" : _ref$superNextIcon,
    onSuperPrev = _ref.onSuperPrev,
    onSuperNext = _ref.onSuperNext,
    onPrev = _ref.onPrev,
    onNext = _ref.onNext,
    children = _ref.children;
  var _React$useContext = React.useContext(_PanelContext.default),
    hideNextBtn = _React$useContext.hideNextBtn,
    hidePrevBtn = _React$useContext.hidePrevBtn;
  return /*#__PURE__*/React.createElement("div", {
    className: prefixCls
  }, onSuperPrev && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSuperPrev,
    tabIndex: -1,
    className: "".concat(prefixCls, "-super-prev-btn"),
    style: hidePrevBtn ? HIDDEN_STYLE : {}
  }, superPrevIcon), onPrev && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onPrev,
    tabIndex: -1,
    className: "".concat(prefixCls, "-prev-btn"),
    style: hidePrevBtn ? HIDDEN_STYLE : {}
  }, prevIcon), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-view")
  }, children), onNext && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onNext,
    tabIndex: -1,
    className: "".concat(prefixCls, "-next-btn"),
    style: hideNextBtn ? HIDDEN_STYLE : {}
  }, nextIcon), onSuperNext && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSuperNext,
    tabIndex: -1,
    className: "".concat(prefixCls, "-super-next-btn"),
    style: hideNextBtn ? HIDDEN_STYLE : {}
  }, superNextIcon));
}
var _default = exports.default = Header;