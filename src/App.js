import React from 'react'
import Context0 from './components/Context1'

export const UserContext = React.createContext()
export const ChallengeContext = React.createContext()
function App() {
  return (
    <div>
      <UserContext.Provider value={'Wemimo'}>
        <ChallengeContext.Provider value={'30 Days of React'}>
        <Context0 />
        </ChallengeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
