import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import "./Contact.css";
import { GoLocation } from "react-icons/go";
import Swal from "sweetalert2";
const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e6828947-26a8-4367-bb8b-347fa2cbee4c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    if (res.success) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your message has been sent successfully!',
        showConfirmButton: false,
        timer: 3000,
        background: '#f0f0f0',
        customClass: {
          title: 'my-title',
          popup: 'my-popup',
        },
      });
      
    } else {
      alert("There was an issue sending your message. Please try again.");
    }   
    event.target.reset() 
  };


  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contect-section">
        <div className="contat-left">
          <h1>Let's talk</h1>
          <p>
            I'm always excited to collaborate on new projects and discuss
            innovative ideas. Whether you have a question, want to work
            together, or just want to say hello, feel free to reach out! I'll
            respond as soon as possible.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
            <AiOutlineMail size={30} />
                <p>najimuddinhelal70@gmail.com</p>
            </div>
            <div className="contact-detail">
                <AiOutlinePhone size={30} />             
              <p>+8801796427670</p>
            </div>
            <div className="contact-detail">
            <GoLocation size={30} />
            <p>Location: Bangladesh, Sylhet</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
