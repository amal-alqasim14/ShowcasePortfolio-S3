import { useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const login = () => {
    if (password === "admin123") {
      setIsAdmin(true);
    } else {
      alert("Fout wachtwoord");
    }
  };

  return (
    <main className="admin-page">
      <Link to="/" className="back-link">
        Terug naar portfolio
      </Link>

      <div className="admin-card">
        {!isAdmin ? (
          <>
            <h1>Aanmelden als Admin</h1>
            <p>Vul het wachtwoord in om projecten te beheren.</p>

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
            <h1>Admin overzicht</h1>
            <p>Je bent ingelogd als admin.</p>

            <button>Project toevoegen</button>
            <button>Project aanpassen</button>
            <button>Project verwijderen</button>

            <button onClick={() => setIsAdmin(false)}>
              Uitloggen
            </button>
          </>
        )}
      </div>
    </main>
  );
}

export default Admin;