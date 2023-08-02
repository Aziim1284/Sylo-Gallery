import React from 'react'
import girls1 from "../assets/girls.jpg"
import girls2 from "../assets/girl2.jpg"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
const Customer = () => {
  return (
    <>
    <h1 style={{textAlign:"center"}}>See What Our Customers Say</h1>
    <div style={{display:"flex", gap:"20px" , overflowX:"scroll"}} className='Customer_mainDiv'>
      <div className="Customer_review one">
        <PlayCircleIcon className='Icons_video'/>
      </div>
      <div className="Customer_review2 one">
      <PlayCircleIcon className='Icons_video'/>
      </div>
      <div className="Customer_review one">
        <PlayCircleIcon className='Icons_video'/>
      </div>
      <div className="Customer_review2 one">
      <PlayCircleIcon className='Icons_video'/>
      </div>
      <div className="Customer_review one">
        <PlayCircleIcon className='Icons_video'/>
      </div>
      <div className="Customer_review2 one">
      <PlayCircleIcon className='Icons_video'/>
      </div>
      <div className="Customer_review one">
        <PlayCircleIcon className='Icons_video'/>
      </div>
      <div className="Customer_review2 one">
      <PlayCircleIcon className='Icons_video'/>
      </div>
    </div>
    </>
  )
}

export default Customer