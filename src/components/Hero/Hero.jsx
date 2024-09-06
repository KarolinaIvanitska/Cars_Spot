const Hero = () => {
  return (
    <div className="flex flex-col m-auto ">
      <h1 className="text-5xl font-bold uppercase text-start max-w-xl pt-20 pb-10 ">
        Sprzedajemy samochody z Europy
      </h1>
      <p className="text-start max-w-xl pb-10 w-80">
        Kup wyjątkowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
      </p>
      <ul className="flex gap-10 mt-10">
        <li>
          <button className="bg-blue-700 text-white p-3 rounded-lg w-48">
            Zobacz zdjęćia
          </button>
        </li>
        <li>
          <button className="bg-white-700 text-blue-700 p-3 rounded-lg w-48  border-blue-700 border-2">
            Zadzwoń do nas
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
