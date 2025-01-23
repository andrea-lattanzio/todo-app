import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <i className="bi bi-check2-circle text-2xl font-extrabold"></i>
      <h1 className="text-lg font-bold ml-2">Todo App</h1>
    </div>
  );
};

export default Header;
