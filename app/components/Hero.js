import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Overlay covering the entire height */}
      <div className="relative isolate z-0 px-4 pt-14 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Welcome To Naif's Graphy
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Dive into exploring the rich culture of Multan through my photography, capturing the essence and vibrant spirit of this historic city.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <Link
              href="#gallery"
                type="button"
                className="rounded-md text-decoration-none bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View Pictures
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
