import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./pages/home/HomePages";
import Layout from "./components/Layout";

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePages />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;