import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Banner() {
  return (
<div className="container mx-auto flex flex-col-reverse lg:flex-row gap-5 items-center justify-between min-h-[80vh] px-4">
  <div className="flex flex-col justify-start gap-6 font-serif animate-fadeIn">
    <p className="text-sm text-primary uppercase tracking-wide">Let's make the best investment</p>
    <div className="flex items-start">
      <div className="w-1 bg-primary mr-4 rounded self-stretch"></div>
      <h1 className="font-bold italic text-5xl sm:text-6xl lg:text-7xl max-w-md font-lora tracking-tighter text-left">
        There is no friend as loyal as a book
      </h1>
    </div>
    <p className="max-w-2xl opacity-30 font-light">
  Books are the gateway to knowledge, imagination, and growth. They inspire us to explore new ideas, deepen our understanding, and connect with the world around us. Whether for learning or leisure, every page turns into an opportunity to enrich your mind and soul.
    </p>
    <Button className="w-fit px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark transition">
      View Books
    </Button>
  </div>
  <div className="max-w-lg w-full">
    <Image
      src="/Reading-book.svg"
      alt="reading-book"
      width={500}
      height={500}
      className="mx-auto"
    />
  </div>
</div>

  );
}
