"use client";

import { useState } from "react";

export default function HomePage() {
  const [batchName, setBatchName] = useState("");
  const [programName, setProgramName] = useState("");
  const [agentEmail, setAgentEmail] = useState("");
  const [mailFile, setMailFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  function handlePreview() {
    alert("Next step: we will wire this button to validate the spreadsheet and preview the batch.");
  }

  return (
    <main
      style={{
        padding: 40,
        fontFamily: "Arial",
        background: "#f7f7f7",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          background: "white",
          padding: 30,
          borderRadius: 12,
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ marginTop: 0 }}>Bulk Mail Upload Portal</h1>

        <p style={{ color: "#444", marginBottom: 24 }}>
          Upload a recipient spreadsheet and one shared PDF attachment.
        </p>

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
            fontWeight: "bold",
            marginBottom: 30,
          }}
        >
          Download Mailing Template
        </a>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: 8 }}>
              Batch Name
            </label>
            <input
              type="text"
              value={batchName}
              onChange={(e) => setBatchName(e.target.value)}
              placeholder="UHC March Outreach"
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 8,
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: 8 }}>
              Program / Brand
            </label>
            <input
              type="text"
              value={programName}
              onChange={(e) => setProgramName(e.target.value)}
              placeholder="UHC Former Members"
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 8,
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: 8 }}>
              Agent Email
            </label>
            <input
              type="email"
              value={agentEmail}
              onChange={(e) => setAgentEmail(e.target.value)}
              placeholder="agent@company.com"
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 8,
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 20,
              background: "#fafafa",
            }}
          >
            <label style={{ display: "block", fontWeight: "bold", marginBottom: 10 }}>
              Recipient File (CSV or Excel)
            </label>
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={(e) => setMailFile(e.target.files?.[0] || null)}
            />
            {mailFile && (
              <p style={{ marginTop: 12, color: "#444" }}>
                Selected: <strong>{mailFile.name}</strong>
              </p>
            )}
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 20,
              background: "#fafafa",
            }}
          >
            <label style={{ display: "block", fontWeight: "bold", marginBottom: 10 }}>
              Shared Attachment (PDF)
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
            />
            {pdfFile && (
              <p style={{ marginTop: 12, color: "#444" }}>
                Selected: <strong>{pdfFile.name}</strong>
              </p>
            )}
          </div>
        </div>

        <button
          onClick={handlePreview}
          style={{
            padding: "14px 22px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Preview Batch
        </button>

        <div
          style={{
            marginTop: 30,
            padding: 20,
            borderRadius: 10,
            background: "#f3f6fb",
            border: "1px solid #d9e4f2",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Current Form Values</h3>
          <p><strong>Batch Name:</strong> {batchName || "-"}</p>
          <p><strong>Program / Brand:</strong> {programName || "-"}</p>
          <p><strong>Agent Email:</strong> {agentEmail || "-"}</p>
          <p><strong>Recipient File:</strong> {mailFile?.name || "-"}</p>
          <p><strong>PDF Attachment:</strong> {pdfFile?.name || "-"}</p>
        </div>
      </div>
    </main>
  );
}
