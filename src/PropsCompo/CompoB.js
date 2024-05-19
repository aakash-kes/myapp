import React from 'react'
import CompoC from './CompoC'

const CompoB = (props) => {
  return (
    <>
      <CompoC result={props.res} />
      <p>This is a CompoB</p>
    </>
  )
}

export default CompoB
