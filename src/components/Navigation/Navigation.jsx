import { useState } from "react";
import { Icon } from "../../icons/Icon";
import NavigationLinks from "./Navigations_links";
const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="top-0">
      <nav>
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center">
            <Icon id="logo" size={25} className="text-logo-color" />
            <a
              className="text-2xl text-text-color block rounded-md px-3 py-2 font-medium"
              href="/"
            >
              <span className="text-2xl text-logo-color">Cars</span>Spot
            </a>
          </div>

          <div className="hidden tablet:flex items-center">
            <NavigationLinks onClick={toggleModal} />
          </div>

          <button type="button" className="hidden tablet:block btn_zadzwon">
            <a href="tel:+48 123 456 789">Zadzwoń do нас</a>
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
            <NavigationLinks onClick={toggleModal} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
