import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <div className="flex justify-center mt-4 p-4">
      <button
        className="rounded-sm bg-indigo-600 p-4 text-slate-100 font-semibold border-slate-900 border-4"
        onClick={onClick}
      >
        Reset Game
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
