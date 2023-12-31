"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function useProdHMR() {
  return false;
}
var webpackHMR = false;
function useDevHMR() {
  return webpackHMR;
}
var _default = process.env.NODE_ENV === 'production' ? useProdHMR : useDevHMR; // Webpack `module.hot.accept` do not support any deps update trigger
// We have to hack handler to force mark as HRM
exports.default = _default;
if (process.env.NODE_ENV !== 'production' && typeof module !== 'undefined' && module && module.hot && typeof window !== 'undefined') {
  var win = window;
  if (typeof win.webpackHotUpdate === 'function') {
    var originWebpackHotUpdate = win.webpackHotUpdate;
    win.webpackHotUpdate = function () {
      webpackHMR = true;
      setTimeout(function () {
        webpackHMR = false;
      }, 0);
      return originWebpackHotUpdate.apply(void 0, arguments);
    };
  }
}