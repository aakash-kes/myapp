import React from 'react'

import { aName } from '../App'
import { lName } from '../App'

const CompC = () => {
  return (
    <>
      <div>
        <aName.Consumer>
          {(res) => {
            return (
              <>
                {/* <h1>my value is {res}</h1> */}

                <lName.Consumer>
                  {(pop) => {
                    return (
                      <>
                        <h1>my value is ={res}</h1>
                        <h1>my value is ={pop}</h1>


                      </>
                    )
                  }}
                </lName.Consumer>
              </>
            )
          }}
        </aName.Consumer>
      </div>
    </>
  )
}

export default CompC
