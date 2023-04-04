import Header from "./Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Header", () => {
  const homeHeaderRender = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

  const countryHeaderRender = () =>
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/country/argentina-ar"]}>
          <Header />
        </MemoryRouter>
      </Provider>
    );

  it("should navigate to home route after clicking the logo", () => {
    homeHeaderRender();
    const logoLink = screen.getByRole("link");
    expect(logoLink.href).toBe("http://localhost:3000/");
  });

  it("should show the popup after the initial click on the popup button and hide it after another click", () => {
    const { queryByTestId } = homeHeaderRender();
    const popupBtn = screen.getByRole("popupbtn");
    expect(queryByTestId("popup")).toBeNull();
    fireEvent.click(popupBtn);
    expect(queryByTestId("popup")).not.toBeNull();
    fireEvent.click(popupBtn);
    expect(queryByTestId("popup")).toBeNull();
  });

  it("should not show the list/tiles button on the home page", () => {
    const { queryByTestId } = homeHeaderRender();
    expect(queryByTestId("newstype")).toBeNull();
  });

  it("should show the list/tiles button on pages different than home", () => {
    const { queryByTestId } = countryHeaderRender();
    expect(queryByTestId("newstype")).not.toBeNull();
  });

  it("should change initial list/tiles button's image after clicking it", () => {
    const { queryByTestId } = countryHeaderRender();
    const newsTypeBtn = queryByTestId("newstype");
    expect(newsTypeBtn.querySelector("img")).toHaveAttribute(
      "src",
      "/tiles.png"
    );
    fireEvent.click(newsTypeBtn);
    expect(newsTypeBtn.querySelector("img")).toHaveAttribute(
      "src",
      "/list.png"
    );
  });
});
