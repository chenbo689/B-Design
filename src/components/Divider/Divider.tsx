import React from 'react'
import { DividerProps } from './type'
import './Divider.scss'
import { joinClassNames, connectPrifix } from '@/utils'

const Divider: React.FC<DividerProps> = ({
    children,
    className = '',
    dashed = false,
    type = 'horizontal',
    titlePlace = 'center',
}) => {
    const getPrefix = connectPrifix('divider')
    
    const baseClassNames = joinClassNames(
        'divider',
        className,
        getPrefix(type) || '',
        children && getPrefix('with-text') || '',
        dashed && getPrefix('dashed') || ''
    );

    const lineClassNames = joinClassNames(
        'divider-line',
        dashed && getPrefix('dashed') || ''
    );

    if (children) {
        if (titlePlace === 'left') {
            return (
                <div className={baseClassNames}>
                    <div className={lineClassNames}></div>
                    <span className="divider-text">{children}</span>
                    <div className={lineClassNames}></div>
                </div>
            )
        }
        
        if (titlePlace === 'right') {
            return (
                <div className={baseClassNames}>
                    <div className={lineClassNames}></div>
                    <span className="divider-text">{children}</span>
                    <div className={lineClassNames}></div>
                </div>
            )
        }
        
        // center (default)
        return (
            <div className={baseClassNames}>
                <div className={lineClassNames}></div>
                <span className="divider-text">{children}</span>
                <div className={lineClassNames}></div>
            </div>
        )
    }

    return <div className={baseClassNames}></div>
}

export default Divider