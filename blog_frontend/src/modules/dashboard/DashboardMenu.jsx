const DashboardMenu = () => {
  return (
    <div className="flex items-center text-base font-medium cursor-pointer gap-x-2 text-text2">
      <span>Mega Menu</span>
      <span className="w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 max-w-full"
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export default DashboardMenu;
