import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Cybage Software Pvt. Ltd.</h5>
              </div>
              <h3>2019 - 2021</h3>
            </div>
            <p>
              Developed modules for a multi-tenant SaaS platform using Angular, React, AWS Lambda, and SQL. Built high-performance client search and email UI testing tools.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Designed and delivered end-to-end web applications in logistics and blockchain using React, Angular, Django, and Firebase under Agile methodologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>University of Texas at Dallas</h5>
              </div>
              <h3>2022 - 2023</h3>
            </div>
            <p>
              Redesigned university web apps, increasing load speed by 40% and boosting engagement by 20% through reusable components and UI/UX optimizations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Developer</h4>
                <h5>Paycom</h5>
              </div>
              <h3>2024 - 2026</h3>
            </div>
            <p>
              Architected AI chatbot data ingestion using GraphQL. Refactored monolithic APIs into microservices, cutting response time by 25%. Built React and Docker architectures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
