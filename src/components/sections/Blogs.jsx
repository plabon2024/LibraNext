import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Must-Read Books This Year",
    excerpt: "Discover this year’s most captivating reads, from thrilling mysteries to heartwarming dramas...",
    date: "August 10, 2025",
    image: "/mustread.jpg", // Replace with actual image
    slug: "top-10-must-read-books"
  },
  {
    id: 2,
    title: "How to Build a Daily Reading Habit",
    excerpt: "Struggling to read regularly? Here’s how you can develop a consistent reading schedule...",
    date: "August 5, 2025",
    image: "/book-near-window.jpg",
    slug: "build-daily-reading-habit"
  },
  {
    id: 3,
    title: "The Benefits of Joining a Book Club",
    excerpt: "Reading is better together! Learn why joining a book club can enhance your experience...",
    date: "July 28, 2025",
    image: "/book-club.jpg",
    slug: "benefits-of-book-club"
  },
];

export default function Blogs() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Latest from <span className="text-primary">Our Blog</span>
          </h2>
          <p className=" mt-3">
            Stay updated with book recommendations, reading tips, and community news.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
 