import React from 'react'

export default function Contact() {
  return (
    <article className="content contact gray-bg" id="chaptercontact">
    <div className="inner">
        <h2>Contact</h2>
        <div className="title-divider"></div>
        <h3>Let's Keep In Touch</h3>

        <div className="full-divider"></div>
        <div className="contact-con margin-top50">
            <div className="container-sub">
                <div className="row">
                    <div className="contact-details">
                        <div className="col-6">
                            <div className="contact-text">
                                <div className="col-2 icon-block address"><i className="fa fa-map-marker"></i></div>
                                <div className="flot-left"> <strong>Parth Shah</strong><br />
                                    A7, Astha Angan, Nr Anjaniya Niketan, <br />
                                    Anand, Gujarat-388120, India. </div>
                            </div>
                            <div className="contact-text">
                                <div className="col-2 icon-block phone"><i className="fa fa-phone"></i></div>
                                <div className="flot-left"> <strong>Phone</strong><br />
                                    +91-9925020358 </div>
                            </div>
                            <div className="contact-text">
                                <div className="col-2 icon-block email"><i className="fa fa-envelope"></i></div>
                                <div className="flot-left"> <strong>Email</strong><br />
                                    <a href="mailto:learnwithparth.in@gmail.com">learnwithparth.in@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 m-margin-top30">
                            <h3>I'm also on Professional Networks</h3>
                            <div className="contact-social margin-top30">
                                <a href="https://github.com/learnwithparth" target="_blank" className="github"><i
                                    className="fa fa-github"></i></a>
                                <a href="https://twitter.com/learnwithparth" target="_blank" className="twitter"><i
                                    className="fa fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/in/parth788/" target="_blank" className="linkedin"><i
                                    className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="full-divider"></div>

        </div>
    </div>
</article>
  )
}
