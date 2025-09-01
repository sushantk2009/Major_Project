import React from "react";
import logo from "/src/assets/blood.jpg";
import bloodImg from "/src/assets/blood6.png"; // replace with your image path

export default function Frontend() {
  const steps = [
    {
      id: 1,
      title: "Registration",
      img: "/src/assets/blood3.jpg",
      desc: "Sign up as a donor and fill in your personal details along with your blood group. This helps us match you with patients in need quickly and accurately.",
    },
    {
      id: 2,
      title: "Seeing",
      img: "/src/assets/blood2.jpg",
      desc: "A short health check is done before donation to ensure you are fit. This step protects both the donor and the recipient, making the process safe.",
    },
    {
      id: 3,
      title: "Donation",
      img: "/src/assets/blood5.jpg",
      desc: "The actual blood donation takes only 10–15 minutes. It’s a simple, safe, and painless process guided by medical professionals.",
    },
    {
      id: 4,
      title: "Save Life",
      img: "/src/assets/blood4.jpg",
      desc: "Your donated blood is used to help patients in emergencies, surgeries, or treatments. Every unit of blood can save up to three lives — your gift truly matters.",
    },
  ];

  return (
    <>
     <div className="header">
          {/* Background Image */}
          <img src={logo} alt="Logo" className="header-img" />
    
          {/* Overlay */}
          <div className="overlay"></div>
    
          {/* Content */}
          <div className="header-content">
            <h1>Welcome to BloodSetu</h1>
            <p>Donate blood, save lives ❤️</p>
          </div>
        </div>
    <div>

      {/* Heading */}
      <div className="heading">
        <h2>Donation Process</h2>
        <p>The donation process from the time you arrive center until the time you leave</p>
      </div>

      {/* Cards */}
      <div className="cards">
        {steps.map((step) => (
          <div key={step.id} className="card">
            <img src={step.img} alt={step.title} />
            <div className="card-content">
              <h3>
                {step.id} - {step.title}
              </h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="contact-section">
          <h2 className="contact-heading">Contact Details</h2>
    
          <div className="contact-container">
            {/* Left Side */}
            <div className="contact-info">
              <h3>BloodSetu related queries, feedback and suggestions</h3>
              <p>
                Center For Development of Advanced Computing <br />
                Gyan Ganga Institute Of Technology And Sciences Javalpur. 486001
                <br />
                9131528271 <br />
                bloodSetu Website Made By Sushant Kushwaha.
              </p>
    
              <h3>For Administrative queries</h3>
              <p>
                Blood Cell, National Health Mission <br />
                Ministry of Health & Family Welfare, Jabalpur, - 486001
              </p>
    
              <h3>For administrative queries</h3>
              <p>
                Blood Cell, National Health Mission <br />
                Jabalpur ,(Madhya Pradesh) - 486001 <br />
              </p>
            </div>
    
            {/* Right Side */}
            <div className="contact-image">
              <img src={bloodImg} alt="Donate Blood" />
            </div>
          </div>
        </div>
    </>

  );
}
