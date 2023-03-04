import React from 'react'

export default function LeftNavigation() {
    return (
        <div id="container" className="container">

            <aside className="menu" id="menu">
                <div className="logo">
                    <img src="assets/images/logo1.png" width="140" height="140" alt="Parth" />
                </div>

                <a href="#menu1" className="menu-link"></a>

                <nav id="menu1" role="navigation"> <a href="#chapterintroduction"><span id="link_introduction"
                    className="active">Home</span></a> <a href="#chapterabout"><span id="link_about">About</span></a> <a
                        href="#chapterskills"><span id="link_skills">Skills</span></a> <a href="#chapterexperience"><span
                            id="link_experience">Experience</span></a> <a href="#chaptereducation"><span id="link_education">Research &
                                Education</span></a> <a href="#chapterportfolio"><span id="link_portfolio">Certificates</span></a><a
                                    href="#chaptercontact"><span id="link_contact">Contact</span></a>
                                    {/* <a href="/blog"><span
                                        id="link_blog">Blog</span></a> */}
                                        </nav>
                <div className="social">
                    <a href="https://github.com/learnwithparth" target="_blank" className="github"><i className="fa fa-github"></i></a>
                    <a href="https://twitter.com/learnwithparth" target="_blank" className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/shah-parth-d" target="_blank" className="linkedin"><i
                        className="fa fa-linkedin"></i></a>

                </div>
                <div className="copyright"> © Parth Shah.<br />
                    All Rights Reserved. </div>
            </aside>

            <a href="#menu" className="totop-link">Go to the top</a>
            

        </div>
    )
}
