import React from 'react'

const WelcomCompo = () => {
  return (
    <>
      <h1>this isn welcome componwnt</h1>
    </>
  )
}

function GreetCompo() {
  return (
    <>
      <h1>This is a Greet component</h1>
    </>
  )
}

const Conditional = (props) => {
  const test = props.akkuu
  if (test) {
    return (
      <>
        <WelcomCompo />
      </>
    )
  } else {
    return (
      <>
        <GreetCompo />
      </>
    )
  }
}

export default Conditional
