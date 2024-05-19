import React from 'react'
// import { useState } from 'react'
import IncrementCompo from './IncrementCompo'

const OnDoubleClickCompo = (props) => {
  // const [data, setData] = useState(1)

  return (
    <>
      <p>for Double Click</p>
      <h1>My increment value ={props.count}</h1>
      <button onDoubleClick={props.handleChange}>Increment</button>
    </>
  )
}

export default IncrementCompo(OnDoubleClickCompo)
