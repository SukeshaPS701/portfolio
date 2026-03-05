export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        backgroundImage: "url('/profile.jpg')",
        backgroundSize: "contain",   // ✅ FIXED
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        filter: "grayscale(100%)",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          padding: "40px",
          borderRadius: "12px",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Sukesha PS
        </h1>

        <h2 style={{ marginBottom: "15px" }}>
          AI / ML Developer
        </h2>

        <p style={{ lineHeight: "1.6" }}>
          BCA Artificial Intelligence & Machine Learning Student <br />
          AI/ML Team Lead at GDG on Campus VC
        </p>
      </div>
    </main>
  );
}
