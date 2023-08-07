/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;
  return (
    <div className="w-full min-h-screen p-10 bg-center bg-cover bg-food-bg ">
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img
          srcSet="./assets/images/logo.png 3x"
          alt="Fooding App"
          className="rounded-lg"
        />
      </Link>

      <div className="w-full max-w-[556px] bg-white  rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
