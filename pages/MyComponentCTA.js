// import React from 'react';
import styles from '@/styles/Home.module.css'


function CTAButton ()  {
  return (
  <div className={styles['cta-button']}>
    <a href="#">Контактувати<span>&#8594;</span></a>
  </div>
);}

export default function MyComponentCTA () {
  return (
    <div className={styles['my-component-cta']}>
    <h1>Якщо вам потрібна допомога або ви бажаєте долучитись і допомогти нашій організації</h1>
    <p>Звертайтесь до нас за електронною адресою або телефонуйте!</p>
     <CTAButton />
      {/* <div className="cta-button">
        <a href="#">Контактувати<span>&#8594;</span></a>
      </div> */}
  </div>
  );
}
  
  



