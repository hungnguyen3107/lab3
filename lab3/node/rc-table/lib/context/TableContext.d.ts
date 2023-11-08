/// <reference types="react" />
import type { ColumnsType, ColumnType, Direction, ExpandableType, ExpandedRowRender, GetComponent, GetComponentProps, GetRowKey, RenderExpandIcon, RowClassName, TableLayout, TriggerEventHandler } from '../interface';
import type { FixedInfo } from '../utils/fixUtil';
declare const makeImmutable: <T extends import("react").ComponentType<any>>(Component: T, shouldTriggerRender?: import("@rc-component/context/lib/Immutable").CompareProps<T>) => T, responseImmutable: <T_1 extends import("react").ComponentType<any>>(Component: T_1, propsAreEqual?: import("@rc-component/context/lib/Immutable").CompareProps<T_1>) => T_1, useImmutableMark: () => number;
export { makeImmutable, responseImmutable, useImmutableMark };
export interface TableContextProps<RecordType = any> {
    scrollX: number | string | true;
    prefixCls: string;
    getComponent: GetComponent;
    scrollbarSize: number;
    direction: Direction;
    fixedInfoList: readonly FixedInfo[];
    isSticky: boolean;
    supportSticky: boolean;
    componentWidth: number;
    fixHeader: boolean;
    fixColumn: boolean;
    horizonScroll: boolean;
    rowClassName: string | RowClassName<RecordType>;
    expandedRowClassName: RowClassName<RecordType>;
    onRow?: GetComponentProps<RecordType>;
    emptyNode?: React.ReactNode;
    tableLayout: TableLayout;
    indentSize: number;
    expandableType: ExpandableType;
    expandRowByClick: boolean;
    expandedRowRender: ExpandedRowRender<RecordType>;
    expandIcon: RenderExpandIcon<RecordType>;
    onTriggerExpand: TriggerEventHandler<RecordType>;
    expandIconColumnIndex: number;
    allColumnsFixedLeft: boolean;
    columns: ColumnsType<RecordType>;
    flattenColumns: readonly ColumnType<RecordType>[];
    onColumnResize: (columnKey: React.Key, width: number) => void;
    hoverStartRow: number;
    hoverEndRow: number;
    onHover: (start: number, end: number) => void;
    rowExpandable: (record: RecordType) => boolean;
    expandedKeys: Set<React.Key>;
    getRowKey: GetRowKey<RecordType>;
    childrenColumnName: string;
}
declare const TableContext: import("@rc-component/context").SelectorContext<TableContextProps<any>>;
export default TableContext;
