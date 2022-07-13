import { useEffect, useState, useRef } from "react";
import getTredingTerms from "../../service/getTrendingTermService";
import Category from "../Category";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTredingTerms().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
}

export default function LazyTrending() {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(function () {
    const onChange = (entries, observer) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px"
    });

    observer.observe(elementRef.current);

    return () => observer && observer.disconnect();
  });

  return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>;
}
