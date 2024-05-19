import React, { useEffect } from 'react'

const ChildCompo = () => {
 useEffect(()=>{
  console.log("welcome to child component")
  return()=>{
      console.log("by by i am out")
    }
  
 })

  return (
    <>
      <span>This is a child component</span>
    </>
  )
}

export default ChildCompo
