import { Outlet } from "react-router-dom";
import { Footer } from "./common/Footer";
import { Header } from "./common/Header";
import { Toast } from "./common/Toast";
import "./global.css";
import { RouteChangeTracker } from "./common/components/RouteChangeTracker";

function App() {
  return (
    <>
      <RouteChangeTracker />
      <Header />
      <Outlet />
      <Toast />
      <Footer />
    </>
  );
}

export default App;
