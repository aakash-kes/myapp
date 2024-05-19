import React from 'react'
import HocCounter from './HocCounter'
import HocCounterSecond from './HocCounterSecond'
import ThirdCounter from './ThirdCounter'

const App = () => {
  return (
    <>
      <h1>HOC</h1>

      {/* <HocCounter cmp={HocCounter} /> */}
      <HocCounterSecond cmp={HocCounter} />
      <ThirdCounter cmp={HocCounter} />
    </>
  )
}

export default App
