import React from "react";
import { ApiProvider } from "./context/apiContext";
import FutbolApp from "./FutbolApp";

function App() {
  return (
    <ApiProvider>
      <FutbolApp />
    </ApiProvider>
  );
}

export default App;
