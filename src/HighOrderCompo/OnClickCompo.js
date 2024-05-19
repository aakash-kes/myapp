import React from 'react'
// import { useState } from 'react'
import IncrementCompo from './IncrementCompo'

const OnClickCompo = (props) => {
  // const [data, setData] = useState(1)

  return (
    <>
      <p>For OnClick </p>
      <h1>My increment value ={props.count}</h1>
      <button onClick={props.handleChange}>Increment</button>
    </>
  )
}

export default IncrementCompo(OnClickCompo)
