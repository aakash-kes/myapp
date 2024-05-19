import React, { useState } from 'react'

const HocCounter = () => {
  const [count, setCount] = useState(1)

  return (
    <>
      <h1 >Increment here{count}</h1>
      <button onClick={() => setCount(count + 1)}>click to inrement</button>
    </>
  )
}

export default HocCounter
