import React, { useContext } from 'react'

const ThemeContext = React.createContext()

export default ThemeContext
export const ThemeConsumer = ThemeContext.Consumer
export const ThemeProvider = ThemeContext.Provider