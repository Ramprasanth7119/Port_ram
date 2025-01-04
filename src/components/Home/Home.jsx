import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Img from '../../assets/home.png'; // Import the painting image
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <TypeAnimation
          sequence={[
            'Software Developer',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block', marginBottom: '20px' }}
        />
        <p className="quote">
          Passionate Software Developer dedicated to turning innovative ideas into impactful, real-world applications that drive change and inspire growth.
        </p>
      </div>
      <div className="image-container">
        <img src={Img} alt="Painting" className="painting-image" />
      </div>
    </div>
  );
};

export default Home;