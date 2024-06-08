"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Gallery",
    href: "#gallery",
  },
  {
    name: "Contact Me",
    href: "#contactme",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
          <Link href="/">
              <Image src="/logo.jpg" width={70} height={60} alt="Logo" />
          </Link>
          </span>
          {/* <span className="display-7 text-decoration-none text-white font-bold">
            Naif's Grapy
          </span> */}
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-8 mt-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="display-7 text-decoration-none text-white"
                  style={{ textDecoration: "none" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <Link
            href="#contactme"
            type="button"
            className="display-7 text-decoration-none rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact Me
          </Link>
        </div>
        <div className="lg:hidden">
          <Menu
            onClick={toggleMenu}
            className="h-6 w-6 text-white cursor-pointer"
          />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5 bg-black">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                    <Link href="/">
              <Image src="/logo.jpg" width={50} height={50} alt="Logo" />
          </Link>
                    </span>
                    <span className="display-7 text-xs text-decoration-none text-white">naifgraphy</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold text-white"
                        style={{ textDecoration: "none" }}
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <Link
                  href="#contactme"
                  type="button"
                  className="mt-4 w-full display-7 text-decoration-none rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
