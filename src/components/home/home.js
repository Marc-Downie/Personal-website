import React from 'react'
import '../home/home.css'
import marcHead from '../../assets/sam_jack.jpg'



export default function Home() {
  return (
    <>
      <div className="home-bg">

        <div className='name-wrapper'>
          <text className="name">Marc Downie</text>
          <text className="job-title">Software Engineer</text>
        </div>

        <div className="img-wrapper">
          <img className="img-head" src={marcHead} alt='My Face'></img>
        </div>

        <text className="home-txt">
          <h3>Welcome</h3>
        </text>
      </div>
    </>
  )
}
