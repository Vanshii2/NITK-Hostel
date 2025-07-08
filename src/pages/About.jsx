// // import React from 'react'

// // function About() {
// //     return (
// //         <div>
// //             <h1>About</h1>
// //         </div>
// //     )
// // }

// // export default About;
// // src/pages/About.jsx
// import React from 'react';
// import StaffSection from "./StaffSection"; 
// import styles from '../styles/about/about.module.css'; 

// const About = () => {
//   return (
//     <div className={styles['about-bg-slideshow']}>
//       <div className={styles['about-bg-slide'] + ' ' + styles['about-bg1']}></div>
//       <div className={styles['about-bg-slide'] + ' ' + styles['about-bg2']}></div>
//       <div className={styles['about-container']}>
        
//         {/* <p className={styles['about-description']}>
//         </p> */}
//         <StaffSection />
//       </div>
//     </div>
//   );
// };

// export default About;
import React, { useEffect, useState } from "react";
// import Navbar from "../components/common/NavBar.jsx";
// import Footer from "../components/common/Footer.jsx";
import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <>
      {/* <Navbar /> */}
     
      
      <section className="relative w-full py-20 px-4 text-center animate-fade-in-section overflow-hidden min-h-[400px]">
      
        <img
          src="/campus-bg.avif"
          alt="NITK Campus"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          style={{zIndex:0}}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#192F59] mb-4 font-serif drop-shadow">About NITK Hostels</h1>
          <p className="text-lg md:text-xl text-white mb-6 font-sans drop-shadow">A vibrant, world-class campus fostering excellence, discipline, and community.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#192F59] to-teal-400 rounded-full mx-auto mb-8"></div>
        </div>
      </section>

      
      <section className="w-full max-w-4xl mx-auto my-12 px-4 py-8 bg-white rounded-2xl shadow-lg border-l-4 border-[#192F59] flex flex-col md:flex-row items-center gap-6 animate-fade-in-section">
        <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#192F59] to-teal-400 rounded-full shadow-md">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1" /></svg>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#192F59] mb-2">Our Vision</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#192F59] to-teal-400 rounded-full mb-4"></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            To nurture a vibrant, inclusive, and innovative residential community that empowers students to achieve academic excellence, personal growth, and global citizenship, while upholding the values of discipline, integrity, and mutual respect.
          </p>
        </div>
      </section>

      
      <section className="w-full max-w-6xl mx-auto my-16 px-4 flex flex-col md:flex-row items-start gap-10 md:gap-16 bg-white py-12 border-b border-red-200 animate-fade-in-section relative overflow-hidden" style={{boxShadow:'none', borderRadius:0}}>
      
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 w-[320px] h-[320px] hidden md:block pointer-events-none" fill="none" viewBox="0 0 120 120"><text x="0" y="100" fontSize="120" fontFamily="serif" fill="#192F59">"</text></svg>
        
        <div className="flex-shrink-0 w-full md:w-[380px] flex justify-center md:justify-start">
          <img
            src="https://hostels.nitk.edu.in/static/media/Director.cd15104f.jpg"
            alt="Director of NITK"
            className="w-[340px] h-[400px] object-cover object-top border border-gray-300 shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            style={{borderRadius:'8px'}}
          />
        </div>
        
        <div className="flex-1 flex flex-col justify-between h-full animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-[#222] mb-2 flex items-center gap-3" style={{lineHeight:'1.1'}}>Director's Message
            <svg className="w-8 h-8 text-teal-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#192F59] via-teal-400 to-red-200 rounded-full mb-8 animate-gradient-x"></div>
          <div className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-left relative z-10" style={{fontFamily:'serif'}}>
            <span className="font-bold text-[#192F59]">NITK has a long legacy</span> in southern India of imparting education to move form thinking about the greatest problems affecting society to understanding and solving them and this has been our long standing vision. We are built of <span className="text-teal-600 font-semibold">cutting edge engineering and science infrastructure</span>, fostering highly motivated faculty and staff members to help students leverage each other's developments and take the institute to the next level. Years of unrelenting contributions of all the stakeholders has let NITK evolve into an <span className="font-bold text-[#192F59]">institute of national importance</span>.<br/><br/>
            Our primary mission is to provide resources and <span className="text-teal-600 font-semibold">state-of-the art programs</span> that will help in our student's professional development. The central Research facility (CRF) and Career Development Centre (CDC) are a few initiatives the institute has taken to engage the students to the real-time issues and make the students stronger candidates for national, and international workforce as well as graduate and higher professional programs.<br/><br/>
            Our focus is to seek and continuously improve our performance and to grow into one of the <span className="font-bold text-[#192F59]">best institutions for engineering education in the country</span>.
          </div>
          <div className="text-right mt-4">
            <div className="font-bold text-2xl text-[#192F59] font-signature" style={{fontFamily:'cursive,serif'}}>Prof. B Ravi</div>
            <div className="text-teal-600 font-semibold">Director</div>
            <div className="text-gray-500 text-base">National Institute of Technology Karnataka, Surathkal</div>
          </div>
        </div>
      </section>

      
      <section className="w-full max-w-6xl mx-auto my-16 px-4 flex flex-col md:flex-row items-start gap-10 md:gap-16 bg-white py-12 border-b border-red-200 animate-fade-in-section relative overflow-hidden" style={{boxShadow:'none', borderRadius:0}}>
        
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 w-[320px] h-[320px] hidden md:block pointer-events-none" fill="none" viewBox="0 0 120 120"><text x="0" y="100" fontSize="120" fontFamily="serif" fill="#192F59">"</text></svg>
        
        <div className="flex-shrink-0 w-full md:w-[380px] flex justify-center md:justify-start">
          <img
            src="https://hostels.nitk.edu.in/static/media/chief-warden.004a262c.jpg"
            alt="Chief Warden of NITK"
            className="w-[340px] h-[400px] object-cover object-top border border-gray-300 shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            style={{borderRadius:'8px'}}
          />
        </div>
        
        <div className="flex-1 flex flex-col justify-between h-full animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-[#222] mb-2 flex items-center gap-3" style={{lineHeight:'1.1'}}>Chief Warden's Message
            <svg className="w-8 h-8 text-teal-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#192F59] via-teal-400 to-red-200 rounded-full mb-8 animate-gradient-x"></div>
          <div className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-left relative z-10" style={{fontFamily:'serif'}}>
            <span className="font-bold text-[#192F59]">The cost of discipline is always less than the price of Regret</span>; So self-discipline is the biggest investment for success in life. My warm greetings to all the National Institute of Technology Karnataka, Surathkal hostel students, their parents living in India, and other parts of the world, and esteemed visitors of this website.<br/><br/>
            It gives us mammoth inclination to welcome you all to be a part of the NITK family that strives to provide students a <span className="text-teal-600 font-semibold">homely and healthy atmosphere with complete Safety and security</span> in the hostel. At the hostels of NITK, we not only take efforts to provide its students a neat and clean environment and a comfortable place to live in, but encourage them to live in discipline. We understand <span className="font-bold text-[#192F59]">discipline is the key to success and career building</span>, hence we promote self-discipline among students.<br/><br/>
            Our focus is to seek and continuously improve our performance and to grow into one of the <span className="font-bold text-[#192F59]">best institutions for engineering education in the country</span>. My warm wishes are with you for your outstanding academic careers.
          </div>
          <div className="text-right mt-4">
            <div className="font-bold text-2xl text-[#192F59] font-signature" style={{fontFamily:'cursive,serif'}}>Dr. Pushparaj Shetty D</div>
            <div className="text-teal-600 font-semibold">Chief Warden</div>
            <div className="text-gray-500 text-base">National Institute of Technology Karnataka, Surathkal</div>
          </div>
        </div>
      </section>

      
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full max-w-6xl mx-auto my-16 px-4 py-12 animate-fade-in-section"
      >
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold font-serif text-[#192F59] mb-2 flex items-center gap-2"
        >
          Why Choose Us
          <svg className="w-8 h-8 text-teal-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-32 h-1 bg-gradient-to-r from-[#192F59] via-teal-400 to-red-200 rounded-full mb-8 origin-left"
        />
        <WhyChooseCounters />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-700 text-lg mb-6 mt-8"
        >
          <span className="font-bold text-[#192F59]">NITK</span> is located in Mangalore City along Kanyakumari-Mumbai National Highway 66. It is well connected by road, rail and by air to major cities in India and few international destinations. The Institute is located amid <span className="text-teal-600 font-semibold">300 acres of sylvan surroundings</span> with the picturesque Western Ghat Mountains.<br/><br/>
          It is ranked among <span className="font-bold text-[#192F59]">Top Engineering Institutes in India</span>. NITK, Surathkal. It has achieved rank <span className="text-teal-600 font-semibold">12 in NIRF ranking</span> of Engineering Colleges in India in 2023.
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
          className="list-none grid gap-6 md:grid-cols-2 text-base text-gray-800"
        >
          <li className="flex items-start gap-4 bg-white/80 rounded-xl p-4 shadow hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up"><span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#192F59] to-teal-400 text-white mr-2"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg></span>One of the <span className="font-bold text-[#192F59] ml-1">oldest and pioneer Technical Institutions</span> in India started in 1960.</li>
          <li className="flex items-start gap-4 bg-white/80 rounded-xl p-4 shadow hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up"><span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#192F59] to-teal-400 text-white mr-2"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg></span>World class infrastructure and highly equipped labs and classrooms with all modern amenities.</li>
          <li className="flex items-start gap-4 bg-white/80 rounded-xl p-4 shadow hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up"><span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#192F59] to-teal-400 text-white mr-2"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6" /></svg></span>Mega hostel blocks with state of the art facilities and Wi-Fi Connectivity.</li>
          <li className="flex items-start gap-4 bg-white/80 rounded-xl p-4 shadow hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up"><span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#192F59] to-teal-400 text-white mr-2"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8M12 17v4" /></svg></span>Modern international standard swimming pool, gymnasium and individual standard fields for all major games and sports.</li>
          <li className="flex items-start gap-4 bg-white/80 rounded-xl p-4 shadow hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up"><span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#192F59] to-teal-400 text-white mr-2"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>Rated as one of the <span className="font-bold text-[#192F59] ml-1">Best Engineering Colleges in India</span>.</li>
          <li className="flex items-start gap-4 bg-white/80 rounded-xl p-4 shadow hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up"><span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#192F59] to-teal-400 text-white mr-2"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5" /></svg></span>Linkages and Collaborations with various leading International and National Institutes, Industries and Organizations across the Globe.</li>
        </motion.ul>
      </motion.section>

      
      <section className="w-full max-w-5xl mx-auto my-16 px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-section">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <svg className="w-10 h-10 text-teal-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          <span className="text-xl font-bold text-[#192F59]">300+ Acres</span>
          <span className="text-gray-600 text-center mt-2">Lush green campus with modern amenities</span>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <svg className="w-10 h-10 text-teal-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
          <span className="text-xl font-bold text-[#192F59]">World-Class Labs</span>
          <span className="text-gray-600 text-center mt-2">Cutting-edge research and learning facilities</span>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <svg className="w-10 h-10 text-teal-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          <span className="text-xl font-bold text-[#192F59]">Top Ranked</span>
          <span className="text-gray-600 text-center mt-2">Consistently among India's best engineering colleges</span>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

// Animated Counters Component
import { motion as m } from "framer-motion";
function WhyChooseCounters() {
  const counters = [
    { icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>, label: "Established", target: 1960, prefix: "", suffix: "" },
    { icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>, label: "NIRF Rank 2023", target: 12, prefix: "#", suffix: "" },
    { icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>, label: "Acres Campus", target: 300, prefix: "", suffix: "+" },
    { icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>, label: "Engineering College", target: 1, prefix: "Top", suffix: "" },
  ];
  const [counts, setCounts] = useState(counters.map(() => 0));
  useEffect(() => {
    const intervals = counters.map((counter, i) => {
      const increment = Math.ceil(counter.target / 40);
      return setInterval(() => {
        setCounts(prev => {
          const next = [...prev];
          if (next[i] < counter.target) {
            next[i] = Math.min(next[i] + increment, counter.target);
          }
          return next;
        });
      }, 30);
    });
    return () => intervals.forEach(clearInterval);
  }, []);
  return (
    <m.div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
      {counters.map((counter, i) => (
        <m.div
          key={counter.label}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-transform duration-300 animate-fade-in-up"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#192F59] to-teal-400 mb-3">
            {counter.icon}
          </div>
          <span className="text-3xl font-bold text-[#192F59] counter">{counter.prefix}{counts[i]}{counter.suffix}</span>
          <span className="text-sm text-gray-500 mt-1 text-center">{counter.label}</span>
        </m.div>
      ))}
    </m.div>
  );
}

export default Aboutus;

