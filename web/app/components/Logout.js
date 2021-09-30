import React from 'react'
import { logout } from '../utils/movieClient'

function Logout() {  
    const refresh = () => {
        window.location.reload()
    }

    return (
        <div className='row align-right'>
            <nav
                className='logout-btn'
                onClick={() => logout()
                    .then(response => 
                        window.location.href = 'login?logout=true')}>
                Sign Out
            </nav>
        </div>
    )
}

export default Logout
