"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFrameWheel;
var _react = require("react");
var _raf = _interopRequireDefault(require("rc-util/lib/raf"));
var _isFirefox = _interopRequireDefault(require("../utils/isFirefox"));
var _useOriginScroll = _interopRequireDefault(require("./useOriginScroll"));
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, horizontalScroll,
/***
 * Return `true` when you need to prevent default event
 */
onWheelDelta) {
  var offsetRef = (0, _react.useRef)(0);
  var nextFrameRef = (0, _react.useRef)(null);
  // Firefox patch
  var wheelValueRef = (0, _react.useRef)(null);
  var isMouseScrollRef = (0, _react.useRef)(false);
  // Scroll status sync
  var originScroll = (0, _useOriginScroll.default)(isScrollAtTop, isScrollAtBottom);
  function onWheelY(event, deltaY) {
    _raf.default.cancel(nextFrameRef.current);
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;
    // Do nothing when scroll at the edge, Skip check when is in scroll
    if (originScroll(deltaY)) return;
    // Proxy of scroll events
    if (!_isFirefox.default) {
      event.preventDefault();
    }
    nextFrameRef.current = (0, _raf.default)(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  }
  function onWheelX(event, deltaX) {
    onWheelDelta(deltaX, true);
    if (!_isFirefox.default) {
      event.preventDefault();
    }
  }
  // Check for which direction does wheel do. `sx` means `shift + wheel`
  var wheelDirectionRef = (0, _react.useRef)(null);
  var wheelDirectionCleanRef = (0, _react.useRef)(null);
  function onWheel(event) {
    if (!inVirtual) return;
    // Wait for 2 frame to clean direction
    _raf.default.cancel(wheelDirectionCleanRef.current);
    wheelDirectionCleanRef.current = (0, _raf.default)(function () {
      wheelDirectionRef.current = null;
    }, 2);
    var deltaX = event.deltaX,
      deltaY = event.deltaY,
      shiftKey = event.shiftKey;
    var mergedDeltaX = deltaX;
    var mergedDeltaY = deltaY;
    if (wheelDirectionRef.current === 'sx' || !wheelDirectionRef.current && (shiftKey || false) && deltaY && !deltaX) {
      mergedDeltaX = deltaY;
      mergedDeltaY = 0;
      wheelDirectionRef.current = 'sx';
    }
    var absX = Math.abs(mergedDeltaX);
    var absY = Math.abs(mergedDeltaY);
    if (wheelDirectionRef.current === null) {
      wheelDirectionRef.current = horizontalScroll && absX > absY ? 'x' : 'y';
    }
    if (wheelDirectionRef.current === 'y') {
      onWheelY(event, mergedDeltaY);
    } else {
      onWheelX(event, mergedDeltaX);
    }
  }
  // A patch for firefox
  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}