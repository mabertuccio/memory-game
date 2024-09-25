import PropTypes from "prop-types";

const Card = ({ emoji, onClick, isClicked, disabled }) => {
  return (
    <div
      className={`card bg-indigo-600 w-24 h-24 rounded-sm shadow-sm cursor-pointer border-slate-900 border-4 flex items-center justify-center ${disabled ? "pointer-events-none" : ""}`}
      onClick={onClick}
    >
      <span className={!isClicked ? "hidden" : ""}>{emoji}</span>
    </div>
  );
};

Card.propTypes = {
  emoji: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Card;
