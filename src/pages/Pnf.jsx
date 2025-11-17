import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
        
        <img width={'30%'} src="pnf.gif" alt="" />
        <h2>Page Not Found</h2>
        <p>Page You are Looking is not Available</p>
        <Link to={'/'} className='btn btn-dark mb-3'>Go Back</Link>
    </div>
  )
}

export default Pnf