"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _useCellClassName = _interopRequireDefault(require("../../hooks/useCellClassName"));
var _RangeContext = _interopRequireDefault(require("../../RangeContext"));
var _dateUtil = require("../../utils/dateUtil");
var _PanelBody = _interopRequireDefault(require("../PanelBody"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function DateBody(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    prefixColumn = props.prefixColumn,
    locale = props.locale,
    rowCount = props.rowCount,
    viewDate = props.viewDate,
    value = props.value,
    cellRender = props.cellRender,
    isSameCell = props.isSameCell;
  var _React$useContext = React.useContext(_RangeContext.default),
    rangedValue = _React$useContext.rangedValue,
    hoverRangedValue = _React$useContext.hoverRangedValue;
  var baseDate = (0, _dateUtil.getWeekStartDate)(locale.locale, generateConfig, viewDate);
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var weekFirstDay = generateConfig.locale.getWeekFirstDay(locale.locale);
  var today = generateConfig.getNow();

  // ============================== Header ==============================
  var headerCells = [];
  var weekDaysLocale = locale.shortWeekDays || (generateConfig.locale.getShortWeekDays ? generateConfig.locale.getShortWeekDays(locale.locale) : []);
  if (prefixColumn) {
    headerCells.push( /*#__PURE__*/React.createElement("th", {
      key: "empty",
      "aria-label": "empty cell"
    }));
  }
  for (var i = 0; i < _dateUtil.WEEK_DAY_COUNT; i += 1) {
    headerCells.push( /*#__PURE__*/React.createElement("th", {
      key: i
    }, weekDaysLocale[(i + weekFirstDay) % _dateUtil.WEEK_DAY_COUNT]));
  }

  // =============================== Body ===============================
  var getCellClassName = (0, _useCellClassName.default)({
    cellPrefixCls: cellPrefixCls,
    today: today,
    value: value,
    generateConfig: generateConfig,
    rangedValue: prefixColumn ? null : rangedValue,
    hoverRangedValue: prefixColumn ? null : hoverRangedValue,
    isSameCell: isSameCell || function (current, target) {
      return (0, _dateUtil.isSameDate)(generateConfig, current, target);
    },
    isInView: function isInView(date) {
      return (0, _dateUtil.isSameMonth)(generateConfig, date, viewDate);
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addDate(date, offset);
    }
  });
  var getCellNode = cellRender ? function (date, wrapperNode) {
    return cellRender(date, {
      originNode: wrapperNode,
      today: today,
      type: 'date',
      locale: locale
    });
  } : undefined;
  return /*#__PURE__*/React.createElement(_PanelBody.default, (0, _extends2.default)({}, props, {
    rowNum: rowCount,
    colNum: _dateUtil.WEEK_DAY_COUNT,
    baseDate: baseDate,
    getCellNode: getCellNode,
    getCellText: generateConfig.getDate,
    getCellClassName: getCellClassName,
    getCellDate: generateConfig.addDate,
    titleCell: function titleCell(date) {
      return (0, _dateUtil.formatValue)(date, {
        locale: locale,
        format: 'YYYY-MM-DD',
        generateConfig: generateConfig
      });
    },
    headerCells: headerCells
  }));
}
var _default = exports.default = DateBody;