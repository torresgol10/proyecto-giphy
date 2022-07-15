import React from "react";
import useSingleGif from "hooks/useSingleGif";
import useSEO from "hooks/useSEO";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  const { gif } = useSingleGif({ id: params.id });

  if (!gif) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Helmet>
        <title>{gif.title}</title>
        <meta name="description" content={`Details: ${gif.title}`} />
      </Helmet>
      <div>
        <h1>{gif.title}</h1>
        Import: {gif.import_datetime}
        <img src={gif.url} alt="" />
      </div>
    </>
  );
}
