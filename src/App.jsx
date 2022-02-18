import React from "react";

const title = "🥘 OpinionAte";

function App() {
  React.useEffect(() => {
    document.title = title;
  });

  return <h1>{title}</h1>;
}

export default App;
