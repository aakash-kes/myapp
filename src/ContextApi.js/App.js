import React, { createContext } from 'react'
import CompoA from './CompoA'

const fName = createContext()

const App = () => {
  return (
    <>
      <fName.Provider value="Hello">
        <CompoA />
        
      </fName.Provider>

      {/* <h1>This is App</h1> */}
    </>
  )
}
export default App
export {fName}
