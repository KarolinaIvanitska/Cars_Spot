import Icons from "./sprite.svg";
import PropTypes from "prop-types";
export const Icon = ({ id, size, className }) => {
  return (
    <svg width={size} height={size} className={className}>
      <use href={Icons + "#icon-" + id}></use>
    </svg>
  );
};
Icon.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: "",
};
export default Icons;
