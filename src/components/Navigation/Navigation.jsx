import { Icon } from "../../icons/Icon";

const Navigation = () => {
  return (
    <header className="top-0">
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
              <a className="link">Galeria zdjęć</a>
            </li>
            <li>
              <a className="link">FaQ</a>
            </li>
          </ul>
          <button type="button" className="btn_zadzwon">
            <a href="tel:+48 123 456 789">Zadzwoń do nas</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
