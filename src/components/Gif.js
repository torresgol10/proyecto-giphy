import React from "react";
import { Link } from "wouter";
import "./ListOfGif/styles.css";

export default function Gif({ id, title, url, keyword }) {
  return (
    <Link to={`/gif/${id}`}>
      <img loading="lazy" className="ListOfGifs-item" src={url} alt="" />
    </Link>
  );
}
