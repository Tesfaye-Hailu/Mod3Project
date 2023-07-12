
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMoreInfo(true);
  };

  return (
    <div className="container-fluid">
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to My Tesfaye Tech BootCamp</h1>
        <p className="lead"> Tesfaye BootCamp is an online learning platform that offers a wide range of courses to help you enhance your skills and achieve your goals.</p>
        <a href="#features" className="btn btn-primary btn-lg" onClick={handleLearnMoreClick}>Learn More</a>
      </div>

      {showMoreInfo && (
        <div className="alert alert-info mt-4" role="alert">
          Unlock your potential and embark on an exciting journey in the world of technology with our comprehensive Tech BootCamp. Level up your tech skills and stay ahead of the curve as you explore the latest trends and technologies in the industry. Our experienced instructors provide interactive learning materials, hands-on exercises, and real-world projects to ensure an engaging and effective learning experience. Join a vibrant community of tech enthusiasts and industry professionals, and gain the practical knowledge and expertise needed to tackle complex challenges. Whether you're interested in programming, design, or any other tech field, our flexible learning options and continuously updated course curriculum will help you transform your passion for technology into a successful career. Don't miss this opportunity to unlock a world of possibilities at our Tech BootCamp.
        </div>
      )}

      <section id="features" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Comprehensive Curriculum</h5>
                  <p className="card-text">Whether you're interested in programming, design, or any other Tech field, we have courses tailored to meet your needs.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Expert Instructors</h5>
                  <p className="card-text">Our experienced instructors provide high-quality content, interactive learning materials, and hands-on exercises to ensure an engaging and effective learning experience.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Hands-on Projects</h5>
                  <p className="card-text"> Join us today and unlock your potential!.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; 2023 Tesfaye BootCamp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;

