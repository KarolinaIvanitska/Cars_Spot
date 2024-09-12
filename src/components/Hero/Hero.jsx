import cars from "../../images/cars.png";

const Hero = () => {
  return (
    <section className="h-screen">
      <div className="flex flex-col m-auto">
        <h1 className="mobile:text-3xl tablet:text-7xl  uppercase text-start  pt-20 pb-10 max-w-2xl text-text-color font-bebas">
          Sprzedajemy samochody z Europy
        </h1>
        <p className="text-start  mobile:pb-5 tablet:pb-10 tablet:w-80 mobile:w-60 text-text-color font-roboto">
          Kup wyjątkowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
        </p>
        <ul className="flex gap-10">
          <li>
            <button className="bg-blue-700 text-background-color font-roboto_flex p-3 rounded-lg  transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105 tablet:w-48 mobile:w-36">
              <a href="#gallery">Zobacz zdjęćia</a>
            </button>
          </li>
          <li>
            <button className="bg-white-700 text-logo-color  font-roboto_flex p-3 rounded-lg w-48  border-blue-700 border-2 transition duration-300 ease-in-out transform hover:bg-background-color hover:text-logo-color hover:border-blue-700 hover:scale-105 tablet:w-48 mobile:w-36">
              <a href="tel:+48 123 456 789">Zadzwoń do nas</a>
            </button>
          </li>
        </ul>
      </div>
      <img
        src={cars}
        alt="Cars"
        className="absolute mobile: top-[400px] right-0 w-full h-auto mobile:w-1/2 tablet:w-1/3 desktop:w-1/4 object-cover"
      />
    </section>
  );
};

export default Hero;
