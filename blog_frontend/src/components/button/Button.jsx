import PropTypes from "prop-types";
const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin border-b-transparent"></div>
  ) : (
    children
  );
  return (
    <button
      className={`flex items-center justify-center p-4 text-base font-semibold rounded-xl text-white min-h-[56px] ${
        isLoading ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};
export default Button;
