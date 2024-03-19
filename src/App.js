import { useEffect } from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./page/errorPage/ErrorPage";
import DynamicPage from "./page/dynamicPage/DynamicPage";
import StaticPageWithTitle from "./components/Common/StaticPageWithTitle";
import CartPage from "./page/Cartpage/CartPage";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./features/data/dataSlice";
import Loading from "./components/Common/Loading";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getData());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header menu={data.menu} />
      <Routes>
        <Route path="/" element={<StaticPageWithTitle page="home" />} />
        <Route path="cart" element={<CartPage />} />
        <Route
          path="/:page"
          element={<DynamicPage MobileList={data.MobileList} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <ToastContainer position="top-center"/>
    </>
  );
}

export default App;
