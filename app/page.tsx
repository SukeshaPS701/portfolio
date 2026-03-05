export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        backgroundImage: "url('/profile.jpg')",
        backgroundSize: "cover", // keep cinematic look
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Dark overlay for better readability */}
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
          padding: "40px",
          borderRadius: "12px",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Sukesha PS
        </h1>

        <h2 style={{ marginBottom: "15px", fontWeight: "400" }}>
          AI / ML Developer
        </h2>

        <p style={{ lineHeight: "1.6", opacity: 0.9 }}>
          BCA Artificial Intelligence & Machine Learning Student <br />
          AI/ML Team Lead at GDG on Campus VC
        </p>
      </div>
    </main>
  );
}
