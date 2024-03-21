import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
  return (
    <div className='text-center bg-amber-500 text-3xl'>User: {userid}</div>
  )
}

export default User