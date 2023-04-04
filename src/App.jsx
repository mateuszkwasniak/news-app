import { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Country from "./pages/country/Country";
import Content from "./components/content/Content";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const Layout = () => {
  const [articlesNum, setArticlesNum] = useState({});

  return (
    <>
      <Header />
      <Content>
        <Sidebar />
        <Outlet context={setArticlesNum} />
      </Content>
      <Footer articlesNum={articlesNum} />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/country/:country",
        element: <Country />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
