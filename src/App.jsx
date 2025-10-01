import { createContext, useState } from "react";

import "./App.css";
import Sidenav from "./component/sidenave";

export const globalContext = createContext();
function App() {
  const [showSidenav, setShowSidenav] = useState(true);

  return (
    <>
      <globalContext.Provider value={{ showSidenav, setShowSidenav }}>
        <div className={`flex gap-3 bg-black h-screen`}>
          <Sidenav />
        </div>
      </globalContext.Provider>
    </>
  );
}

export default App;
