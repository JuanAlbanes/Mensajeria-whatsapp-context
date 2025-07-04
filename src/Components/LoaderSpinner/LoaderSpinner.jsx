import React from 'react'
import './LoaderSpinner.css'

export default function LoaderSpinner({ size = "medium", color = "orange" }) {
return (
    <div className={`nuclear-spinner ${size}`}>
        <div className={`nucleus ${color}`}></div>
        <div className={`radiation-wave wave-1 ${color}`}></div>
        <div className={`radiation-wave wave-2 ${color}`}></div>
        <div className={`radiation-wave wave-3 ${color}`}></div>
    </div>
)
}
