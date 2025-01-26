import { Link } from "react-router-dom";
import "./TopBar.css";
import home from "../public/home.png";
import planet from "../public/planet.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const logged = localStorage.getItem("user");

    if (logged !== null) {
      setIsLogged(logged);
      console.log(logged);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.toLowerCase() === "peke68" && password === "pekka123") {
      localStorage.setItem("user", "Peke68");
      navigate(0);
    } else if (
      name.toLowerCase() === "suviheila" &&
      password === "p35udHjj876vH"
    ) {
      localStorage.setItem("user", "Suviheila");
      navigate(0);
    } else {
      alert(`Kirjautuminen epäonnistui!`);
    }
  };

  const handleLogout = (event) => {
    event.preventDefault();

    localStorage.removeItem("user");
    navigate(0);
  };

  return (
    <div className="topBar">
      <section>
        <h1>Ulkoilmaharrastajat</h1>
        <div className="nav">
          <img src={home} alt="Home icon" />
          <Link to={"/"}>Koti</Link>
          <img src={planet} alt="planet icon" />
          <Link to={"/hobbies"}>Harrastukset</Link>
        </div>
      </section>
      <section>
        {isLogged ? (
          <section className="user">
            <label>kirjautuneena: {isLogged}</label>

            <form onSubmit={handleLogout} className="logout">
              <input type="submit" value="kirjaudu ulos" />
            </form>
          </section>
        ) : (
          <form onSubmit={handleSubmit}>
            <section className="row">
              <section className="field">
                <label>käyttäjänimi</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </section>
              <section className="field">
                <label>Salasana</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </section>
            </section>
            <input type="submit" value="kirjaudu" />
          </form>
        )}
      </section>
    </div>
  );
}
