import React from 'react';
import '../../css/progress.css'
import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default function Progress() {
    return (
        <div>
            <Header/>
            <div>
                <div id="status-box" className="basic-design">
                    <h1>status</h1>
                    <hr />
                    <br /> 
                    <div className="process-wrapper">
                    <div id="progress-bar-container">
                        <ul>
                        <li className="step step01 active"><div className="step-inner">STEP - 01</div></li>
                        <li className="step step02"><div className="step-inner">STEP - 02</div></li>
                        <li className="step step03"><div className="step-inner">STEP - 03</div></li>
                        <li className="step step04"><div className="step-inner">STEP - 04</div></li>
                        <li className="step step05"><div className="step-inner">STEP - 05</div></li>
                        </ul>
                        <div id="line">
                        <div id="line-progress" />
                        </div>
                    </div>
                    <div id="progress-content-section">
                        <div className="section-content discovery active">
                        <h2>Problem Identification</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.</p>
                        </div>
                        <div className="section-content strategy">
                        <h2>Problem Registration</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.</p>
                        </div>
                        <div className="section-content creative">
                        <h2>NGO - Action</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.</p>
                        </div>
                        <div className="section-content production">
                        <h2>Escalation Matrix</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.</p>
                        </div>
                        <div className="section-content analysis">
                        <h2>Final Status</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="ngo-comments" className="basic-design">
                    <h1>NGO - Comments</h1>
                    <hr />
                    <div className="ngo-comments-container">
                    <div>
                        <img src="https://i1.wp.com/www.peace-ed-campaign.org/wp-content/uploads/2016/06/amnesty-international.png?resize=600%2C438&ssl=1" />
                        <b><br />Amnesty <br />International<br /></b>
                        21/5/2021
                    </div>
                    <div className="comments1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus enim ipsa dolor minus at, vero mollitia voluptas ullam accusantium ipsam ratione rem tenetur odit perspiciatis quasi voluptatibus accusamus fugit.
                    </div>
                    <div>
                        <img src="data:image/png;base64,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" />
                        <b><br />UNESCO<br /></b>
                        21/5/2021
                    </div>
                    <div className="comments1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus enim ipsa dolor minus at, vero mollitia voluptas ullam accusantium ipsam ratione rem tenetur odit perspiciatis quasi voluptatibus accusamus fugit.
                    </div>
                    </div>
                </div>
                <div id="rewards" className="basic-design">
                    <h1>Rewards</h1>
                    <hr />
                    <div className="reward-container">
                    <div className="badge">
                        <a href="https://www.accredible.com/" target="blank">
                        <img src="D:\Electrical Engineering\Internship\EDU-FX\download.png" />
                        </a>
                        {/* <b><br> Participant badge <br></b>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem consectetur, expedita asperiores assumenda officia delectus neque eum dolorum beatae dolores maxime</p>
                    <button>Credentials</button> */}
                    </div>
                    <div className="badge">
                        <a href="https://www.accredible.com/" target="blank">
                        <img src="D:\Electrical Engineering\Internship\EDU-FX\download.png" />
                        </a>
                    </div>
                    <div className="badge">
                        <a href="https://www.accredible.com/" target="blank">
                        <img src="D:\Electrical Engineering\Internship\EDU-FX\download.png" />
                        </a>
                    </div>
                    <div className="badge">
                        <a href="https://www.accredible.com/" target="blank">
                        <img src="D:\Electrical Engineering\Internship\EDU-FX\download.png" />
                        </a>
                    </div>
                    <div className="badge">
                        <a href="https://www.accredible.com/" target="blank">
                        <img src="D:\Electrical Engineering\Internship\EDU-FX\download.png" />
                        </a>
                    </div>
                    </div>
                </div>
                <div id="feedback" className="basic-design">
                    <form>
                    <h1>Feedback</h1>
                    <hr />
                    <div className="id">
                        <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="id">
                        <input type="text" placeholder="Email" />
                    </div>
                    <textarea cols={15} rows={5} placeholder="Enter your valuable comments" defaultValue={""} />
                    <br />
                    <button>Submit</button>
                    </form>
                </div>
                </div>
            <Footer/>
        </div>
    )
}
