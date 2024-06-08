import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black py-5 pb-7"> {/* Added mt-8 to create space above the footer */}
      <div className="container mx-auto pt-5">
        <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="inline-flex items-center space-x-2">
          <span>
          <Link href="/">
              <Image src="/logo.jpg" width={70} height={70} alt="Logo" />
          </Link>
          </span>
          <a href="#" className="text-white display-7 text-sm text-decoration-none text-center">
              naifgraphy 
            </a>
        </div>
        
          <div className="md:mb-0">
            <p className=" text-white text-sm">© {new Date().getFullYear()} Naif's Graphy. All rights reserved.</p>
          </div>
     
        </div>
      </div>
    </footer>
  );
};

export default Footer; 