import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import classNames from 'classnames';
import { warning } from 'rc-util';
import * as React from 'react';
import { INTERNAL_HOOKS } from "../constant";
import { makeImmutable } from "../context/TableContext";
import Table, { DEFAULT_PREFIX } from "../Table";
import Grid from "./BodyGrid";
import { StaticContext } from "./context";
var renderBody = function renderBody(rawData, props) {
  var ref = props.ref,
    onScroll = props.onScroll;
  return /*#__PURE__*/React.createElement(Grid, {
    ref: ref,
    data: rawData,
    onScroll: onScroll
  });
};
function VirtualTable(props, ref) {
  var columns = props.columns,
    scroll = props.scroll,
    sticky = props.sticky,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? DEFAULT_PREFIX : _props$prefixCls,
    className = props.className,
    listItemHeight = props.listItemHeight;
  var _ref = scroll || {},
    scrollX = _ref.x,
    scrollY = _ref.y;

  // Fill scrollX
  if (typeof scrollX !== 'number') {
    if (process.env.NODE_ENV !== 'production') {
      warning(!scrollX, '`scroll.x` in virtual table must be number.');
    }
    scrollX = 1;
  }

  // Fill scrollY
  if (typeof scrollY !== 'number') {
    scrollY = 500;
    if (process.env.NODE_ENV !== 'production') {
      warning(false, '`scroll.y` in virtual table must be number.');
    }
  }

  // ========================= Context ==========================
  var context = React.useMemo(function () {
    return {
      sticky: sticky,
      scrollY: scrollY,
      listItemHeight: listItemHeight
    };
  }, [sticky, scrollY, listItemHeight]);

  // ========================== Render ==========================
  return /*#__PURE__*/React.createElement(StaticContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement(Table, _extends({}, props, {
    className: classNames(className, "".concat(prefixCls, "-virtual")),
    scroll: _objectSpread(_objectSpread({}, scroll), {}, {
      x: scrollX
    }),
    components: {
      body: renderBody
    },
    columns: columns,
    internalHooks: INTERNAL_HOOKS,
    tailor: true,
    ref: ref
  })));
}
var RefVirtualTable = /*#__PURE__*/React.forwardRef(VirtualTable);
if (process.env.NODE_ENV !== 'production') {
  RefVirtualTable.displayName = 'VirtualTable';
}
export function genVirtualTable(shouldTriggerRender) {
  return makeImmutable(RefVirtualTable, shouldTriggerRender);
}
export default genVirtualTable();