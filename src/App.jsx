import { createContext, useState } from "react";

import "./App.css";
import Sidenav from "./component/sidenave";
import Editor from "./component/commandarea";
import Resultarea from "./component/resultarea";
export const globalContext = createContext();
function App() {
  const [showSidenav, setShowSidenav] = useState(false);

  return (
    <>
      <globalContext.Provider value={{ showSidenav, setShowSidenav }}>
        <div className={`flex gap-3 bg-black h-screen`}>
          <Sidenav />
          <div className={`mt-3 flex-1 mr-3 rounded-lg`}>
            <Editor />
            <Resultarea />
          </div>
        </div>
      </globalContext.Provider>
    </>
  );
}

export default App;
