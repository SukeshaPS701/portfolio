export default function Home() {
  return (
    <>
      {/* HERO / BACKGROUND SECTION */}
      <section
        style={{
          height: "100vh",
          backgroundImage: "url('/profile.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
          }}
        />

        {/* Hero Text */}
        <div style={{ position: "relative", padding: "30px", zIndex: 10 }}>
          <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
            Sukesha PS
          </h1>
          <h2 style={{ margin: "10px 0" }}>AI / ML Developer</h2>
          <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
            BCA Artificial Intelligence & Machine Learning Student <br />
            AI/ML Team Lead at GDG on Campus VC
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section style={{ padding: "60px 20px", maxWidth: "1200px", margin: "auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "20px", textAlign: "center" }}>
          Projects
        </h2>

        {/* Example Project Item */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "500", marginBottom: "8px" }}>
            Project 1 — Your Project Name
          </h3>
          <p style={{ lineHeight: 1.6 }}>
            A short explanation of this project goes here. You can describe what technologies you used, what problem it solves, and what features it has.
          </p>
          <a
            href="#"
            style={{ color: "#0070f3", textDecoration: "underline" }}
            target="_blank"
          >
            View Project
          </a>
        </div>

        {/* Add More Projects Here */}
        {/* Copy this block and change details */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "500", marginBottom: "8px" }}>
            Project 2 — Another Project
          </h3>
          <p style={{ lineHeight: 1.6 }}>
            Short description for your second project with tech & highlights.
          </p>
          <a
            href="#"
            style={{ color: "#0070f3", textDecoration: "underline" }}
            target="_blank"
          >
            View Project
          </a>
        </div>

        {/* Add more project blocks here as needed */}
      </section>
    </>
  );
}
