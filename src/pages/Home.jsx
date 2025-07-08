import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
const noticesData = [
  {
    id: 1,
    icon: "📄",
    title: "Hostel Allotment List 2025-26",
    tag: { label: "NEW", color: "bg-green-100 text-green-700" },
    date: "08 July 2025",
    summary: "Room allotment for new batch is now published.",
    cta: { label: "Download PDF", href: "#" },
  },
  {
    id: 2,
    icon: "📄",
    title: "New Hostel Rules",
    tag: { label: "Info", color: "bg-blue-100 text-blue-700" },
    date: "05 July 2025",
    summary: "Updated hostel rules for 2025 are now available.",
    cta: { label: "View", href: "#" },
  },
  {
    id: 3,
    icon: "📄",
    title: "Maintenance Notice",
    tag: { label: "Urgent", color: "bg-red-100 text-red-700" },
    date: "03 July 2025",
    summary: "Water supply will be interrupted on 4th July, 10am-1pm.",
    cta: { label: "View", href: "#" },
  },
];

const eventsData = [
  {
    id: 1,
    icon: "📅",
    date: "10 July 2025",
    title: "Mess Fee Submission Deadline",
    desc: "Submit your mess fees online before the deadline.",
  },
  {
    id: 2,
    icon: "📅",
    date: "15 July 2025",
    title: "Room Shift Application Ends",
    desc: "Last date to apply for room shift requests.",
  },
  {
    id: 3,
    icon: "📅",
    date: "20 July 2025",
    title: "Hostel Cleanliness Drive",
    desc: "Participate in the annual cleanliness drive.",
  },
];

const footerLinks = [
  { icon: "📘", label: "Hostel Handbook", href: "#" },
  { icon: "🛏️", label: "Room Change Request", href: "#" },
  { icon: "🚨", label: "Report an Issue", href: "#" },
  { icon: "📬", label: "Subscribe to Alerts", href: "#" },
];

const filters = ["All", "Urgent", "Rules", "Deadlines", "Events"];

const badgeColors = {
  NEW: 'bg-green-100 text-green-700',
  URGENT: 'bg-red-100 text-red-600',
  INFO: 'bg-yellow-100 text-yellow-700',
  DEADLINE: 'bg-red-100 text-red-600',
  APPLICATION: 'bg-blue-100 text-blue-600',
  EVENT: 'bg-green-100 text-green-700',
};

