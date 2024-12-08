export default function Hero() {
  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-between px-10">
      {/* Left Section */}
      <div className="text-white z-10">
        <p className="text-sm uppercase tracking-widest">Summer 2020</p>
        <h1 className="text-5xl font-bold mt-2">New Collection</h1>
        <p className="text-lg mt-4">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="mt-6 bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600">
          Shop Now
        </button>
      </div>

    
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/shop-hero-1-product-slide-1.jpg")', // Path to your image in the `public` folder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height:"110vh",
        }}
      />
    </div>
  );
}
