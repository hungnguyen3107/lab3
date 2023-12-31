import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useContext } from '@rc-component/context';
import classNames from 'classnames';
import VirtualList from 'rc-virtual-list';
import * as React from 'react';
import Cell from "../Cell";
import TableContext, { responseImmutable } from "../context/TableContext";
import useFlattenRecords from "../hooks/useFlattenRecords";
import BodyLine from "./BodyLine";
import { GridContext, StaticContext } from "./context";
var Grid = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var data = props.data,
    onScroll = props.onScroll;
  var _useContext = useContext(TableContext, ['flattenColumns', 'onColumnResize', 'getRowKey', 'prefixCls', 'expandedKeys', 'childrenColumnName', 'emptyNode', 'scrollX']),
    flattenColumns = _useContext.flattenColumns,
    onColumnResize = _useContext.onColumnResize,
    getRowKey = _useContext.getRowKey,
    expandedKeys = _useContext.expandedKeys,
    prefixCls = _useContext.prefixCls,
    childrenColumnName = _useContext.childrenColumnName,
    emptyNode = _useContext.emptyNode,
    scrollX = _useContext.scrollX;
  var _useContext2 = useContext(StaticContext),
    sticky = _useContext2.sticky,
    scrollY = _useContext2.scrollY,
    listItemHeight = _useContext2.listItemHeight;

  // =========================== Ref ============================
  var listRef = React.useRef();

  // =========================== Data ===========================
  var flattenData = useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey);

  // ========================== Column ==========================
  var columnsWidth = React.useMemo(function () {
    var total = 0;
    return flattenColumns.map(function (_ref) {
      var width = _ref.width,
        key = _ref.key;
      total += width;
      return [key, width, total];
    });
  }, [flattenColumns]);
  var columnsOffset = React.useMemo(function () {
    return columnsWidth.map(function (colWidth) {
      return colWidth[2];
    });
  }, [columnsWidth]);
  React.useEffect(function () {
    columnsWidth.forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        width = _ref3[1];
      onColumnResize(key, width);
    });
  }, [columnsWidth]);

  // =========================== Ref ============================
  React.useImperativeHandle(ref, function () {
    var obj = {
      scrollTo: function scrollTo(config) {
        var _listRef$current;
        (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(config);
      }
    };
    Object.defineProperty(obj, 'scrollLeft', {
      get: function get() {
        var _listRef$current2;
        return ((_listRef$current2 = listRef.current) === null || _listRef$current2 === void 0 ? void 0 : _listRef$current2.getScrollInfo().x) || 0;
      },
      set: function set(value) {
        var _listRef$current3;
        (_listRef$current3 = listRef.current) === null || _listRef$current3 === void 0 ? void 0 : _listRef$current3.scrollTo({
          left: value
        });
      }
    });
    return obj;
  });

  // ======================= Col/Row Span =======================
  var getRowSpan = function getRowSpan(column, index) {
    var _flattenData$index;
    var record = (_flattenData$index = flattenData[index]) === null || _flattenData$index === void 0 ? void 0 : _flattenData$index.record;
    var onCell = column.onCell;
    if (onCell) {
      var _cellProps$rowSpan;
      var cellProps = onCell(record, index);
      return (_cellProps$rowSpan = cellProps === null || cellProps === void 0 ? void 0 : cellProps.rowSpan) !== null && _cellProps$rowSpan !== void 0 ? _cellProps$rowSpan : 1;
    }
    return 1;
  };
  var extraRender = function extraRender(info) {
    var start = info.start,
      end = info.end,
      getSize = info.getSize,
      offsetY = info.offsetY;

    // Do nothing if no data
    if (end < 0) {
      return null;
    }

    // Find first rowSpan column
    var firstRowSpanColumns = flattenColumns.filter(
    // rowSpan is 0
    function (column) {
      return getRowSpan(column, start) === 0;
    });
    var startIndex = start;
    var _loop = function _loop(i) {
      firstRowSpanColumns = firstRowSpanColumns.filter(function (column) {
        return getRowSpan(column, i) === 0;
      });
      if (!firstRowSpanColumns.length) {
        startIndex = i;
        return "break";
      }
    };
    for (var i = start; i >= 0; i -= 1) {
      var _ret = _loop(i);
      if (_ret === "break") break;
    }

    // Find last rowSpan column
    var lastRowSpanColumns = flattenColumns.filter(
    // rowSpan is not 1
    function (column) {
      return getRowSpan(column, end) !== 1;
    });
    var endIndex = end;
    var _loop2 = function _loop2(_i) {
      lastRowSpanColumns = lastRowSpanColumns.filter(function (column) {
        return getRowSpan(column, _i) !== 1;
      });
      if (!lastRowSpanColumns.length) {
        endIndex = Math.max(_i - 1, end);
        return "break";
      }
    };
    for (var _i = end; _i < flattenData.length; _i += 1) {
      var _ret2 = _loop2(_i);
      if (_ret2 === "break") break;
    }

    // Collect the line who has rowSpan
    var spanLines = [];
    var _loop3 = function _loop3(_i2) {
      var item = flattenData[_i2];

      // This code will never reach, just incase
      if (!item) {
        return "continue";
      }
      if (flattenColumns.some(function (column) {
        return getRowSpan(column, _i2) > 1;
      })) {
        spanLines.push(_i2);
      }
    };
    for (var _i2 = startIndex; _i2 <= endIndex; _i2 += 1) {
      var _ret3 = _loop3(_i2);
      if (_ret3 === "continue") continue;
    }

    // Patch extra line on the page
    var nodes = spanLines.map(function (index) {
      var item = flattenData[index];
      var rowKey = getRowKey(item.record, index);
      var getHeight = function getHeight(rowSpan) {
        var endItemIndex = index + rowSpan - 1;
        var endItemKey = getRowKey(flattenData[endItemIndex].record, endItemIndex);
        var sizeInfo = getSize(rowKey, endItemKey);
        return sizeInfo.bottom - sizeInfo.top;
      };
      var sizeInfo = getSize(rowKey);
      return /*#__PURE__*/React.createElement(BodyLine, {
        key: index,
        data: item,
        rowKey: rowKey,
        index: index,
        style: {
          top: -offsetY + sizeInfo.top
        },
        extra: true,
        getHeight: getHeight
      });
    });
    return nodes;
  };

  // ========================= Context ==========================
  var gridContext = React.useMemo(function () {
    return {
      columnsOffset: columnsOffset
    };
  }, [columnsOffset]);

  // ========================== Render ==========================
  var tblPrefixCls = "".concat(prefixCls, "-tbody");
  var bodyContent;
  if (flattenData.length) {
    // ========================== Sticky Scroll Bar ==========================
    var horizontalScrollBarStyle = {};
    if (sticky) {
      horizontalScrollBarStyle.position = 'sticky';
      horizontalScrollBarStyle.bottom = 0;
      if (_typeof(sticky) === 'object' && sticky.offsetScroll) {
        horizontalScrollBarStyle.bottom = sticky.offsetScroll;
      }
    }
    bodyContent = /*#__PURE__*/React.createElement(VirtualList, {
      fullHeight: false,
      ref: listRef,
      styles: {
        horizontalScrollBar: horizontalScrollBarStyle
      },
      className: classNames(tblPrefixCls, "".concat(tblPrefixCls, "-virtual")),
      height: scrollY,
      itemHeight: listItemHeight || 24,
      data: flattenData,
      itemKey: function itemKey(item) {
        return getRowKey(item.record);
      },
      scrollWidth: scrollX,
      onVirtualScroll: function onVirtualScroll(_ref4) {
        var x = _ref4.x;
        onScroll({
          scrollLeft: x
        });
      },
      extraRender: extraRender
    }, function (item, index, itemProps) {
      var rowKey = getRowKey(item.record, index);
      return /*#__PURE__*/React.createElement(BodyLine, _extends({
        data: item,
        rowKey: rowKey,
        index: index
      }, itemProps));
    });
  } else {
    bodyContent = /*#__PURE__*/React.createElement("div", {
      className: classNames("".concat(prefixCls, "-placeholder"))
    }, /*#__PURE__*/React.createElement(Cell, {
      component: "div",
      prefixCls: prefixCls
    }, emptyNode));
  }
  return /*#__PURE__*/React.createElement(GridContext.Provider, {
    value: gridContext
  }, bodyContent);
});
var ResponseGrid = responseImmutable(Grid);
if (process.env.NODE_ENV !== 'production') {
  ResponseGrid.displayName = 'ResponseGrid';
}
export default ResponseGrid;