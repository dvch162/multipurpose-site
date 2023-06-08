import React from 'react';
import Image from 'next/image';
import headorg from '../public/headorg.jpeg';
import defrights from '../public/defrights.png';
import adrhelp from '../public/adrhelp.png';
import accessibility from '../public/accessibility.png';
import lift from '../public/lift.png';
import humanitcrys from '../public/humanitcrys.png';

export default function About() {
  return (
    <div className="about-us">
        <div className="container">
          <h1>Про нас</h1>
        </div>
      <div className="content">
        <div className="left-column">
          <p>Володимир Шелепов</p>
          <p>Голова організації</p>
          <p>Володимир Олександрович з 2019 року є засновником та керівником організації, інвалідом війни, особою, яка присвячує весь свій час та увагу такій вразливій групі людей - особам з інвалідністю, їх опікунам та піклувальникам. Особисте кредо звучить як - ми намагаємось сильніше.</p>
        </div>
        <div className="right-column">
          <Image src={headorg} alt="About Us Image" width={550} height={750} />
        </div>
      </div>
      <br />
      <br />

      <div className='our-mission'>
        <div className="container">
          <h1>Наша місія</h1>
        </div>
        <div className="card-container">
          <div className="card">
            <Image src={defrights} alt="Defending arms image" width={150} height={150} />
            <p>Захист прав осіб з інвалідністю</p>
          </div>
          <div className="card">
            <Image src={adrhelp} alt="Adress help Image" width={150} height={150} />
            <p>Адресна допомога</p>
          </div>
          <div className="card">
            <Image src={accessibility} alt="Accessibility Image" width={150} height={150} />
            <p>Дослідження доступності середовища для осіб з інвалідністю</p>
          </div>
        </div>
      </div>
      
      <div className="container">
          <h1>Діяльність до війни</h1>
        </div>
      <div className="content">
        <div className="left-column">
          <p>Для виконання статутної діяльності, Громадська організація Інваком у 2019 році виступило засновником Підприємства обʼєднання громадян Інваком-МНС, яке займається працевлаштуванням осіб з інвалідністю, повним циклом збірки підйомника, що має сертифікацію відповідності міністерства України.</p>
          <p>Поступове збільшення кількості виробленої продукції та загальна соціальна значущість, що полягає у тому, що 75% працівників підприємства є особами з інвалідністю, дозволило отримати 24.12.2021 року розпорядження про надання пільг з оподаткування від Одеської обласної державної адміністрації як підприємству громадської організації осіб з інвалідністю.</p>
        </div>
        <div className="right-column">
          <Image src={lift} alt="lift image for disabled persons" width={450} height={650} />
        </div>
      </div>

      <div className="container">
          <h1>Подолання гуманітарної кризи</h1>
        </div>
      <div className="content">
        <div className="lower-column">
          <p>Військова агресія Россії змінила життя кожного українця, а проблеми з соціальним забезпеченням лише суттєво поглиблилась. Особи з інвалідністю, одинокі літні люди, одинокі матері виховуючі дитину інваліда, опікуни та піклувальники за особами з інвалідністю відповідно до соціологічних досліджень не мають жодних заощаджень, які б допомогли пережити цей військовий час, оскільки і до війни, змушені були розраховувати як розділити бюджет та придбати усі необхідні їм ліки, продукти харчування, засоби гігієни тощо.</p>
          <p>Відповідно початок війни спричинив закриття суттєвої кількості робочих місць, в сімʼях, де виховується чи знаходиться під опікою чи піклуванням особа/би з інвалідністю, опинились у надзвичайно складних умовах.</p>
          <p>Наша громадська організація у звʼязку із надзвичайною ситуацією, спричиненою війною, зміщує акцент своєї діяльності на адресній допомозі тим, хто її зараз потребує у першу чергу, а саме маються на увазі особи з інвалідністю та сім’ї в яких під опікою чи піклуванням знаходиться особа з інвалідністю.</p>
        </div>
        <div className="upper-column">
          <Image src={humanitcrys} alt="image inclusive society" width={650} height={250} />
        </div>
      </div>

      <style jsx>{`
      .about-us {
        padding: 20px;
        width: 100%;  
      }

      .container {
          height: 90px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to right, turquoise, blue);
          max-width: var(--max-width);
  margin: 0 auto;
        }

        .container h1 {
          color: white;
        }


      {/* .content {
        display: flex;
        justify-content: space-between;
        max-width: 800px;
        margin: 0 auto;
      } */}

      .content {
        display: flex;
  flex-direction: column-reverse;;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.upper-column {
  margin-bottom: 20px;
}

.lower-column {
  margin-top: 20px;
}


      .left-column {
        background-color: #ffffff;
        color: #000000;
        padding: 20px;
        flex: 1;
      }

      .right-column {
        flex: 1;
      }

      .card-container {
          display: flex;
          justify-content: center;
          max-width: 1350px;
          margin: 0 auto;
        }

        .card {
          width: 400px;
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .card p {
          margin-top: 10px;
          text-align: center;
        }

        

      @media (max-width: 768px) {
          .content {
            flex-direction: column-reverse;

      {/* .right-column img {
        width: 100%;
        height: auto;
      } */}
  `}</style></div>
    
       
       );
}
