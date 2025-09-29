import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://ania-smol.wfolio.pro";
  }, []);

  return <p>Przekierowanie...</p>;
}
