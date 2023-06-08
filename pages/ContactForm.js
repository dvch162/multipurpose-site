import React, { useState } from 'react';

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Comments:', comments);
  };


export default function ContactForm () {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');

  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <br />
      <br />

      <label>
        Comments:
        <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
      </label>
      <br />
      <br />
      
      <p>*Натискаючи на кнопку відпривати, ви даєте згоду на обробку персональних даних і погоджуєтесь з нашою політикою конфіденціальності</p>
      <br />
      <button type="submit">Send</button>
    </form>
    
  );
}

