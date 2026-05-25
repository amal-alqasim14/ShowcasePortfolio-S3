import { useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const login = () => {
    if (password === "admin123") {
      setIsAdmin(true);
      setPassword("");
    } else {
      alert("Fout wachtwoord");
    }
  };

  return (
    <main className="admin-page">
      <Link to="/" className="back-link">
        ← Terug naar portfolio
      </Link>

      <div className="admin-card">
        {!isAdmin ? (
          <>
            <p className="label dark-label">Admin</p>
            <h1>Aanmelden</h1>
            <p>Vul het wachtwoord "admin123" in om projecten te beheren.</p>

            <input
              type="password"
              placeholder="Wachtwoord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={login}>Inloggen</button>
          </>
        ) : (
          <>
            <p className="label dark-label">Dashboard</p>
            <h1>Projectbeheer</h1>
            <p>Je bent ingelogd als admin.</p>

            <div className="admin-actions">
              <button>Project toevoegen</button>
              <button>Project aanpassen</button>
              <button>Project verwijderen</button>
              <button onClick={() => setIsAdmin(false)}>Uitloggen</button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Admin;