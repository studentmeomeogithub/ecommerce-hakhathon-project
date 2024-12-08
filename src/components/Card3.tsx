import Image from 'next/image';

function Card3() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-10 bg-white">
      {/* Left: Image */}
      <div className="md:w-1/2 mr-9">
        <Image
          src="/big-shirt.jpg" // Correct path
          alt="Couple with red scarf"
          width={500} // Replace with your desired width
          height={500} // Replace with your desired height
          className="rounded-lg"
        />
      </div>

      {/* Right: Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <p className="text-gray-500 uppercase tracking-wide text-sm">
          Summer 2020
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Part of the Neural Universe
        </h1>
        <p className="text-gray-600">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Buy Now
          </button>
          <button className="px-6 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Card3;
