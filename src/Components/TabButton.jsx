export default function TabButton({ tabKey, label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 w-fit cursor-pointer rounded-md font-medium transition-colors duration-200 ${
        isActive ? "bg-accent text-white" : "text-gray-400 hover:text-gray-300"
      }`}
    >
      {label}
    </button>
  );
}
