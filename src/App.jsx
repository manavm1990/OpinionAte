import React from "react";
import title from "@/utils/title";

function App() {
  React.useEffect(() => {
    document.title = title;
  });

  return <h1>{title}</h1>;
}

export default App;
