"use strict";
"use client";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));
var _pickAttrs = _interopRequireDefault(require("rc-util/lib/pickAttrs"));
var _reactNode = require("../_util/reactNode");
var _warning = require("../_util/warning");
var _configProvider = require("../config-provider");
var _BreadcrumbItem = _interopRequireWildcard(require("./BreadcrumbItem"));
var _BreadcrumbSeparator = _interopRequireDefault(require("./BreadcrumbSeparator"));
var _style = _interopRequireDefault(require("./style"));
var _useItemRender = _interopRequireDefault(require("./useItemRender"));
var _useItems = _interopRequireDefault(require("./useItems"));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const getPath = (params, path) => {
  if (path === undefined) {
    return path;
  }
  let mergedPath = (path || '').replace(/^\//, '');
  Object.keys(params).forEach(key => {
    mergedPath = mergedPath.replace(`:${key}`, params[key]);
  });
  return mergedPath;
};
const Breadcrumb = props => {
  const {
      prefixCls: customizePrefixCls,
      separator = '/',
      style,
      className,
      rootClassName,
      routes: legacyRoutes,
      items,
      children,
      itemRender,
      params = {}
    } = props,
    restProps = __rest(props, ["prefixCls", "separator", "style", "className", "rootClassName", "routes", "items", "children", "itemRender", "params"]);
  const {
    getPrefixCls,
    direction,
    breadcrumb
  } = React.useContext(_configProvider.ConfigContext);
  let crumbs;
  const prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
  const [wrapSSR, hashId] = (0, _style.default)(prefixCls);
  const mergedItems = (0, _useItems.default)(items, legacyRoutes);
  if (process.env.NODE_ENV !== 'production') {
    const warning = (0, _warning.devUseWarning)('Breadcrumb');
    warning.deprecated(!legacyRoutes, 'routes', 'items');
    // Deprecated warning for breadcrumb children
    if (!mergedItems || mergedItems.length === 0) {
      const childList = (0, _toArray.default)(children);
      warning.deprecated(childList.length === 0, 'Breadcrumb.Item and Breadcrumb.Separator', 'items');
      childList.forEach(element => {
        if (element) {
          process.env.NODE_ENV !== "production" ? warning(element.type && (element.type.__ANT_BREADCRUMB_ITEM === true || element.type.__ANT_BREADCRUMB_SEPARATOR === true), 'usage', "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children") : void 0;
        }
      });
    }
  }
  const mergedItemRender = (0, _useItemRender.default)(prefixCls, itemRender);
  if (mergedItems && mergedItems.length > 0) {
    // generated by route
    const paths = [];
    const itemRenderRoutes = items || legacyRoutes;
    crumbs = mergedItems.map((item, index) => {
      const {
        path,
        key,
        type,
        menu,
        overlay,
        onClick,
        className: itemClassName,
        separator: itemSeparator,
        dropdownProps
      } = item;
      const mergedPath = getPath(params, path);
      if (mergedPath !== undefined) {
        paths.push(mergedPath);
      }
      const mergedKey = key !== null && key !== void 0 ? key : index;
      if (type === 'separator') {
        return /*#__PURE__*/React.createElement(_BreadcrumbSeparator.default, {
          key: mergedKey
        }, itemSeparator);
      }
      const itemProps = {};
      const isLastItem = index === mergedItems.length - 1;
      if (menu) {
        itemProps.menu = menu;
      } else if (overlay) {
        itemProps.overlay = overlay;
      }
      let {
        href
      } = item;
      if (paths.length && mergedPath !== undefined) {
        href = `#/${paths.join('/')}`;
      }
      return /*#__PURE__*/React.createElement(_BreadcrumbItem.InternalBreadcrumbItem, Object.assign({
        key: mergedKey
      }, itemProps, (0, _pickAttrs.default)(item, {
        data: true,
        aria: true
      }), {
        className: itemClassName,
        dropdownProps: dropdownProps,
        href: href,
        separator: isLastItem ? '' : separator,
        onClick: onClick,
        prefixCls: prefixCls
      }), mergedItemRender(item, params, itemRenderRoutes, paths, href));
    });
  } else if (children) {
    const childrenLength = (0, _toArray.default)(children).length;
    crumbs = (0, _toArray.default)(children).map((element, index) => {
      if (!element) {
        return element;
      }
      const isLastItem = index === childrenLength - 1;
      return (0, _reactNode.cloneElement)(element, {
        separator: isLastItem ? '' : separator,
        key: index
      });
    });
  }
  const breadcrumbClassName = (0, _classnames.default)(prefixCls, breadcrumb === null || breadcrumb === void 0 ? void 0 : breadcrumb.className, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, rootClassName, hashId);
  const mergedStyle = Object.assign(Object.assign({}, breadcrumb === null || breadcrumb === void 0 ? void 0 : breadcrumb.style), style);
  return wrapSSR( /*#__PURE__*/React.createElement("nav", Object.assign({
    className: breadcrumbClassName,
    style: mergedStyle
  }, restProps), /*#__PURE__*/React.createElement("ol", null, crumbs)));
};
Breadcrumb.Item = _BreadcrumbItem.default;
Breadcrumb.Separator = _BreadcrumbSeparator.default;
if (process.env.NODE_ENV !== 'production') {
  Breadcrumb.displayName = 'Breadcrumb';
}
var _default = exports.default = Breadcrumb;