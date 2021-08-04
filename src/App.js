import React from "react";
import useFetch from "./Hooks/useFetch";

function App() {
  const { loading, error, data } = useFetch(
    "https://api.coingecko.com/api/v3/global/decentralized_finance_defi"
  );
  console.log(data);
  return (
    <div className="App">
      <h1>{JSON.stringify(data.data.defi_dominance)}</h1>
    </div>
  );
}

export default App;
