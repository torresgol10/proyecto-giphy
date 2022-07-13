import { useEffect, useState } from "react";
import Category from "components/Category";
import getTredingTerms from "service/getTrendingTermService";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTredingTerms().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
}
