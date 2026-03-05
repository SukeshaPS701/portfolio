export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale brightness-50"
        style={{ backgroundImage: "url('/profile.jpg')" }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold">Sukesha PS</h1>

        <p className="text-2xl mt-4 text-gray-300">
          AI / ML Developer
        </p>

        <p className="mt-6 text-gray-400 max-w-xl">
          BCA Artificial Intelligence & Machine Learning Student.  
          AI/ML Team Lead at GDG on Campus VC.
        </p>
      </div>

    </main>
  );
}
