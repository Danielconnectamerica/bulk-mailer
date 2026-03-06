export default function HomePage() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Bulk Mail Upload Portal</h1>

      <p>
        Upload a recipient spreadsheet and one shared PDF attachment.
      </p>

      <br />

      <a
        href="/bulk-mail-template.csv"
        download
        style={{
          display: "inline-block",
          padding: "12px 18px",
          background: "#0070f3",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px",
          fontWeight: "bold"
        }}
      >
        Download Mailing Template
      </a>

      <p style={{ marginTop: 20 }}>
        Use this template to prepare your recipient list before uploading.
      </p>
    </main>
  );
}
