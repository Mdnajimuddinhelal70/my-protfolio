import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-2">Let's Work Together</h3>
        <h1 className="text-xl mb-4">najimuddinhelal96@gmail.com</h1>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-gray-500"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Najimuddin Helal. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
