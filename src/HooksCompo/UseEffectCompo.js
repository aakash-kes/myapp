import React, {  useState,useEffect } from 'react'
import ChildCompo from './ChildCompo'

const UseEffectCompo = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(1)
  const [toggle, setTogglal] = useState(true)

  // useEffect(() => {
  //   console.log('hello everyobne ')
  // }, [])

  // useEffect(() => {
  //   console.log('hello only one ')
  // }, [data])

  return (
    <>
      {/* <h1>my count is {count} numeric </h1>
      <button onClick={() => setCount(count + 2)}>increment</button>
      <h2>this is 2nd number{data}</h2>
      <button onClick={() => setData(data + 1)}>Click here</button>
      <br />
      <br /> */}

      {toggle ? <ChildCompo/> : ''}
      <button onClick={() => setTogglal(!toggle)}>Toggle show & Hide Button</button>
    </>
  )
}

export default UseEffectCompo
