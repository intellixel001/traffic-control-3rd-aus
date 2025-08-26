"use client";

import Link from "next/link";
import { FaRoad, FaPhoneAlt } from "react-icons/fa";
import { MdCellTower, MdConstruction, MdEvent } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="font-opensans relative min-h-screen w-full overflow-hidden flex items-center justify-center py-26">
      <div className="absolute inset-0 z-0">
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center text-white">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 font-anton font-bold">
            SAFE AND EFFICIENT <br />
            <span className="text-blue-400">TRAFFIC CONTROL</span> SOLUTIONS
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
            From lane closures on Motorways to pedestrian management, we
            provide reliable and effective traffic control services for
            projects of all sizes.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-500 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <FaPhoneAlt className="text-xl" />
              Contact Us Today
            </Link>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Feature icon={<FaRoad className="text-3xl text-blue-400" />} title="Road Infrastructure" />
            <Feature icon={<MdCellTower className="text-3xl text-blue-400" />} title="Utility & Telecommunications" />
            <Feature icon={<MdConstruction className="text-3xl text-blue-400" />} title="Construction" />
            <Feature icon={<MdEvent className="text-3xl text-blue-400" />} title="Major Events" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title }) => (
  <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
    <div className="bg-blue-500/20 p-4 rounded-full">{icon}</div>
    <span className="font-medium text-lg">{title}</span>
  </div>
);

export default HeroSection;
