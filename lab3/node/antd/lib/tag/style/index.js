"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareToken = exports.prepareCommonToken = exports.default = void 0;
var _style = require("../../style");
var _internal = require("../../theme/internal");
// ============================== Styles ==============================
const genBaseStyle = token => {
  const {
    paddingXXS,
    lineWidth,
    tagPaddingHorizontal,
    componentCls
  } = token;
  const paddingInline = tagPaddingHorizontal - lineWidth;
  const iconMarginInline = paddingXXS - lineWidth;
  return {
    // Result
    [componentCls]: Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), {
      display: 'inline-block',
      height: 'auto',
      marginInlineEnd: token.marginXS,
      paddingInline,
      fontSize: token.tagFontSize,
      lineHeight: token.tagLineHeight,
      whiteSpace: 'nowrap',
      background: token.defaultBg,
      border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadiusSM,
      opacity: 1,
      transition: `all ${token.motionDurationMid}`,
      textAlign: 'start',
      position: 'relative',
      // RTL
      [`&${componentCls}-rtl`]: {
        direction: 'rtl'
      },
      '&, a, a:hover': {
        color: token.defaultColor
      },
      [`${componentCls}-close-icon`]: {
        marginInlineStart: iconMarginInline,
        color: token.colorTextDescription,
        fontSize: token.tagIconSize,
        cursor: 'pointer',
        transition: `all ${token.motionDurationMid}`,
        '&:hover': {
          color: token.colorTextHeading
        }
      },
      [`&${componentCls}-has-color`]: {
        borderColor: 'transparent',
        [`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]: {
          color: token.colorTextLightSolid
        }
      },
      [`&-checkable`]: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        [`&:not(${componentCls}-checkable-checked):hover`]: {
          color: token.colorPrimary,
          backgroundColor: token.colorFillSecondary
        },
        '&:active, &-checked': {
          color: token.colorTextLightSolid
        },
        '&-checked': {
          backgroundColor: token.colorPrimary,
          '&:hover': {
            backgroundColor: token.colorPrimaryHover
          }
        },
        '&:active': {
          backgroundColor: token.colorPrimaryActive
        }
      },
      [`&-hidden`]: {
        display: 'none'
      },
      // To ensure that a space will be placed between character and `Icon`.
      [`> ${token.iconCls} + span, > span + ${token.iconCls}`]: {
        marginInlineStart: paddingInline
      }
    }),
    [`${componentCls}-borderless`]: {
      borderColor: 'transparent',
      background: token.tagBorderlessBg
    }
  };
};
// ============================== Export ==============================
const prepareToken = token => {
  const {
    lineWidth,
    fontSizeIcon
  } = token;
  const tagFontSize = token.fontSizeSM;
  const tagLineHeight = `${token.lineHeightSM * tagFontSize}px`;
  const tagToken = (0, _internal.mergeToken)(token, {
    tagFontSize,
    tagLineHeight,
    tagIconSize: fontSizeIcon - 2 * lineWidth,
    tagPaddingHorizontal: 8,
    tagBorderlessBg: token.colorFillTertiary
  });
  return tagToken;
};
exports.prepareToken = prepareToken;
const prepareCommonToken = token => ({
  defaultBg: token.colorFillQuaternary,
  defaultColor: token.colorText
});
exports.prepareCommonToken = prepareCommonToken;
var _default = exports.default = (0, _internal.genComponentStyleHook)('Tag', token => {
  const tagToken = prepareToken(token);
  return genBaseStyle(tagToken);
}, prepareCommonToken);