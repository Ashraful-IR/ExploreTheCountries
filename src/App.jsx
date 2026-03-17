import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";
import Country from "./Components/Country/Country";

const loadCountries = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromise={loadCountries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
