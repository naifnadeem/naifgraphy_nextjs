import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-black text-white p-10 " id='contactme'>
      <div className="container mx-auto text-center">
      <h1 className="text-center display-5 font-weight-bold mb-10   ">Contact Me</h1>
        <p className="">Feel free to reach out to us through our social media channels:</p>
        <div className="flex justify-center space-x-4 mt-8 mb-12">
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaFacebook size={30} />
          </Link>
          <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaTwitter size={30} />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram size={30} />
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin size={30} />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Contact;