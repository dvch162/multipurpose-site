import React from 'react';
import Image from 'next/image';
import about from '../public/about-img.jpeg';
import checkmark from '../public/img/checkmark.png'

export default function AboutSection() {
  return (
    <section id="about" className="wow fadeInUp">
      <div className="container">
        <div className="row">
          <div className="col" style={{ display: 'flex' }}>
            <div className="about-img">
              <Image src={about} alt="About Us Image" width={350} height={350} />
            </div>

            <div className="content">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
              <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>

              <ul>
                <p><Image src={checkmark} alt='checkmark sign' width={19} height={19} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p><Image src={checkmark} alt='checkmark sign' width={19} height={19} /> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                <p><Image src={checkmark} alt='checkmark sign' width={19} height={19} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


