import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
//import OurActivity from './pages/OurActivity';

export default function Header () {
  return (
    <div className="header">
      <div className="upper-line">
        <div className="logo">
          <Image src={logo} alt="Logo of Non-goverment organization" width={100} height={100} />
        </div>
        <div className="phone">
          <p><bold>+38 097 265 2929</bold></p>
        </div>
        <div className="donate">
          <button>Пожертвувати</button>
        </div>
        <div className="language">
          <button>Укр</button>
          <button>En</button>
        </div>
      </div>
      <div className="lower-line">
        <div className="org-name">
          <p>
          Громадська організація «Одеське обласне <br /> об’єднання 
працездатних інвалідів «Інваком»
          </p>
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link href="/about">
                Про нас
              </Link>
            </li>
            <li>
              <Link href="/mission">
                Наша місія
              </Link>
            </li>
            <li>
              <Link href="/OurActivity">
                Наша діяльність
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: column;
          width: 105%;
        }
        .upper-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        }
        .lower-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        }
        .logo {
          font-weight: bold;
          font-size: 24px;
          text-decoration: none;
          color: black;
    
        }
        .phone p {
          margin: 0;
        }
        .donate button {
          background-color: blue;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }
        .language button {
          background-color: green;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }
        .nav-menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }
        .nav-menu li {
          margin-right: 20px;
        }
        .nav-menu li:last-child {
          margin-right: 0;
        }
        .nav-menu a {
          text-decoration: none;
          color: black;
          font-weight: bold;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}
