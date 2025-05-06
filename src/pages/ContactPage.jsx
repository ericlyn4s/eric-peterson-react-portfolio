import { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Here, you'd typically send the form data to a server (e.g., using fetch)
    console.log('Form Data:', { name, email, message });
  };
// Creating a submission form, with three fields
<h1>Check back later!</h1>

  return (
    <>
       {/* Updated heading */}
      <form className="container" onSubmit={handleSubmit}>
      <h1>Please Check Back Later!</h1><br></br>
      {/*
        <div className="contact-field">
          <label htmlFor="name" className="contact-label">Name:</label> 
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        */}
        {/*
        <div className="contact-field">
          <label htmlFor="email" className="contact-label">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
          /> 
        </div>
        */}
        {/* <div className="contact-field">
          <label htmlFor="message" className="contact-label">Message:</label>
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div> */}
        {/* <button id="form-button" type="submit">Send Message</button> */}
      </form>
    </>
  );
}



  export default ContactPage;