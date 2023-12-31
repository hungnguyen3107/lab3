"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useExpand;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _warning = _interopRequireDefault(require("rc-util/lib/warning"));
var React = _interopRequireWildcard(require("react"));
var _constant = require("../constant");
var _expandUtil = require("../utils/expandUtil");
var _legacyUtil = require("../utils/legacyUtil");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useExpand(props, mergedData, getRowKey) {
  var expandableConfig = (0, _legacyUtil.getExpandableProps)(props);
  var expandIcon = expandableConfig.expandIcon,
    expandedRowKeys = expandableConfig.expandedRowKeys,
    defaultExpandedRowKeys = expandableConfig.defaultExpandedRowKeys,
    defaultExpandAllRows = expandableConfig.defaultExpandAllRows,
    expandedRowRender = expandableConfig.expandedRowRender,
    onExpand = expandableConfig.onExpand,
    onExpandedRowsChange = expandableConfig.onExpandedRowsChange,
    childrenColumnName = expandableConfig.childrenColumnName;
  var mergedExpandIcon = expandIcon || _expandUtil.renderExpandIcon;
  var mergedChildrenColumnName = childrenColumnName || 'children';
  var expandableType = React.useMemo(function () {
    if (expandedRowRender) {
      return 'row';
    }
    /* eslint-disable no-underscore-dangle */
    /**
     * Fix https://github.com/ant-design/ant-design/issues/21154
     * This is a workaround to not to break current behavior.
     * We can remove follow code after final release.
     *
     * To other developer:
     *  Do not use `__PARENT_RENDER_ICON__` in prod since we will remove this when refactor
     */
    if (props.expandable && props.internalHooks === _constant.INTERNAL_HOOKS && props.expandable.__PARENT_RENDER_ICON__ || mergedData.some(function (record) {
      return record && (0, _typeof2.default)(record) === 'object' && record[mergedChildrenColumnName];
    })) {
      return 'nest';
    }
    /* eslint-enable */
    return false;
  }, [!!expandedRowRender, mergedData]);
  var _React$useState = React.useState(function () {
      if (defaultExpandedRowKeys) {
        return defaultExpandedRowKeys;
      }
      if (defaultExpandAllRows) {
        return (0, _expandUtil.findAllChildrenKeys)(mergedData, getRowKey, mergedChildrenColumnName);
      }
      return [];
    }),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    innerExpandedKeys = _React$useState2[0],
    setInnerExpandedKeys = _React$useState2[1];
  var mergedExpandedKeys = React.useMemo(function () {
    return new Set(expandedRowKeys || innerExpandedKeys || []);
  }, [expandedRowKeys, innerExpandedKeys]);
  var onTriggerExpand = React.useCallback(function (record) {
    var key = getRowKey(record, mergedData.indexOf(record));
    var newExpandedKeys;
    var hasKey = mergedExpandedKeys.has(key);
    if (hasKey) {
      mergedExpandedKeys.delete(key);
      newExpandedKeys = (0, _toConsumableArray2.default)(mergedExpandedKeys);
    } else {
      newExpandedKeys = [].concat((0, _toConsumableArray2.default)(mergedExpandedKeys), [key]);
    }
    setInnerExpandedKeys(newExpandedKeys);
    if (onExpand) {
      onExpand(!hasKey, record);
    }
    if (onExpandedRowsChange) {
      onExpandedRowsChange(newExpandedKeys);
    }
  }, [getRowKey, mergedExpandedKeys, mergedData, onExpand, onExpandedRowsChange]);

  // Warning if use `expandedRowRender` and nest children in the same time
  if (process.env.NODE_ENV !== 'production' && expandedRowRender && mergedData.some(function (record) {
    return Array.isArray(record === null || record === void 0 ? void 0 : record[mergedChildrenColumnName]);
  })) {
    (0, _warning.default)(false, '`expandedRowRender` should not use with nested Table');
  }
  return [expandableConfig, expandableType, mergedExpandedKeys, mergedExpandIcon, mergedChildrenColumnName, onTriggerExpand];
}