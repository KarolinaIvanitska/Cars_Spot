import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Car_Gallery = ({ data = [] }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="h-screen pt-20 w-[100%]">
      <div className="m-auto">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item.image}
                  className="w-[601px] h-[446px] object-cover rounded-lg"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Car_Gallery;
