import { Link } from "wouter";

export default function Category({ name, options }) {
  return (
    <>
      <h3>{name}</h3>
      <ul>
        {options.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gift de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
