import React from "react";
import { useState } from "react";
import Otazka from "./Otazka";
import otazkyData from "./data";
import Footer from "./Footer";
import Popis from "./Popis";

function App() {
  const [otazky, setOtazky] = useState(otazkyData);
  console.log(otazky);

  return (
    <>
      <Popis />
      <section>
        <h2 className="text-center mt-5">Otázky a odpovede o prihlásení</h2>
        <div className="otazky">
          {otazky.map((otazka) => {
            return <Otazka key={otazka.id} {...otazka} />;
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
