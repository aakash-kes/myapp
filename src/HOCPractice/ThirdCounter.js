import React from 'react'
import HocCounter from './HocCounter'

const ThirdCounter = (props) => {
  return (
    <>
      <h1 style={{backgroundColor:"green",width:200}}>Second Compo</h1>
      <HocCounter res={props.cmp} />
      {/* <>There is Sec count res={props.cmp}</> */}
    </>
  )
}

export default ThirdCounter
