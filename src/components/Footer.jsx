import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <div style={{height:'300px'}} className='bg-primary d-flex justify-content-center align-items-center flex-column text-light'>
      <div className='d-flex justify-content-evently'>
        <div style={{width:'300px'}} className='intro'>
          <h3>
            <FontAwesomeIcon icon={faTruckFast}/>Daily Cart
          </h3>
          <p>Designed and built with all the love in the world by the luminar team with the help of our contributors</p>

        </div>
        <div className='links d-flex '></div>
      </div>
    </div>
  )
}

export default Footer