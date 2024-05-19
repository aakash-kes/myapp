import React, { Component } from 'react'
// when a previous value and new  value are same then not re render in  pureComponent
// pure component do not re render when props and state when have a same value 
export class PureComp extends Component {
  render() {
    console.log('PureComponent')
    return (
      <>
        <h1> This is PureComponent</h1>
      </>
    )
  }
}

export default PureComp
