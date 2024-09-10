import { Icon } from "../../icons/Icon";
import cars from "../../images/cars.png";
import Navigation from "../Navigation/Navigation";

const Hero = () => {
  return (
    <section className="h-screen">
      <div className=" inset-0 -z-10">
        <Icon
          id="vector-1"
          size={340}
          className="absolute -top-1  right-20 fill-vector-color"
        />
        <Icon
          id="vector-2"
          size={600}
          className="absolute -top-10 right-60   fill-vector-color"
        />
      </div>
      <Navigation />
      <div className="flex flex-col m-auto">
        <h1 className="text-7xl  uppercase text-start  pt-20 pb-10 max-w-2xl text-text-color font-bebas">
          Sprzedajemy samochody z Europy
        </h1>
        <p className="text-start max-w-xl pb-10 w-80 text-text-color font-roboto">
          Kup wyjątkowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
        </p>
        <ul className="flex gap-10">
          <li>
            <button className="bg-blue-700 text-background-color font-roboto_flex p-3 rounded-lg w-48 transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105">
              <a href="#gallery">Zobacz zdjęćia</a>
            </button>
          </li>
          <li>
            <button className="bg-white-700 text-logo-color  font-roboto_flex p-3 rounded-lg w-48  border-blue-700 border-2 transition duration-300 ease-in-out transform hover:bg-background-color hover:text-logo-color hover:border-blue-700 hover:scale-105">
              <a href="tel:+48 123 456 789">Zadzwoń do nas</a>
            </button>
          </li>
        </ul>
      </div>
      <img
        src={cars}
        alt="Cars"
        className="absolute  right-0 top-[300px] object-cover"
      />
    </section>
  );
};

export default Hero;
