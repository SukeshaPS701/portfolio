export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      
      {/* Hero */}
      <section className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">
          Sukesha PS
        </h1>

        <p className="text-2xl text-gray-300 mb-6">
          AI / ML Developer
        </p>

        <p className="text-gray-400 max-w-2xl">
          BCA (Artificial Intelligence & Machine Learning) student at
          Vivekananda College of Arts Science and Commerce, Puttur.
          AI/ML Team Lead at GDG on Campus VC. Passionate about building
          intelligent systems, machine learning models, and real-world AI
          applications.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto mt-24">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-zinc-900 p-4 rounded">Python</div>
          <div className="bg-zinc-900 p-4 rounded">SQL</div>
          <div className="bg-zinc-900 p-4 rounded">Java</div>
          <div className="bg-zinc-900 p-4 rounded">C++</div>
          <div className="bg-zinc-900 p-4 rounded">DBMS</div>
          <div className="bg-zinc-900 p-4 rounded">Data Structures</div>
          <div className="bg-zinc-900 p-4 rounded">IoT</div>
          <div className="bg-zinc-900 p-4 rounded">AI / ML</div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto mt-24">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="space-y-6">
          <div className="bg-zinc-900 p-6 rounded">
            <h3 className="text-xl font-semibold">Spam Mail Prediction</h3>
            <p className="text-gray-400">
              Machine learning model that classifies emails as spam or not.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded">
            <h3 className="text-xl font-semibold">Cat & Dog Image Classifier</h3>
            <p className="text-gray-400">
              Deep learning model that identifies cats and dogs from images.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded">
            <h3 className="text-xl font-semibold">
              Book Recommendation System
            </h3>
            <p className="text-gray-400">
              Recommendation engine using KNN algorithm.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto mt-24">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <p className="text-gray-400">
          GitHub: github.com/SukeshaPS701
        </p>

        <p className="text-gray-400">
          LinkedIn: linkedin.com/in/sukesha-ps-94604231a
        </p>
      </section>

    </main>
  );
}
