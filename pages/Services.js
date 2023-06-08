import React from 'react';
import Image from 'next/image';
import diagram2 from '../public/img/diagram.png';
import reaching2 from '../public/img/reaching.png';
import succesmap2 from '../public/img/succesmap.png';
import purchase2 from '../public/img/purchase.png';

export default function Services() {
  return (
    <>
      <section id="services">
        <div className="container">
          <div className="section-header">
            <h2>Services</h2>
            <br />
            <br />
            <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-6">
              <div className="box fadeInLeft">
                <div className="image">
                  <Image src={diagram2} alt='diagram icon' width={100} height={100} />
                </div>
                <div className='content'>
                  <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box fadeInRight">
                <div className="image">
                  <Image src={reaching2} alt='reaching icon' width={100} height={100} />
                </div>
                <div className='content'>
                  <h4 className="title"><a href="">Dolor Sitema</a></h4>
                  <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata nodera clas.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box fadeInLeft">
                <div className="image">
                  <Image src={succesmap2} alt='succesmap icon' width={100} height={100} />
                </div>
                <div className='content'>
                  <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trinige zareta lobur trade.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box fadeInRight">
                <div className="image">
                  <Image src={purchase2} alt='purchase icon' width={100} height={100} />
                </div>
                <div className='content'>
                  <h4 className="title"><a href="">Magni Dolores</a></h4>
                  <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
      .section-header {
        padding-left: 15px;
        padding-right: 15px;
        text-align: center;
    }

        .section-header h2 { 
        display: inline-block;
        color: #0c2e8a;
    }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin-left: -10px;
          margin-right: -10px;
        }

        .col-lg-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 10px;
        }

        .box {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 10px;
            margin-left: 15px;
            margin-right: 15px;
            
            transition: transform 0.3s ease;
            position: relative; /* Required for absolute positioning of elements inside */
         
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .box:hover {
  transform: translateY(-15px); /* Move the box 5 pixels up */
}
        
}

        .image {
          {/* flex: 0 0 33.33%; */}
          flex: 0 0 auto;     
          padding: 20px;
          box-sizing: border-box;
         

        }

        .content {
          {/* flex: 0 0 66.66%; */}
          flex: 1 1 auto; 
          padding: 20px;
          box-sizing: border-box;
        }

        .title {
          margin-top: 0;
          margin-bottom: 10px;
          color: #0c2e8a;
        }

        .description {
          margin-top: 0;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .box {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .image {
            margin-bottom: 10px;
          }
        }

        @media (max-width: 1140px) {
          .col-lg-6 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>

    </>
  );
}
