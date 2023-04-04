import React, { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import fetchNews from "../../utils/fetchNews.js";
import NewsFeed from "../../components/news/newsFeed/NewsFeed";
import "./country.scss";
import countries from "../../assets/countries.js";

const Country = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const lang = useSelector((store) => store.language.lang);

  const setArticlesNum = useOutletContext();

  const { country } = useParams();

  useEffect(() => {
    const loadNews = async () => {
      setError(null);
      try {
        const { news, total, displayed } = await fetchNews(country);
        if (news.length === 0) {
          setError("No results found, please try again later.");
          return;
        }
        setNews(news);
        setArticlesNum({ total, displayed });
      } catch (error) {
        setError(
          lang === "eng"
            ? "Something went wrong, please try again later."
            : "Coś poszło nie tak, spróbuj ponownie później"
        );
        setNews([]);
        setArticlesNum({});
      }
    };

    loadNews();
  }, [country]);

  useEffect(() => {
    setCountryName(country.slice(0, -3));
  }, [country]);

  useEffect(() => {
    const filtered = countries.find((item) => item.id === country.slice(-2));
    lang === "eng"
      ? setCountryName(filtered.nameEng)
      : setCountryName(filtered.namePl);
  }, [lang]);

  return (
    <div className="country">
      <h1>
        {lang === "eng" ? "Top headings in " : "Najnowsze wiadomości: "}
        {countryName}
      </h1>
      {news?.length !== 0 && <NewsFeed items={news} />}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Country;
