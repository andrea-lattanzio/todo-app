import { useNavigate } from "react-router-dom";

const NoTask = () => {
  const navigate = useNavigate();
  return (
    <div className="h-96 w-full bg-[#2c2e2d] p-4 rounded-xl shadow-lg border-2 border-[#343434] flex items-center justify-center">
      <div className="flex flex-col items-center text-gray-500 text-center">
        <i className="bi bi-clipboard-x text-6xl text-gray-400"></i>
        <h2 className="mt-4 text-xl font-semibold">No tasks yet</h2>
        <p className="mt-2 text-sm text-gray-400">
          You haven't created any tasks. Want to add one now?
        </p>
        <button
          className="mt-4 px-6 py-2 bg-[#f88b25] flex items-center text-gray-800 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-[#e67e22] active:scale-95"
          onClick={() => navigate("/add")}
        >
          <i className="bi bi-plus-circle mr-2 text-2xl"></i> Create Task
        </button>
      </div>
    </div>
  );
};

export default NoTask;
