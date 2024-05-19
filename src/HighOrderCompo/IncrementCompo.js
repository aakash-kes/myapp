import React from 'react'

const IncrementCompo = (Com) => {
  class AddedCounter extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        counter: 1,
      }
    }
    handleChange = () => {
      this.setState({
        counter: this.state.counter + 1,
      })
    }

    render() {
      return <Com count={this.state.counter} handleChange={this.handleChange} />
    }
  }

  return AddedCounter
}
export default IncrementCompo
