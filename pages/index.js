import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const email = prompt("Podaj swój e-mail:"); // спрашиваем email у клиента
      if (!email) return setLoading(false);

      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // перенаправляем на Stripe Checkout
      } else {
        alert("Błąd podczas tworzenia sesji płatności.");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      alert("Wystąpił błąd.");
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>Witamy w sklepie z fotografiami 📸</h1>
      <p>Kliknij poniżej, aby kupić zdjęcia.</p>
      <button
        onClick={handleCheckout}
        style={{ padding: "10px 20px", marginTop: "20px", fontSize: "16px" }}
        disabled={loading}
      >
        {loading ? "Przekierowanie do płatności..." : "Kup teraz"}
      </button>
    </div>
  );
}
