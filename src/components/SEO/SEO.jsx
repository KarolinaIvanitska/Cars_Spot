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
              <Icon id={isTextVisible1 ? "arrow-up" : "arrow-down"} size={16} />
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
              <Icon id={isTextVisible2 ? "arrow-up" : "arrow-down"} size={16} />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SEO;
