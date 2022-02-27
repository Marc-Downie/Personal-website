import React, { useEffect } from 'react'
import '../home/home.css'
import marcHead from '../../assets/sam_jack.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'



export default function Home() {
  useEffect(() => {
    Aos.init({})
}, []);

  return (
    <>
      <div className="home-bg">

        <div data-aos-duration="1500" data-aos="fade" className='name-wrapper'>
          <text className="name">Marc Downie</text>
          <text className="job-title">Software Engineer</text>
        </div>

        <div data-aos-duration="2000" data-aos="fade" className="img-wrapper">
          <img className="img-head" src={marcHead} alt='My Face'></img>
        </div>

        <div data-aos-duration="2000" data-aos="fade" className="home-txt">
          <h3>Welcome</h3>
        </div>
      </div>
    </>
  )
}
