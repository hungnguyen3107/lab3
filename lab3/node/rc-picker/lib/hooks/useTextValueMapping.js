"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTextValueMapping;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function useTextValueMapping(_ref) {
  var valueTexts = _ref.valueTexts,
    onTextChange = _ref.onTextChange;
  var _React$useState = React.useState(''),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    text = _React$useState2[0],
    setInnerText = _React$useState2[1];
  var valueTextsRef = React.useRef([]);
  valueTextsRef.current = valueTexts;
  function triggerTextChange(value) {
    setInnerText(value);
    onTextChange(value);
  }
  function resetText() {
    setInnerText(valueTextsRef.current[0]);
  }
  (0, _useLayoutEffect.default)(function () {
    if (valueTexts.every(function (valText) {
      return valText !== text;
    })) {
      resetText();
    }
  }, [valueTexts.join('||')]);
  return [text, triggerTextChange, resetText];
}