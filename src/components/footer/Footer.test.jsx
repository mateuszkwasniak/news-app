import Footer from "./Footer";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Footer", () => {
  const testArticlesNums = [
    { total: 5, displayed: 5 },
    { total: 10, displayed: 10 },
    { total: 15, displayed: 50 },
    { total: 0, displayed: 0 },
  ];

  it.each(testArticlesNums)(
    "should show total and currently displayed number of articles",
    (data) => {
      render(
        <Provider store={store}>
          <Footer articlesNum={data} />
        </Provider>
      );
      const spanValue = screen.getByTestId("articles").textContent;
      expect(spanValue).toEqual(`${data.displayed} out of ${data.total}`);
    }
  );

  it("should not show total and displayed numbers of articles for empty object as articlesNum property", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Footer articlesNum={{}} />
      </Provider>
    );
    expect(queryByTestId("articles")).toBeNull();
  });
});
