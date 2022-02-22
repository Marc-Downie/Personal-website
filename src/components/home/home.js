import React from 'react'
import '../home/home.css'
import marcHead from '../../assets/img-MarcHead.jpg'



export default function Home() {
  return (
    <>
    <div className="bg">
      <span className='name-wrapper'>
        <p className="name">Marc Downie</p>
        <p className="job-title">Software Engineer</p>
      </span>

      <div className="img-wrapper">
        <img className="img-head" src={marcHead} alt='My Face'></img>
      </div>
      <p className="home-txt">

        <h3>Welcome</h3>
      </p>
      </div>
    </>
  )
}
