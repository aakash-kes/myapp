import React, { memo } from 'react'

// when a use memo set then not re render the previus value and new value same as a pure funtion
const UseMemo = (props) => {
  console.log('memo child call')
  return (
    <>
      <h1>my value is {props.val}</h1>
      <button onClick={props.handleChange}>ClickForHandlecahnge</button>
    </>
  )
}

export default memo(UseMemo)
