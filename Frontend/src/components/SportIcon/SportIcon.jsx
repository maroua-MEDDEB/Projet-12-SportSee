import PropTypes from "prop-types";

function SportIcon(props) {
  return (
    <div className="icon">
      <img src={props.icon} alt="icon" />
    </div>
  );
}

export default SportIcon;
