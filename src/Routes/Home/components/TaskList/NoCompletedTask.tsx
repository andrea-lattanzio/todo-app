const NoCompletedTasks = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
      <i className="bi bi-list-check text-6xl text-gray-400"></i>
      <h2 className="mt-4 text-xl font-semibold">No completed tasks</h2>
      <p className="text-sm text-gray-400">You haven't completed any tasks yet. Keep going!</p>
    </div>
  );
};

export default NoCompletedTasks;
