export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        backgroundImage: "url('/profile.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        backgroundColor: "black",
      }}
    >
      <div style={{ background: "rgba(0,0,0,0.6)", padding: "40px", borderRadius: "10px" }}>
        <h1 style={{ fontSize: "50px" }}>Sukesha PS</h1>
        <h2>AI / ML Developer</h2>
        <p>
          BCA Artificial Intelligence & Machine Learning Student <br />
          AI/ML Team Lead at GDG on Campus VC
        </p>
      </div>
    </main>
  );
}
