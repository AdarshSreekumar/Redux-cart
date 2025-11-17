import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Header/>
    <div className='container py-5'>
      <div className="row my-5">
        {/* duplicate */}
        <div className='col-md-3 mb-2'>
          {/* card */}
          <Card >
            <Card.Img height={'250px'} variant='top' src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'/>
      
      <Card.Body className='text-center'>
        <Card.Title> Title</Card.Title>
        <Link to={`/products/id/view`} className='btn btn-primary'>View More</Link>
      </Card.Body>
    </Card>

        </div>
      </div>
    </div>
    </>
  )
}

export default Home