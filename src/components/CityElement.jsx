import PropTypes from "prop-types";

function CityElement({ city }) {
  return <li>{city}</li>;
}
CityElement.propTypes = {
  city: PropTypes.object.isRequired,
};
export default CityElement;
