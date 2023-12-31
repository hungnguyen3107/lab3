import type { ReactNode } from 'react';
import React from 'react';
import type { TourStepProps } from './interface';
interface TourPanelProps {
    stepProps: TourStepProps;
    current: number;
    type: TourStepProps['type'];
    indicatorsRender?: TourStepProps['indicatorsRender'];
    closeIcon?: ReactNode;
}
declare const TourPanel: React.FC<TourPanelProps>;
export default TourPanel;
