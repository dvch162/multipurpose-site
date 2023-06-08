import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Footer.module.css';
//import logo from '@/public/logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.col} ${styles.logo}`}>
          {/* <Image src={logo} alt="Logo of Non-goverment organization" className={styles['image']} /> */}
          <h3>Dobrobut<span>Sol</span>, LLC</h3>
          <ul>
            <li><Link href="/edrpou">Tax no: 43165052</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3>About Us</h3>
          <ul>
          <li><Link href="/StatuteDocs">Statutory Documents</Link></li>
            <li><Link href="/FinStat">Financial Statements</Link></li>
            <li><Link href="/Reports">Activity Reports</Link></li>
          
          </ul>
        </div>
        <div className={styles.col}>
          <h3>Rights Protection</h3>
          <ul>
            <li><Link href="/photos">Photo Archive</Link></li>
            <li><Link href="/help">Address Assistance</Link></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3>News</h3>
          <ul>
            <li><Link href="/news">Latest News</Link></li>
            <li><Link href="/articles">Articles</Link></li>
            <li><Link href="/expertise">Public Expertise</Link></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3>Partners</h3>
          <ul>
            <li><Link href="/partners">Our Partners</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/processing">Personal Data Processing Rules</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
