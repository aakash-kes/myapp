import React from 'react'

import { fName } from './App'

const CompoC = () => {
  return (
    <>
      <div>
        <fName.Consumer>
          {(test) => {
            return (
              <>
                <h1>my value is ={test}</h1>
              </>
            )
          }}
        </fName.Consumer>
      </div>
    </>
  )
}

export default CompoC
