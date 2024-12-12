export default function Services() {
    return (
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-white-900 min-h-screen flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold mb-6">My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {["Web Development", "UI/UX Design", "SEO Optimization"].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-pink-100 hover:bg-pink-300 transition shadow rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-2">{service}</h2>
              <p>High-quality {service.toLowerCase()} tailored to your needs.</p>
            </div>
          ))}
        </div>
        <a
          href="/home"
          className="mt-8 px-6 py-2 bg-purple-600 text-white hover:bg-purple-800 transition rounded-lg"
        >
          Back to Home
        </a>
      </div>
    );
  }
  