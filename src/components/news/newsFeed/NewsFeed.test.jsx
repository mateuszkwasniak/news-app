import NewsFeed from "./NewsFeed";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("NewsFeed", () => {
  const articles = [
    {
      title: "Test1",
    },
    {
      title: "Test2",
    },
    {
      title: "Test3",
    },
    {
      title: "Test4",
    },
    {
      title: "Test5",
    },
  ];

  const renderNewsFeed = () =>
    render(
      <Provider store={store}>
        <NewsFeed items={articles} />
      </Provider>
    );

  it("should show the modal after clicking the list item", () => {
    const { queryAllByTestId, queryByTestId } = renderNewsFeed();
    const article = queryAllByTestId("article")[0];
    expect(queryByTestId("modal")).toBeNull();
    fireEvent.click(article);
    expect(queryByTestId("modal")).not.toBeNull();
  });

  it("should close the modal after clicking it's close button", () => {
    const { queryAllByTestId, queryByTestId } = renderNewsFeed();
    const article = queryAllByTestId("article")[0];
    fireEvent.click(article);
    expect(queryByTestId("modal")).not.toBeNull();
    fireEvent.click(queryByTestId("modal").querySelector("button"));
    expect(queryByTestId("modal")).toBeNull();
  });

  it("should close the modal after clicking it's background", () => {
    const { queryAllByTestId, queryByTestId } = renderNewsFeed();
    const article = queryAllByTestId("article")[0];
    fireEvent.click(article);
    expect(queryByTestId("modal")).not.toBeNull();
    fireEvent.click(queryByTestId("modal").querySelector(".background"));
    expect(queryByTestId("modal")).toBeNull();
  });
});
