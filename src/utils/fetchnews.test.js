//Mock Service Worker lib. instead of directly hitting API?

import fetchNews from "./fetchNews";

describe("News fetching function", () => {
  const countries = [
    "united states-us",
    "poland-pl",
    "ukraine-ua",
    "united kingdom-gb",
    "germany-de",
  ];

  const invalidCountryCodes = ["xy", "zz", "dd", "ii", "ll"];

  it.each(countries)(
    "should provide an array (news) of objects (articles) containing fields: title, url, publishedAt for a string ending with a valid country code",
    async (country) => {
      const data = await fetchNews(country);
      expect(data.news).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            title: expect.any(String),
            url: expect.any(String),
            publishedAt: expect.any(String),
          }),
        ])
      );
    }
  );

  it.each(invalidCountryCodes)(
    "should provide an empty array (news) for invalid country code",
    async (country) => {
      const data = await fetchNews(country);
      expect(data.news).toHaveLength(0);
    }
  );

  it.each(countries)(
    "should provide the total number of articles available for certain country (total) and number of currently fetched articles (displayed)",
    async (country) => {
      const data = await fetchNews(country);
      expect(data.total).toBeGreaterThanOrEqual(0);
      expect(data.displayed).toBeGreaterThanOrEqual(0);
    }
  );
});
