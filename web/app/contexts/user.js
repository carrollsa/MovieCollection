import React, { useContext } from 'react'

const UserContext = React.createContext()

export default UserContext
export const UserConsumer = UserContext.Consumer
export const UserProvider = UserContext.Provider