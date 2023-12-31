import type { GlobalToken } from '../../theme';
import type { FullToken } from '../../theme/internal';
import type { GenStyleFn } from '../../theme/util/genComponentStyleHook';
/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
    /**
     * @desc 徽标 z-index
     * @descEN z-index of badge
     */
    indicatorZIndex: number | string;
    /**
     * @desc 徽标高度
     * @descEN Height of badge
     */
    indicatorHeight: number;
    /**
     * @desc 小号徽标高度
     * @descEN Height of small badge
     */
    indicatorHeightSM: number;
    /**
     * @desc 点状徽标尺寸
     * @descEN Size of dot badge
     */
    dotSize: number;
    /**
     * @desc 徽标文本尺寸
     * @descEN Font size of badge text
     */
    textFontSize: number;
    /**
     * @desc 小号徽标文本尺寸
     * @descEN Font size of small badge text
     */
    textFontSizeSM: number;
    /**
     * @desc 徽标文本粗细
     * @descEN Font weight of badge text
     */
    textFontWeight: number | string;
    /**
     * @desc 状态徽标尺寸
     * @descEN Size of status badge
     */
    statusSize: number;
}
export interface BadgeToken extends FullToken<'Badge'> {
    badgeFontHeight: number;
    badgeTextColor: string;
    badgeColor: string;
    badgeColorHover: string;
    badgeShadowSize: number;
    badgeShadowColor: string;
    badgeProcessingDuration: string;
    badgeRibbonOffset: number;
    badgeRibbonCornerTransform: string;
    badgeRibbonCornerFilter: string;
}
export declare const prepareToken: (token: Parameters<GenStyleFn<'Badge'>>[0]) => BadgeToken;
export declare const prepareComponentToken: (token: GlobalToken) => {
    indicatorZIndex: string;
    indicatorHeight: number;
    indicatorHeightSM: number;
    dotSize: number;
    textFontSize: number;
    textFontSizeSM: number;
    textFontWeight: string;
    statusSize: number;
};
declare const _default: (prefixCls: string) => import("../../theme/interface").UseComponentStyleResult;
export default _default;
