import PropTypes from "prop-types";

const Header = ({ gameStatus }) => {
  return (
    <div className="text-center p-4">
      <h1 className="title rowdies-font text-black text-center text-3xl p-2">
        memory game
      </h1>
      <div className="game-status">{gameStatus}</div>
    </div>
  );
};

Header.propTypes = {
  gameStatus: PropTypes.any,
};

export default Header;
