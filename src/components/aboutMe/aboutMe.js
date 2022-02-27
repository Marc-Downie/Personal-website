import React, { useEffect } from 'react'
import '../aboutMe/aboutMe.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function AboutMe() {
    useEffect(() => {
        Aos.init({})
    }, []);

    return (
        <>
            <div className="about-bg">

                <div >
                    <text data-aos-duration="2000" data-aos="fade-up" className="about-header"
                    >About Me</text>
                </div>

                <view data-aos-duration="3000" data-aos="fade-up" className="about-txt">
                    <h4>
                        I wanted to improve myself and my career opportunities by starting my journey to become a Software Engineer.
                        I have graduated from a Professional Software Development course at CodeClan that teaches software fundamentals
                        and skills including Python, JavaScript, Java, HTML, CSS, Agile methodologies, Restful API's and UX design.
                        With a strong emphasis on the SOLID principles of OOP and Test-Driven Development.
                        During this course I worked on three projects, a gym website, a Pokemon game and a local shop search website.
                    </h4>
                </view>
                {/* <img>Image</img> */}
            </div>
        </>
    )
}
