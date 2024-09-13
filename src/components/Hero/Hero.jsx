import { Link } from "react-scroll";
import cars from "../../images/cars.png";
import background_vector from "../../images/background_vector.png";
import Navigation from "../Navigation/Navigation";

const Hero = () => {
  return (
    <section className="relative tablet:h-screen mobile:h-100% mobile:mb-40 tablet:mb-60 ">
      <Navigation />
      <div className="mobile:hidden desktop:block absolute top-0 right-0 tablet:h-screen w-full overflow-hidden pointer-events-none">
        <img
          src={background_vector}
          alt="Background"
          className=" w-auto h-full desktop:max-h-screen  object-cover desktop:right-0 desktop:top-[-80px] "
          style={{ position: "absolute", zIndex: "-1" }}
        />
      </div>
      <img
        src={cars}
        alt="Cars"
        className="absolute mobile:top-[200px] tablet:top-[440px]  desktop:top-[410px]  w-full h-auto mobile:w-1/2 tablet:w-5/6 object-cover z-0 desktop:-right-[120px] mobile:right-0"
      />
      <div className="relative flex flex-col m-auto z-10">
        <h1 className="mobile:text-3xl tablet:text-7xl uppercase text-start pt-20 pb-10 max-w-2xl text-text-color font-bebas">
          Sprzedajemy samochody z Europy
        </h1>
        <p className="text-start mobile:pb-5 tablet:pb-10 tablet:w-80 mobile:w-60 text-text-color font-roboto">
          Kup wyjątkowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
        </p>
        <ul className="flex gap-8">
          <li>
            <button className="bg-blue-700 text-background-color font-roboto_flex p-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105 mobile:w-36 tablet:w-48 relative">
              <Link to="gallery">Zobacz zdjęćia</Link>
            </button>
          </li>
          <li>
            <button className="bg-white-700 text-logo-color font-roboto_flex p-3 rounded-lg  border-blue-700 border-2 transition duration-300 ease-in-out transform hover:bg-background-color hover:text-logo-color hover:border-blue-700 hover:scale-105 mobile:w-36 tablet:w-48">
              <a href="tel:+48 123 456 789">Zadzwoń do nas</a>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
