import Image from "next/image";
import Link from "next/link";

const challenges = [
  {
    id: 1,
    title: "Read 20 Books in 2025",
    description:
      "Push your reading limits by completing 20 books before the end of the year. Any genre counts!",
    image: "/challenge1.jpg", // Replace with your own image
    progress: 12, // number of books read so far
    goal: 20,
    slug: "read-20-books-2025",
  },
  {
    id: 2,
    title: "Explore World Literature",
    description:
      "Travel the globe through books! Read at least one book from 10 different countries.",
    image: "/challenge2.jpg",
    progress: 4,
    goal: 10,
    slug: "explore-world-literature",
  },
  {
    id: 3,
    title: "Classic Novels Marathon",
    description:
      "Read 5 timeless classics and discuss them with fellow readers in our online sessions.",
    image: "/challenge3.jpg",
    progress: 2,
    goal: 5,
    slug: "classic-novels-marathon",
  },
];

export default function Challenges() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Current <span className="text-primary">Reading Challenges</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Join a challenge and make reading even more exciting.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge) => {
            const progressPercentage = Math.round(
              (challenge.progress / challenge.goal) * 100
            );
            return (
              <div
                key={challenge.id}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={challenge.image}
                    alt={challenge.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {challenge.description}
                  </p>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                    <div
                      className="bg-primary h-3 rounded-full"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>

                  
                  <p className="text-sm text-gray-500 mb-4">
                    {challenge.progress} / {challenge.goal} books
                  </p>

                  <Link
                    href={`/challenges/${challenge.slug}`}
                    className="text-primary font-semibold hover:underline"
                  >
                    Join Challenge →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
