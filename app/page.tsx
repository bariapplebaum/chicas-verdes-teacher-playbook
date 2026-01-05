"use client";

import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const CORRECT_PASSWORD = "chicasverdes";

  if (!authorized) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f4f4f4",
        fontFamily: "sans-serif"
      }}>
        <div style={{
          background: "white",
          padding: "2rem",
          borderRadius: "8px",
          width: "300px",
          textAlign: "center"
        }}>
          <h2>Protected Page</h2>
          <p>Please enter the password</p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "12px"
            }}
          />

          <button
            onClick={() => {
              if (password === CORRECT_PASSWORD) {
                setAuthorized(true);
              } else {
                alert("Incorrect password");
              }
            }}
            style={{
              width: "100%",
              padding: "10px",
              background: "#02493B",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  // 👉 THIS IS YOUR REAL CONTENT
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Chicas Verdes Teacher Playbook</h1>
      <p>Welcome! You now have access to the playbook.</p>
    </main>
  );
}
