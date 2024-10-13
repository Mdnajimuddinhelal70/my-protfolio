
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
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
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your message has been sent successfully!",
        showConfirmButton: false,
        timer: 3000,
        background: "#f0f0f0",
        customClass: {
          title: "my-title",
          popup: "my-popup",
        },
      });
    } else {
      alert("There was an issue sending your message. Please try again.");
    }
    event.target.reset();
  };

  return (
    <div id="contact" className="py-10 px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Get in touch</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Let's talk</h2>
            <p className="text-lg">
              I'm always excited to collaborate on new projects and discuss innovative ideas.
              Feel free to reach out, and I'll respond as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <AiOutlineMail size={30} className="text-gray-600" />
                <p className="text-lg">najimuddinhelal96@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <AiOutlinePhone size={30} className="text-gray-600" />
                <p className="text-lg">+8801796427670</p>
              </div>
              <div className="flex items-center space-x-4">
                <GoLocation size={30} className="text-gray-600" />
                <p className="text-lg">Location: Bangladesh, Sylhet</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="shadow-lg rounded-lg p-8 space-y-6">
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-yellow-500">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="w-full px-4 py-2 border bg-yellow-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-yellow-500">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="w-full px-4 py-2 border bg-yellow-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-yellow-500">Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                name="company"
                className="w-full px-4 py-2 border bg-yellow-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-yellow-500">Write your message here</label>
              <textarea
                name="message"
                rows="3"
                placeholder="Enter your message"
                className="w-full px-4 py-2 border bg-yellow-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-700 text-white py-2 rounded-md hover:bg-yellow-900 transition duration-300"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
