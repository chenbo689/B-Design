import React from 'react'

export interface DividerProps {
    children?: React.ReactNode
    className?: string
    dashed?: boolean
    type?: 'horizontal' | 'vertical'
    titlePlace?: 'left' | 'right' | 'center'
}