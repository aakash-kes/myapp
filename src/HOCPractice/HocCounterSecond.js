import React from 'react'
import HocCounter from './HocCounter'

const HocCounterSecond = (props) => {
  return (
    <>
      <h1 style={{backgroundColor:"red",width:200}}>Second Compo</h1>
      <HocCounter res={props.cmp} />
      {/* <>There is Sec count res={props.cmp}</> */}
    </>
  )
}

export default HocCounterSecond
