import React from "react";

const quickLinks = [
  { label: "Contact Us", href: "#" },
  { label: "TEQIP", href: "#" },
  { label: "Virtual Tour", href: "#" },
  { label: "PRISM NITK", href: "#" },
  { label: "Hostel Complaints Portal", href: "#" },
  { label: "IRIS Portal", href: "#" },
];
const generalLinks = [
  { label: "NITK Website", href: "#" },
  { label: "Alumni", href: "#" },
  { label: "Career Development Centre", href: "#" },
  { label: "Central Computer Centre", href: "#" },
  { label: "Central Library", href: "#" },
  { label: "RE Office", href: "#" },
];

const Footer = () => (
  <footer className="bg-black text-white w-full py-4 px-4 mt-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
      
      <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
        <div className="text-center md:text-left">
          <div className="text-xl font-semibold mb-1">NITK Hostels Trust</div>
          <div>Surathkal, Mangalore, India - 575025</div>
          <div className="mt-1">0824 2474000</div>
          <a href="mailto:chiefwarden@nitk.edu.in" className="text-blue-400 hover:underline block mt-1">chiefwarden@nitk.edu.in</a>
        </div>
      </div>
  
      <div className="flex-1 flex flex-col items-center">
        <div className="text-2xl font-semibold mb-2">Quick Links</div>
        <div className="w-48 h-0.5 bg-green-400 mb-3"></div>
        <ul className="space-y-1">
          {quickLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className="text-blue-400 hover:underline">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex-1 flex flex-col items-center relative">
        <div className="text-2xl font-semibold mb-2">General Links</div>
        <div className="w-48 h-0.5 bg-green-400 mb-3"></div>
        <ul className="space-y-1">
          {generalLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className="text-blue-400 hover:underline">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer; 
