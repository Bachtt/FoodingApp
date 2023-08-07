/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";
const ButtonGoogle = ({ text = "Sign up with Google", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border border-strock rounded-xl gap-x-3 text-text2"
      onClick={onClick}
    >
      <img srcSet="/assets/images/icon-google.png 2x" alt="icon-google" />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
