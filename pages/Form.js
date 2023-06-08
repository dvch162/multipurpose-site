import React from 'react';
import { useEffect } from 'react';

export default function Form() {
    // useEffect(() => {
    //   const forms = document.querySelectorAll('form.gform');
    //   forms.forEach((form) => {
    //     form.addEventListener('submit', handleFormSubmit);
    //   });
  
    //   return () => {
    //     forms.forEach((form) => {
    //       form.removeEventListener('submit', handleFormSubmit);
    //     });
    //   };
    // }, []);
  
    function getFormData(form) {
        const elements = form.elements;
        let honeypot;
      
        const fields = Object.keys(elements).filter((k) => {
          if (elements[k].name === 'honeypot') {
            honeypot = elements[k].value;
            return false;
          }
          return true;
        }).map((k) => {
          if (elements[k].name !== undefined) {
            return elements[k].name;
          } else if (elements[k].length > 0) {
            return elements[k].item(0).name;
          }
        }).filter((item, pos, self) => {
          return self.indexOf(item) === pos && item;
        });
      
        const formData = {};
        fields.forEach((name) => {
          const element = elements[name];
      
          formData[name] = element.value;
      
          if (element.length) {
            const data = [];
            for (let i = 0; i < element.length; i++) {
              const item = element.item(i);
              if (item.checked || item.selected) {
                data.push(item.value);
              }
            }
            formData[name] = data.join(', ');
          }
        });
      
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || 'responses';
        formData.formGoogleSend = form.dataset.email || '';
      
        return { data: formData, honeypot: honeypot };
      }
      
      // Implementation of getFormData
      
    
  
    async function handleFormSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const formData = getFormData(form);
      const data = formData.data;
  
      if (formData.honeypot) {
        return false;
      }
  
      disableAllButtons(form);
  
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(data).toString(),
        });
  
        if (response.ok) {
          form.reset();
          const formElements = form.querySelector('.form-elements');
          if (formElements) {
            formElements.style.display = 'none';
          }
          const thankYouMessage = form.querySelector('.thankyou_message');
          if (thankYouMessage) {
            thankYouMessage.style.display = 'block';
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    function disableAllButtons(form) {
        const buttons = form.querySelectorAll('button');
        buttons.forEach((button) => {
          button.disabled = true;
        });
      }
      // Implementation of disableAllButtons 


return (
  <div className="form-container" style={{ display: 'flex', flexDirection: 'row', 
  alignItems: 'flex-start', justifyContent: 'center', paddingRight: '35px' }}>
    <style jsx>{`
        @media (max-width: 768px) {
          .form-container {
            flex-direction: column;
          }
        }
        input::placeholder {
        color: #0c2e8a;
    }
        textarea::placeholder {
    color: #0c2e8a;
  }
      `}</style>
    <h1 style={{ textAlign: 'left', 
    color: '#0c2e8a',
    paddingLeft: '35px',
    paddingTop: '59px', 
    paddingRight: '35px'}} >Contact us</h1>
    <div
      className="form-card"
      style={{
        width: '100%',
        maxWidth: '450px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
        paddingRight: '30px',

      }}
    >
      <form className="gform">
        <div>
          <label htmlFor="name" style={{ display: 'none' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            style={{
              width: '100%',
              height: '30px',
              color: '#0c2e8a',
              backgroundColor: '#f4f4f4',
              border: 'none',
              padding: '5px',
              marginBottom: '15px',
            }}
          />
        </div>
        <div>
          <label htmlFor="company" style={{ display: 'none' }}>
            Company:
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company"
            required
            style={{
              width: '100%',
              height: '30px',
              color: '#0c2e8a',
              backgroundColor: '#f4f4f4',
              border: 'none',
              padding: '5px',
              marginBottom: '15px'
            }}
          />
        </div>
        <div>
          <label htmlFor="email" style={{ display: 'none' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            style={{
              width: '100%',
              height: '30px',
              color: '#0c2e8a',
              backgroundColor: '#f4f4f4',
              border: 'none',
              padding: '5px',
              marginBottom: '15px',
            }}
          />
        </div>
        <div>
          <label htmlFor="message" style={{ display: 'none' }}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Message"
            required
            style={{
              width: '100%',
              height: '60px',
              backgroundColor: '#f4f4f4',
              color: '#0c2e8a',
              border: 'none',
              padding: '5px',
              marginBottom: '15px',
            }}
          ></textarea>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" style={{ height: '20px', width: '170px', 
          backgroundColor: '#0c2e8a', border: 'none', padding: '15px', 
          borderRadius: '10px',
      textAlign: 'center', display: 'flex',
      alignItems: 'center', justifyContent: 'center' }}>Submit</button>
       </div>
       </form>
    </div>
    </div>
 );
}