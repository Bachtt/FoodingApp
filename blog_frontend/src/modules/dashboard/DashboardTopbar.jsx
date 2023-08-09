import Button from "../../components/button/Button";
import DashboardMenu from "./DashboardMenu";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-1 gap-x-10">
        <img srcSet="./assets/images/logo.png 3x" alt="Fooding-app" />
        <div className="w-full max-w-[458px]">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardMenu></DashboardMenu>
        <Button className="bg-secondary px-7">Menu</Button>
        <img
          srcSet="./assets/images/logo.png 3x"
          alt="Fooding-app"
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
