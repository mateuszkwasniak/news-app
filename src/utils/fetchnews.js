const fetchNews = async (country) => {
  const response = await fetch(
    `https://news-app-server.onrender.com?country=${country.slice(-2)}`
  );

  const data = await response.json();
  if (!response.ok) throw new Error();

  return {
    news: data?.articles,
    total: data?.totalResults,
    displayed: data?.articles?.length,
  };
};

export default fetchNews;
