import Image from "next/image";
import React from "react";

export default function About() {
  return (
 <section className=" py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Image */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/about.jpeg" // Replace with your image
            alt="About Libranext"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
            About <span className="text-primary">Libranext</span>
          </h2>
          <p className="leading-relaxed mb-4">
            Libranext is your modern gateway to the world of books. Whether you’re a passionate reader, a casual book lover, or 
            someone searching for knowledge, our platform offers a vast collection of titles, curated reading challenges, and 
            interactive book clubs to make your reading journey engaging and rewarding.
          </p>
          <p className=" leading-relaxed mb-6">
            With an intuitive interface, personalized recommendations, and community-driven discussions, Libranext aims to 
            bring people together through the joy of reading — anytime, anywhere.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-primary font-bold mr-2">•</span>
              Access thousands of books across all genres
            </li>
            <li className="flex items-center">
              <span className="text-primary font-bold mr-2">•</span>
              Join book clubs & connect with fellow readers
            </li>
            <li className="flex items-center">
              <span className="text-primary font-bold mr-2">•</span>
              Take part in exciting reading challenges
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
