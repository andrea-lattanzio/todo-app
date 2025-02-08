const AllTasksCompleted = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
      <i className="bi bi-emoji-laughing text-6xl text-gray-400"></i>
      <h2 className="mt-4 text-xl font-semibold">All tasks completed!</h2>
      <p className="text-sm text-gray-400">Great job! You have no pending tasks left.</p>
    </div>
  );
};

export default AllTasksCompleted;
