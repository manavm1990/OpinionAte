import React from "react";
import TITLE from "@/utils/title";

function App() {
  React.useEffect(() => {
    document.title = TITLE;
  });

  return <h1>{TITLE}</h1>;
}

export default App;
