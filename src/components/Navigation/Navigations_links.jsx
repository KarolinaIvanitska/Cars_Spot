const NavigationLinks = ({ onClick }) => {
  return (
    <ul className="flex flex-col tablet:flex-row gap-6 mobile:gap-10">
      <li>
        <a className="link block text-xl" onClick={onClick}>
          Galeria zdjęć
        </a>
      </li>
      <li>
        <a className="link block text-xl" onClick={onClick}>
          FaQ
        </a>
      </li>
      <li>
        <a
          className="link block text-xl"
          href="tel:+48 123 456 789"
          onClick={onClick}
        >
          Zadzwoń do nas
        </a>
      </li>
    </ul>
  );
};

export default NavigationLinks;
