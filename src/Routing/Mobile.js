import React from 'react'
import { useParams } from 'react-router-dom'

const Mobile = () => {
const {Category}=useParams();
  return (
    <>
      <h1>mY PHONE IS{Category} ipHONE</h1>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">mobile </li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
    </>
  )
}

export default Mobile
