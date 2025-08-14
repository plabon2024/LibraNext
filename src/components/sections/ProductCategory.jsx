import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Code, Globe, BookOpen, Cpu } from "lucide-react";
export default function ProductCategory() {
  return (
    <div className="py-10 ">
      <div className="container mx-auto text-center ">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Explore Books That Inspire and Empower You
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {/* Programming Language */}
          <div className="flex flex-col items-center max-w-xs text-center bg-primary/10 py-8 px-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Code className="w-10 h-10 text-primary" />
            </div>
            <p className="mt-2 text-sm font-medium">Programming Language</p>
            <p className="mt-1 text-xs opacity-60">
              Learn modern programming languages and coding techniques.
            </p>
          </div>
          {/* Computer Science */}
          <div className="flex flex-col items-center max-w-xs text-center bg-primary/10 py-8 px-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Cpu className="w-10 h-10 text-primary" />
            </div>
            <p className="mt-2 text-sm font-medium">Computer Science</p>
            <p className="mt-1 text-xs opacity-60">
              Understand algorithms, data structures, and computation.
            </p>
          </div>
          {/* Web Development */}
          <div className="flex flex-col items-center max-w-xs text-center bg-primary/10 py-8 px-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Globe className="w-10 h-10 text-primary" />
            </div>
            <p className="mt-2 text-sm font-medium">Web Development</p>
            <p className="mt-1 text-xs opacity-60">
              Build stunning, responsive, and dynamic websites.
            </p>
          </div>

          {/* Self Help */}
          <div className="flex flex-col items-center max-w-xs text-center bg-primary/10 py-8 px-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <p className="mt-2 text-sm font-medium">Self Help</p>
            <p className="mt-1 text-xs opacity-60">
              Improve productivity, focus, and personal growth.
            </p>
          </div>
        </div>
        <Button className="rounded-full shadow-md">View All Categories</Button>
      </div>
    </div>
  );
}
