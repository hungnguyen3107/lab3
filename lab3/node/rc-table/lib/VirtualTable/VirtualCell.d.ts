import * as React from 'react';
import type useRowInfo from '../hooks/useRowInfo';
import type { ColumnType } from '../interface';
export interface VirtualCellProps<RecordType> {
    rowInfo: ReturnType<typeof useRowInfo>;
    column: ColumnType<RecordType>;
    colIndex: number;
    indent: number;
    index: number;
    /** Used for `column.render` */
    renderIndex: number;
    record: RecordType;
    style?: React.CSSProperties;
    className?: string;
    /** Render cell only when it has `rowSpan > 1` */
    inverse?: boolean;
    getHeight?: (rowSpan: number) => number;
}
/**
 * Return the width of the column by `colSpan`.
 * When `colSpan` is `0` will be trade as `1`.
 */
export declare function getColumnWidth(colIndex: number, colSpan: number, columnsOffset: number[]): number;
declare function VirtualCell<RecordType = any>(props: VirtualCellProps<RecordType>): React.JSX.Element;
export default VirtualCell;
