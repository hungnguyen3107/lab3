import * as React from 'react';
import type { ResizableTextAreaRef } from './interface';
declare const ResizableTextArea: React.ForwardRefExoticComponent<Omit<import("./interface").HTMLTextareaProps, "onResize" | "value"> & {
    value?: string | number | bigint | readonly string[];
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    autoSize?: boolean | import("./interface").AutoSizeType;
    onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onResize?: (size: {
        width: number;
        height: number;
    }) => void;
    classes?: {
        countWrapper?: string;
        affixWrapper?: string;
    };
    classNames?: {
        textarea?: string;
        count?: string;
    };
    styles?: {
        textarea?: React.CSSProperties;
        count?: React.CSSProperties;
    };
} & Pick<import("rc-input/lib/interface").BaseInputProps, "allowClear" | "suffix"> & Pick<import("rc-input").InputProps, "showCount" | "count"> & React.RefAttributes<ResizableTextAreaRef>>;
export default ResizableTextArea;
