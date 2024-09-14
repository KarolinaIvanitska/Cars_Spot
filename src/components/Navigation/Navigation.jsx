import { useState } from "react";
import { Icon } from "../../icons/Icon.jsx";
import { Link } from "react-scroll";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              className="size-6 stroke-logo-color fill-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>

            <a
              href="/"
              className="text-2xl text-text-color block rounded-md px-3 py-2 font-medium font-roboto"
            >
              <span className="text-2xl text-logo-color font-roboto">Cars</span>
              Spot
            </a>
          </div>
          <ul className="hidden tablet:flex items-center justify-between gap-10">
            <li>
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="link"
              >
                Galeria zdjęć
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="link"
              >
                FaQ
              </Link>
            </li>
          </ul>

          <button type="button" className="hidden tablet:block btn_zadzwon">
            <a href="tel:+48 123 456 789">Zadzwoń do nas</a>
          </button>

          <button
            type="button"
            className="tablet:hidden "
            onClick={toggleModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="size-8 stroke-logo-color "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div className="absolute inset-0">
          <div className="bg-background-color bg-opacity-75 fixed inset-0 flex items-center justify-center z-50 p-8">
            <button className="absolute top-8 right-6" onClick={toggleModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="size-8 stroke-logo-color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="link"
                  onClick={toggleModal}
                >
                  Galeria zdjęć
                </Link>
              </li>
              <li>
                <Link
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="link"
                  onClick={toggleModal}
                >
                  FaQ
                </Link>
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
