import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from 'pages/MainPage'
import Navbar from 'components/navbar';

const Router = () => {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<MainPage />} />
    </Routes>
  </BrowserRouter>
)}

export default Router;