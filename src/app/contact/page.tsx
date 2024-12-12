export default function Contact() {
    return (
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <form className="flex flex-col items-center space-y-4 max-w-md w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white hover:bg-purple-800 transition rounded-lg"
        >
          Send Message
        </button>
      </form>
      <a
        href="/home"
        className="mt-8 px-6 py-2 bg-gray-800 text-white hover:bg-gray-600 transition rounded-lg"
      >
        Back to Home
      </a>
    </div>
  );
}
