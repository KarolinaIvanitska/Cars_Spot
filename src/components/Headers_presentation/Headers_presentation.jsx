import { useState } from "react";
import Car_Gallery from "../Car_Gallery/Car_Gallery";
import { osoboweCars, dostawczeCars } from "../Car_Gallery/CarData.js";

const Headers_presentation = () => {
  const [selectedCarType, setSelectedCarType] = useState("osobowe");
  const handleCarTypeChange = (type) => {
    setSelectedCarType(type);
  };
  return (
    <section id="gallery" className="h-[678px] mb-40">
      <h1 className="text-2xl text-logo-color mb-3 font-roboto">
        Prezentacja firmy
      </h1>
      <h2 className="text-5xl  uppercase text-start max-w-2xl text-text-color-2 mb-10 font-bebas">
        Zobacz naszą galerie zdjęć
      </h2>
      <div className="flex space-x-4 mb-6">
        <div
          onClick={() => handleCarTypeChange("osobowe")}
          className={`cursor-pointer ${
            selectedCarType === "osobowe"
              ? "text-logo-color border-b-2 border-logo-color font-roboto_flex"
              : "text-color-2"
          } transition-colors duration-300`}
        >
          Samochody osobowe
        </div>
        <div
          onClick={() => handleCarTypeChange("dostawcze")}
          className={`cursor-pointer ${
            selectedCarType === "dostawcze"
              ? "text-logo-color border-b-2 border-logo-color font-roboto_flex"
              : "text-color-2"
          } transition-colors duration-300`}
        >
          Samochody dostawcze
        </div>
      </div>
      {selectedCarType === "osobowe" && <Car_Gallery data={osoboweCars} />}
      {selectedCarType === "dostawcze" && <Car_Gallery data={dostawczeCars} />}
    </section>
  );
};

export default Headers_presentation;
