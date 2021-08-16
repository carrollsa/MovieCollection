import * as React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

export default function PerformanceWarning ({ text }) {
    return (
        <div className='warning center-text'>
            <FaExclamationTriangle color='red' size={22} />
            {text}
        </div>
    )
}