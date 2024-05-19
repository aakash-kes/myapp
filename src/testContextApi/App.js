import React, { createContext } from 'react'
import CompA from './CompA'

const aName = createContext()
const lName = createContext()

const App = () => {
  return (
    
    <>
      <aName.Provider value="Hello EveryOne">
        <lName.Provider value="number">
          <CompA />
        </lName.Provider>
      </aName.Provider>
    </>
  )
}

export default App
export { aName }
export { lName }
