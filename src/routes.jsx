import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from 'pages/MainPage'

const Router = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" component={MainPage} />
    </Routes>
  </BrowserRouter>
)}

export default Router;