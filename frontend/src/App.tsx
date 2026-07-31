import { useEffect, useState } from "react";
import Home from "./pages/Home";
import SplashScreen from "./components/layout/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(timer);
    };
  }, []);

  return loading ? <SplashScreen fadeOut={fadeOut} /> : <Home />;
}

export default App;