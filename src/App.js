import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="app">
      <h1>Salam, mən {value}</h1>
      <button type="button" onClick={() => setValue("Anaram.")}>0</button>
      <button type="button" onClick={() => setValue("əlaçıyam.")}>1</button>
      <button type="button" onClick={() => setValue("yaxşı oxuyanam.")}>2</button>
      <button type="button" onClick={() => setValue("orta oxuyanam.")}>3</button>
    </div>
  );
}

export default App;
