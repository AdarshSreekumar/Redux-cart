import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap'

function Wishlist() {
  return (
    <>
    <Header/>
    <div className='container py-5'>
      {/* wishlist with content */}
      <div className='row my-5'>
        <div className='col-md-3 mb-2'>
          {/* card - react bootstrap */}
          <Card >
            <Card.Img height={'250px'} variant='top' src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'/>
      
      <Card.Body className='text-center'>
        <Card.Title> Title</Card.Title>

        <div className='d-flex justify-content-evently my-1'>
          <button className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark}/> </button>
          <button className='btn text-success fs-4 ms-3'><FontAwesomeIcon icon={faCartPlus}/> </button>
        </div>
        
      </Card.Body>
    </Card>

        </div>
      </div>
    </div>
    </>
  )
}

export default Wishlist