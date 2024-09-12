import { useState } from "react";
import { Icon } from "../../icons/Icon";

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="top-0">
      <nav>
        <div className="container  flex justify-between items-center py-4">
          <div className="flex items-center">
            <Icon id="logo" size={25} className="text-logo-color" />
            <a
              className="text-2xl text-text-color block rounded-md px-3 py-2 font-medium"
              href="/"
            >
              <span className="text-2xl text-logo-color">Cars</span>Spot
            </a>
          </div>
          <ul className="hidden tablet:flex items-center justify-between gap-10">
            <li>
              <a href="#gallery" className="link">
                Galeria zdjęć
              </a>
            </li>
            <li>
              <a href="#faq" className="link">
                FaQ
              </a>
            </li>
          </ul>

          <button type="button" className="hidden tablet:block btn_zadzwon">
            <a href="tel:+48 123 456 789">Zadzwoń do nas</a>
          </button>

          <button
            type="button"
            className="tablet:hidden stroke-logo-color"
            onClick={toggleModal}
          >
            <Icon id="menu" size={30} />
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div className="absolute inset-0">
          <div className="bg-background-color bg-opacity-75 fixed inset-0 flex items-center justify-center z-50 p-8">
            <button className="absolute top-8 right-6" onClick={toggleModal}>
              <Icon
                id="close"
                size={30}
                className="stroke-logo-color fill-logo-color"
              />
            </button>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="gallery"
                  className="link block text-xl"
                  onClick={toggleModal}
                >
                  Galeria zdjęć
                </a>
              </li>
              <li>
                <a
                  href="faq"
                  className="link block text-xl"
                  onClick={toggleModal}
                >
                  FaQ
                </a>
              </li>
              <li>
                <a
                  className="link block text-xl"
                  href="tel:+48 123 456 789"
                  onClick={toggleModal}
                >
                  Zadzwoń do nas
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
