"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classnames = _interopRequireDefault(require("classnames"));
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _BaseInput = _interopRequireDefault(require("./BaseInput"));
var _useCount = _interopRequireDefault(require("./hooks/useCount"));
var _commonUtils = require("./utils/commonUtils");
var _excluded = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Input = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var autoComplete = props.autoComplete,
    onChange = props.onChange,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onPressEnter = props.onPressEnter,
    onKeyDown = props.onKeyDown,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-input' : _props$prefixCls,
    disabled = props.disabled,
    htmlSize = props.htmlSize,
    className = props.className,
    maxLength = props.maxLength,
    suffix = props.suffix,
    showCount = props.showCount,
    count = props.count,
    _props$type = props.type,
    type = _props$type === void 0 ? 'text' : _props$type,
    classes = props.classes,
    classNames = props.classNames,
    styles = props.styles,
    _onCompositionStart = props.onCompositionStart,
    onCompositionEnd = props.onCompositionEnd,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  var compositionRef = _react.default.useRef(false);
  var inputRef = (0, _react.useRef)(null);
  var focus = function focus(option) {
    if (inputRef.current) {
      (0, _commonUtils.triggerFocus)(inputRef.current, option);
    }
  };

  // ====================== Value =======================
  var _useMergedState = (0, _useMergedState3.default)(props.defaultValue, {
      value: props.value
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    value = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var formatValue = value === undefined || value === null ? '' : String(value);

  // =================== Select Range ===================
  var _React$useState = _react.default.useState(null),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    selection = _React$useState2[0],
    setSelection = _React$useState2[1];

  // ====================== Count =======================
  var countConfig = (0, _useCount.default)(count, showCount);
  var mergedMax = countConfig.max || maxLength;
  var valueLength = countConfig.strategy(formatValue);
  var isOutOfRange = !!mergedMax && valueLength > mergedMax;

  // ======================= Ref ========================
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      focus: focus,
      blur: function blur() {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.blur();
      },
      setSelectionRange: function setSelectionRange(start, end, direction) {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.setSelectionRange(start, end, direction);
      },
      select: function select() {
        var _inputRef$current3;
        (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.select();
      },
      input: inputRef.current
    };
  });
  (0, _react.useEffect)(function () {
    setFocused(function (prev) {
      return prev && disabled ? false : prev;
    });
  }, [disabled]);
  var triggerChange = function triggerChange(e, currentValue) {
    var cutValue = currentValue;
    if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
      cutValue = countConfig.exceedFormatter(currentValue, {
        max: countConfig.max
      });
      if (currentValue !== cutValue) {
        var _inputRef$current4, _inputRef$current5;
        setSelection([((_inputRef$current4 = inputRef.current) === null || _inputRef$current4 === void 0 ? void 0 : _inputRef$current4.selectionStart) || 0, ((_inputRef$current5 = inputRef.current) === null || _inputRef$current5 === void 0 ? void 0 : _inputRef$current5.selectionEnd) || 0]);
      }
    }
    setValue(cutValue);
    if (inputRef.current) {
      (0, _commonUtils.resolveOnChange)(inputRef.current, e, onChange, cutValue);
    }
  };
  _react.default.useEffect(function () {
    if (selection) {
      var _inputRef$current6;
      (_inputRef$current6 = inputRef.current) === null || _inputRef$current6 === void 0 ? void 0 : _inputRef$current6.setSelectionRange.apply(_inputRef$current6, (0, _toConsumableArray2.default)(selection));
    }
  }, [selection]);
  var onInternalChange = function onInternalChange(e) {
    triggerChange(e, e.target.value);
  };
  var onInternalCompositionEnd = function onInternalCompositionEnd(e) {
    compositionRef.current = false;
    triggerChange(e, e.currentTarget.value);
    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (onPressEnter && e.key === 'Enter') {
      onPressEnter(e);
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  };
  var handleFocus = function handleFocus(e) {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  var handleBlur = function handleBlur(e) {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  var handleReset = function handleReset(e) {
    setValue('');
    focus();
    if (inputRef.current) {
      (0, _commonUtils.resolveOnChange)(inputRef.current, e, onChange);
    }
  };

  // ====================== Input =======================
  var outOfRangeCls = isOutOfRange && "".concat(prefixCls, "-out-of-range");
  var getInputElement = function getInputElement() {
    // Fix https://fb.me/react-unknown-prop
    var otherProps = (0, _omit.default)(props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear',
    // Input elements must be either controlled or uncontrolled,
    // specify either the value prop, or the defaultValue prop, but not both.
    'defaultValue', 'showCount', 'count', 'classes', 'htmlSize', 'styles', 'classNames']);
    return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
      autoComplete: autoComplete
    }, otherProps, {
      onChange: onInternalChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      className: (0, _classnames.default)(prefixCls, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), disabled), classNames === null || classNames === void 0 ? void 0 : classNames.input),
      style: styles === null || styles === void 0 ? void 0 : styles.input,
      ref: inputRef,
      size: htmlSize,
      type: type,
      onCompositionStart: function onCompositionStart(e) {
        compositionRef.current = true;
        _onCompositionStart === null || _onCompositionStart === void 0 ? void 0 : _onCompositionStart(e);
      },
      onCompositionEnd: onInternalCompositionEnd
    }));
  };
  var getSuffix = function getSuffix() {
    // Max length value
    var hasMaxLength = Number(mergedMax) > 0;
    if (suffix || countConfig.show) {
      var dataCount = countConfig.showFormatter ? countConfig.showFormatter({
        value: formatValue,
        count: valueLength,
        maxLength: mergedMax
      }) : "".concat(valueLength).concat(hasMaxLength ? " / ".concat(mergedMax) : '');
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, countConfig.show && /*#__PURE__*/_react.default.createElement("span", {
        className: (0, _classnames.default)("".concat(prefixCls, "-show-count-suffix"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-show-count-has-suffix"), !!suffix), classNames === null || classNames === void 0 ? void 0 : classNames.count),
        style: (0, _objectSpread2.default)({}, styles === null || styles === void 0 ? void 0 : styles.count)
      }, dataCount), suffix);
    }
    return null;
  };

  // ====================== Render ======================
  return /*#__PURE__*/_react.default.createElement(_BaseInput.default, (0, _extends2.default)({}, rest, {
    prefixCls: prefixCls,
    className: (0, _classnames.default)(className, outOfRangeCls),
    inputElement: getInputElement(),
    handleReset: handleReset,
    value: formatValue,
    focused: focused,
    triggerFocus: focus,
    suffix: getSuffix(),
    disabled: disabled,
    classes: classes,
    classNames: classNames,
    styles: styles
  }));
});
var _default = Input;
exports.default = _default;