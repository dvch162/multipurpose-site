import React, { useEffect } from 'react';

export default function Header() {
    useEffect(() => {
        // Function for dropdown
        const handleDropdown = () => {
          const dropdownMenus = document.querySelectorAll('.menu-has-children');
    
          dropdownMenus.forEach((menu) => {
            menu.addEventListener('mouseenter', () => {
              menu.querySelector('ul').style.display = 'block';
            });
    
            menu.addEventListener('mouseleave', () => {
              menu.querySelector('ul').style.display = 'none';
            });
          });
        };
    
        // Call the function for dropdown
        handleDropdown();
    
        // Clean up event listeners on component unmount
        return () => {
          const dropdownMenus = document.querySelectorAll('.menu-has-children');
    
          dropdownMenus.forEach((menu) => {
            menu.removeEventListener('mouseenter', () => {
              menu.querySelector('ul').style.display = 'block';
            });
    
            menu.removeEventListener('mouseleave', () => {
              menu.querySelector('ul').style.display = 'none';
            });
          });
        };
      }, []);

  return (
    <header id="header">
      <style jsx>{`
      #container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #ffffff;
          padding: 20px;
        }

        #container #logo {
      flex-basis: 33.33%; /* Set left column width to 1/3 */
    }

        #container #logo h1 {
          margin: 0;
          {/* display: inline-block; */}
          color: #0c2e8a;
          text-decoration: none;
          font-size: 24px;
        }

        #container #logo h1 span {
          color: #50d8af;
        }

        #container #nav-menu-container {
          flex-basis: 66.66%; /* Set right column width to 2/3 */
          display: flex;
          justify-content: flex-end; /* Align right column to the right */
        
        }

        #container #nav-menu-container ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }

        #container #nav-menu-container li {
          margin-right: 10px;
        }

        #container #nav-menu-container li:last-child {
          margin-right: 0;
        }

        @media (max-width: 768px) {
          #header {
            padding: 20px 0;
            height: 74px;
          }
          #header #logo h1 {
            font-size: 34px;
          }
          #header #logo img {
            max-height: 40px;
          }
          
        #nav-menu-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
    
      `}</style>
      <div id='container' className="container">
        <div id="logo" className="pull-left">
          <h1>
              Dobrobut<span>Sol</span>
          </h1>
        </div>

        <nav id="nav-menu-container">
          <ul className="nav-menu">
            {/* <li className="menu-active">
              <a href="#body">Home</a>
            </li> */}
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            {/* <li>
              <a href="#team">Team</a>
            </li> */}
            <li className="menu-has-children">
              <a href="">Drop Down</a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
                <li>
                  <a href="#">Drop Down 5</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
