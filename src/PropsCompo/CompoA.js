import React from 'react'

import CompoB from './CompoB'

const CompoA = (props) => {
  return (
    <>
      <CompoB  res={props.akkuu}/>
      <p>This is CompoA</p>
    </>
  )
}

export default CompoA
