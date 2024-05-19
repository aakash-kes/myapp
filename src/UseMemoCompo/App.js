import React, { useCallback, useEffect, useMemo, useState } from 'react'
import UseMemo from './UseMemo'

const App = () => {
  const [data, setData] = useState(Math.random)
  const [count, setCount] = useState(1)

  useEffect(() => {
    console.log('checking state update')
  })

  useEffect(() => {
    setInterval(() => {
      //   setData: Math.random().toFixed(2)
      setData(Math.random().toFixed(5))
    }, 2000)
  }, [])

  //   momorized the funtion location is called useCallback hooks
  //   const handleChange = () => {
  //     setCount(count + 1)
  //   }

  const handleChange = useCallback(() => {
    setCount(count + 1)
  },[count])

  return (
    <>
      <h1>My value is = {data}</h1>
      {/* <button onClick={() => setData(Math.random)}>Click</button> */}
      <UseMemo val={count} handleChange={handleChange} />
      <></>
    </>
  )
}

export default App
