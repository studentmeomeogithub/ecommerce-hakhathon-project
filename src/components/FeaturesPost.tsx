import Image from "next/image";

function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      image: "/fixed-height (1).png",
      label: "NEW",
      title: "Boys",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 2,
      image: "/fixed-height (2).png",
      label: "NEW",
      title: "Woman",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 3,
      image: "/fixed-height (3).png",
      label: "NEW",
      title: "Woman",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-32 py-10 bg-white">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-blue-500 font-semibold">Practice Advice</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Posts</h2>
        <p className="text-gray-600 mt-2">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-md">
                {post.label}
              </span>
            </div>
            <div className="p-4">
              <div className="text-gray-500 text-sm mb-2">Google • Trending • New</div>
              <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📊</span>
                  <span>{post.comments} comments</span>
                </div>
              </div>
      
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedPosts;
