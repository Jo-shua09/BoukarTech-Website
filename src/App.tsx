import { useState, useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import Loader from "./components/Loader";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Loader onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <AppRouter />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}
