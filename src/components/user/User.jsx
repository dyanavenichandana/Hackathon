import React from 'react'
import {useParams} from 'react-router-dom'
const User = () => {
    const {userid}= useParams()
    

  return (
    <div className="bg-orange-500  text-3xl text-white">User:{userid}</div>

  )
}

export default User