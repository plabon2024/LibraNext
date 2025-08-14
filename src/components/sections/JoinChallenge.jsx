import Link from "next/link";
import Image from "next/image";

const joinChallenges = [
  {
    id: 1,
    title: "Monthly Mystery Marathon",
    description:
      "Unravel thrilling mysteries this month by reading 3 mystery novels and sharing your theories in our group discussion!",
    image: "/mistry.jpg",
    startDate: "2025-09-01",
    endDate: "2025-09-30",
    slug: "monthly-mystery-marathon",
  },
  {
    id: 2,
    title: "30-Day Poetry Journey",
    description:
      "Read and reflect on one poem a day. Share your favorites with fellow poetry lovers.",
    image: "/textbook.jpg",
    startDate: "2025-09-05",
    endDate: "2025-10-05",
    slug: "30-day-poetry-journey",
  },
];

export default function JoinChallenge() {
  return (
    <section className=" py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Join a <span className="text-primary">Challenge</span>
          </h2>
          <p className=" mt-3">
            Be part of a reading adventure — choose a challenge and start today!
          </p>
        </div>

        {/* Challenges */}
        <div className="grid sm:grid-cols-2 gap-8">
          {joinChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-56">
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-black">
                <h3 className="text-lg font-semibold  mb-3">
                  {challenge.title}
                </h3>
                <p className=" text-sm mb-4 line-clamp-3">
                  {challenge.description}
                </p>
                <p className="text-sm mb-4">
                  📅 {challenge.startDate} → {challenge.endDate}
                </p>

                <Link
                  href={`/join-challenge/${challenge.slug}`}
                  className="inline-block bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition"
                >
                  Join Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
