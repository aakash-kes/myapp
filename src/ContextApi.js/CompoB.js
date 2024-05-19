import React, { useContext } from 'react'
import CompoC from './CompoC'
import { fName } from './App'

const CompoB = () => {
    const data=useContext(fName)
  return <>

  <h1>My value is= {data} from compoB</h1>


  {/* <CompoC/> */}
  </>
}

export default CompoB
