// import React, { Component } from 'react'
import PureComp from './PureComp'

// export class App extends Component { when have a normal component then do the re render //

// nxt

// export class App extends PureComp { when have a pureComponent then do not re rendering //

export class App extends PureComp {
  constructor() {
    super()
    this.state = {
      count: 1,
    }
  }

  render() {
    console.warn('re-rendering')
    return (
      <>
        <h1>My count value is ={this.state.count}</h1>
        <button onClick={() => this.setState({ count: 1 })}>Increment</button>
      </>
    )
  }
}

export default App
