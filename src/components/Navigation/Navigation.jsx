const Navigation = () => {
  return (
    <header className="sticky top-0 z-[20]">
      <nav>
        <div className="container mx-auto flex justify-between items-center p-y-20">
          <a
            className="text-2xl bg-dark-blue block rounded-md px-3 py-2 font-medium"
            href="/"
          >
            <span className="text-2xl text-blue-800">Cars</span>Spot
          </a>
          <ul className=" flex items-center justify-between gap-10">
            <li>
              <a href="#gallery" className="text-lg mx-4 hover:text-blue-600">
                Galeria zdjęć
              </a>
            </li>
            <li>
              <a href="#faQ" className="text-lg mx-4 hover:text-blue-600">
                FaQ
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="bg-blue-700 text-white p-3 rounded-lg "
          >
            <a href="tel:+48 123 456 789">Zadzwoń do nas</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
