"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function TrandingBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch("/api/books?limit=4");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setBooks(data.data || data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-10 ">
      <h2 className="text-3xl font-bold mb-8 text-center ">Trending Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {books.map((book) => (
          <div
            key={book._id}
            className="rounded-lg  
            flex flex-col justify-center items-center overflow-hidden cursor-pointer "
          >
            {book.coverUrl ? (
              <div className="space-y-4  bg-primary/5 shadow-2xl p-8 my-4">
                <div className="relative w-[196px] h-[250px] mx-auto  py-4 ">
                  <div className="absolute left-1/2 -translate-x-1/2  w-[76%] h-[88%] overflow-hidden rounded-sm mx-auto">
                    <Image
                      src={book.coverUrl}
                      alt={book.title}
                      fill
                      className="object-contain w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className=" flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-slate-400 flex-grow">
                    {book.author}
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-60 bg-gray-200 flex items-center justify-center rounded-t-lg">
                <span className="text-gray-400">No Image</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 bg-amber-700 my-5">
          {books.map((book) => (
            <div key={book._id} className="lg:mx-auto text-white">
              <div className="relative w-[196px] h-[250px]">
                <BookCoverSvg coverColor={book.coverColor} />

            
                <div className="absolute z-10 top-[6%] left-[12%] w-[76%] h-[88%] overflow-hidden rounded-sm">
                  <Image
                    src={book.coverUrl}
                    alt={book.title}
                    fill
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

              <h1 className="mt-2 text-center font-semibold">{book.title}</h1>
              <p className="text-center text-sm">{book.genre}</p>
            </div> */
}
