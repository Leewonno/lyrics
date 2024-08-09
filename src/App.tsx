import { Outlet } from "react-router-dom";
import { Footer } from "./common/Footer";
import { Header } from "./common/Header";
import GlobalStyle from "./common/css/GlobalStyle";

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
