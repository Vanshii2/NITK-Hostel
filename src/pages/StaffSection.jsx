import React from "react";
import "../styles/about/StaffSection.css";

const StaffSection = () => {
  return (
    <div className="section">
      <div className="overlay">
        <div className="aboutUsContainer">
          <h1 className="aboutUs">
            <span className="letter" style={{"--animation-delay": "0s"}}>A</span>
            <span className="letter" style={{"--animation-delay": "0.1s"}}>B</span>
            <span className="letter" style={{"--animation-delay": "0.2s"}}>O</span>
            <span className="letter" style={{"--animation-delay": "0.3s"}}>U</span>
            <span className="letter" style={{"--animation-delay": "0.4s"}}>T</span>
            <span className="letter" style={{"--animation-delay": "0.5s"}}>&nbsp;</span>
            <span className="letter" style={{"--animation-delay": "0.6s"}}>U</span>
            <span className="letter" style={{"--animation-delay": "0.7s"}}>S</span>
          </h1>
        </div>
        <div className="cardsWrapper">
          <div className="card">
            <div>
              <h2 className="title">Director's Message</h2>
              <img src="/director.jpg" alt="Director" className="staffImage" />
            </div>
            <div className="cardContent">
              <p className="description">
                NITK has a long legacy in southern India of imparting education to move from thinking about the greatest problems affecting society to understanding and solving them and this has been our long standing vision. We are built of cutting edge engineering and science infrastructure, fostering highly motivated faculty and staff members to help students leverage each other's developments and take the institute to the next level. Years of unrelenting contributions of all the stakeholders has let NITK evolve into an institute of national importance.
                <br /><br />
                Our primary mission is to provide resources and state-of-the art programs that will help in our student's professional development. The central Research facility (CRF) and Career Development Centre (CDC) are a few initiatives the institute has taken to engage the students to the real-time issues and make the students stronger candidates for national, and international workforce as well as graduate and higher professional programs.
                <br /><br />
                Our focus is to seek and continuously improve our performance and to grow into one of the best institutions for engineering education in the country.
                <br /><br />
                Prof. B Ravi<br />
                Director<br />
                National Institute of Technology Karnataka, Surathkal
              </p>
            </div>
          </div>

          <div className="card">
            <div>
              <h2 className="title">Chief Warden's Message</h2>
              <img src="/chiefwarden.jpg" alt="Chief Warden" className="staffImage" />
            </div>
            <div className="cardContent">
              <p className="description">
                The cost of discipline is always less than the price of Regret; So self-discipline is the biggest investment for success in life. My warm greetings to all the National Institute of Technology Karnataka, Surathkal hostel students, their parents living in India, and other parts of the world, and esteemed visitors of this website.
                <br /><br />
                It gives us mammoth inclination to welcome you all to be a part of the NITK family that strives to provide students a homely and healthy atmosphere with complete Safety and security in the hostel. At the hostels of NITK, we not only take efforts to provide its students a neat and clean environment and a comfortable place to live in, but encourage them to live in discipline. We understand discipline is the key to success and career building, hence we promote self-discipline among students.
                <br /><br />
                Our focus is to seek and continuously improve our performance and to grow into one of the best institutions for engineering education in the country. My warm wishes are with you for your outstanding academic careers.
                <br /><br />
                Dr. Pushparaj Shetty D<br />
                Chief Warden<br />
                National Institute of Technology Karnataka, Surathkal
              </p>
            </div>
          </div>

          <div className="why-card">
            <div className="why-card-content">
              <h2 className="why-title">Why Choose Us</h2>
              <p className="why-description">
                NITK is located in Mangalore City along Kanyakumari-Mumbai National Highway 66. It is well connected by road, rail and by air to major cities in India and few international destinations. The Institute is located amid 300 acres of sylvan surroundings with the picturesque Western Ghat Mountains.<br/>
                It is ranked among Top Engineering Institutes in India. NITK, Surathkal. It has achieved rank 12 in <a href="https://www.nirfindia.org/2023/EngineeringRanking.html" target="_blank" rel="noopener noreferrer" style={{ color: '#7b61ff' }}>NIRF ranking of Engineering Colleges in India in 2023</a>.<br/><br/>
                <ul>
                  <li>One of the oldest and pioneer Technical Institutions in India started in 1960.</li>
                  <li>World class infrastructure and highly equipped labs and classrooms with all modern amenities.</li>
                  <li>Mega hostel blocks with state of the art facilities and Wi-Fi Connectivity.</li>
                  <li>Modern international standard swimming pool, gymnasium and individual standard fields for all major games and sports.</li>
                  <li>Rated as one of the Best Engineering Colleges in India.</li>
                  <li>Linkages and Collaborations with various leading International and National Institutes, Industries and Organizations across the Globe.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffSection;

