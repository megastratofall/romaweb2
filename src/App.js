import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollTotop/index"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <Header />
        <Home />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </>
  );
}

export default App;
