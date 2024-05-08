import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loader from "./pages/Home/Loader";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPortfolioData } from "./redux/rootSlice";

function App() {
  const { loading, portfoliData } = useSelector((state) => state.root);

  const dispatch = useDispatch();

  const getPortfoliData = async () => {
    try {
      const response = await axios.get("/api/portfolio/get-data");
      dispatch(setPortfolioData(response.data));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPortfoliData();
  }, []);

  useEffect(() => {
    console.log("Here is data = " + portfoliData);
  }, [portfoliData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
