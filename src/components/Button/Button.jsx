import React from "react"
import "./Button.scss"

export default function Button ({
    children,
    className,
    onClick
}) {
    const onClickHandler = () => {
        if (onClick) {
            onClick()
        }
    }
    return <button className={`Button ${className || ""}`} onClick={() => onClickHandler()}>
        {children}
    </button>
}