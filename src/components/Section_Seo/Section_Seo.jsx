import { useState } from "react";

const Seo = () => {
  const [isTextVisible1, setIsTextVisible1] = useState(false);
  const [isTextVisible2, setIsTextVisible2] = useState(false);

  const toggleText1 = () => setIsTextVisible1(!isTextVisible1);
  const toggleText2 = () => setIsTextVisible2(!isTextVisible2);

  return (
    <section id="faq" className="bg-text-color">
      <div className="flex m-auto">
        <ul className="flex gap-10 mobile:p-3 desktop:p-28">
          <li className="li">
            <h2 className="text-h2">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
              nulla commodo.
            </h2>
            <p className="text-p">
              Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
              Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur
              mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
              {isTextVisible1 && (
                <span>
                  Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                  Donec egestas, nisl vehicula feugiat ornare, diam turpis
                  efficitur mi, ac venenatis eros ipsum ac arcu.
                </span>
              )}
            </p>
            <button onClick={toggleText1} className="btn_rozwin">
              {isTextVisible1 ? "Zwiń" : "Rozwiń"}
              {isTextVisible1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="size-4 fill-background-color  stroke-background-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="size-4 fill-background-color stroke-background-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              )}
            </button>
          </li>
          <li className="li">
            <h2 className="text-h2">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
              nulla commodo.
            </h2>
            <p className="text-p">
              Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
              Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur
              mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
              {isTextVisible2 && (
                <span>
                  Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                  Donec egestas, nisl vehicula feugiat ornare, diam turpis
                  efficitur mi, ac venenatis eros ipsum ac arcu.
                </span>
              )}
            </p>
            <button onClick={toggleText2} className="btn_rozwin">
              {isTextVisible2 ? "Zwiń" : "Rozwiń"}
              {isTextVisible2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="size-4 fill-background-color stroke-background-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="size-4 fill-background-color stroke-background-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Seo;
