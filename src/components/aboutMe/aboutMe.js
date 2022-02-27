import React from 'react'
import '../aboutMe/aboutMe.css'

export default function AboutMe() {
    return (
        <>
            <div className="about-bg">

                <div >
                    <text className="about-header">About Me</text>
                </div>

                <view className="about-txt">
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
