import React, { useState, useEffect } from 'react';
import tesla from '../images/tesla.png';
import tree from '../images/tree.jpg';
import '../styles/footer.css';

const Footer = () => {
  const [carPosition, setCarPosition] = useState(-20);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carPosition > 80) {
        setDirection(-1);
      } else if (carPosition < -20) {
        setDirection(1);
      }

      setCarPosition((prevPosition) => prevPosition + (direction * 0.5));
    }, 25); // increase the interval time to make the car go slower

    return () => {
      clearInterval(intervalId);
    };
  }, [carPosition, direction]);

  const carStyle = {
    position: 'absolute',
    bottom: '0',
    left: `${carPosition}%`,
    width: '150px',
    height: 'auto',
    zIndex: 1,
    transform: 'translate(-50%, 0)',
  };

  const footerStyle = {
    background: 'linear-gradient(to bottom, #222 0%, #555 100%)',
    position: 'relative',
    height: '300px',
  };

  const treeStyle = {
    position: 'absolute',
    bottom: '0',
    left: '10%',
    width: '50px',
    height: 'auto',
    zIndex: 0,
  };

  const stoplightStyle = {
    position: 'absolute',
    bottom: '0',
    left: '70%',
    width: '50px',
    height: 'auto',
    zIndex: 0,
  };

  return (
    <div className="footer" style={footerStyle}>
      <p>Footer</p>
      <img src={tesla} style={carStyle} alt="Tesla car" />
      <img src={tree} style={treeStyle} alt="Tree" />
      <img src={tree} style={{...treeStyle, left: '30%'}} alt="Tree" />
      <img src={tree} style={{...treeStyle, left: '60%'}} alt="Tree" />
      <img src="stoplight.png" style={stoplightStyle} alt="Stoplight" />
    </div>
  );
};

export default Footer;
