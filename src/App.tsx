import { Outlet } from "react-router-dom";
import { Footer } from "./common/Footer";
import { Header } from "./common/Header";
import GlobalStyle from "./common/css/GlobalStyle";
import { Toast } from "./common/Toast";

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Toast />
      <Footer />
    </>
  )
}

export default App
