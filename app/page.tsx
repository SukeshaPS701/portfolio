export default function Home() {
  return (
    <main
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
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
        }}
      />

      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
          Sukesha PS
        </h1>
        <h2>AI / ML Developer</h2>
        <p style={{ opacity: 0.9 }}>
          BCA Artificial Intelligence & Machine Learning Student <br />
          AI/ML Team Lead at GDG on Campus VC
        </p>
      </div>
    </main>
  );
}
