import React from 'react'
import { ButtonProps } from './type'
import './Button.scss'

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    onClick,
    children,
    className = '',
    type = 'button',
    ...props
})=>{
    const classes = [
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        disabled && 'btn--disabled',
        loading && 'btn--loading',
        className
    ].filter(Boolean).join(' ')

    return (
        <button 
            type={type}
            className={classes}
            disabled={disabled||loading}
            onClick={onClick}
            {...props}
        >
            {loading && <span className='btn__spinner'></span>}
            {children}
        </button>
    )
}


export default Button