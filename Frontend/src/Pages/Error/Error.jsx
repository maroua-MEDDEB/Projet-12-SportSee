import { Link } from "react-router-dom";
import "./error.css";
function Error({ error = "" }) {
  return (
    <div className="text_error">
      <h1>Oups 🙈 Cette page n'existe pas !</h1>

      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
