import Banner from "@/components/sections/Banner";
import ProductCategory from "@/components/sections/ProductCategory";
import TrandingBooks from "@/components/sections/TrandingBooks";
import React from "react";

export default function page() {
  const challenges = [
  {
    id: 1,
    title: "Summer Reading Marathon",
    description: "Read 5 books in 3 months and earn a prize!",
    endDate: "2025-09-30",
  },
  {
    id: 2,
    title: "Mystery Month",
    description: "Explore 3 mystery novels this month.",
    endDate: "2025-08-31",
  },
];
const bookClubs = [
  {
    id: 1,
    name: "Sci-Fi Fans Club",
    description: "Monthly meetups discussing the latest in science fiction.",
    meetings: "First Saturday of every month",
  },
  {
    id: 2,
    name: "Historical Fiction Club",
    description: "Dive into the past with fellow history buffs.",
    meetings: "Every 2nd Tuesday",
  },
];
  return (
    <div >
     <Banner></Banner>
     <ProductCategory></ProductCategory>
     <TrandingBooks></TrandingBooks>
     <section className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Reading Challenges & Book Clubs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Challenges */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Current Reading Challenges</h3>
          {challenges.length === 0 ? (
            <p className="text-gray-600">No active challenges right now. Check back soon!</p>
          ) : (
            <ul className="space-y-3">
              {challenges.map((challenge) => (
                <li key={challenge.id} className="p-4 bg-white rounded shadow-sm hover:shadow-md transition cursor-pointer">
                  <h4 className="font-semibold">{challenge.title}</h4>
                  <p className="text-sm text-gray-600">{challenge.description}</p>
                  <p className="text-xs text-gray-400 mt-1">Ends on: {challenge.endDate}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Book Clubs */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Join Our Book Clubs</h3>
          {bookClubs.length === 0 ? (
            <p className="text-gray-600">No book clubs available currently.</p>
          ) : (
            <ul className="space-y-3">
              {bookClubs.map((club) => (
                <li key={club.id} className="p-4 bg-white rounded shadow-sm hover:shadow-md transition cursor-pointer">
                  <h4 className="font-semibold">{club.name}</h4>
                  <p className="text-sm text-gray-600">{club.description}</p>
                  <p className="text-xs text-gray-400 mt-1">Meetings: {club.meetings}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
    </div>
  );
}
