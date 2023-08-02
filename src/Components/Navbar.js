import React from 'react'
import {NavLink} from "react-router-dom"
import {AiFillHome} from "react-icons/ai"
import {AiOutlineOrderedList} from "react-icons/ai"
import {BsFillSearchHeartFill} from "react-icons/bs"
import {AiFillProfile} from "react-icons/ai"
const Navbar = () => {
  return (
    <div style={{display:"flex" , justifyContent:"space-between"}}>
    <div className='Navbar'>
     <NavLink to="/" className="NavbarElement">
     <AiFillHome size={33}/> 
      <p>Home</p>
     </NavLink>
     <NavLink to="/" className="NavbarElement">
      <BsFillSearchHeartFill size={33}/>
      <p>Search</p>
     </NavLink>
     <NavLink to="/" className="NavbarElement">
      <AiOutlineOrderedList size={33}/>
      <p>Order</p>
     </NavLink>
     <NavLink to="/" className="NavbarElement">
      <AiFillProfile size={33}/>
      <p>profile</p>
     </NavLink>
    </div>
    {/* <div className='searchbutton'>
    <form>
	<label for="search">Search</label>
	<input id="search" type="search" pattern=".*\S.*" required />
	<span class="caret"></span>
</form>
  </div> */}
    </div>
  )
}

export default Navbar