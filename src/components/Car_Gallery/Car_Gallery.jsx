import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PropTypes from "prop-types";
const Car_Gallery = ({ data }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    customPaging: () => (
      <div className="w-2 h-2 bg-logo-color rounded-full mt-7"></div>
    ),
  };

  return (
    <div className=" mobile:pt-7 tablet:pt-14 w-[100%] gap-4">
      <div className="m-auto">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item.image}
                  className="mobile:w-[401px] mobile:h-[146px] tablet:w-[601px] tablet:h-[446px] object-cover rounded-lg"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
Car_Gallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
    })
  ),
};
export default Car_Gallery;
