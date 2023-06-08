import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import int1 from '../public/img/intro/intro1-ed1.jpeg';
import int2 from '../public/img/intro/intro2.jpeg';
import int3 from '../public/img/intro/intro3.jpeg';
import int4 from '../public/img/intro/intro4.jpeg';

export default function Intro() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [int1, int2, int3, int4];

  // const handleClickPrevious = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  // };

  const handleClickNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const carouselInterval = setInterval(handleClickNext, 3000);

    return () => clearInterval(carouselInterval);
  }, []);

  return (
    <div>
      <div
        id="intro"
        style={{
          width: '100%',
          height: '60vh',
          position: 'relative',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="intro-content"
          style={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              color: '#0c2e8a',
              marginBottom: '30px',
              fontSize: '64px',
              fontWeight: 700,
            }}
          >
            Transforming <span style={{ color: '#50d8af', textDecoration: 'underline' }}>your ideas</span>
            <br />
            into reality
          </h2>
          <div>
            <button
              className="btn-get-started"
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: '15px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                display: 'inline-block',
                padding: '10px 32px',
                borderRadius: '2px',
                transition: '0.5s',
                margin: '10px',
                color: '#0c2e8a',
                backgroundColor: '#0c2e8a',
                border: '2px solid #0c2e8a',
              }}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#0c2e8a';
  }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#0c2e8a';
                e.target.style.color = '#fff';

  }}
            >
              Get Started
            </button>
            <button
              className="btn-projects"
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: '15px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                display: 'inline-block',
                padding: '10px 32px',
                borderRadius: '2px',
                transition: '0.5s',
                margin: '10px',
                color: '#fff',
                backgroundColor: '#50d8af',
                border: '2px solid #50d8af',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#50d8af';
  }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#50d8af';
                e.target.style.color = '#fff';

  }}
            >
              Our Projects
            </button>
          </div>
        </div>
        <div
          id="intro-carousel" style={{
            zIndex: 8,
          }}
        >
          <div
            className="item"
            style={{
              width: '100%',
              height: '60vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transitionProperty: 'opacity',
            }}
          >
            {/* <button
              onClick={handleClickPrevious}
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                height: '45px',
                width: '15px',
                backgroundColor: 'transparent',
              }}
            >
              &lt;
            </button> */}
            <Image
              src={images[currentImageIndex]}
              alt={`intro photo ${currentImageIndex + 1}`}
              className="intro-img"
              width={1210}
              height={510}
            />
            {/* <button
              onClick={handleClickNext}
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                height: '45px',
                width: '15px',
                backgroundColor: 'transparent',
              }}
            >
              &gt;
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

         
