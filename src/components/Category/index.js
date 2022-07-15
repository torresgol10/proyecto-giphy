import { Link } from "wouter";
import "./style.css";

export default function Category({ name, options }) {
  return (
    <>
      <h2 className="text-center">{name}</h2>
      <ul className="trending">
        {options.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gift de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
