import React from 'react'
import {signOut} from '@firebase/auth'
import {auth} from '../firebase'


const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Shreyansh </span>
        <div className="user">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROG2_bUDii4j1o8-1g1YUeqjanupInS5ILhcapOO9ioUmss9aGStfT9ydxSSdKndIQsDA&usqp=CAU" alt=" Loading" />
          <span>John</span>
          <button onClick={()=>signOut(auth)}>logout</button>
        </div>
    </div>
  )
}

export default Navbar