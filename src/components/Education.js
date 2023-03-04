import React from 'react'

export default function Education() {
  return (
    <div>
        <article className="content education gray-bg" id="chaptereducation">
                        <div className="inner">
                            <h2>Research & Education</h2>
                            <div className="title-divider"></div>
                            <h3>Just My Research</h3>
                            <br />
                            <p>
                                <a href="https://orcid.org/0000-0003-4641-7787"><img src="assets/images/ORCiD.jpg"
                                    style={{borderRadius:"50%", height:"10%", width:"10%"}} /></a>
                                <a href="https://publons.com/researcher/4325047/parth-shah/"><img src="assets/images/wos.png"
                                    style={{borderRadius:"10%", height:"10%", width:"10%", marginLeft:"20px"}} /></a>
                                <a href="https://www.scopus.com/authid/detail.uri?authorId=57190799699"><img src="assets/images/scopus.png"
                                    style={{borderRadius:"50%", height:"10%", width:"10%", marginLeft:"20px"}} /></a>
                                <a href="https://scholar.google.co.in/citations?user=Z32oT0oAAAAJ"><img src="assets/images/google.png"
                                    style={{borderRadius:"50%", height:"10%", width:"10%", marginLeft:"20px"}} /></a>
                            </p>

                            <h3>Just My Education</h3>

                            <div className="education-con">
                                <div className="container-sub">
                                    <div className="full-divider"></div>
                                    <div className="row">
                                        <div className="education-details">
                                            <div className="col-6 margin-bottom50 margin-top50">
                                                <div className="col-3 icon-block"><i className="fa fa-photo"></i></div>
                                                <div className="flot-left">
                                                    <h5>CHAROTAR University of Science and Technology</h5>
                                                    <h4>Doctor of Phylosophy</h4>
                                                    <span>20012 - 2017</span>
                                                </div>
                                            </div>
                                            <div className="col-6 margin-bottom50 margin-top50 no-margin-top"> Title of the thesis is "Secure and
                                                Efficient Data Deduplication with Data Integrity Proofs for Cloud Computing Data Storage". The
                                                study fields were Privacy Preservation using Homomorphic Encryption, Elliptic Curve Cryptogrpahy
                                                (ECC) and Data Deduplication in distributed file system. </div>
                                        </div>
                                        <div className="full-divider"></div>
                                        <div className="education-details">
                                            <div className="col-6 margin-bottom50 margin-top50">
                                                <div className="col-3 icon-block"><i className="fa fa-laptop"></i></div>
                                                <div className="flot-left">
                                                    <h5>dharmsinh desai university</h5>
                                                    <h4>PG - Computer Engineering</h4>
                                                    <span>2002 - 2004</span>
                                                </div>
                                            </div>
                                            <div className="col-6 margin-bottom50 margin-top50 no-margin-top"> </div>
                                        </div>
                                        <div className="full-divider"></div>
                                        <div className="education-details">
                                            <div className="col-6 margin-bottom50 margin-top50">
                                                <div className="col-3 icon-block"><i className="fa fa-life-bouy"></i></div>
                                                <div className="flot-left">
                                                    <h5>Saurashtra University</h5>
                                                    <h4>UG - Computer Engineering</h4>
                                                    <span>1997 - 2001</span>
                                                </div>
                                            </div>
                                            <div className="col-6 margin-bottom50 margin-top50 no-margin-top"> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
    </div>
  )
}
