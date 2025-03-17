import React, { useEffect, useState, useRef } from 'react';
import './Council.css'; // assuming heads.css is in your src folder

const Council = () => {
    
  const [tab, setTab] = useState(0); // Tracks the active tab

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };



  // Tab content for each year
  const tabsContent = [
    {
      year: '2025',
      members: [
        { name: 'Razzaq Shikalgar', role: 'President', image: 'https://res.cloudinary.com/divma6tu0/image/upload/v1742228681/council/m0wrvaqmeh2p9nwifibs.png' },
        { name: 'Ansh Chavan', role: 'General Secretary', image: 'https://res.cloudinary.com/divma6tu0/image/upload/v1742228676/council/q4xxwrdjfoqyyhly0t9c.png' },
        
      ],
      members1: [
        { name: 'Dravesh Jain', role: 'Cultural Secretary', image: 'https://res.cloudinary.com/divma6tu0/image/upload/v1742228676/council/k23mjhv6qn4hufoibkno.png' },
        { name: 'Richa Thanekar', role: 'Ladies Representative', image: 'https://res.cloudinary.com/divma6tu0/image/upload/v1742228672/council/il1leswzy7xdntknujo2.png' },
        { name: 'Dhurv Sawant', role: 'Sports Representative', image: 'https://res.cloudinary.com/divma6tu0/image/upload/v1742228681/council/bsswi4glbqxl57lqbx2g.png' },
      ],
      members2: [
        { name: 'Harsh Borge', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/divma6tu0/image/upload/v1742228679/council/o0l8efyiw6bndagoobhq.png' },
        { name: 'Ankit Chavan', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735291245/COUNCIIL/adxsv86aq2i8a9i9rc8h.png' },
        { name: 'Shlok Kute', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/divma6tu0/image/upload/v1742228679/council/xjkyddnjrln8flb8qp6h.png' },
        { name: 'Yogini Yadav', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/divma6tu0/image/upload/v1742231083/council/zc4nq3uqqdvm5fsvue8f.png' },
      ],
      members3: [
        { name: 'Aditya Dandavate', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/divma6tu0/image/upload/v1742228682/council/gtigrqgfhpemoeaapqsy.png' },
        { name: 'Saniya Dopavkar', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/divma6tu0/image/upload/v1742228673/council/jjsi4lqt1uqmraz2pugx.png' },
        { name: 'Nishigandha Sawant', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/divma6tu0/image/upload/v1742228680/council/zgzsla2gqzchysceqelu.png' },
        { name: 'Hitesh Dubey', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/divma6tu0/image/upload/v1742231232/council/qits5ukbijjeuwn5bfjm.png' },
      ]
    },
    // {
    //   year: '2023',
    //   members: [
    //     { name: 'Aarav Gupta', role: 'Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //     { name: 'Ishita Sharma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        
    //   ],
    //   members1: [
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Rohan Mehta', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //     { name: 'Rohan Mehta', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //   ],
    //   members2: [
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //   ],
    //   members3: [
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //   ]
    // },
    // {
    //   year: '2022',
    //   members: [
    //     { name: 'Samaira Khan', role: 'Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //     { name: 'Kabir Singh', role: 'Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        
    //   ],
    //   members1: [
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //     { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //   ],
    //   members2: [
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //   ],
    //   members3: [
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //   ]
    // },
  ];

  return (
    <div>
      {/* Navigation */}
      
      {/* Tabs Navigation */}
      <div className="tabs">
        {tabsContent.map((tabItem, index) => (
          <button
            key={index}
            className={`tab-button ${tab === index ? 'active' : ''}`}
            onClick={() => setTab(index)}
          >
            {tabItem.year}
          </button>
        ))}
      </div>

      {/* Add title here */}
      <div className="council-title">
        <h1>Meet The Council</h1>
      </div>

      {/* Team Section */}
      <section id="team">
        {tabsContent[tab].members.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="t-b-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="t-b-text">
              <strong>{member.name}</strong>
              <strong>{member.role}</strong>
            </div>
          </div>
        ))}
      </section>

      
      <section id="team">
        {tabsContent[tab].members1.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="t-b-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="t-b-text">
              <strong>{member.name}</strong>
              <strong>{member.role}</strong>
            </div>
          </div>
        ))}
      </section>

      <section id="team">
        {tabsContent[tab].members2.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="t-b-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="t-b-text">
              <strong>{member.name}</strong>
              <strong>{member.role}</strong>
            </div>
          </div>
        ))}
      </section>

      <section id="team">
        {tabsContent[tab].members3.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="t-b-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="t-b-text">
              <strong>{member.name}</strong>
              <strong>{member.role}</strong>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <section className="madeWithLove">
        <h5>
          Made with ❤️ by <a href="/team">Ojus Webdev</a>
        </h5>
      </section>

      {/* Scroll to top button */}
      <div onClick={scrollToTop} className="scrollTop">
        <i className="fa-solid fa-arrow-up"></i>
      </div>
      
    </div>
    
  );
};

export default Council;