const InformationNotifications = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [subscribe, setSubscribe] = useState(false);
  const [alerts, setAlerts] = useState(false);

  const filteredNotices = noticesData.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.summary.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "All" ||
      (filter === "Urgent" && notice.tag.label === "URGENT") ||
      (filter === "Rules" && notice.title.toLowerCase().includes("rule")) ||
      (filter === "Deadlines" && notice.title.toLowerCase().includes("allotment")) ||
      (filter === "Events" && false); 
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="py-10 px-2 md:px-0 bg-[#f7f9fa]">
      <div className="max-w-6xl mx-auto">
       
        <div className="mb-8 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl text-green-600">🔔</span>
            <h2 className="text-2xl md:text-3xl font-bold text-green-700">Information & Notifications</h2>
          </div>
          <p className="text-gray-500 text-base md:text-lg text-center">Stay updated with latest hostel circulars, rules, and deadlines.</p>
        </div>
      
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 mb-6">
          <input
            type="text"
            placeholder="Search notices..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full md:w-72 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm text-base"
          />
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm text-base"
          >
            {filters.map(f => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-2xl shadow p-5 flex flex-col gap-3 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
                <span className="text-xl">📋</span> Latest Notices
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-xs">Subscribe</span>
                <button onClick={() => setSubscribe(!subscribe)} className={`w-10 h-5 rounded-full transition bg-gray-200 relative ${subscribe ? 'bg-green-400' : ''}`}> <span className={`absolute left-1 top-1 w-3 h-3 rounded-full bg-white shadow transition ${subscribe ? 'translate-x-5 bg-green-700' : ''}`}></span></button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {filteredNotices.map((notice) => (
                <div key={notice.id} className="flex flex-col gap-1 bg-[#f9fafb] rounded-xl border border-gray-100 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-100 text-blue-600 rounded-lg p-2 text-xl"><i className="fa fa-file-alt" />{notice.icon}</span>
                    <span className="font-semibold text-blue-900 text-base truncate">{notice.title}</span>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${badgeColors[notice.tag.label] || 'bg-gray-100 text-gray-700'}`}>{notice.tag.label}</span>
                  </div>
                  <div className="text-gray-700 text-sm mb-1 truncate">{notice.summary}</div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{notice.date}</span>
                    <a href={notice.cta.href} className="flex items-center gap-1 text-blue-600 font-medium hover:underline"><i className="fa fa-download" />{notice.cta.label}</a>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="text-blue-600 font-medium mt-2 text-sm flex items-center gap-1 hover:underline justify-center">View All Notices <span>→</span></a>
          </div>
      
          <div className="bg-white rounded-2xl shadow p-5 flex flex-col gap-3 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-teal-700 font-semibold text-lg">
                <span className="text-xl">📅</span> Upcoming Events
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-xs">Alerts</span>
                <button onClick={() => setAlerts(!alerts)} className={`w-10 h-5 rounded-full transition bg-gray-200 relative ${alerts ? 'bg-green-400' : ''}`}> <span className={`absolute left-1 top-1 w-3 h-3 rounded-full bg-white shadow transition ${alerts ? 'translate-x-5 bg-green-700' : ''}`}></span></button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {eventsData.map((event, idx) => (
                <div key={event.id} className="flex flex-col gap-1 bg-[#f9fafb] rounded-xl border border-gray-100 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-teal-100 text-teal-600 rounded-lg p-2 text-xl"><i className="fa fa-calendar-alt" />{event.icon}</span>
                    <span className="font-semibold text-blue-900 text-base truncate">{event.title}</span>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${badgeColors[event.tag] || 'bg-gray-100 text-gray-700'}`}>{event.tag}</span>
                  </div>
                  <div className="text-gray-700 text-sm mb-1 truncate">{event.desc}</div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{event.date}</span>
                    <a href="#" className="flex items-center gap-1 text-teal-600 font-medium hover:underline"><i className="fa fa-arrow-right" />View details</a>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="text-teal-600 font-medium mt-2 text-sm flex items-center gap-1 hover:underline justify-center">View Calendar <span>→</span></a>
          </div>
        </div>
     
        <div className="flex flex-wrap justify-center gap-6 mt-8 border-t pt-6">
          {footerLinks.map(link => (
            <a key={link.label} href={link.href} className="flex items-center gap-2 text-blue-700 font-medium hover:underline text-base">
              <span className="text-xl">{link.icon}</span> {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const notifications = [
  {
    icon: "📢",
    color: "border-blue-600 text-blue-600",
    date: "05 June 2024",
    content: <>Hostel room allotment results have been published. <a href="#" className="text-blue-600 underline font-medium">View Results</a></>,
  },
  {
    icon: "🍽️",
    color: "border-orange-400 text-orange-400",
    date: "03 June 2024",
    content: <>Mess menu updated for June. Check the <a href="#" className="text-orange-400 underline font-medium">latest menu</a>.</>,
  },
  {
    icon: "🎉",
    color: "border-green-500 text-green-500",
    date: "01 June 2024",
    content: <>Welcome to all new residents! Orientation on 10th June at the common hall.</>,
  },
  {
    icon: "🛠️",
    color: "border-red-500 text-red-500",
    date: "30 May 2024",
    content: <>Water supply maintenance scheduled on 2nd June from 10am to 1pm. Please store water in advance.</>,
  },
  {
    icon: "📅",
    color: "border-purple-500 text-purple-500",
    date: "28 May 2024",
    content: <>Cultural night event on 15th June! Register by 10th June to participate. <a href="#" className="text-purple-500 underline font-medium">Register Now</a></>,
  },
  {
    icon: "⏰",
    color: "border-pink-600 text-pink-600",
    date: "25 May 2024",
    content: <>Fee payment deadline for the next semester is 10th June. <a href="#" className="text-pink-600 underline font-medium">Pay Now</a></>,
  },
];

const infoCards = [
  {
    icon: <img src="/document.svg" alt="Reports and Documents" className="mx-auto w-24 h-24 mb-2" />,
    border: "border-indigo-400",
    title: "Reports and Documents",
    content: (
      <ol className="text-indigo-500 text-base list-decimal ml-5 space-y-1 w-full">
        <li><a href="#" className="underline">Hostel Fee Structure 2024-25</a></li>
        <li><a href="#" className="underline">B.Tech Admissions 2024 Physical Reporting</a></li>
        <li><a href="#" className="underline">MCA Admissions 2024 Physical Reporting</a></li>
        <li><a href="#" className="underline">M.Tech./M.Sc. Admissions 2024 Physical Reporting</a></li>
        <li><a href="#" className="underline">Guidelines for Students Taking Admission in Hostels</a></li>
        <li><a href="#" className="underline">Assignment of Dean</a></li>
      </ol>
    ),
  },
  {
    icon: <span className="text-4xl text-blue-300 mb-2">🏆</span>,
    border: "border-blue-300",
    title: "NITK Hostel Cup",
    content: (
      <>
        <p className="text-gray-700 text-base mb-2">Congratulations to all the winners of the NITK Hostel Cup! You can find the branch-wise distribution here:</p>
        <a href="#" className="text-blue-400 underline font-medium text-base">Overall Championship Leaderboard</a>
      </>
    ),
  },
  {
    icon: <span className="text-4xl text-green-400 mb-2">🎉</span>,
    border: "border-green-400",
    title: "Panache Competition",
    content: (
      <p className="text-gray-700 text-base">Crescendo, a committee which organizes co-curricular activities for the students, is managed by a group of elected students from the hostel representatives. The Crescendo has organized PANACHE 2022 on March 27th 2022 which attracted many students from various branches for the competitions.</p>
    ),
  },
  {
    icon: <span className="text-4xl text-orange-400 mb-2">🧑‍💼</span>,
    border: "border-orange-400",
    title: "Taskforce NITK",
    content: (
      <p className="text-gray-700 text-base">Task Force is a platform for students to showcase their talent in administrative work at NITK Surathkal. It has been instrumental in organizing events, managing hostel affairs, and supporting new initiatives for the student community.</p>
    ),
  },
];

const facilities = [
  { icon: '📶', label: 'High-Speed Wi-Fi' },
  { icon: '🍽️', label: 'Mess & Dining' },
  { icon: '🏋️‍♂️', label: 'Gym' },
  { icon: '📚', label: 'Study Rooms' },
  { icon: '🧺', label: 'Laundry' },
  { icon: '🛡️', label: '24/7 Security' },
];

const roomTypes = [
  { type: 'Single Room', img: 'https://via.placeholder.com/200x120?text=Single+Room' },
  { type: 'Double Room', img: 'https://via.placeholder.com/200x120?text=Double+Room' },
  { type: 'Triple Room', img: 'https://via.placeholder.com/200x120?text=Triple+Room' },
];

const testimonials = [
  { name: 'Amit Sharma', text: 'The hostel feels like a second home. The staff is friendly and the facilities are top-notch.' },
  { name: 'Priya Singh', text: 'I love the study rooms and the community events. Made great friends here!' },
  { name: 'Rahul Verma', text: 'Safe, clean, and comfortable. Highly recommend for new students.' },
];

const GallerySlider = () => {
  const images = [
    { src: '/main0.avif', alt: 'Hostel Main Entrance', caption: 'Main Entrance' },
    { src: '/main1.jpg', alt: 'Hostel Building', caption: 'Hostel Building' },
    { src: '/main2.webp', alt: 'Hostel Room Interior', caption: 'Room Interior' },
    { src: '/main3.webp', alt: 'Hostel Common Area', caption: 'Common Area' },
    { src: '/main4.png', alt: 'Hostel Campus View', caption: 'Campus View' },
  ];
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  return (
    <div className="relative max-w-5xl mx-auto flex flex-col items-center">
      <div className="relative w-full h-[28rem] md:h-[34rem] flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl bg-white">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="w-full h-[28rem] md:h-[34rem] object-cover rounded-3xl transition-all duration-500"
        />
        
        <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-gradient-to-t from-black/70 to-transparent flex items-end rounded-b-3xl">
          <span className="text-white font-semibold text-lg drop-shadow">{images[current].caption}</span>
        </div>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#192F59] rounded-full p-2 shadow transition z-10"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
      
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#192F59] rounded-full p-2 shadow transition z-10"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    
      <div className="flex gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-300'} transition`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

function HeroSection() {
  const heroImages = [
    { src: '/hero0.jpg', alt: 'NITK Hostel Aerial View' },
    { src: '/hero1.webp', alt: 'NITK Hostel Campus' },
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <motion.section 
      className="relative min-h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {heroImages.map((img, idx) => (
          <motion.img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
            initial={false}
            animate={{ opacity: idx === current ? 1 : 0 }}
            transition={{ duration: 0.7 }}
          />
        ))}
      </div>
      <div className="relative z-20 w-full flex flex-col items-center px-4 py-12 md:py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 tracking-tight">Welcome to <span className="text-blue-200">NITK Hostel</span></h1>
        <p className="text-lg md:text-2xl text-blue-100 font-medium mb-8 max-w-2xl">Your home away from home at NITK</p>
      </div>
    </motion.section>
  );
}

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">

      <HeroSection />
      <motion.section 
        className="py-8 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center gap-4">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#192F59] to-[#192F59] drop-shadow-xl tracking-wide">
              About NITK Hostel
            </h2>
            <div className="w-2/3 md:w-1/2 h-1.5 bg-[#192F59] rounded-full mt-3 shadow-lg shadow-[#192F59]/40"></div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-stretch gap-10 mt-8">
         
          <div className="flex-shrink-0 w-full md:w-7/12 flex justify-center items-center mb-6 md:mb-0">
            <img src="/main1.jpg" alt="NITK Hostel" className="rounded-2xl shadow-lg w-full max-w-2xl object-cover h-56 md:h-72" />
          </div>
          
          <div className="w-full md:w-5/12 flex flex-col justify-center items-center md:items-start text-center md:text-left relative">
            <span className="absolute -left-8 -top-6 text-[7rem] text-blue-100 opacity-40 select-none hidden md:block" aria-hidden="true">"</span>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-gray-900">
              <span className="font-bold text-[#192F59]">NITK Hostel</span> provides a safe, comfortable, and vibrant environment for students of the National Institute of Technology Karnataka. Our hostels are designed to foster holistic development, community living, and academic support. With modern amenities, <span className="font-bold text-teal-700">24/7 security</span>, and a focus on student <span className="font-bold text-teal-700">well-being</span>, NITK Hostel is truly your home away from home.
            </p>
          </div>
        </div>
      </motion.section>

      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <InformationNotifications />
      </motion.div>

      <motion.section 
        className="py-10 bg-gradient-to-br from-blue-50 via-white to-blue-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#192F59] text-center">Gallery</h2>
        <GallerySlider />
        <GalleryViewMoreButton />
      </motion.section>

  
      <motion.section 
        className="py-8 bg-[#f6fafd]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center mb-2">
            <div className="flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full inline-block"></span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#192F59] tracking-tight">Facilities at a Glance</h2>
            </div>
            <div className="w-40 border-b-2 border-blue-100 mt-2 mb-4 mx-auto"></div>
          </div>
          <p className="text-gray-500 text-base md:text-lg text-center mb-8">Everything you need for a comfortable and secure hostel life.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 w-full">
            {/* Card 1 */}
            <div className="bg-[#f8fbff] rounded-2xl flex flex-col items-center text-center p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
              <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-3 shadow group-hover:shadow-md transition-all"><span>🛏️</span></div>
              <div className="font-bold text-[#192F59] text-lg mb-1">Spacious Rooms</div>
              <div className="text-gray-500 text-sm">Comfortable double/triple-sharing rooms with study tables, beds, fans, and shelves.</div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#f8fbff] rounded-2xl flex flex-col items-center text-center p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
              <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-3 shadow group-hover:shadow-md transition-all"><span>🍽️</span></div>
              <div className="font-bold text-[#192F59] text-lg mb-1">Mess Facility</div>
              <div className="text-gray-500 text-sm">Nutritious veg/non-veg meals served 3 times daily in a clean dining hall.</div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#f8fbff] rounded-2xl flex flex-col items-center text-center p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
              <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-3 shadow group-hover:shadow-md transition-all"><span>📶</span></div>
              <div className="font-bold text-[#192F59] text-lg mb-1">Wi-Fi Connectivity</div>
              <div className="text-gray-500 text-sm">24×7 high-speed internet access with firewall and secure login system.</div>
            </div>
            {/* Card 5 */}
            <div className="bg-[#f8fbff] rounded-2xl flex flex-col items-center text-center p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
              <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-3 shadow group-hover:shadow-md transition-all"><span>🛡️</span></div>
              <div className="font-bold text-[#192F59] text-lg mb-1">24×7 Security</div>
              <div className="text-gray-500 text-sm">CCTV-monitored entrances and professional guards for round-the-clock safety.</div>
            </div>
            {/* Card 6 */}
            <div className="bg-[#f8fbff] rounded-2xl flex flex-col items-center text-center p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
              <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-3 shadow group-hover:shadow-md transition-all"><span>🧹</span></div>
              <div className="font-bold text-[#192F59] text-lg mb-1">Housekeeping</div>
              <div className="text-gray-500 text-sm">Daily cleaning of rooms and corridors by trained staff.</div>
            </div>
            {/* Card 7 */}
            <div className="bg-[#f8fbff] rounded-2xl flex flex-col items-center text-center p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
              <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-3 shadow group-hover:shadow-md transition-all"><span>🏀</span></div>
              <div className="font-bold text-[#192F59] text-lg mb-1">Sports & Recreation</div>
              <div className="text-gray-500 text-sm">Indoor games room, TV lounge, and outdoor courts for volleyball and basketball.</div>
            </div>
            {/* Card 8 */}
            <div className="bg-[#f8fbff] rounded-2xl flex flex-col items-center text-center p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
              <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-3 shadow group-hover:shadow-md transition-all"><span>🩺</span></div>
              <div className="font-bold text-[#192F59] text-lg mb-1">Medical Aid</div>
              <div className="text-gray-500 text-sm">Infirmary and ambulance access. Nearby campus health center for emergencies.</div>
            </div>
          </div>
        </div>
      </motion.section>

     

    </div>
  );
};

// Gallery View More Button
function GalleryViewMoreButton() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-6">
      <button
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
        onClick={() => navigate('/gallery')}
      >
        View More
      </button>
    </div>
  );
}

export default Home; 
// {/* Event Display Section */}
// <div className={styles.eventsSection}>
// <h2>Upcoming Events</h2>
// {upcomingEvents.length === 0 ? (
//     <p>No upcoming events</p>
// ) : (
//     upcomingEvents.map(event => (
//         <div key={event._id} className={styles.eventCard}>
//             <img src={event.image} alt={event.title} />
//             <h3>{event.title}</h3>
//             <p>{event.description}</p>
//             <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
//         </div>
//     ))
// )}

// <h2>Past Events</h2>
// {pastEvents.length === 0 ? (
//     <p>No past events</p>
// ) : (
//     pastEvents.map(event => (
//         <div key={event._id} className={styles.eventCard}>
//             <img src={event.image} alt={event.title} />
//             <h3>{event.title}</h3>
//             <p>{event.description}</p>
//             <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
//         </div>
//     ))
// )}
// </div>
// </div>
// );
// }

// export default Home;