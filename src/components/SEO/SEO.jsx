import { Icon } from "../../icons/Icon";
import { useState } from "react";

const SEO = () => {
  const [isTextVisible1, setIsTextVisible1] = useState(false);
  const [isTextVisible2, setIsTextVisible2] = useState(false);

  const toggleText1 = () => setIsTextVisible1(!isTextVisible1);
  const toggleText2 = () => setIsTextVisible2(!isTextVisible2);

  return (
    <section className="bg-text-color pt-20 pb-20 pr-40 pl-40">
      <div>
        <ul className="flex gap-10">
          <li className="flex-1 min-h-[200px]  p-4 relative">
            <h2 className="text-2xl  uppercase mw-2md text-background-color font-bebas mb-3 font-normal">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
              nulla commodo.
            </h2>
            <p className="text-background-color font-roboto font-normal">
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
            <button
              onClick={toggleText1}
              className="text-background-color flex gap-2 items-center cursor-pointer hover:text-logo-color pt-4"
            >
              {isTextVisible1 ? "Zwiń" : "Rozwiń"}
              <Icon
                id={isTextVisible1 ? "arrow-up" : "arrow-down"}
                size={16}
                className={"text-background-color"}
              />
            </button>
          </li>
          <li className="flex-1 min-h-[200px]  p-4 relative">
            <h2 className="text-2xl uppercase mw-2md text-background-color font-bebas mb-3 font-normal">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
              nulla commodo.
            </h2>
            <p className="text-background-color font-roboto font-normal">
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
            <button
              onClick={toggleText2}
              className="text-background-color flex gap-2 items-center cursor-pointer hover:text-logo-color pt-4"
            >
              {isTextVisible2 ? "Zwiń" : "Rozwiń"}
              <Icon id={isTextVisible2 ? "arrow-up" : "arrow-down"} size={16} />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SEO;
