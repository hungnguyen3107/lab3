import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import classNames from 'classnames';
import { useComposeRef } from "rc-util/es/ref";
import React, { useRef } from 'react';
import { RefContext } from "../../context";
import MemoChildren from "./MemoChildren";
var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none'
};
var Panel = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    title = props.title,
    ariaId = props.ariaId,
    footer = props.footer,
    closable = props.closable,
    closeIcon = props.closeIcon,
    onClose = props.onClose,
    children = props.children,
    bodyStyle = props.bodyStyle,
    bodyProps = props.bodyProps,
    modalRender = props.modalRender,
    onMouseDown = props.onMouseDown,
    onMouseUp = props.onMouseUp,
    holderRef = props.holderRef,
    visible = props.visible,
    forceRender = props.forceRender,
    width = props.width,
    height = props.height,
    modalClassNames = props.classNames,
    modalStyles = props.styles;

  // ================================= Refs =================================
  var _React$useContext = React.useContext(RefContext),
    panelRef = _React$useContext.panel;
  var mergedRef = useComposeRef(holderRef, panelRef);
  var sentinelStartRef = useRef();
  var sentinelEndRef = useRef();
  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        var _sentinelStartRef$cur;
        (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 || _sentinelStartRef$cur.focus();
      },
      changeActive: function changeActive(next) {
        var _document = document,
          activeElement = _document.activeElement;
        if (next && activeElement === sentinelEndRef.current) {
          sentinelStartRef.current.focus();
        } else if (!next && activeElement === sentinelStartRef.current) {
          sentinelEndRef.current.focus();
        }
      }
    };
  });

  // ================================ Style =================================
  var contentStyle = {};
  if (width !== undefined) {
    contentStyle.width = width;
  }
  if (height !== undefined) {
    contentStyle.height = height;
  }
  // ================================ Render ================================
  var footerNode;
  if (footer) {
    footerNode = /*#__PURE__*/React.createElement("div", {
      className: classNames("".concat(prefixCls, "-footer"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.footer),
      style: _objectSpread({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.footer)
    }, footer);
  }
  var headerNode;
  if (title) {
    headerNode = /*#__PURE__*/React.createElement("div", {
      className: classNames("".concat(prefixCls, "-header"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.header),
      style: _objectSpread({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.header)
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-title"),
      id: ariaId
    }, title));
  }
  var closer;
  if (closable) {
    closer = /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onClose,
      "aria-label": "Close",
      className: "".concat(prefixCls, "-close")
    }, closeIcon || /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-close-x")
    }));
  }
  var content = /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(prefixCls, "-content"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.content),
    style: modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.content
  }, closer, headerNode, /*#__PURE__*/React.createElement("div", _extends({
    className: classNames("".concat(prefixCls, "-body"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.body),
    style: _objectSpread(_objectSpread({}, bodyStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.body)
  }, bodyProps), children), footerNode);
  return /*#__PURE__*/React.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": title ? ariaId : null,
    "aria-modal": "true",
    ref: mergedRef,
    style: _objectSpread(_objectSpread({}, style), contentStyle),
    className: classNames(prefixCls, className),
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp
  }, /*#__PURE__*/React.createElement("div", {
    tabIndex: 0,
    ref: sentinelStartRef,
    style: sentinelStyle,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(MemoChildren, {
    shouldUpdate: visible || forceRender
  }, modalRender ? modalRender(content) : content), /*#__PURE__*/React.createElement("div", {
    tabIndex: 0,
    ref: sentinelEndRef,
    style: sentinelStyle,
    "aria-hidden": "true"
  }));
});
if (process.env.NODE_ENV !== 'production') {
  Panel.displayName = 'Panel';
}
export default Panel;