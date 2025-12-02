import { Outlet } from "react-router-dom";
import { Footer } from "./common/Footer";
import { Header } from "./common/Header";
import { Toast } from "./common/Toast";
import './global.css'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Toast />
      <Footer />
    </>
  )
}

export default App
