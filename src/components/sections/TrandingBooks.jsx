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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center px-4 py-8">
        {books.map((book) => (
          <div
            key={book._id}
            className="flex flex-col items-center w-full max-w-xs rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 p-4 hover:shadow-xl bg-primary/10 shadow-md"
          >
            {book.coverUrl ? (
              <>
                <div className="relative w-[196px] h-[250px]">
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

                {/* Book Info */}
                <div className="flex flex-col items-center text-center px-4 py-3 w-full">
                  <h3 className="text-base font-semibold mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-slate-500">{book.author}</p>
                </div>
              </>
            ) : (
              <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">No Image</span>
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
