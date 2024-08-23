import React from 'react'
import './ContactInput.css'

function ContactInput() {

  const handleSubmit = () => {
    document.querySelectorAll(".contactinput-input input, .contactinput-input textarea").forEach(input => {input.value = "";});
    alert("Thank you for submitting your message. A staff member will review it shortly")
  }

  return (
    <div className='contactinput'>
      <div className='contactinput-container'>
        <div className='contactinput-image'></div>
        <div className='contactinput-input'>
          <div className='contactinput-input-div'>
            <input type="text" id="name" placeholder="*Your Name" />
          </div>
          <div className='contactinput-input-div'>
            <input type="text" id="email" placeholder="*Email" />
          </div>
          <div className='contactinput-input-div'>
            <input type="text" id="phone" placeholder="*Phone" />
          </div>
          <div className='contactinput-input-div'>
            <textarea type="text" id="message" placeholder="Message" className='ier'></textarea>
          </div>
          <div className='submit-button'>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInput