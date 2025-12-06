import React from 'react'

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    loading?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement>)=>void
    children?: React.ReactNode
    className?: string
    type?: 'button' | 'submit' | 'reset'
}