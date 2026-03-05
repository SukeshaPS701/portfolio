export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          height: "100vh",
          backgroundImage: "url('/profile.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%", // 👈 Adjusted so head is visible
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "30px",
            maxWidth: "800px",
          }}
        >
          <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
            Sukesha PS
          </h1>

          <h2 style={{ margin: "10px 0", fontWeight: "400" }}>
            AI / ML Developer
          </h2>

          <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
            BCA (Artificial Intelligence & Machine Learning) student at
            Vivekananda College of Arts Science and Commerce, Puttur. <br />
            AI/ML Team Lead at GDG on Campus VC. <br />
            Passionate about building intelligent systems, machine learning
            models, and real-world AI applications.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Skills
        </h2>

        <p style={{ maxWidth: "800px", margin: "auto", lineHeight: 2 }}>
          Python • SQL • Java • C++ • DBMS • Data Structures • IoT • AI / ML
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Projects
        </h2>

        <div style={{ marginBottom: "40px" }}>
          <h3>Spam Mail Prediction</h3>
          <p>
            Machine learning model that classifies emails as spam or not.
          </p>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h3>Cat & Dog Image Classifier</h3>
          <p>
            Deep learning model that identifies cats and dogs from images.
          </p>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h3>Book Recommendation System</h3>
          <p>
            Recommendation engine using KNN algorithm.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#111",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Contact
        </h2>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/SukeshaPS701"
            target="_blank"
            style={{ color: "#00aaff" }}
          >
            github.com/SukeshaPS701
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/sukesha-ps-94604231a"
            target="_blank"
            style={{ color: "#00aaff" }}
          >
            linkedin.com/in/sukesha-ps-94604231a
          </a>
        </p>
      </section>
    </>
  );
}
