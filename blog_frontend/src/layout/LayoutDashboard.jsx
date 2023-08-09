import PropTypes from "prop-types";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <DashboardTopbar></DashboardTopbar>
      <div>
        <DashboardSidebar></DashboardSidebar>
        <div>{children}</div>
      </div>
    </div>
  );
};

LayoutDashboard.propTypes = {
  children: PropTypes.node,
};
export default LayoutDashboard;
