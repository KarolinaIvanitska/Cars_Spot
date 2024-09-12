const Footer = () => {
  return (
    <footer className="bg-text-color  border-background-color border-t-2 ">
      <div className="flex justify-between  mobile:p-4 desktop:pt-8 desktop:pb-8 desktop:pr-40 desktop:pl-40">
        <a
          href="/"
          className="text-background-color font-roboto font-bold desktop:text-2xl"
        >
          Cars Spot
        </a>
        <a className="text-background-color underline">Polityka prywatności</a>
      </div>
    </footer>
  );
};

export default Footer;
