import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleCheckout = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Kup zdjęcia 📸</h1>
      <input
        type="email"
        placeholder="Twój e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={handleCheckout}
        style={{ padding: "10px 20px", marginLeft: "10px", fontSize: "16px" }}
      >
        Kup teraz
      </button>
    </div>
  );
}
