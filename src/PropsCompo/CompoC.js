import React from 'react'
import CompoD from './CompoD'

const CompoC = (props) => {
  return (
    <>
      <CompoD ress={props.result} />
      <p>this is CompoC</p>
    </>
  )
}

export default CompoC
