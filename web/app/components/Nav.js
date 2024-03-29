import React from 'react'
import ThemeContext from '../contexts/theme'
import { NavLink } from 'react-router-dom'

const activeStyle = {
    color: 'rgb(187, 46, 31)'
}

export default function Nav({ toggleTheme }) {
    const theme = React.useContext(ThemeContext)

    return (
            <nav className='row space-between'>
                <ul className='row nav'>
                    <li>
                        <NavLink
                            to='/'
                            exact
                            activeStyle={activeStyle}
                            className='nav-link'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <span> | </span>
                    </li>
                    <li>
                        <NavLink
                            to='/mycollection'
                            activeStyle={activeStyle}
                            className='nav-link'>
                            My Collection
                        </NavLink>
                    </li>
                </ul>
                <button
                    style={{ fontSize: 30 }}
                    className='btn-clear'
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? '🔦' : '💡'}
                </button>
            </nav>
    )
}

1