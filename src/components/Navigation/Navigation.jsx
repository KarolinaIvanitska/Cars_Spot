import { Icon } from "../../icons/Icon";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-[20] ">
      <nav>
        <div className="container mx-auto flex justify-between items-center p-y-20">
          <div className="flex items-center align-middle">
            <Icon id="logo" size={25} className="text-logo-color" />
            <a
              className="text-2xl text-text-color block rounded-md px-3 py-2 font-medium"
              href="/"
            >
              <span className="text-2xl text-logo-color">Cars</span>Spot
            </a>
          </div>

          <ul className=" flex items-center justify-between gap-10">
            <li>
              <a
                href="#gallery"
                className="text-lg mx-4 hover:text-logo-color text-text-color transition duration-300 ease-in-out transform"
              >
                Galeria zdjęć
              </a>
            </li>
            <li>
              <a
                href="#faQ"
                className="text-lg mx-4 hover:text-logo-color text-text-color transition duration-300 ease-in-out transform"
              >
                FaQ
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="bg-logo-color text-background-color p-3 rounded-lg w-48 transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105"
          >
            <a href="tel:+48 123 456 789">Zadzwoń do nas</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
