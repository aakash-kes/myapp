import React, { useState } from 'react'

const OnHoverCompo = () => {
  const [data, setData] = useState(1)

  return (
    <>
      <p>for onMouseOver</p>
      <h1>My increment value ={data}</h1>
      <button onMouseOver={() => setData(data + 3)}>Increment</button>
    </>
  )
}

export default OnHoverCompo
